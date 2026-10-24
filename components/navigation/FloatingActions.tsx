"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, Compass, Send } from "lucide-react";
import { siteContent } from "@/content/site";

export function FloatingActions() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top of page scroll progress bar in gold */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-gold via-gold-400 to-maroon transition-all duration-75 ease-out shadow-xs"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating WhatsApp Button (Bottom-Right) */}
      <div className="fixed bottom-20 md:bottom-8 right-6 z-40 hidden md:block">
        <a
          href={siteContent.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-700 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-25" />
          <Send className="w-5 h-5 -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-14 whitespace-nowrap bg-obsidian text-ivory text-[11px] font-sans tracking-wider py-1 px-2.5 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
            Chat with Royal Concierge
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Call / WhatsApp / Directions) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-ivory/95 backdrop-blur-md border-t border-gold/30 shadow-2xl py-2 px-3">
        <div className="grid grid-cols-3 gap-2 text-center">
          <a
            href={`tel:${siteContent.phone}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-ivory-card border border-gold/30 text-ink active:bg-gold/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-maroon mb-0.5" />
            <span className="text-[10px] font-sans font-medium uppercase tracking-wider">Call Store</span>
          </a>

          <a
            href={siteContent.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-maroon text-ivory shadow-xs active:bg-maroon-dark transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-gold mb-0.5" />
            <span className="text-[10px] font-sans font-medium uppercase tracking-wider">WhatsApp</span>
          </a>

          <a
            href={siteContent.geo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-ivory-card border border-gold/30 text-ink active:bg-gold/20 transition-colors"
          >
            <Compass className="w-4 h-4 text-maroon mb-0.5" />
            <span className="text-[10px] font-sans font-medium uppercase tracking-wider">Directions</span>
          </a>
        </div>
      </div>
    </>
  );
}
