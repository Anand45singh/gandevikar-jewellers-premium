"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { servicesPageContent, GalleryItem } from "@/content/services";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { EnquiryModal } from "@/components/services/EnquiryModal";
import {
  Crown,
  Sparkles,
  ShieldCheck,
  Gem,
  Scale,
  HeartHandshake,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Gift,
  ArrowUpRight,
} from "lucide-react";

export default function ServicesPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("wedding");
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState("");

  // Gallery Filter & Lightbox state
  const [galleryFilter, setGalleryFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const { hero, categories, suvarnaScheme, coreServices, gallery } = servicesPageContent;

  const openEnquiry = (subject: string) => {
    setEnquirySubject(subject);
    setEnquiryOpen(true);
  };

  const filteredGallery =
    galleryFilter === "all"
      ? gallery
      : gallery.filter((item) => item.category === galleryFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Crown": return <Crown className="w-5 h-5 text-gold" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-gold" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-gold" />;
      case "Gem": return <Gem className="w-5 h-5 text-gold" />;
      case "Scale": return <Scale className="w-5 h-5 text-gold" />;
      case "HeartHandshake": return <HeartHandshake className="w-5 h-5 text-gold" />;
      default: return <Sparkles className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <>
      {/* 1. Cinematic Page Header */}
      <PageHeader
        breadcrumb={t(hero.breadcrumb)}
        eyebrow="Estd. 1927 • Vadodara Atelier"
        title={t(hero.title)}
        subtitle={t(hero.subtitle)}
        bgVariant="gradient"
      />

      {/* 2. Anchored Categories Layout with Sticky Side-Nav / Mobile Horizontal Chips */}
      <Section variant="ivory" padding="default">
        <Container>
          {/* Mobile Horizontal Sticky Chip Navigation */}
          <div className="lg:hidden sticky top-20 z-30 bg-ivory/95 backdrop-blur-md border-y border-gold/30 py-3 -mx-4 px-4 mb-8 overflow-x-auto no-scrollbar flex items-center space-x-2">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-3.5 py-1.5 rounded-full text-[11px] font-sans font-medium uppercase tracking-royal whitespace-nowrap border border-gold/40 bg-white/70 text-ink active:bg-maroon active:text-ivory"
              >
                {t(cat.name)}
              </a>
            ))}
            <a
              href="#gold-scheme"
              className="px-3.5 py-1.5 rounded-full text-[11px] font-sans font-medium uppercase tracking-royal whitespace-nowrap bg-maroon text-ivory shadow-xs"
            >
              Suvarna Scheme
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Desktop Sticky Side-Nav (Scroll-Spy) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-36 bg-ivory-card border border-gold/30 p-5 shadow-sm">
              <span className="text-[10px] font-sans uppercase tracking-royal-wide text-maroon block font-medium mb-3">
                Jewellery Portfolio
              </span>
              <ul className="space-y-1.5 text-xs font-sans uppercase tracking-royal">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <a
                      href={`#${cat.id}`}
                      className="block px-3 py-2 text-ink hover:text-maroon hover:bg-gold/10 transition-colors border-l-2 border-transparent hover:border-maroon"
                    >
                      {t(cat.name)}
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t border-gold/20">
                  <a
                    href="#gold-scheme"
                    className="block px-3 py-2 text-maroon font-semibold hover:bg-gold/15 transition-colors border-l-2 border-maroon"
                  >
                    Suvarna Scheme (11+1)
                  </a>
                </li>
                <li>
                  <a
                    href="#core-services"
                    className="block px-3 py-2 text-ink hover:text-maroon transition-colors"
                  >
                    Atelier Services
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="block px-3 py-2 text-ink hover:text-maroon transition-colors"
                  >
                    Imperial Gallery
                  </a>
                </li>
              </ul>
            </aside>

            {/* Alternating Category Content Sections */}
            <div className="lg:col-span-9 space-y-16 sm:space-y-24">
              {categories.map((cat, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <article
                    key={cat.id}
                    id={cat.id}
                    className="scroll-mt-36 p-6 sm:p-8 bg-white border border-gold/25 shadow-sm"
                  >
                    <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                      {/* Image Column */}
                      <div className={`md:col-span-6 relative aspect-[4/3] sm:aspect-square overflow-hidden border border-gold/30 bg-obsidian-surface ${isEven ? "" : "md:order-2"}`}>
                        <Image
                          src={cat.image}
                          alt={t(cat.title)}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 px-3 py-1 bg-ivory/90 backdrop-blur-xs border border-gold/30 text-[10px] uppercase tracking-royal text-maroon font-medium">
                          {t(cat.eyebrow)}
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className={`md:col-span-6 flex flex-col items-start ${isEven ? "" : "md:order-1"}`}>
                        <span className="text-[10px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-1.5">
                          {t(cat.eyebrow)}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink leading-tight mb-3">
                          {t(cat.title)}
                        </h3>
                        <p className="text-sm font-light text-ink-muted leading-relaxed mb-5">
                          {t(cat.description)}
                        </p>

                        {/* Bullet Details */}
                        <ul className="space-y-2 mb-6 w-full text-xs text-ink">
                          {cat.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                              <span className="font-light">{t(detail)}</span>
                            </li>
                          ))}
                        </ul>

                        <Button
                          variant="solid-maroon"
                          size="sm"
                          showArrow
                          onClick={() => openEnquiry(cat.enquiryName)}
                        >
                          Enquire for {t(cat.name)}
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. #gold-scheme: Suvarna Vruddhi Yojana (11+1) Full Details */}
      <Section id="gold-scheme" variant="white" padding="default" className="scroll-mt-24 border-t border-gold/30">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <span className="text-[11px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-2">
              {t(suvarnaScheme.eyebrow)}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-ink mb-3">
              {t(suvarnaScheme.title)}
            </h2>
            <div className="w-40 sm:w-48 mb-6">
              <OrnamentDivider tone="gold" size="sm" />
            </div>
            <p className="text-base sm:text-lg font-light text-ink-muted leading-relaxed max-w-2xl mb-12">
              {t(suvarnaScheme.description)}
            </p>

            {/* How It Works 4-Step Architecture */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left mb-12">
              {suvarnaScheme.howItWorks.map((st) => (
                <div key={st.step} className="p-6 bg-ivory border border-gold/30 relative flex flex-col justify-between">
                  <div>
                    <span className="font-serif text-3xl text-gold-600 block mb-3">0{st.step}</span>
                    <h4 className="font-serif text-lg font-normal text-ink mb-2">{t(st.title)}</h4>
                    <p className="text-xs font-light text-ink-muted leading-relaxed">{t(st.desc)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl text-left bg-ivory-card p-6 border border-gold/30 mb-10">
              {suvarnaScheme.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-ink font-light">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t(h)}</span>
                </div>
              ))}
            </div>

            <Button
              variant="solid-maroon"
              size="lg"
              onClick={() => openEnquiry("Suvarna Vruddhi Yojana (11+1 Scheme) Enrolment")}
            >
              Enquire / Enrol in Scheme
            </Button>
          </div>
        </Container>
      </Section>

      {/* 4. Verified Atelier Core Services List */}
      <Section id="core-services" variant="ivory" padding="default" className="border-t border-gold/30 scroll-mt-24">
        <Container>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-[11px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-2">
              Master Karigari
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ink">
              Signature Atelier Services
            </h2>
            <div className="w-36 my-3">
              <OrnamentDivider tone="gold" size="sm" />
            </div>
            <p className="text-sm sm:text-base font-light text-ink-muted max-w-xl">
              Strictly preserved royal techniques and modern gemological certifications provided at our Vadodara showroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreServices.map((srv) => (
              <div
                key={srv.id}
                className="p-6 sm:p-7 bg-white border border-gold/25 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-gold/10 mb-4">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <span className="text-[10px] font-sans uppercase tracking-royal text-maroon font-medium block mb-1">
                    {t(srv.subtitle)}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-ink mb-2.5">
                    {t(srv.title)}
                  </h3>
                  <p className="text-xs font-light text-ink-muted leading-relaxed">
                    {t(srv.description)}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-gold/15">
                  <button
                    type="button"
                    onClick={() => openEnquiry(t(srv.title))}
                    className="text-xs uppercase tracking-royal font-medium text-maroon hover:text-maroon-dark inline-flex items-center gap-1"
                  >
                    <span>Inquire Service</span>
                    <ArrowUpRight className="w-3 h-3 text-gold" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Image Gallery with Lightbox & Category Filter Tabs */}
      <Section id="gallery" variant="white" padding="default" className="border-t border-gold/30 scroll-mt-24">
        <Container>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-[11px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-2">
              Curated Heirlooms
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ink">
              Masterpiece Gallery
            </h2>
            <div className="w-36 my-3">
              <OrnamentDivider tone="gold" size="sm" />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {[
                { id: "all", label: "All Collections" },
                { id: "wedding", label: "Wedding" },
                { id: "engagement", label: "Engagement" },
                { id: "everyday", label: "Everyday" },
                { id: "festive", label: "Festive" },
                { id: "mens", label: "Men's" },
                { id: "polki", label: "Polki" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setGalleryFilter(tab.id)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-royal transition-all duration-300 border ${
                    galleryFilter === tab.id
                      ? "bg-maroon text-ivory border-maroon shadow-xs"
                      : "bg-ivory border-gold/30 text-ink hover:border-gold"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] sm:aspect-square overflow-hidden bg-obsidian-surface border border-gold/25 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={item.image}
                  alt={t(item.title)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-2.5 border border-gold/20 group-hover:border-gold/60 transition-colors pointer-events-none" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-ivory">
                  <span className="text-[10px] uppercase tracking-royal text-gold font-medium mb-1">
                    {t(item.specs)}
                  </span>
                  <h4 className="font-serif text-lg font-normal tracking-wide text-ivory group-hover:text-gold transition-colors">
                    {t(item.title)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lightbox Modal with Keyboard + Navigation */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-obsidian/95 backdrop-blur-md"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-2 text-ivory hover:text-gold transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1))
            }
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-ivory hover:text-gold transition-colors z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0))
            }
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-ivory hover:text-gold transition-colors z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image & Caption */}
          <div className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] border border-gold/40 shadow-2xl">
              <Image
                src={filteredGallery[lightboxIndex].image}
                alt={t(filteredGallery[lightboxIndex].title)}
                fill
                className="object-contain bg-obsidian"
              />
            </div>
            <div className="mt-4 text-center text-ivory">
              <h3 className="font-serif text-2xl font-normal text-gold-300">
                {t(filteredGallery[lightboxIndex].title)}
              </h3>
              <p className="text-xs font-light text-ivory/80 mt-1">
                {t(filteredGallery[lightboxIndex].specs)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultInterest={enquirySubject}
      />
    </>
  );
}
