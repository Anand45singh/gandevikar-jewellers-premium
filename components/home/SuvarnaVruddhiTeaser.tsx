"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Reveal } from "@/components/ui/Reveal";
import { homePageContent } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Gift, ShieldCheck } from "lucide-react";

export function SuvarnaVruddhiTeaser() {
  const { t } = useLanguage();
  const { suvarnaScheme } = homePageContent;
  const stepperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepperRef, { once: true, margin: "-80px" });

  return (
    <Section variant="white" padding="default">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow */}
          <Reveal variant="fade-down">
            <span className="text-[11px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-2.5 block">
              {t(suvarnaScheme.eyebrow)}
            </span>
          </Reveal>

          {/* Title */}
          <Reveal variant="fade-up" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-ink leading-tight mb-4">
              {t(suvarnaScheme.title)}
            </h2>
          </Reveal>

          {/* Divider */}
          <Reveal variant="zoom-in" delay={0.2} className="w-40 sm:w-48 mb-6">
            <OrnamentDivider tone="gold" size="sm" />
          </Reveal>

          {/* Description */}
          <Reveal variant="fade-up" delay={0.3}>
            <p className="text-base sm:text-lg font-light text-ink-muted leading-relaxed mb-10 max-w-2xl">
              {t(suvarnaScheme.description)}
            </p>
          </Reveal>

          {/* 11+1 Visual Stepper */}
          <div ref={stepperRef} className="w-full max-w-2xl bg-ivory p-6 sm:p-8 border border-gold/30 shadow-sm mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-royal font-medium text-ink flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>11 Customer Monthly Deposits</span>
              </span>
              <span className="text-xs uppercase tracking-royal font-semibold text-maroon flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-maroon" />
                <span>12th Month On Us</span>
              </span>
            </div>

            {/* Stepper Dots: 11 Gold Dots + 1 Highlighted Maroon/Gold Bonus Dot */}
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-3 sm:gap-2 items-center justify-items-center py-2">
              {Array.from({ length: 11 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-[10px] font-sans font-medium text-ink shadow-xs">
                    M{i + 1}
                  </div>
                  <span className="text-[9px] text-ink-muted font-light">Paid</span>
                </motion.div>
              ))}

              {/* 12th Month: Highlighted Bonus Dot contributed by Store */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1.1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 0.65, duration: 0.4, type: "spring" }}
                className="flex flex-col items-center gap-1"
              >
                <div className="relative w-9 h-9 rounded-full bg-maroon text-ivory border-2 border-gold flex items-center justify-center text-[10px] font-sans font-bold shadow-md">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-30" />
                  +1
                </div>
                <span className="text-[9px] text-maroon font-semibold uppercase tracking-wider">Free</span>
              </motion.div>
            </div>
          </div>

          {/* Banner Image linking to /services#gold-scheme */}
          <Reveal variant="zoom-in" delay={0.4} className="w-full">
            <Link
              href={suvarnaScheme.ctaHref}
              className="group relative block w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden border border-gold/30 bg-obsidian-surface shadow-xl cursor-pointer"
            >
              <Image
                src={suvarnaScheme.image}
                alt="Suvarna Vruddhi Yojana Gold Savings Scheme"
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent group-hover:from-maroon-dark/90 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-ivory text-left">
                <span className="text-xs uppercase tracking-royal-wide text-gold-300 font-medium mb-1">
                  Disciplined Accumulation
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ivory group-hover:text-gold transition-colors">
                      Suvarna Vruddhi Yojana
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-ivory/80 max-w-lg mt-1">
                      Start with flexible monthly instalments and enjoy store contributions towards your heirloom jewelry.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-maroon text-ivory text-xs uppercase tracking-royal font-medium shrink-0 border border-gold/40 group-hover:bg-gold group-hover:text-obsidian group-hover:border-gold transition-colors">
                    {t(suvarnaScheme.cta)}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
