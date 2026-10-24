import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center bg-ivory text-ink py-20">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center p-8 sm:p-12 bg-white border border-gold/30 shadow-xl">
          <span className="text-[11px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-3">
            Error 404 • Page Not Found
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-ink mb-4">
            An Uncharted Jewel
          </h1>

          <div className="w-40 my-3">
            <OrnamentDivider tone="gold" size="sm" />
          </div>

          <p className="text-sm sm:text-base font-light text-ink-muted max-w-md leading-relaxed mb-8">
            The collection, page, or heirloom chronicle you seek has either been retired or moved within our archives.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="solid-maroon" showArrow>
              Return to Homepage
            </Button>
            <Button href="/collections" variant="outline">
              Explore Collections
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
