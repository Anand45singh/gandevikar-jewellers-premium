"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Phone, Send, MapPin, Compass } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { siteContent } from "@/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

export function Footer() {
  const { t } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-ivory text-ink border-t border-gold/30 overflow-hidden">
      {/* Top Split Section */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Invitation, Address, Directions CTA, Social Pills */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-[11px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-2">
              Vadodara Flagship Atelier
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-ink leading-tight mb-4">
              Come see it for yourself.
            </h2>

            {/* Gold bar accent */}
            <div className="w-20 h-0.5 bg-gold mb-6" />

            <div className="flex items-start gap-3 text-sm font-light text-ink-muted max-w-lg mb-8 leading-relaxed">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-ink">{t(siteContent.name)}</p>
                <p>{t(siteContent.address.full)}</p>
                <p className="mt-1 text-xs text-ink-muted">
                  {t(siteContent.hours.days)}: {t(siteContent.hours.timing)} ({t(siteContent.hours.closed)})
                </p>
              </div>
            </div>

            {/* GET DIRECTIONS maroon button */}
            <a
              href={siteContent.geo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-maroon text-ivory px-7 py-3.5 text-xs font-sans font-medium uppercase tracking-royal-wide hover:bg-maroon-light shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 mb-10"
            >
              <Compass className="w-4 h-4 text-gold-300" />
              <span>Get Directions</span>
            </a>

            {/* CONNECT WITH US ON Pills */}
            <div className="w-full pt-4 border-t border-gold/20">
              <span className="text-[10px] font-sans uppercase tracking-royal-wide text-ink-muted block mb-4 font-medium">
                Connect With Us On
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* Instagram Pill */}
                <a
                  href={siteContent.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-white/60 text-xs font-medium text-ink hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:border-transparent transition-all duration-300 shadow-xs"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-600 group-hover:text-white transition-colors" />
                  <span>Instagram</span>
                </a>

                {/* WhatsApp Channel Pill */}
                <a
                  href={siteContent.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-white/60 text-xs font-medium text-ink hover:text-white hover:bg-emerald-600 hover:border-transparent transition-all duration-300 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white transition-colors" />
                  <span>WhatsApp</span>
                </a>

                {/* YouTube Pill */}
                <a
                  href={siteContent.socialLinks.youtube || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-white/60 text-xs font-medium text-ink hover:text-white hover:bg-red-600 hover:border-transparent transition-all duration-300 shadow-xs"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-red-600 group-hover:text-white transition-colors" />
                  <span>YouTube</span>
                </a>

                {/* Phone Hotline Pill */}
                <a
                  href={`tel:${siteContent.phone}`}
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-white/60 text-xs font-medium text-ink hover:text-white hover:bg-maroon hover:border-transparent transition-all duration-300 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-maroon group-hover:text-white transition-colors" />
                  <span>{siteContent.displayPhone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Store Image with subtle frame & depth */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-gold/30 bg-obsidian-surface shadow-xl">
              <Image
                src="/images/store.webp"
                alt="Girishbhai Gandevikar Jewellers Flagship Store Vadodara"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-ivory/90 backdrop-blur-xs border border-gold/40 text-ink">
                <span className="text-[10px] uppercase tracking-royal text-maroon block font-medium">
                  Historic Mandvi Bazaars
                </span>
                <span className="font-serif text-base block font-normal text-ink">
                  Atelier & Heritage Salon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Royal Maroon Band */}
      <div className="bg-maroon text-ivory py-6 sm:py-8 border-y border-gold/30">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Mark logo left */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center bg-maroon-dark text-gold">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold" aria-hidden="true">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                <circle cx="12" cy="12" r="2" fill="#FAF6EB" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-sm tracking-wider uppercase text-ivory">
                {t(siteContent.name)}
              </span>
              <span className="text-[9px] uppercase tracking-royal-wide text-gold-200">
                ROYAL GOLDSMITHS • GAEKWAD DYNASTY
              </span>
            </div>
          </div>

          {/* Inverted motif centre */}
          <div className="hidden md:flex items-center justify-center text-gold">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gold" aria-hidden="true">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>

          {/* Slogan right */}
          <div className="text-center md:text-right">
            <p className="font-serif text-base sm:text-lg tracking-royal uppercase font-normal text-ivory">
              SINCE GENERATIONS.
            </p>
            <p className="font-serif text-base sm:text-lg tracking-royal uppercase font-normal text-gold-200">
              FOR GENERATIONS.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Line */}
      <div className="bg-ivory py-6 text-ink-muted text-xs">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="tracking-royal uppercase text-[11px]">
            © {new Date().getFullYear()} {t(siteContent.name)}. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px] tracking-royal uppercase">
            <Link href="/privacy" className="hover:text-maroon transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-maroon transition-colors">Terms</Link>
            <Link href="/faq" className="hover:text-maroon transition-colors">Hallmark & Certification</Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-20 md:bottom-8 right-6 z-40 p-2.5 rounded-full bg-ivory border border-gold/60 text-maroon hover:bg-maroon hover:text-ivory shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
}
