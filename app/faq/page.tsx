"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { faqPageContent, FaqQuestion } from "@/content/faq";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Search, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { siteContent } from "@/content/site";

function FaqContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { hero, categories, questions } = faqPageContent;

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesCategory =
        selectedCategory === "all" || q.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const queryLower = searchQuery.toLowerCase();
      const questionText = t(q.question).toLowerCase();
      const answerText = t(q.answer).toLowerCase();
      const keywordMatch = q.keywords.some((k) => k.toLowerCase().includes(queryLower));

      return (
        questionText.includes(queryLower) ||
        answerText.includes(queryLower) ||
        keywordMatch
      );
    });
  }, [questions, selectedCategory, searchQuery, t]);

  const accordionItems: AccordionItem[] = filteredQuestions.map((q) => ({
    id: q.id,
    title: t(q.question),
    content: (
      <div className="space-y-3">
        <p className="font-light leading-relaxed">{t(q.answer)}</p>
      </div>
    ),
  }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((q) => ({
      "@type": "Question",
      "name": q.question.en,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer.en,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHeader
        breadcrumb={t(hero.breadcrumb)}
        eyebrow={t(hero.eyebrow)}
        title={t(hero.title)}
        subtitle={t(hero.subtitle)}
        bgVariant="gradient"
      />

      <Section variant="ivory" padding="default">
        <Container size="narrow">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g., BIS hallmarking, location, polki, gold scheme)..."
              className="w-full bg-white border border-gold/40 pl-12 pr-4 py-3.5 text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-maroon shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wider text-ink-muted hover:text-maroon"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-royal transition-all duration-300 border ${
                  selectedCategory === cat.id
                    ? "bg-maroon text-ivory border-maroon shadow-xs font-semibold"
                    : "bg-white border-gold/30 text-ink hover:border-gold"
                }`}
              >
                {t(cat.label)}
              </button>
            ))}
          </div>

          {accordionItems.length > 0 ? (
            <div className="bg-white p-6 sm:p-10 border border-gold/30 shadow-sm">
              <Accordion items={accordionItems} allowMultiple={false} />
            </div>
          ) : (
            <div className="text-center py-12 bg-white border border-gold/25 p-8">
              <HelpCircle className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="font-serif text-2xl text-ink font-normal mb-2">No Matching Answers Found</h3>
              <p className="text-xs font-light text-ink-muted max-w-sm mx-auto mb-6">
                Our royal concierge team in Vadodara is delighted to assist with any custom enquiry.
              </p>
              <a
                href={siteContent.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-maroon text-ivory text-xs uppercase tracking-royal"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          )}

          <div className="mt-12 p-6 bg-ivory-card border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-serif text-lg text-ink font-normal">Still have questions?</h4>
              <p className="text-xs text-ink-muted font-light">
                Call our Vadodara desk: {siteContent.displayPhone} (Mon–Sat 10:00 AM – 8:00 PM)
              </p>
            </div>
            <a
              href={`tel:${siteContent.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-maroon text-maroon hover:bg-maroon hover:text-ivory text-xs uppercase tracking-royal transition-colors font-medium shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Store Desk</span>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default function FaqPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-ivory" />}>
      <FaqContent />
    </Suspense>
  );
}
