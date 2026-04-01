export interface Lesson {
  slug: string;
  title: string;
  description: string;
}

export const lessons: Lesson[] = [
  {
    slug: "what-is-an-argument",
    title: "What Is an Argument?",
    description: "Premise vs. conclusion, identifying the core claim.",
  },
  {
    slug: "finding-the-conclusion",
    title: "Finding the Conclusion",
    description: "Conclusion indicators, the \u201Ctherefore\u201D test.",
  },
  {
    slug: "spotting-the-gap",
    title: "Spotting the Gap",
    description:
      "The space between premises and conclusion \u2014 every LR question exploits this.",
  },
  {
    slug: "reading-the-question-stem",
    title: "Reading the Question Stem",
    description: "How to identify question type before reading answers.",
  },
  {
    slug: "assumption-questions",
    title: "Assumption Questions",
    description: "The foundational LR question type.",
  },
  {
    slug: "strengthen-and-weaken",
    title: "Strengthen & Weaken",
    description: "Fill the gap or widen it.",
  },
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getLessonIndex(slug: string): number {
  return lessons.findIndex((l) => l.slug === slug);
}
