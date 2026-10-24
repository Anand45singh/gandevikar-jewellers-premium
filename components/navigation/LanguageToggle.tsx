"use client";

import React from "react";
import { useLanguage, Language } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ isScrolled }: { isScrolled: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full p-0.5 border text-[11px] font-sans tracking-wider transition-colors",
        isScrolled
          ? "border-gold/40 bg-ivory-card text-ink"
          : "border-gold/40 bg-black/30 backdrop-blur-sm text-ivory"
      )}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={cn(
          "px-2.5 py-0.5 rounded-full transition-all duration-300 font-medium",
          language === "en"
            ? "bg-maroon text-ivory shadow-xs"
            : "hover:text-gold"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("gu")}
        aria-pressed={language === "gu"}
        className={cn(
          "px-2.5 py-0.5 rounded-full transition-all duration-300 font-medium font-serif",
          language === "gu"
            ? "bg-maroon text-ivory shadow-xs"
            : "hover:text-gold"
        )}
      >
        ગુજરાતી
      </button>
    </div>
  );
}
