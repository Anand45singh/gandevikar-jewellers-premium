"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type CursorType = "default" | "hover" | "view";

/**
 * Gold dot + ring cursor (desktop, fine pointer only).
 * Uses motion values, so moving the mouse does NOT re-render React.
 * State changes only when the cursor type actually changes.
 */
export function CustomCursor() {
  const prefersReduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<CursorType>("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 1200, damping: 50 });
  const dotY = useSpring(y, { stiffness: 1200, damping: 50 });
  const ringX = useSpring(x, { stiffness: 450, damping: 28 });
  const ringY = useSpring(y, { stiffness: 450, damping: 28 });

  useEffect(() => {
    if (prefersReduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      if (!t || !t.closest) return;
      if (t.closest("article, [data-cursor='view']")) setType("view");
      else if (t.closest("a, button, input, select, textarea, [role='button']")) setType("hover");
      else setType("default");
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [prefersReduced, x, y]);

  if (!enabled || !visible) return null;

  const size = type === "view" ? 54 : type === "hover" ? 38 : 22;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden" aria-hidden="true">
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold -translate-x-1/2 -translate-y-1/2"
        style={{ x: dotX, y: dotY, opacity: type === "view" ? 0 : 1 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-gold/70 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: size,
          height: size,
          backgroundColor:
            type === "view" ? "rgba(140,27,34,0.85)" : type === "hover" ? "rgba(215,180,106,0.18)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.2 }}
      >
        {type === "view" && (
          <span className="text-[9px] uppercase tracking-[0.2em] text-ivory font-sans font-medium select-none">View</span>
        )}
      </motion.div>
    </div>
  );
}
