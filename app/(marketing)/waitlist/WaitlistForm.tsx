"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [position, setPosition] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);

  function resetErrorOnChange() {
    if (state === "error") {
      setState("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });

      let data: Record<string, unknown> = {};
      try {
        data = await res.json();
      } catch {
        // response wasn't JSON (e.g. 500 HTML error page)
      }

      if (res.ok) {
        setPosition(typeof data.position === "number" ? data.position : null);
        setState("success");
      } else if (res.status === 409) {
        setErrorMessage("You're already on the list. We'll be in touch.");
        setState("error");
      } else if (res.status === 400) {
        setErrorMessage("Please enter a valid email address.");
        setState("error");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  const inputBase: React.CSSProperties = {
    backgroundColor: "#161616",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "9999px",
    padding: "12px 20px",
    color: "#ffffff",
    fontSize: "0.875rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.15s ease",
  };

  return (
    <AnimatePresence mode="wait">
      {state === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center py-4"
        >
          <div className="flex justify-center mb-5">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              <CheckCircle2 size={26} className="text-white" />
            </div>
          </div>
          <h2
            className="font-serif font-normal text-white mb-3"
            style={{ fontSize: "var(--fluid-2xl)" }}
          >
            You&apos;re on the list.
          </h2>
          <p className="mb-2" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9375rem" }}>
            {position
              ? `You're #${position} in line — we'll be in touch soon.`
              : "We'll be in touch soon."}
          </p>
          <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.8125rem" }}>
            Check your inbox for a confirmation.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <input
              type="text"
              placeholder="First name (optional)"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                resetErrorOnChange();
              }}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              disabled={state === "loading"}
              style={{
                ...inputBase,
                borderColor: nameFocused
                  ? "rgba(255,255,255,0.25)"
                  : "rgba(255,255,255,0.08)",
                opacity: state === "loading" ? 0.6 : 1,
              }}
              autoComplete="given-name"
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                resetErrorOnChange();
              }}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              required
              disabled={state === "loading"}
              style={{
                ...inputBase,
                borderColor: emailFocused
                  ? "rgba(255,255,255,0.25)"
                  : "rgba(255,255,255,0.08)",
                opacity: state === "loading" ? 0.6 : 1,
              }}
              autoComplete="email"
            />
          </div>

          <button
            type="submit"
            disabled={state === "loading"}
            className="w-full font-medium text-black rounded-full transition-all duration-200"
            style={{
              backgroundColor: state === "loading" ? "rgba(255,255,255,0.75)" : "#ffffff",
              padding: "13px 24px",
              fontSize: "0.9375rem",
              cursor: state === "loading" ? "not-allowed" : "pointer",
            }}
          >
            {state === "loading" ? "Joining..." : "Join the Waitlist"}
          </button>

          {state === "error" && errorMessage && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-center"
              style={{ color: "rgba(255,100,100,0.85)", fontSize: "0.8125rem" }}
            >
              {errorMessage}
            </motion.p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
