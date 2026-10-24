import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  href?: string;
  aspectRatio?: "portrait" | "square" | "landscape" | "tall";
  className?: string;
}

export function ImageCard({
  src,
  alt,
  title,
  subtitle,
  href,
  aspectRatio = "portrait",
  className,
}: ImageCardProps) {
  const ratioClasses = {
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    landscape: "aspect-[16/10]",
    tall: "aspect-[2/3]",
  };

  const CardContent = (
    <div
      className={cn(
        "group relative overflow-hidden bg-obsidian-surface border border-gold/20 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500",
        ratioClasses[aspectRatio],
        className
      )}
    >
      {/* Image with subtle 1.05 zoom on hover */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Luxury Royal Maroon Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent opacity-80 group-hover:opacity-90 group-hover:from-maroon-dark/95 group-hover:via-maroon-dark/50 transition-all duration-500" />

      {/* Gold hairline frame */}
      <div className="absolute inset-2.5 sm:inset-3 border border-gold/20 group-hover:border-gold/50 transition-colors duration-500 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-ivory">
        {subtitle && (
          <span className="text-[11px] font-sans uppercase tracking-royal-wide text-gold-300 font-medium mb-1">
            {subtitle}
          </span>
        )}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-wide group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-gold">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block group">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
