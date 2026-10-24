"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { homePageContent } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowUpRight } from "lucide-react";

export function CategoryGrid() {
  const { t } = useLanguage();
  const { categories } = homePageContent;

  return (
    <Section variant="ivory" padding="default">
      <Container>
        <SectionHeading
          eyebrow="Imperial Collections"
          title="Masterpieces for Every Milestone"
          subtitle="From majestic Gujarati bridal trousseaus to everyday diamond poise, explore our signature collections."
        />

        {/* Bento Grid: 4 columns on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {categories.map((cat, idx) => {
            const isTwoCol = cat.colSpanDesktop === 2;
            return (
              <Reveal
                key={cat.id}
                variant="zoom-in"
                delay={idx * 0.08}
                className={isTwoCol ? "lg:col-span-2" : "lg:col-span-1"}
              >
                <Link
                  href={cat.href}
                  className="group relative block w-full overflow-hidden bg-obsidian-surface border border-gold/25 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Container Aspect Ratio */}
                  <div className={`relative w-full ${isTwoCol ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-square sm:aspect-[4/5]"}`}>
                    <Image
                      src={cat.image}
                      alt={t(cat.title)}
                      fill
                      sizes={isTwoCol ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Maroon Gradient Overlay from bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent group-hover:from-maroon-dark/95 group-hover:via-maroon-dark/50 transition-all duration-500" />

                    {/* Thin Gold Inner Border that fades in on hover */}
                    <div className="absolute inset-3 border border-gold/20 group-hover:border-gold/60 opacity-60 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                    {/* Centered Serif Title with Hover Lift */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center z-10 transition-transform duration-300 group-hover:-translate-y-2">
                      <span className="text-[10px] font-sans uppercase tracking-royal-wide text-gold-300 font-medium mb-1 opacity-80 group-hover:opacity-100">
                        Atelier Archive
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-ivory group-hover:text-gold transition-colors duration-300">
                        {t(cat.title)}
                      </h3>

                      {/* Micro arrow icon */}
                      <div className="mt-2 w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
