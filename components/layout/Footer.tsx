import Link from "next/link";
import Divider from "@/components/ui/Divider";

const links = {
  Services: [
    { label: "Logical Reasoning", href: "#" },
    { label: "Reading Comprehension", href: "#" },
    { label: "Personal Statement", href: "#" },
    { label: "Resume Formatting", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-white font-semibold text-lg">
              LawSchoolHero
            </Link>
            <p className="mt-3 text-white/40 text-sm leading-relaxed max-w-xs">
              The definitive law school admissions advantage. Free forever.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-white/25 text-xs uppercase tracking-widest mb-4 font-medium">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} LawSchoolHero. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/25 hover:text-white/60 text-xs transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-white/25 hover:text-white/60 text-xs transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-white/25 hover:text-white/60 text-xs transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
