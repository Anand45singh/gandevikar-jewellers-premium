import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { journalPageContent } from "@/content/blog";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "The Goldsmith's Journal | Girishbhai Gandevikar Jewellers",
  description:
    "Reflections on traditional Indian jewellery techniques, uncut Polki diamonds, Kundan craftsmanship, and royal Baroda heritage.",
};

export default function BlogListingPage() {
  const { hero, posts } = journalPageContent;
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = posts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <>
      {/* 1. Cinematic Page Header */}
      <PageHeader
        breadcrumb="Home / Journal"
        eyebrow="Chronicles of Art, Gems & Heritage"
        title="The Goldsmith's Journal"
        subtitle="Reflections on traditional Indian jewellery techniques, gemological mastery, bridal etiquette, and royal Baroda history."
        bgVariant="gradient"
      />

      <Section variant="ivory" padding="default">
        <Container>
          {/* 2. Featured Post Showcase */}
          {featuredPost && (
            <div className="mb-16">
              <span className="text-[10px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-3 block">
                Featured Editorial
              </span>
              <article className="p-6 sm:p-10 bg-white border border-gold/30 shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Image */}
                  <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-gold/30 bg-obsidian-surface">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title.en}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-ivory/90 backdrop-blur-xs border border-gold/30 text-[10px] uppercase tracking-royal text-maroon font-medium">
                      {featuredPost.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5 flex flex-col items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-ink-muted mb-3">
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gold" />
                          <span>{featuredPost.readTime}</span>
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-ink leading-tight mb-4 hover:text-maroon transition-colors">
                        <Link href={`/blog/${featuredPost.slug}`}>
                          {featuredPost.title.en}
                        </Link>
                      </h2>

                      <p className="text-sm font-light text-ink-muted leading-relaxed mb-6">
                        {featuredPost.excerpt.en}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-royal font-medium text-maroon hover:text-maroon-dark border-b border-maroon/40 pb-0.5"
                    >
                      <span>Read Complete Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* 3. Regular Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="p-6 bg-white border border-gold/25 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden border border-gold/30 mb-5 bg-obsidian-surface">
                    <Image
                      src={post.image}
                      alt={post.title.en}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-ivory/90 backdrop-blur-xs border border-gold/30 text-[9px] uppercase tracking-royal text-maroon font-medium">
                      {post.category}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-ink-muted mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-ink mb-3 hover:text-maroon transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title.en}</Link>
                  </h3>

                  <p className="text-xs font-light text-ink-muted leading-relaxed mb-6">
                    {post.excerpt.en}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/15">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-royal font-medium text-maroon hover:text-maroon-dark"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
