export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { courses } from "@/data/courses";
import { getAllProgress } from "@/lib/progress";
import { GraduationCap, DollarSign, Briefcase } from "lucide-react";
import Button from "@/components/ui/Button";
import SignOutButton from "./SignOutButton";
import CourseCard from "./CourseCard";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/sign-in");

  const progress = await getAllProgress();

  return (
    <main className="min-h-screen bg-black">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6">
        <p className="font-serif font-normal text-white text-lg">
          lawschoolhero
        </p>
        <SignOutButton />
      </div>

      {/* Onboarding / Motivational Header */}
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-20 max-w-[1920px] mx-auto">
        <p
          className="text-xs uppercase tracking-widest font-medium mb-6"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Your prep starts here
        </p>

        <h1
          className="font-serif font-light text-white leading-tight mb-6"
          style={{ fontSize: "var(--fluid-3xl)" }}
        >
          Here&apos;s what&apos;s about
          <br />
          <em className="italic">to change.</em>
        </h1>

        <p
          className="max-w-2xl leading-relaxed mb-16"
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "var(--fluid-base)",
          }}
        >
          Your LSAT score is the single biggest lever in your law school
          application. A few points can reshape where you go, what you pay, and
          where you work after. We built everything you need to move that number
          &mdash; for free.
        </p>

        {/* Impact cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px mb-16"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          {[
            {
              icon: GraduationCap,
              title: "Score \u2192 Schools",
              text: "Every point on the LSAT opens doors to higher-ranked schools. The difference between a 160 and a 170 is the difference between a regional school and a national one.",
            },
            {
              icon: DollarSign,
              title: "Score \u2192 Money",
              text: "A few points can mean tens of thousands in scholarship money \u2014 often the difference between debt and a full ride.",
            },
            {
              icon: Briefcase,
              title: "Score \u2192 Career",
              text: "Where you go shapes where you work. Higher-ranked schools mean stronger recruiting pipelines and more options after graduation.",
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="bg-black p-8 md:p-10">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border mb-5"
                  style={{
                    backgroundColor: "#111111",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <Icon size={18} style={{ color: "rgba(255,255,255,0.6)" }} />
                </div>
                <h3
                  className="font-serif font-normal text-white mb-2"
                  style={{ fontSize: "var(--fluid-lg)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        <Button href="/courses/logical-reasoning" size="lg">
          Start with Logical Reasoning
        </Button>
      </section>

      {/* Course Cards */}
      <section className="px-6 md:px-12 lg:px-16 pb-24 max-w-[1920px] mx-auto">
        <p
          className="text-xs uppercase tracking-widest font-medium mb-8"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Your courses
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          {courses.map((course) => (
            <CourseCard
              key={course.slug}
              course={course}
              completedCount={progress[course.slug] ?? 0}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
