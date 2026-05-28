"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type RotatingWordProps = {
  words: string[];
  /** ms each word stays visible before cycling */
  intervalMs?: number;
  className?: string;
};

/**
 * JusAgency-style cycling word. Drops in from below with a subtle blur,
 * exits upward. Uses popLayout so it doesn't reflow the surrounding text
 * during the swap. Respects prefers-reduced-motion.
 */
export default function RotatingWord({
  words,
  intervalMs = 2000,
  className,
}: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      intervalMs
    );
    return () => clearInterval(t);
  }, [words.length, intervalMs, reduce]);

  if (reduce) {
    return (
      <span className={cn("inline-block", className)}>{words[0]}</span>
    );
  }

  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "0.6em", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.6em", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={cn("inline-block", className)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
