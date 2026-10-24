import React from "react";
import { OrnamentDivider } from "./OrnamentDivider";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left" | "right";
  tone?: "gold" | "maroon" | "light";
  className?: string;
  dividerClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "gold",
  className,
  dividerClassName,
}: SectionHeadingProps) {
  const alignClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  const isLight = tone === "light";

  return (
    <div className={cn("flex flex-col w-full mb-10 sm:mb-14", alignClasses[align], className)}>
      {eyebrow && (
        <span
          className={cn(
            "text-[11px] font-sans uppercase tracking-royal-wide mb-2.5 font-medium",
            isLight ? "text-gold-200" : "text-maroon"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide leading-tight",
          isLight ? "text-ivory" : "text-ink"
        )}
      >
        {title}
      </h2>
      <div className={cn("w-36 sm:w-44", align === "center" && "mx-auto", dividerClassName)}>
        <OrnamentDivider tone={tone} size="sm" className="my-3 sm:my-4" />
      </div>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-sm sm:text-base font-light leading-relaxed",
            isLight ? "text-ivory/80" : "text-ink-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
