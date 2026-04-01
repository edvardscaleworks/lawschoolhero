export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourse } from "@/data/courses";
import { lessons } from "@/data/courses/logical-reasoning";
import { getUserProgress } from "@/lib/progress";
import ProgressBar from "@/components/ui/ProgressBar";
import { Check, Lock, ChevronRight, ArrowLeft } from "lucide-react";

function deriveLessonStatuses(
  lessonSlugs: string[],
  completedSlugs: Set<string>
): Array<"completed" | "current" | "locked"> {
  const statuses: Array<"completed" | "current" | "locked"> = [];
  let foundCurrent = false;

  for (const slug of lessonSlugs) {
    if (completedSlugs.has(slug)) {
      statuses.push("completed");
    } else if (!foundCurrent) {
      statuses.push("current");
      foundCurrent = true;
    } else {
      statuses.push("locked");
    }
  }
  return statuses;
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}) {
  const { courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course || course.status !== "active") notFound();

  const completedSlugs = await getUserProgress(courseSlug);
  const statuses = deriveLessonStatuses(
    lessons.map((l) => l.slug),
    completedSlugs
  );
  const completedCount = statuses.filter((s) => s === "completed").length;
  const percent =
    lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  return (
    <main className="min-h-screen bg-black">
      {/* Top bar */}
      <div className="px-6 md:px-12 lg:px-16 py-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>
      </div>

      {/* Course header */}
      <section className="px-6 md:px-12 lg:px-16 pt-4 pb-12 max-w-3xl">
        <h1
          className="font-serif font-light text-white leading-tight mb-3"
          style={{ fontSize: "var(--fluid-2xl)" }}
        >
          {course.title}
        </h1>
        <p
          className="leading-relaxed mb-8"
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "var(--fluid-base)",
          }}
        >
          {course.description}
        </p>

        {/* Progress */}
        <div className="flex items-center gap-4 mb-2">
          <span
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {completedCount} of {lessons.length} lessons complete
          </span>
          <span
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {percent}%
          </span>
        </div>
        <ProgressBar percent={percent} />
      </section>

      {/* Lesson list */}
      <section className="px-6 md:px-12 lg:px-16 pb-24 max-w-3xl">
        <div className="flex flex-col">
          {lessons.map((lesson, i) => {
            const status = statuses[i];
            const isLocked = status === "locked";
            const isCompleted = status === "completed";
            const isCurrent = status === "current";

            return (
              <div
                key={lesson.slug}
                className="flex items-center gap-5 py-5 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {/* Status icon */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: isCompleted
                      ? "rgba(255,255,255,0.1)"
                      : isCurrent
                        ? "#ffffff"
                        : "rgba(255,255,255,0.04)",
                  }}
                >
                  {isCompleted && (
                    <Check
                      size={16}
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    />
                  )}
                  {isCurrent && (
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#000000" }}
                    >
                      {i + 1}
                    </span>
                  )}
                  {isLocked && (
                    <Lock
                      size={14}
                      style={{ color: "rgba(255,255,255,0.2)" }}
                    />
                  )}
                </div>

                {/* Lesson info */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-medium text-sm mb-0.5"
                    style={{
                      color: isLocked
                        ? "rgba(255,255,255,0.25)"
                        : "#ffffff",
                    }}
                  >
                    {lesson.title}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      color: isLocked
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {lesson.description}
                  </p>
                </div>

                {/* Arrow for accessible lessons */}
                {!isLocked && (
                  <ChevronRight
                    size={16}
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
