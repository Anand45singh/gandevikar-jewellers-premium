"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { amyaPageContent, AmyaProduct } from "@/content/amya";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { MessageCircle, ShieldCheck, Sparkles, Truck, CheckCircle2 } from "lucide-react";

export default function AmyaPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const { hero, howItWorks, collections } = amyaPageContent;

  const filteredProducts =
    activeCategory === "all"
      ? collections
      : collections.filter((item) => item.category === activeCategory);

  const getWhatsAppEnquiryUrl = (productName: string) => {
    const text = encodeURIComponent(
      `Namaste, I am interested in ordering the AMYA design: "${productName}". Please share details regarding sizing, pricing, and dispatch.`
    );
    return `https://wa.me/919925579633?text=${text}`;
  };

  return (
    <>
      {/* 1. Contemporary Page Header with lighter elevated sub-brand aesthetic */}
      <PageHeader
        breadcrumb="Home / AMYA Everyday"
        eyebrow={t(hero.eyebrow)}
        title={t(hero.title)}
        subtitle={t(hero.tagline)}
        bgVariant="gradient"
      />

      {/* 2. Sub-Brand Philosophy & Direct Instagram Integration */}
      <Section variant="ivory" padding="default">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <span className="text-[11px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-3">
              Modern Minimalist Luxuries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ink leading-tight mb-4">
              Designed for Daily Radiance
            </h2>
            <div className="w-36 mb-6">
              <OrnamentDivider tone="gold" size="sm" />
            </div>
            <p className="text-base sm:text-lg font-light text-ink-muted leading-relaxed mb-8">
              {t(hero.description)}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={hero.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-gold bg-white text-ink hover:text-maroon text-xs uppercase tracking-royal font-medium shadow-sm hover:shadow-md transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                <span>Follow {hero.instagramHandle}</span>
              </a>

              <a
                href="https://wa.me/919925579633?text=Namaste%2C%20I%20would%20like%20to%20view%20the%20latest%20AMYA%20catalogue."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-maroon text-ivory text-xs uppercase tracking-royal font-medium hover:bg-maroon-light shadow-sm hover:shadow-md transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                <span>Request Digital Lookbook</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Product Curations with Image Swap Hover State */}
      <Section variant="white" padding="default" className="border-t border-gold/30">
        <Container>
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: "all", label: "All Curations" },
              { id: "rings", label: "Rings & Bands" },
              { id: "earrings", label: "Earrings & Drops" },
              { id: "pendants", label: "Pendants & Talismans" },
              { id: "necklaces", label: "925 Silver Chains" },
              { id: "bracelets", label: "Cuffs & Bangles" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-royal transition-all duration-300 border ${
                  activeCategory === tab.id
                    ? "bg-maroon text-ivory border-maroon shadow-xs font-semibold"
                    : "bg-ivory border-gold/30 text-ink hover:border-gold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod, idx) => (
              <Reveal key={prod.id} variant="fade-up" delay={idx * 0.08}>
                <div className="group flex flex-col bg-ivory border border-gold/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  {/* Image with Image Swap on Hover */}
                  <div className="relative aspect-square overflow-hidden bg-obsidian-surface cursor-pointer">
                    {/* Primary Image */}
                    <Image
                      src={prod.image}
                      alt={t(prod.name)}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />

                    {/* Secondary/Hover Image */}
                    <Image
                      src={prod.hoverImage}
                      alt={`${t(prod.name)} Alternate View`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105"
                    />

                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-ivory/90 backdrop-blur-xs border border-gold/30 text-[9px] uppercase tracking-royal text-maroon font-medium">
                      AMYA • 925 / 18K
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] font-sans uppercase tracking-royal-wide text-gold-600 block mb-1">
                        {t(prod.material)}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-ink mb-2">
                        {t(prod.name)}
                      </h3>
                      <p className="text-xs font-light text-ink-muted leading-relaxed mb-6">
                        {t(prod.shortCopy)}
                      </p>
                    </div>

                    {/* Prefilled Enquire on WhatsApp button */}
                    <a
                      href={getWhatsAppEnquiryUrl(t(prod.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white border border-maroon text-maroon hover:bg-maroon hover:text-ivory text-xs font-sans uppercase tracking-royal font-medium transition-colors duration-300 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. How It Works (Direct-To-Consumer & Insured Delivery) */}
      <Section variant="ivory" padding="default" className="border-t border-gold/30">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-12">
            <span className="text-[11px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-2">
              Boutique Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink">
              {t(howItWorks.title)}
            </h2>
            <div className="w-32 my-3">
              <OrnamentDivider tone="gold" size="sm" />
            </div>
            <p className="text-sm font-light text-ink-muted leading-relaxed">
              {t(howItWorks.description)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {howItWorks.steps.map((st, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 bg-white border border-gold/25 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl text-gold mb-4 block font-normal">
                    {st.number}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-ink mb-2.5">
                    {t(st.title)}
                  </h3>
                  <p className="text-xs font-light text-ink-muted leading-relaxed">
                    {t(st.desc)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
