import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#000000" }}
    >
      <Link
        href="/"
        className="font-serif font-normal mb-12 text-white hover:opacity-70 transition-opacity block"
        style={{ fontSize: "var(--fluid-lg)" }}
      >
        lawschoolhero
      </Link>

      <p
        className="font-serif font-normal mb-4 text-white"
        style={{ fontSize: "var(--fluid-4xl)" }}
      >
        Coming soon.
      </p>

      <p
        className="mb-10"
        style={{ color: "rgba(255,255,255,0.4)", fontSize: "var(--fluid-base)" }}
      >
        We&apos;re building something great. Check back shortly.
      </p>

      <Link
        href="/"
        className="text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        Back to home
      </Link>
    </main>
  );
}
