"use client";

import React from "react";
import { usePathname } from "next/navigation";

/**
 * CSS-only page fade-in.
 * The old AnimatePresence mode="wait" version does not work with the App Router:
 * the new page is already mounted while the old one "exits", which made every
 * click wait and render twice. A keyed div + CSS animation is instant.
 */
export function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="w-full page-enter">
      {children}
    </div>
  );
}
