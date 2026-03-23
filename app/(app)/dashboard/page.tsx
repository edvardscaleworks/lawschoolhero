export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "./SignOutButton";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/sign-in");

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="text-center">
        <p
          className="font-serif font-normal mb-3"
          style={{ fontSize: "var(--fluid-5xl)", color: "#ffffff" }}
        >
          You&apos;re in.
        </p>
        <p
          className="mb-10"
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "var(--fluid-base)",
          }}
        >
          {user.email}
        </p>
        <SignOutButton />
      </div>
    </main>
  );
}
