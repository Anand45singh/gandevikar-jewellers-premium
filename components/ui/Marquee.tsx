import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const speedClass = {
    slow: "[animation-duration:50s]",
    normal: "[animation-duration:35s]",
    fast: "[animation-duration:20s]",
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden flex select-none py-3 border-y border-gold/30 bg-ivory-card",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-8 whitespace-nowrap animate-marquee",
          speedClass[speed],
          direction === "right" && "[animation-direction:reverse]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center gap-8 whitespace-nowrap animate-marquee",
          speedClass[speed],
          direction === "right" && "[animation-direction:reverse]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
