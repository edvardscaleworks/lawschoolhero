import { createClient } from "@/lib/supabase/server";

export async function getUserProgress(
  courseSlug: string
): Promise<Set<string>> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Set();

  const { data } = await supabase
    .from("user_lesson_progress")
    .select("lesson_slug")
    .eq("user_id", user.id)
    .eq("course_slug", courseSlug);

  return new Set((data ?? []).map((r) => r.lesson_slug));
}

export async function getAllProgress(): Promise<Record<string, number>> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return {};

  const { data } = await supabase
    .from("user_lesson_progress")
    .select("course_slug")
    .eq("user_id", user.id);

  const counts: Record<string, number> = {};
  (data ?? []).forEach((r) => {
    counts[r.course_slug] = (counts[r.course_slug] ?? 0) + 1;
  });
  return counts;
}
