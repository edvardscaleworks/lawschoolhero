"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Status = "verifying" | "error";

export default function ConfirmClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<Status>("verifying");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const tokenHash = searchParams.get("token_hash");
    const type = searchParams.get("type");

    if (!tokenHash || !type) {
      setErrorMessage("This link is missing required parameters.");
      setStatus("error");
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
          setErrorMessage(
            error.message?.toLowerCase().includes("expired")
              ? "This sign-in link has expired. Please request a new one."
              : error.message || "Verification failed. Please try again."
          );
          setStatus("error");
        } else {
          router.replace("/dashboard");
        }
      });
  }, [searchParams, router]);

  if (status === "error") {
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
          {errorMessage}
        </p>
        <a
          href="/sign-in"
          className="inline-block mt-6 text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Request a new link
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
