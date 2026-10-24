"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealVariant = "fade-up" | "fade-down" | "zoom-in" | "fade";

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  className,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  const getVariants = () => {
    if (prefersReduced) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      };
    }

    switch (variant) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: 28 },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -28 },
          visible: { opacity: 1, y: 0 },
        };
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.96 },
          visible: { opacity: 1, scale: 1 },
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Luxury cubic ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
