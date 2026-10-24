"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { timelinePageContent } from "@/content/timeline";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Crown, Sparkles, CheckCircle2, Calendar } from "lucide-react";

export default function TimelinePage() {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  const { hero, narrativeOverview, milestones } = timelinePageContent;

  // Track scroll progress for the center drawing line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 20%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* 1. Cinematic Page Header */}
      <PageHeader
        breadcrumb={t(hero.breadcrumb)}
        eyebrow={t(hero.eyebrow)}
        title={t(hero.title)}
        subtitle={t(hero.subtitle)}
        bgVariant="gradient"
      />

      {/* 2. Narrative Overview & Shethji's Founding Pledge */}
      <Section variant="ivory" padding="default">
        <Container size="narrow">
          <div className="flex flex-col items-center text-center">
            <span className="text-[11px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-3">
              The Founding Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ink leading-tight mb-4">
              {t(narrativeOverview.heading)}
            </h2>
            <div className="w-40 my-3">
              <OrnamentDivider tone="gold" size="sm" />
            </div>

            <blockquote className="my-6 p-6 sm:p-8 bg-white border-l-4 border-maroon shadow-sm text-left">
              <p className="font-serif text-xl sm:text-2xl italic text-ink mb-3 leading-relaxed">
                "{t(narrativeOverview.quote)}"
              </p>
              <cite className="not-italic text-xs font-sans uppercase tracking-royal font-medium text-maroon block">
                — {t(narrativeOverview.founderName)}
              </cite>
            </blockquote>
          </div>
        </Container>
      </Section>

      {/* 3. Vertical Timeline with Center Scroll Drawing Line */}
      <Section variant="white" padding="default" className="border-t border-gold/30">
        <Container>
          <div ref={timelineRef} className="relative max-w-5xl mx-auto py-8">
            {/* Center Line for Desktop (Draws dynamically via scroll pathLength/scaleY) */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gold/20">
              <motion.div
                style={{ scaleY }}
                className="w-full h-full bg-gradient-to-b from-maroon via-gold to-maroon origin-top"
              />
            </div>

            {/* Alternating Milestone Cards */}
            <div className="space-y-16 sm:space-y-24">
              {milestones.map((ms, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col lg:flex-row items-center ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 px-0 lg:px-10">
                      <Reveal variant={isEven ? "fade-up" : "fade-up"} delay={0.1}>
                        <div className="p-6 sm:p-8 bg-ivory border border-gold/30 shadow-md relative">
                          {/* Year Badge in Gold */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-serif text-3xl sm:text-4xl font-normal text-maroon">
                              {ms.year}
                            </span>
                            <span className="px-3 py-1 bg-gold/20 border border-gold/60 text-ink text-[10px] uppercase tracking-royal font-medium">
                              {ms.badge}
                            </span>
                          </div>

                          <span className="text-[10px] font-sans uppercase tracking-royal-wide text-gold-700 block font-medium mb-2">
                            {t(ms.generation)}
                          </span>

                          <h3 className="font-serif text-2xl font-normal text-ink leading-tight mb-3">
                            {t(ms.title)}
                          </h3>

                          <p className="text-sm font-light text-ink leading-relaxed mb-4">
                            {t(ms.leadSnippet)}
                          </p>

                          <p className="text-xs font-light text-ink-muted leading-relaxed mb-5">
                            {t(ms.description)}
                          </p>

                          {/* Bullet Points */}
                          <ul className="space-y-2 pt-3 border-t border-gold/20 text-xs font-light text-ink">
                            {ms.bulletPoints.map((bp, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-maroon shrink-0 mt-1.5" />
                                <span>{t(bp)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Reveal>
                    </div>

                    {/* Centre Marker Icon on Desktop */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ivory border-2 border-gold shadow-md items-center justify-center z-10 text-maroon">
                      <Calendar className="w-4 h-4 text-maroon" />
                    </div>

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 px-0 lg:px-10 mt-6 lg:mt-0">
                      <Reveal variant="zoom-in" delay={0.2}>
                        <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-gold/30 bg-obsidian-surface shadow-xl">
                          <Image
                            src={ms.image}
                            alt={t(ms.title)}
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 px-3 py-1 bg-ivory/90 backdrop-blur-xs border border-gold/30 text-[10px] uppercase tracking-royal text-maroon font-medium">
                            {ms.year} • Baroda Archive
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA to Visit Flagship Atelier */}
          <div className="mt-20 pt-12 border-t border-gold/30 flex flex-col items-center text-center">
            <span className="text-[11px] font-sans uppercase tracking-royal text-maroon font-medium mb-2">
              A Living Tradition
            </span>
            <h3 className="font-serif text-3xl font-normal text-ink mb-3">
              Experience the Craft in Person
            </h3>
            <p className="text-sm font-light text-ink-muted max-w-md mb-6">
              Step into our historic Vadodara atelier and consult with our master goldsmiths for your family's next heirloom.
            </p>
            <Button href="/contact" variant="solid-maroon" showArrow>
              Plan Your Visit
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
