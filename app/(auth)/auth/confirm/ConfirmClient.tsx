"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ConfirmClient() {
  const searchParams = useSearchParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const tokenHash = searchParams.get("token_hash");
    const type = searchParams.get("type");

    if (!tokenHash || !type) {
      setError(true);
      return;
    }

    const supabase = createClient();
    supabase.auth
      .verifyOtp({
        token_hash: tokenHash,
        type: type as "email" | "magiclink",
      })
      .then(({ error }) => {
        if (error) {
          setError(true);
        } else {
          window.location.href = "/dashboard";
        }
      });
  }, [searchParams]);

  if (error) {
    return (
      <div className="text-center">
        <p
          className="font-serif mb-2"
          style={{ fontSize: "var(--fluid-2xl)", color: "#ffffff" }}
        >
          Link expired
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "var(--fluid-sm)",
          }}
        >
          This sign-in link is no longer valid.
        </p>
        <a
          href="/sign-in"
          className="inline-block mt-6 text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Request a new one
        </a>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p
        className="font-serif"
        style={{ fontSize: "var(--fluid-2xl)", color: "#ffffff" }}
      >
        Signing you in…
      </p>
    </div>
  );
}
