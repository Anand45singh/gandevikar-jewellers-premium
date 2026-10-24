"use client";

import React from "react";
import { Marquee } from "@/components/ui/Marquee";
import { homePageContent } from "@/content/home";

export function MarqueeStrip() {
  return (
    <Marquee speed="normal" className="bg-obsidian border-y border-gold/40 py-4 text-ivory">
      {homePageContent.marqueeKeywords.map((keyword, idx) => (
        <span key={idx} className="flex items-center gap-6 text-xs tracking-royal uppercase font-medium">
          <span className="text-ivory/90 hover:text-gold transition-colors">{keyword}</span>
          <span className="text-gold text-sm" aria-hidden="true">✦</span>
        </span>
      ))}
    </Marquee>
  );
}
