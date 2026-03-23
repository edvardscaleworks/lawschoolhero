import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: "#000000" }}
    >
      <Link
        href="/"
        className="font-serif font-normal mb-10 text-white hover:opacity-70 transition-opacity"
        style={{ fontSize: "var(--fluid-lg)" }}
      >
        lawschoolhero
      </Link>
      <div
        className="w-full max-w-md rounded-2xl p-8"
        style={{
          backgroundColor: "#0d0d0d",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
