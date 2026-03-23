"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthed(!!session);
    });
  }, []);

  const ctaHref = authed ? "/dashboard" : "/sign-in";

  return (
    <>
      {/* Outer container — centers the pill and constrains width */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:px-8 md:pt-5">
        {/* Pill — ~2/3 width on desktop, full width on mobile */}
        <div
          className="relative flex items-center w-full md:max-w-[68%] h-14 px-6 rounded-xl border"
          style={{
            backgroundColor: "#161616",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          {/* Left: 2 nav links */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="#services"
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              Prep
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              How it works
            </Link>
          </nav>

          {/* Center: logo — absolutely centered within the pill */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif font-normal text-white hover:opacity-70 transition-opacity whitespace-nowrap"
            style={{ fontSize: "1.125rem", letterSpacing: "-0.01em" }}
          >
            lawschoolhero
          </Link>

          {/* Right: tutoring link + CTA */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <Link
              href="#get-started"
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              Tutoring
            </Link>
            <Link
              href={ctaHref}
              className="text-sm font-medium text-white rounded-full px-5 py-2 border transition-all"
              style={{
                backgroundColor: "#2a2a2a",
                borderColor: "rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#333";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#2a2a2a";
              }}
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-auto transition-colors"
            style={{ color: "rgba(255,255,255,0.55)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile dropdown — sits below the pill */}
        {mobileOpen && (
          <div
            className="md:hidden absolute top-full left-4 right-4 mt-1 rounded-xl px-6 py-6 flex flex-col gap-5 border"
            style={{
              backgroundColor: "#161616",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            <Link
              href="#services"
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onClick={() => setMobileOpen(false)}
            >
              Prep
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onClick={() => setMobileOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="#get-started"
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onClick={() => setMobileOpen(false)}
            >
              Tutoring
            </Link>
            <div
              className="pt-3 border-t"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <Link
                href={ctaHref}
                className="block text-sm font-medium text-white rounded-full px-5 py-2.5 text-center border"
                style={{ backgroundColor: "#2a2a2a", borderColor: "rgba(255,255,255,0.1)" }}
                onClick={() => setMobileOpen(false)}
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
