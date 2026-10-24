"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "gu";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (content: { en: string; gu?: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Read persisted language on mount
    try {
      const saved = localStorage.getItem("ggj_language") as Language | null;
      if (saved === "en" || saved === "gu") {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Ignore localStorage errors (e.g. private mode)
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("ggj_language", lang);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  };

  /**
   * Helper that returns Gujarati if available and selected;
   * otherwise cleanly falls back to English according to client rules.
   */
  const t = (content: { en: string; gu?: string }): string => {
    if (language === "gu" && content.gu && content.gu.trim().length > 0) {
      return content.gu;
    }
    return content.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
