import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { journalPageContent } from "@/content/blog";
import { Clock, ArrowLeft, Share2, MessageCircle } from "lucide-react";

export function generateStaticParams() {
  return journalPageContent.posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPageContent.posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title.en} | Girishbhai Gandevikar Jewellers`,
    description: post.excerpt.en,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPageContent.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = journalPageContent.posts.filter((p) => p.slug !== post.slug);

  // Article JSON-LD Schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title.en,
    "description": post.excerpt.en,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author,
    },
    "publisher": {
      "@type": "JewelryStore",
      "name": "Girishbhai Gandevikar Jewellers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://girishbhaigandevikar.com/images/log.webp",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <PageHeader
        breadcrumb={`Home / Journal / ${post.category}`}
        eyebrow={post.category}
        title={post.title.en}
        subtitle={`${post.date} • ${post.readTime} • By ${post.author}`}
        bgVariant="gradient"
      />

      <Section variant="ivory" padding="default">
        <Container size="narrow">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-royal text-maroon hover:text-maroon-dark font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Journal</span>
            </Link>
          </div>

          {/* Main Article Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-gold/40 shadow-xl mb-12 bg-obsidian-surface">
            <Image
              src={post.image}
              alt={post.title.en}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <article className="prose prose-stone max-w-none bg-white p-8 sm:p-12 border border-gold/25 shadow-sm mb-12">
            <p className="font-serif text-xl sm:text-2xl italic text-ink leading-relaxed mb-8 pb-6 border-b border-gold/20">
              "{post.excerpt.en}"
            </p>

            {post.content.map((sec, idx) => (
              <div key={idx} className="mb-8 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-ink">
                  {sec.heading.en}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base font-light text-ink-muted leading-relaxed">
                    {p.en}
                  </p>
                ))}
                {sec.keyTakeaway && (
                  <div className="p-4 bg-ivory border-l-2 border-gold text-xs font-light text-ink my-4">
                    <strong>Atelier Note:</strong> {sec.keyTakeaway.en}
                  </div>
                )}
              </div>
            ))}

            {/* Share and Enquire Strip */}
            <div className="pt-8 border-t border-gold/20 flex flex-wrap items-center justify-between gap-4 mt-12">
              <span className="text-xs uppercase tracking-royal text-ink font-medium flex items-center gap-2">
                <Share2 className="w-4 h-4 text-gold" />
                <span>Share this Article</span>
              </span>

              <a
                href={`https://wa.me/919925579633?text=${encodeURIComponent(`I enjoyed reading your article "${post.title.en}" on the GGJ journal!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-maroon text-ivory text-xs uppercase tracking-royal font-medium hover:bg-maroon-light transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                <span>Discuss with Concierge</span>
              </a>
            </div>
          </article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <span className="text-[10px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-2 block">
                Related Reflections
              </span>
              <h3 className="font-serif text-2xl font-normal text-ink mb-6">
                More from The Goldsmith's Journal
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.slice(0, 2).map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="p-5 bg-white border border-gold/25 shadow-xs hover:shadow-md transition-all block group"
                  >
                    <span className="text-[10px] uppercase tracking-royal text-gold-600 block mb-1">
                      {rp.category}
                    </span>
                    <h4 className="font-serif text-lg font-normal text-ink group-hover:text-maroon transition-colors mb-2">
                      {rp.title.en}
                    </h4>
                    <p className="text-xs text-ink-muted line-clamp-2 font-light">
                      {rp.excerpt.en}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
