"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignOutButton() {
  const router = useRouter();
  const supabase = createClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <button
      onClick={handleSignOut}
      className="rounded-xl px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-60"
      style={{
        border: "1px solid rgba(255,255,255,0.15)",
        color: "rgba(255,255,255,0.5)",
      }}
    >
      Sign out
    </button>
  );
}
