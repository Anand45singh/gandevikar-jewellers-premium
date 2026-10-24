"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { homePageContent } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // If reduced motion is requested, do not autoplay video
    if (prefersReduced && videoRef.current) {
      videoRef.current.pause();
    }
  }, [prefersReduced]);

  const scrollToNextSection = () => {
    const nextElem = document.getElementById("house-intro");
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[650px] w-full overflow-hidden bg-obsidian flex items-end justify-center">
      {/* Background Media Layer with Ken Burns fallback */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Poster Image with slow Ken Burns effect */}
        <div className="relative w-full h-full">
          <Image
            src={homePageContent.hero.poster}
            alt="Girishbhai Gandevikar Jewellers Royal Collection"
            fill
            priority
            sizes="100vw"
            className={`object-cover transition-transform duration-10000 ease-out ${
              prefersReduced ? "scale-100" : "scale-105 animate-[kenburns_24s_ease-out_infinite_alternate]"
            }`}
          />
        </div>

        {/* Video layer if reduced-motion is not requested and no load error */}
        {!prefersReduced && !videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={homePageContent.hero.poster}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={homePageContent.hero.videoWebm} type="video/webm" />
            <source src={homePageContent.hero.videoMp4} type="video/mp4" />
          </video>
        )}

        {/* Dark Luxury Gradient Overlays: black/70 -> transparent -> black/80 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/85 pointer-events-none" />
      </div>

      {/* Subtle hairline frame */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-gold/20 pointer-events-none z-10" />

      {/* Bottom-Centred Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 pb-20 sm:pb-24 text-center flex flex-col items-center">
        {/* Small label */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold-300 font-medium mb-3"
        >
          {t(homePageContent.hero.label)}
        </motion.span>

        {/* H1 Heading (Large, Serif, Staggered Lines) */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-ivory leading-tight sm:leading-snug max-w-3xl mb-6 drop-shadow-md"
        >
          {t(homePageContent.hero.title)}
        </motion.h1>

        {/* View More Underlined Link */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href={homePageContent.hero.href}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold hover:text-white transition-colors duration-300 relative py-1 border-b border-gold/50 hover:border-white"
          >
            <span>{t(homePageContent.hero.viewMore)}</span>
          </Link>
        </motion.div>

        {/* Animated Scroll Down Indicator */}
        <motion.button
          type="button"
          onClick={scrollToNextSection}
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute -bottom-12 sm:-bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center text-gold/70 hover:text-gold transition-colors focus-visible:outline-none"
        >
          <span className="text-[9px] uppercase tracking-royal mb-1">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
