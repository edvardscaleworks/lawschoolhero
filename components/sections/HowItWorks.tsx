import AnimateIn from "@/components/ui/AnimateIn";

const steps = [
  {
    number: "01",
    title: "Create your free account",
    description:
      "Sign up in seconds. No credit card, no trial period, no catch. lawschoolhero is free because we believe a great legal education should not depend on your ability to pay for prep.",
  },
  {
    number: "02",
    title: "Work through your curriculum",
    description:
      "Start with your weakest area or follow our recommended sequence. Each module is built around your LSAT test date and application deadlines, so everything stays actionable.",
  },
  {
    number: "03",
    title: "Submit with confidence",
    description:
      "When it is time to apply, you will have a polished resume, a personal statement you are proud of, and an LSAT score that reflects the work you put in.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-black py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <AnimateIn direction="up">
          <div className="max-w-xl mb-20">
            <p className="text-white/25 text-xs uppercase tracking-widest font-medium mb-4">
              The process
            </p>
            <h2
              className="font-serif font-light text-white leading-tight"
              style={{ fontSize: "var(--fluid-3xl)" }}
            >
              Simple by design.
            </h2>
            <p
              className="text-white/50 mt-4 leading-relaxed"
              style={{ fontSize: "var(--fluid-base)" }}
            >
              Three steps from LSAT prep to acceptance letter.
            </p>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} direction="up" delay={i * 0.15}>
              <div
                className="flex flex-col md:flex-row gap-8 md:gap-16 py-10 md:py-14"
                style={{
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Step number */}
                <div className="flex-shrink-0 md:w-32">
                  <span
                    className="font-serif font-light leading-none"
                    style={{
                      fontSize: "var(--fluid-4xl)",
                      color: "rgba(255,255,255,0.1)",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 max-w-2xl">
                  <h3
                    className="font-serif font-normal text-white leading-tight mb-4"
                    style={{ fontSize: "var(--fluid-2xl)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/50 leading-relaxed"
                    style={{ fontSize: "var(--fluid-base)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
