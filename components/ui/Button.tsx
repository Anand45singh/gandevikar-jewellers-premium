"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid-maroon" | "solid-gold" | "outline" | "text-underline";
  size?: "sm" | "default" | "lg";
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "solid-maroon",
      size = "default",
      href,
      showArrow = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const prefersReduced = useReducedMotion();
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Subtle magnetic micro-interaction on desktop fine pointer
    const handleMouseMove = (e: React.MouseEvent) => {
      if (prefersReduced || variant === "text-underline") return;
      const { clientX, clientY } = e;
      if (buttonRef.current) {
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.18, y: middleY * 0.18 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    const baseClasses =
      "group relative inline-flex items-center justify-center font-sans uppercase font-medium tracking-royal-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden";

    const variantClasses = {
      "solid-maroon":
        "bg-maroon text-ivory hover:bg-maroon-light shadow-sm hover:shadow-lg border border-maroon active:translate-y-0",
      "solid-gold":
        "bg-gold text-obsidian hover:bg-gold-500 font-semibold shadow-sm hover:shadow-lg border border-gold active:translate-y-0",
      "outline":
        "bg-transparent border border-gold/70 text-ink hover:text-maroon hover:border-maroon hover:bg-gold/10 active:translate-y-0",
      "text-underline":
        "bg-transparent text-maroon hover:text-maroon-light px-0 py-1 tracking-royal border-b border-maroon/40 hover:border-maroon !p-0",
    };

    const sizeClasses = {
      sm: variant === "text-underline" ? "text-xs" : "text-xs px-4 py-2.5",
      default: variant === "text-underline" ? "text-xs sm:text-sm" : "text-xs sm:text-sm px-6 py-3.5",
      lg: variant === "text-underline" ? "text-sm" : "text-sm px-8 py-4",
    };

    const content = (
      <>
        {/* Shimmer sweep effect on gold CTAs */}
        {variant === "solid-gold" && (
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        )}
        <span className="relative z-10">{children}</span>
        {showArrow && (
          <ArrowRight
            className="ml-2.5 h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
            aria-hidden="true"
          />
        )}
      </>
    );

    if (href) {
      return (
        <motion.div
          animate={prefersReduced ? { x: 0, y: 0 } : { x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="inline-block"
        >
          <Link
            ref={buttonRef as any}
            href={href}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
          >
            {content}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.div
        animate={prefersReduced ? { x: 0, y: 0 } : { x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="inline-block"
      >
        <button
          ref={buttonRef as any}
          disabled={disabled}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
          {...props}
        >
          {content}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = "Button";
