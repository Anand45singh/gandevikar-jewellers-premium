import React from "react";
import Link from "next/link";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  breadcrumb: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bgVariant?: "maroon" | "obsidian" | "gradient";
}

export function PageHeader({
  breadcrumb,
  eyebrow,
  title,
  subtitle,
  bgVariant = "maroon",
}: PageHeaderProps) {
  const bgClasses = {
    maroon: "bg-gradient-to-b from-maroon-dark via-maroon to-obsidian text-ivory",
    obsidian: "bg-gradient-to-b from-obsidian-surface via-obsidian to-black text-ivory",
    gradient: "bg-gradient-to-b from-black/85 via-maroon-dark/90 to-obsidian text-ivory",
  };

  return (
    <section className={`relative py-16 sm:py-24 border-b border-gold/30 overflow-hidden ${bgClasses[bgVariant]}`}>
      {/* Subtle gold watermark pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d7b46a_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      {/* Hairline frame */}
      <div className="absolute inset-4 sm:inset-6 border border-gold/20 pointer-events-none" />

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-3 text-[11px] font-sans uppercase tracking-royal text-gold-300">
            <span>{breadcrumb}</span>
          </nav>

          {/* Eyebrow */}
          {eyebrow && (
            <span className="text-[10px] font-sans uppercase tracking-royal-wide text-gold font-medium mb-2">
              {eyebrow}
            </span>
          )}

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-ivory leading-tight sm:leading-snug">
            {title}
          </h1>

          {/* Ornament Divider */}
          <div className="w-40 sm:w-52 my-3">
            <OrnamentDivider tone="light" size="sm" />
          </div>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm sm:text-base font-light text-ivory/80 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
