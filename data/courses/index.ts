import { Brain, BookOpen, PenLine, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Course {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  status: "active" | "coming-soon";
  lessonCount: number;
}

export const courses: Course[] = [
  {
    slug: "logical-reasoning",
    title: "Logical Reasoning",
    description:
      "Master every LR question type. From assumption and weaken to parallel reasoning \u2014 we break down the argument structure so patterns become second nature.",
    icon: Brain,
    features: [
      "Argument core identification",
      "All 13+ question types",
      "Timed drilling with review",
    ],
    status: "active",
    lessonCount: 6,
  },
  {
    slug: "reading-comprehension",
    title: "Reading Comprehension",
    description:
      "Stop re-reading passages. Learn a proven mapping system that lets you extract answers with confidence while keeping your pacing sharp.",
    icon: BookOpen,
    features: [
      "Passage mapping technique",
      "Inference & detail strategies",
      "Pacing and timing drills",
    ],
    status: "coming-soon",
    lessonCount: 0,
  },
  {
    slug: "personal-statement",
    title: "Personal Statement",
    description:
      "Your essay is the only place you can show who you really are. We help you find the story worth telling and shape it into something admissions committees remember.",
    icon: PenLine,
    features: [
      "Story arc & structure",
      "Line-by-line editing",
      "Differentiation strategy",
    ],
    status: "coming-soon",
    lessonCount: 0,
  },
  {
    slug: "resume-formatting",
    title: "Resume Formatting",
    description:
      "A law school resume is not your job resume. We teach you the conventions admissions committees expect and help you frame every activity compellingly.",
    icon: FileText,
    features: [
      "Law school-specific format",
      "Activity descriptions",
      "GPA & awards presentation",
    ],
    status: "coming-soon",
    lessonCount: 0,
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
