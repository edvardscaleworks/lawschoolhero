import type { Metadata } from "next";
import { Sparkles, GraduationCap, ShieldCheck } from "lucide-react";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Divider from "@/components/ui/Divider";
import AnimateIn from "@/components/ui/AnimateIn";
import WaitlistForm from "./WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist — lawschoolhero",
  description:
    "Get early access to the complete law school prep platform. LSAT prep, personal statement coaching, and resume formatting — free forever.",
};

const trustSignals = [
  {
    icon: Sparkles,
    headline: "Free forever.",
    body: "No credit card, no trial period. The core platform is always free for every serious applicant.",
  },
  {
    icon: GraduationCap,
    headline: "T14-caliber guidance.",
    body: "Every tutor scored 98th percentile or higher and was admitted to a top-14 law school. No exceptions.",
  },
  {
    icon: ShieldCheck,
    headline: "No spam. Ever.",
    body: "You can unsubscribe from anything at any time.",
  },
];

export default function WaitlistPage() {
  return (
    <main className="bg-black min-h-screen">
      <Nav />

      {/* Above the fold */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p
            className="uppercase font-medium tracking-widest mb-6"
            style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.7rem", letterSpacing: "0.16em" }}
          >
            Early Access
          </p>

          <h1
            className="font-serif font-normal text-white leading-tight mb-5"
            style={{ fontSize: "var(--fluid-4xl)" }}
          >
            Your law school story
            <br />
            <em className="italic">starts here.</em>
          </h1>

          <p
            className="leading-relaxed mb-10 max-w-md mx-auto"
            style={{ color: "rgba(255,255,255,0.50)", fontSize: "var(--fluid-base)" }}
          >
            Join the waitlist for free access to the complete law school prep
            platform — LSAT, personal statement, and resume in one place.
          </p>

          <WaitlistForm />
        </div>
      </section>

      <Divider />

      {/* Trust signals */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {trustSignals.map(({ icon: Icon, headline, body }, i) => (
            <AnimateIn key={headline} direction="up" delay={i * 0.1}>
              <div
                className="rounded-2xl h-full"
                style={{
                  backgroundColor: "#0d0d0d",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "32px",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <Icon size={18} className="text-white" style={{ opacity: 0.7 }} />
                </div>
                <h3
                  className="font-medium text-white mb-3"
                  style={{ fontSize: "0.9375rem" }}
                >
                  {headline}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem" }}
                >
                  {body}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
