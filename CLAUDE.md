@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# LawSchoolHero.org — Project Guide

## Commands

```bash
npm run dev      # start dev server (Turbopack, http://localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

No test suite exists yet.

---

## What This Is
A Monaco.com-inspired dark luxury marketing site for a **free** law school admissions prep platform. Built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

The platform offers four free tools: LSAT Logical Reasoning, LSAT Reading Comprehension, Personal Statement coaching, and Resume Formatting. Tutoring is the paid upsell.

---

## Stack

| Tool | Version / Notes |
|---|---|
| Next.js | 16 (App Router, Turbopack) |
| TypeScript | strict |
| Tailwind CSS | v4 — no `tailwind.config.ts`, configured via `@theme inline` in `globals.css` |
| Framer Motion | scroll-reveal animations via `AnimateIn` wrapper |
| Fonts | Inter (sans, `--font-inter`) + Playfair Display (serif, `--font-cormorant`) |
| Icons | Lucide React |
| Utilities | clsx + tailwind-merge → `lib/utils.ts cn()` |
| Supabase | Auth (magic link + Google OAuth) via `@supabase/ssr`; Postgres DB for waitlist + future modules |
| Resend | Transactional emails (waitlist confirmation + admin notification) via `lib/resend.ts` |

---

## Project Structure

```
app/
  layout.tsx              — root layout, fonts (Inter + Playfair Display), metadata
  globals.css             — @theme inline tokens, fluid CSS vars (--fluid-5xl…--fluid-sm), ticker animation

  (marketing)/
    layout.tsx            — passthrough
    page.tsx              — homepage: Nav → Hero → SocialProof → Services → HowItWorks → FinalCTA → Footer

  (auth)/
    layout.tsx            — centered dark card + logo
    sign-in/
      page.tsx            — Server Component wrapper (force-dynamic)
      SignInForm.tsx       — "use client"; magic link + Google OAuth

  (app)/
    layout.tsx            — PROTECTED: redirects to /sign-in if no session
    dashboard/
      page.tsx            — "You're in." + user email + sign out
      SignOutButton.tsx    — "use client"

  (marketing)/
    waitlist/
      page.tsx            — Server Component: metadata + trust signals + WaitlistForm
      WaitlistForm.tsx    — "use client"; email capture form, success/error states, Framer Motion

  api/
    auth/callback/
      route.ts            — PKCE code exchange → redirect /dashboard
    waitlist/
      route.ts            — POST: validate → Supabase insert → Resend emails → { position }

proxy.ts                  — Supabase session refresh; guards against missing env vars

components/
  layout/
    Nav.tsx               — "use client"; floating pill nav, auth-aware CTA link
    Footer.tsx            — multi-column links, copyright

  sections/
    Hero.tsx              — "use client"; video player (placeholder) + schools ticker overlay + headline + CTA
    SocialProof.tsx       — 4-stat bar (2000+ students, T14, 50pt LSAT gain, Free)
    Services.tsx          — 4 cards: LR, RC, Personal Statement, Resume
    HowItWorks.tsx        — 3 numbered steps
    FinalCTA.tsx          — id="get-started"; serif headline + Get Started Free CTA

  ui/
    AnimateIn.tsx         — Framer Motion useInView scroll-reveal wrapper (delay, direction, duration props)
    Button.tsx            — primary/ghost variants, sm/md/lg sizes, href or onClick
    Divider.tsx           — 1px rgba(255,255,255,0.08) horizontal rule

lib/
  utils.ts                — cn() helper
  resend.ts               — lazy Resend singleton (getResend()), server-only
  supabase/
    client.ts             — createBrowserClient() for Client Components
    server.ts             — createServerClient() for Server Components + Route Handlers
```

---

## Design System

### Colors

The following are registered in `@theme inline` in `globals.css` and work as Tailwind classes:

| Token | Value | Tailwind class examples |
|---|---|---|
| `--color-background` | `#000000` | `bg-background` |
| `--color-surface` | `#0a0a0a` | `bg-surface` |
| `--color-surface-2` | `#111111` | `bg-surface-2` |
| `--color-border` | `rgba(255,255,255,0.08)` | `border-border` |
| `--color-text` | `#ffffff` | `text-text` |
| `--color-text-secondary` | `rgba(255,255,255,0.6)` | `text-text-secondary` |
| `--color-text-muted` | `rgba(255,255,255,0.25)` | `text-text-muted` |

Values **not** in the theme (use `style={{}}` for these):
```
Nav bg:       #161616
CTA pill bg:  #2a2a2a
Nav border:   rgba(255,255,255,0.06)
Text-50:      rgba(255,255,255,0.50)
```

### Typography
- Serif headings: `font-serif` class (Playfair Display) — used for all `<h1>`, `<h2>`, `<h3>`, logo
- Sans body: default (Inter)
- Fluid sizes: use the utility classes `fluid-5xl` → `fluid-sm` (defined in `globals.css`, backed by `clamp()` vars). Both the class and the CSS var (`var(--fluid-5xl)`) are available.

### Animations
- `AnimateIn` component: wraps any element with `useInView` + `motion.div`. Props: `delay`, `direction` (up/down/left/right/none), `duration`.
- Hero intro: bare `motion.*` with `fadeUp(delay)` helper
- Ticker: `.animate-ticker` class in `globals.css` — `translateX(-50%)` over 70s, GPU-accelerated with `will-change: transform`

---

## Authentication (Supabase)

- **Auth provider**: Supabase Auth via `@supabase/ssr`
- **Methods**: Email magic link + Google OAuth
- **Session refresh**: `proxy.ts` (Next.js 16 renamed middleware → proxy)
- **Protected routes**: `app/(app)/layout.tsx` checks `supabase.auth.getUser()`, redirects to `/sign-in`
- **Callback**: `app/api/auth/callback/route.ts` handles PKCE exchange for both magic link and OAuth
- **Nav auth-awareness**: `Nav.tsx` checks session in useEffect; "Get Started Free" → `/sign-in` or `/dashboard`

### Environment Variables (`.env.local`, gitignored)
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
RESEND_API_KEY=re_...              # server-only — used by /api/waitlist
ADMIN_EMAIL=your@email.com         # server-only — receives waitlist notifications
```

### Supabase Dashboard Config Required
- Authentication → Providers → Email (magic link / OTP) enabled
- Authentication → URL Configuration → Redirect URLs must include:
  - `http://localhost:3000/api/auth/callback`
  - `https://lawschoolhero.vercel.app/api/auth/callback`
  - `https://lawschoolhero.org/api/auth/callback`
- Site URL set to `https://lawschoolhero.org`

---

## Waitlist (`/waitlist`)

Standalone page — NOT linked from homepage CTAs. Users reach it via direct URL.

### Flow
1. User submits email (+ optional first name) on `/waitlist`
2. `POST /api/waitlist` validates, inserts into `waitlist_signups` via anon key
3. RLS: `anon_insert_waitlist` policy allows INSERT; count via `get_waitlist_count()` SECURITY DEFINER function
4. Resend sends branded confirmation email to user + plain-text admin notification
5. Form shows animated success state with waitlist position number

### Supabase table: `waitlist_signups`
- `id` (uuid PK), `email` (text, unique index on LOWER), `first_name` (text), `source` (text, default 'waitlist_page'), `created_at` (timestamptz)
- RLS enabled, anon INSERT policy, no SELECT policy (count via RPC only)

### Resend
- From: `info@lawschoolhero.org` (domain must be verified in Resend dashboard)
- `lib/resend.ts` exports `getResend()` — lazy init to avoid build-time crashes when env var is missing
- Email failures are non-blocking (`Promise.allSettled`) — signup is saved regardless

---

## Ticker Implementation (seamless loop)

The ticker in `Hero.tsx` uses two identical copy `<div>`s inside an `inline-flex` animated container.
Each copy has `gap: 3rem` between items AND `padding-right: 3rem` as the trailing gap.

This guarantees: `translateX(-50%)` = exactly `−width(copy1)` with zero jump at the seam.
**Do not revert to a single flat array** — that approach has a half-gap discontinuity on loop.

---

## Page Anchors

| Anchor | Section |
|---|---|
| `#services` | Services (4 prep tool cards) |
| `#how-it-works` | HowItWorks (3 steps) |
| `#get-started` | FinalCTA (signup / tutoring CTA) |

All nav links point to these anchors. There are no dead `href="#"` links in the nav.

---

## Nav Structure

```
[Prep → #services] [How it works → #how-it-works]   lawschoolhero   [Tutoring → #get-started] [Get Started Free → /sign-in or /dashboard]
```

- Pill width: `w-full md:max-w-[68%]` centered via `flex justify-center` on the outer header
- Logo: lowercase serif (`font-serif font-normal`), absolutely centered within the pill
- CTA button: dark pill (`#2a2a2a`, `border-white/10`) — not white — matches Monaco "Request demo" style

---

## Known Placeholders (needs real implementation)
- `<video>` in `Hero.tsx` has no `src` — add a real video URL when available
- Dashboard is a stub ("You're in.") — modules (LSAT, PS, Resume) not yet built
- Homepage CTAs (`Hero.tsx`, `FinalCTA.tsx`) still point to `href="#"` — wire these when ready

---

## Key Gotchas

- **Tailwind v4**: Use `@theme inline` in `globals.css`, not a config file. Arbitrary colors often need `style={{}}` props instead of Tailwind classes.
- **turbopack.root**: Set in `next.config.ts` to avoid workspace root detection warnings.
- **Serif font variable**: `--font-cormorant` maps to Playfair Display (Cormorant Garant is not available in `next/font/google`).
- **Server vs Client components**: Sections are Server Components by default. Add `"use client"` only when using hooks or event handlers. `Nav.tsx` and `Hero.tsx` are client components.
- **Next.js 16 proxy**: `middleware.ts` is deprecated; use `proxy.ts` with `export function proxy()`. The export name must be `proxy`, not `middleware`.
- **`NEXT_PUBLIC_*` build-time embedding**: These vars are embedded into the client bundle at build time, not runtime. Vercel deployments need the vars set BEFORE building — adding them after requires a redeploy.
- **Route segment config in Client Components**: `export const dynamic = 'force-dynamic'` must be in a Server Component `page.tsx`, not in a `"use client"` file. Split into a Server wrapper that sets the config + a Client form component.
