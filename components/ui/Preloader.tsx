"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show only once per browser session
    const hasSeenIntro = sessionStorage.getItem("ggj_intro_seen");
    if (!hasSeenIntro) {
      setLoading(true);
      const timer = setTimeout(() => {
        handleComplete();
      }, 1150); // <1.2s strict budget
      return () => clearTimeout(timer);
    }
  }, []);

  const handleComplete = () => {
    try {
      sessionStorage.setItem("ggj_intro_seen", "true");
    } catch {}
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian text-ivory cursor-pointer select-none"
          onClick={handleComplete}
          title="Click to skip"
        >
          {/* Subtle gold watermark pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#d7b46a_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Central Royal Mark SVG Drawing In */}
          <div className="relative flex flex-col items-center">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 sm:w-24 sm:h-24 stroke-gold fill-none"
              aria-hidden="true"
            >
              {/* Outer diamond path */}
              <motion.polygon
                points="50,10 88,50 50,90 12,50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />

              {/* Inner royal flower core */}
              <motion.circle
                cx="50"
                cy="50"
                r="10"
                strokeWidth="1.5"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4, ease: "backOut" }}
              />

              <motion.circle
                cx="50"
                cy="50"
                r="3"
                fill="#d7b46a"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              />
            </svg>

            {/* Typography Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
              className="mt-4 text-center"
            >
              <h2 className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-ivory">
                Girishbhai Gandevikar
              </h2>
              <p className="text-[9px] uppercase tracking-royal-ultra text-gold-400 font-sans mt-0.5">
                VADODARA • ESTD. 1927
              </p>
            </motion.div>
          </div>

          {/* Skip Notice */}
          <div className="absolute bottom-6 text-[10px] uppercase tracking-royal text-gold/40">
            Click anywhere to enter
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
