"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: "easeOut" as const },
});

const schools = [
  "Georgetown Law",
  "Columbia Law",
  "Stanford Law",
  "NYU School of Law",
  "UVA School of Law",
  "Duke Law",
];

// Each copy div uses gap + matching padding-right so the loop seam is gapless
const GAP = "3rem";

export default function Hero() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className="bg-black pt-28 md:pt-32 pb-0">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* ─── Schools ticker (above video) ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          {/* Label */}
          <p
            className="text-center uppercase font-medium mb-3"
            style={{
              color: "rgba(255,255,255,0.28)",
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
            }}
          >
            Used by students admitted to
          </p>

          {/* Overflow mask */}
          <div className="relative overflow-hidden">
            {/* Left edge fade */}
            <div
              className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right, #000 0%, transparent 100%)",
              }}
            />
            {/* Right edge fade */}
            <div
              className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to left, #000 0%, transparent 100%)",
              }}
            />

            <div className="animate-ticker" style={{ display: "inline-flex" }}>
              {/* Copy 1 */}
              <div style={{ display: "flex", gap: GAP, paddingRight: GAP, flexShrink: 0 }}>
                {schools.map((school) => (
                  <span
                    key={school}
                    className="font-serif font-normal select-none whitespace-nowrap"
                    style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem" }}
                  >
                    {school}
                  </span>
                ))}
              </div>
              {/* Copy 2 */}
              <div style={{ display: "flex", gap: GAP, paddingRight: GAP, flexShrink: 0 }}>
                {schools.map((school) => (
                  <span
                    key={`${school}-2`}
                    className="font-serif font-normal select-none whitespace-nowrap"
                    style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem" }}
                  >
                    {school}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Video player ─── */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl"
          style={{ aspectRatio: "16/9", backgroundColor: "#0d0d0d" }}
        >
          {/* Video element */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />

          {/* Placeholder visual (shown when not playing) */}
          {!playing && (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(28,18,8,1) 0%, rgba(5,5,5,1) 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 48px)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
                }}
              />
            </div>
          )}

          {/* Play button */}
          {!playing && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center group z-10"
              aria-label="Play video"
            >
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Play size={22} className="text-white fill-white ml-1" />
              </div>
            </button>
          )}
        </motion.div>

        {/* ─── Text below video ─── */}
        <div className="text-center pt-14 pb-16 md:pt-16 md:pb-20 max-w-3xl mx-auto">
          <motion.h1
            {...fadeUp(0.3)}
            className="font-serif font-normal leading-[1.08] tracking-tight text-white mb-5"
            style={{ fontSize: "var(--fluid-4xl)" }}
          >
            The complete law school
            <br />
            <em className="italic">prep platform</em> — free
          </motion.h1>

          <motion.p
            {...fadeUp(0.45)}
            className="text-white/55 leading-relaxed mb-2"
            style={{ fontSize: "var(--fluid-lg)" }}
          >
            LSAT, personal statement, and resume — all in one system.
          </motion.p>

          <motion.p
            {...fadeUp(0.52)}
            className="mb-10"
            style={{ fontSize: "var(--fluid-base)", color: "rgba(255,255,255,0.32)" }}
          >
            Pay only if you want tutoring.
          </motion.p>

          <motion.div {...fadeUp(0.62)}>
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-white text-black font-medium rounded-full px-8 py-3.5 text-sm hover:bg-white/90 transition-colors"
            >
              Get Started Free
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
