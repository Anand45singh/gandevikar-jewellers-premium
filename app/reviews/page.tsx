"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { reviewsPageContent } from "@/content/reviews";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Star, ShieldCheck, ArrowUpRight, MessageSquare, Quote } from "lucide-react";

export default function ReviewsPage() {
  const { t } = useLanguage();
  const { summary, hero, reviews } = reviewsPageContent;

  // Animated Count-Up for Rating
  const [ratingCount, setRatingCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = summary.averageRating;
    const duration = 1200;
    const stepTime = 30;
    const stepValue = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setRatingCount(end);
        clearInterval(timer);
      } else {
        setRatingCount(parseFloat(start.toFixed(1)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [summary.averageRating]);

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

      {/* 2. Rating Hero Summary Box with Animated Count-Up */}
      <Section variant="ivory" padding="default">
        <Container>
          <div className="max-w-4xl mx-auto bg-white border border-gold/30 shadow-lg p-8 sm:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-center md:text-left">
              {/* Left Column: Big Animated Score */}
              <div className="md:col-span-5 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gold/20 pb-6 md:pb-0 md:pr-8">
                <span className="text-[10px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-1">
                  Google Maps Rating
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-6xl sm:text-7xl font-normal text-ink">
                    {ratingCount.toFixed(1)}
                  </span>
                  <span className="font-serif text-2xl text-ink-muted">/ 5.0</span>
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-gold mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                <span className="text-xs font-light text-ink-muted">
                  Based on <strong>{summary.displayCount}</strong> verified patron reviews
                </span>
              </div>

              {/* Right Column: Breakdown & Google Link */}
              <div className="md:col-span-7 flex flex-col items-center md:items-start justify-between h-full">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-ink mb-2">
                    Vadodara's Most Cherished Jeweller
                  </h3>
                  <p className="text-xs font-light text-ink-muted leading-relaxed mb-6">
                    "Families in Vadodara have trusted Gandevikar Jewellers with their pure gold, bridal celebrations, and cherished heirloom redesigns since 1927."
                  </p>
                </div>

                <a
                  href={summary.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-maroon text-ivory text-xs uppercase tracking-royal font-medium hover:bg-maroon-light shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span>Read all on Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 text-gold-300" />
                </a>
              </div>
            </div>
          </div>

          {/* 3. Masonry / Grid Reviews Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((rev, idx) => (
              <Reveal key={rev.id} variant="fade-up" delay={idx * 0.08}>
                <div className="p-6 sm:p-8 bg-white border border-gold/25 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative">
                  <div>
                    {/* Top Row: Stars & Occasion Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-gold">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                      {rev.occasion && (
                        <span className="text-[10px] font-sans uppercase tracking-royal text-maroon bg-gold/15 px-2 py-0.5 font-medium">
                          {rev.occasion}
                        </span>
                      )}
                    </div>

                    {/* Review Text */}
                    <p className="text-sm font-light text-ink leading-relaxed mb-6 italic">
                      "{t(rev.text)}"
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-base font-normal text-ink">
                        {rev.name}
                      </h4>
                      <span className="text-[11px] text-ink-muted">
                        {rev.location} • {rev.date}
                      </span>
                    </div>
                    {rev.verified && (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 4. Leave A Review Invitation */}
          <div className="mt-16 text-center">
            <p className="text-sm font-light text-ink-muted mb-4">
              Have you visited our Vadodara atelier recently? We would be honored by your reflection.
            </p>
            <a
              href={summary.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-royal font-medium text-maroon hover:text-maroon-dark border-b border-maroon/40 hover:border-maroon pb-0.5"
            >
              <span>Write a Google Review for Girishbhai Gandevikar Jewellers</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
