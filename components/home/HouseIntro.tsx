"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Reveal } from "@/components/ui/Reveal";
import { homePageContent } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HouseIntro() {
  const { t } = useLanguage();
  const { houseIntro } = homePageContent;

  return (
    <Section id="house-intro" variant="ivory" padding="default">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Label */}
          <Reveal variant="fade-down" delay={0.1}>
            <span className="text-[11px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-3 block">
              Estd. 1927 • Royal Goldsmiths
            </span>
          </Reveal>

          {/* Centered Serif Heading */}
          <Reveal variant="fade-up" delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-ink leading-tight mb-6 max-w-2xl">
              {t(houseIntro.heading)}
            </h2>
          </Reveal>

          {/* Paragraph 1 */}
          <Reveal variant="fade-up" delay={0.3}>
            <p className="text-base sm:text-lg font-light text-ink leading-relaxed max-w-2xl mb-8">
              {t(houseIntro.paragraph1)}
            </p>
          </Reveal>

          {/* OrnamentDivider that draws in from the centre */}
          <Reveal variant="zoom-in" delay={0.4} className="w-48 sm:w-64 my-2">
            <OrnamentDivider tone="gold" size="default" />
          </Reveal>

          {/* Paragraph 2 */}
          <Reveal variant="fade-up" delay={0.5}>
            <p className="text-base sm:text-lg font-light text-ink-muted leading-relaxed max-w-2xl mb-10">
              {t(houseIntro.paragraph2)}
            </p>
          </Reveal>

          {/* Our Story Button -> /timeline */}
          <Reveal variant="fade-up" delay={0.6}>
            <Button
              href={houseIntro.ctaHref}
              variant="solid-maroon"
              showArrow
            >
              {t(houseIntro.ctaButton)}
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
