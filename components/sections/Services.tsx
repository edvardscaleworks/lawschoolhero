import AnimateIn from "@/components/ui/AnimateIn";
import { Brain, BookOpen, PenLine, FileText } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Logical Reasoning",
    description:
      "Master every LR question type. From assumption and weaken to parallel reasoning — we break down the argument structure so patterns become second nature.",
    features: [
      "Argument core identification",
      "All 13+ question types",
      "Timed drilling with review",
    ],
  },
  {
    icon: BookOpen,
    title: "Reading Comprehension",
    description:
      "Stop re-reading passages. Learn a proven mapping system that lets you extract answers with confidence while keeping your pacing sharp.",
    features: [
      "Passage mapping technique",
      "Inference & detail strategies",
      "Pacing and timing drills",
    ],
  },
  {
    icon: PenLine,
    title: "Personal Statement",
    description:
      "Your essay is the only place you can show who you really are. We help you find the story worth telling and shape it into something admissions committees remember.",
    features: [
      "Story arc & structure",
      "Line-by-line editing",
      "Differentiation strategy",
    ],
  },
  {
    icon: FileText,
    title: "Resume Formatting",
    description:
      "A law school resume is not your job resume. We teach you the conventions admissions committees expect and help you frame every activity compellingly.",
    features: [
      "Law school-specific format",
      "Activity descriptions",
      "GPA & awards presentation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-24 md:py-32">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <AnimateIn direction="up">
          <div className="max-w-xl mb-16">
            <p className="text-white/25 text-xs uppercase tracking-widest font-medium mb-4">
              What we offer
            </p>
            <h2
              className="font-serif font-light text-white leading-tight"
              style={{ fontSize: "var(--fluid-3xl)" }}
            >
              Everything you need
              <br />
              <em className="italic">to get in.</em>
            </h2>
            <p
              className="text-white/50 mt-4 leading-relaxed"
              style={{ fontSize: "var(--fluid-base)" }}
            >
              From your first practice test through your final application — we
              have built the curriculum. And it is entirely free.
            </p>
          </div>
        </AnimateIn>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateIn key={service.title} direction="up" delay={i * 0.1}>
                <div
                  className="p-8 md:p-10 group transition-colors duration-300 bg-black hover:bg-[#0a0a0a]"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 border"
                    style={{
                      backgroundColor: "#111111",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon size={18} className="text-white/60" />
                  </div>

                  <h3
                    className="font-serif font-normal text-white mb-3 leading-tight"
                    style={{ fontSize: "var(--fluid-xl)" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                        >
                          <svg
                            width="8"
                            height="6"
                            viewBox="0 0 8 6"
                            fill="none"
                          >
                            <path
                              d="M1 3L3 5L7 1"
                              stroke="rgba(255,255,255,0.5)"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="text-white/50 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
