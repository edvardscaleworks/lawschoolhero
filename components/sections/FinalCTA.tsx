import AnimateIn from "@/components/ui/AnimateIn";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section
      id="get-started"
      className="bg-black py-32 md:py-48 overflow-hidden relative"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <AnimateIn direction="up">
          <p className="text-white/25 text-xs uppercase tracking-widest font-medium mb-6">
            Get started today
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.12}>
          <h2
            className="font-serif font-light text-white leading-tight mb-6 max-w-3xl mx-auto"
            style={{ fontSize: "var(--fluid-4xl)" }}
          >
            Your law school journey
            <br />
            <em className="italic">starts here.</em>
          </h2>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.22}>
          <p
            className="text-white/50 max-w-md mx-auto leading-relaxed mb-10"
            style={{ fontSize: "var(--fluid-base)" }}
          >
            It is free. It is built for serious applicants. Get started and
            change your trajectory.
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.32}>
          <Button href="#" size="lg">
            Get Started Free
          </Button>
        </AnimateIn>
      </div>
    </section>
  );
}
