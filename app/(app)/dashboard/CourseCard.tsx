import Link from "next/link";
import ProgressBar from "@/components/ui/ProgressBar";
import Badge from "@/components/ui/Badge";
import type { Course } from "@/data/courses";

export default function CourseCard({
  course,
  completedCount,
}: {
  course: Course;
  completedCount: number;
}) {
  const Icon = course.icon;
  const isActive = course.status === "active";
  const percent =
    course.lessonCount > 0
      ? Math.round((completedCount / course.lessonCount) * 100)
      : 0;

  const card = (
    <div
      className={`p-8 md:p-10 transition-colors duration-300 bg-black ${
        isActive ? "hover:bg-[#0a0a0a] cursor-pointer" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center border"
          style={{
            backgroundColor: "#111111",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <Icon
            size={18}
            style={{ color: isActive ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)" }}
          />
        </div>
        {!isActive && <Badge>Coming Soon</Badge>}
      </div>

      <h3
        className="font-serif font-normal leading-tight mb-3"
        style={{
          fontSize: "var(--fluid-xl)",
          color: isActive ? "#ffffff" : "rgba(255,255,255,0.4)",
        }}
      >
        {course.title}
      </h3>

      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: isActive ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)" }}
      >
        {course.description}
      </p>

      <ul className="flex flex-col gap-2.5 mb-6">
        {course.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5">
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path
                  d="M1 3L3 5L7 1"
                  stroke={isActive ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              className="text-sm"
              style={{ color: isActive ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)" }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {isActive && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {completedCount} of {course.lessonCount} lessons
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {percent}%
            </span>
          </div>
          <ProgressBar percent={percent} />
        </div>
      )}
    </div>
  );

  if (isActive) {
    return (
      <Link href={`/courses/${course.slug}`} className="block">
        {card}
      </Link>
    );
  }

  return card;
}
