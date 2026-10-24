import React from "react";
import { cn } from "@/lib/utils";

interface OrnamentDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "gold" | "maroon" | "light";
  className?: string;
  size?: "sm" | "default" | "lg";
}

export function OrnamentDivider({
  tone = "gold",
  size = "default",
  className,
  ...props
}: OrnamentDividerProps) {
  const lineClasses = {
    gold: "border-gold/40",
    maroon: "border-maroon/30",
    light: "border-gold/30",
  };

  const fillClasses = {
    gold: "fill-gold text-gold",
    maroon: "fill-maroon text-maroon",
    light: "fill-gold-300 text-gold-300",
  };

  const sizeMetrics = {
    sm: "w-3.5 h-3.5",
    default: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div
      role="separator"
      aria-label="Decorative divider"
      className={cn("flex items-center justify-center gap-3 w-full my-6", className)}
      {...props}
    >
      <div className={cn("h-px flex-1 border-t", lineClasses[tone])} />
      {/* Royal Diamond & Floral Heritage Motif */}
      <div className={cn("flex items-center justify-center shrink-0", fillClasses[tone])}>
        <svg
          viewBox="0 0 24 24"
          className={cn(sizeMetrics[size], "transition-transform duration-500 hover:rotate-45")}
          aria-hidden="true"
        >
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="currentColor"
            fillOpacity="0.9"
          />
          <circle cx="12" cy="12" r="2.2" fill="#FAF6EB" />
        </svg>
      </div>
      <div className={cn("h-px flex-1 border-t", lineClasses[tone])} />
    </div>
  );
}
