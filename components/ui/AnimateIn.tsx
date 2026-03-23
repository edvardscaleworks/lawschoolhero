"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
}

function getInitial(direction: Direction) {
  switch (direction) {
    case "up":
      return { opacity: 0, y: 32 };
    case "down":
      return { opacity: 0, y: -32 };
    case "left":
      return { opacity: 0, x: 32 };
    case "right":
      return { opacity: 0, x: -32 };
    case "none":
      return { opacity: 0 };
  }
}

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  className,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={getInitial(direction)}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitial(direction)}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
