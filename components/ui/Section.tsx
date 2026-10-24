import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "ivory" | "white" | "obsidian" | "maroon";
  padding?: "none" | "sm" | "default" | "lg" | "xl";
}

export function Section({
  children,
  className,
  variant = "ivory",
  padding = "default",
  ...props
}: SectionProps) {
  const variantClasses = {
    ivory: "bg-ivory text-ink",
    white: "bg-white text-ink",
    obsidian: "bg-obsidian text-ivory",
    maroon: "bg-maroon text-ivory",
  };

  const paddingClasses = {
    none: "py-0",
    sm: "py-8 sm:py-12",
    default: "py-16 sm:py-24 md:py-28",
    lg: "py-20 sm:py-32 md:py-36",
    xl: "py-24 sm:py-40 md:py-48",
  };

  return (
    <section
      className={cn("relative overflow-hidden", variantClasses[variant], paddingClasses[padding], className)}
      {...props}
    >
      {children}
    </section>
  );
}
