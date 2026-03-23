import Divider from "@/components/ui/Divider";
import AnimateIn from "@/components/ui/AnimateIn";

const stats = [
  { value: "2,000+", label: "students helped" },
  { value: "T14", label: "school acceptances" },
  { value: "50 pts", label: "average LSAT gain" },
  { value: "Free", label: "forever, always" },
];

export default function SocialProof() {
  return (
    <section className="bg-black">
      <Divider />
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 py-12">
        <AnimateIn direction="none" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  i < stats.length - 1
                    ? "md:border-r md:border-white/8"
                    : ""
                }`}
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span
                  className="font-serif font-light text-white"
                  style={{ fontSize: "var(--fluid-3xl)" }}
                >
                  {stat.value}
                </span>
                <span className="text-white/40 text-sm mt-1 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
      <Divider />
    </section>
  );
}
