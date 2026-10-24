"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { homePageContent } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function StickyScrollStory() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Desktop transforms across 400vh scroll
  // Image 1: Bottom left
  const img1Y = useTransform(scrollYProgress, [0, 0.45], [400, 0]);
  const img1Opacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const img1Rotate = useTransform(scrollYProgress, [0, 0.5], [-8, -3]);

  // Image 2: Top right
  const img2Y = useTransform(scrollYProgress, [0.15, 0.6], [500, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const img2Rotate = useTransform(scrollYProgress, [0.15, 0.6], [10, 4]);

  // Image 3: Bottom right
  const img3Y = useTransform(scrollYProgress, [0.3, 0.8], [600, 0]);
  const img3Opacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const img3Rotate = useTransform(scrollYProgress, [0.3, 0.8], [-10, -2]);

  // Image 4: Top left
  const img4Y = useTransform(scrollYProgress, [0.45, 0.95], [650, 0]);
  const img4Opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const img4Rotate = useTransform(scrollYProgress, [0.45, 0.95], [8, 3]);

  // Centre Text Fade-In & Hold
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.85, 1], [0.2, 1, 1, 0.8]);
  const textScale = useTransform(scrollYProgress, [0.1, 0.4], [0.94, 1]);

  const { stickyStory } = homePageContent;

  return (
    <section ref={targetRef} className="relative h-[280vh] sm:h-[400vh] bg-ivory-card border-y border-gold/30">
      {/* Sticky 100dvh Stage */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        {/* Subtle royal background watermark pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#d7b46a_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

        {/* Ambient Floating Images on Desktop Stage */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {/* Image 1: Bottom Left */}
          <motion.div
            style={{
              y: prefersReduced ? 0 : img1Y,
              opacity: prefersReduced ? 1 : img1Opacity,
              rotate: prefersReduced ? -3 : img1Rotate,
            }}
            className="absolute left-[5%] bottom-[12%] w-56 xl:w-64 aspect-[3/4] p-2 bg-ivory shadow-xl border border-gold/40"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={stickyStory.images[0].src}
                alt={stickyStory.images[0].alt}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Image 2: Top Right */}
          <motion.div
            style={{
              y: prefersReduced ? 0 : img2Y,
              opacity: prefersReduced ? 1 : img2Opacity,
              rotate: prefersReduced ? 4 : img2Rotate,
            }}
            className="absolute right-[6%] top-[14%] w-60 xl:w-72 aspect-[4/3] p-2 bg-ivory shadow-xl border border-gold/40"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={stickyStory.images[1].src}
                alt={stickyStory.images[1].alt}
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Image 3: Bottom Right */}
          <motion.div
            style={{
              y: prefersReduced ? 0 : img3Y,
              opacity: prefersReduced ? 1 : img3Opacity,
              rotate: prefersReduced ? -2 : img3Rotate,
            }}
            className="absolute right-[8%] bottom-[10%] w-56 xl:w-64 aspect-[3/4] p-2 bg-ivory shadow-xl border border-gold/40"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={stickyStory.images[2].src}
                alt={stickyStory.images[2].alt}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Image 4: Top Left */}
          <motion.div
            style={{
              y: prefersReduced ? 0 : img4Y,
              opacity: prefersReduced ? 1 : img4Opacity,
              rotate: prefersReduced ? 3 : img4Rotate,
            }}
            className="absolute left-[7%] top-[12%] w-60 xl:w-72 aspect-[4/3] p-2 bg-ivory shadow-xl border border-gold/40"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={stickyStory.images[3].src}
                alt={stickyStory.images[3].alt}
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Central Narrative Block */}
        <motion.div
          style={{
            opacity: prefersReduced ? 1 : textOpacity,
            scale: prefersReduced ? 1 : textScale,
          }}
          className="relative z-10 max-w-xl mx-auto px-6 text-center flex flex-col items-center bg-ivory/85 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-6 rounded"
        >
          <span className="text-[11px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-3">
            {t(stickyStory.eyebrow)}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-ink leading-tight mb-4">
            {t(stickyStory.title)}
          </h2>

          <div className="w-36 mx-auto mb-4">
            <OrnamentDivider tone="gold" size="sm" className="my-2" />
          </div>

          <p className="text-sm sm:text-base font-light text-ink-muted leading-relaxed mb-8 max-w-lg">
            {t(stickyStory.description)}
          </p>

          <Link
            href={stickyStory.ctaHref}
            className="group relative inline-flex items-center justify-center font-sans uppercase font-medium tracking-royal-wide text-xs px-7 py-3.5 bg-maroon text-ivory hover:bg-maroon-light transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>{t(stickyStory.cta)}</span>
          </Link>
        </motion.div>

        {/* Mobile Gallery Strips below text on small screens without overlapping */}
        <div className="lg:hidden absolute bottom-4 left-4 right-4 flex justify-center gap-3 pointer-events-none opacity-40">
          <div className="relative w-20 h-24 border border-gold/40 overflow-hidden shadow">
            <Image src={stickyStory.images[0].src} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          </div>
          <div className="relative w-20 h-24 border border-gold/40 overflow-hidden shadow">
            <Image src={stickyStory.images[3].src} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
