import { Hero } from "@/components/home/Hero";
import { HouseIntro } from "@/components/home/HouseIntro";
import { StickyScrollStory } from "@/components/home/StickyScrollStory";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { SuvarnaVruddhiTeaser } from "@/components/home/SuvarnaVruddhiTeaser";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Video/Poster & Staggered Reveal */}
      <Hero />

      {/* Real Keywords Marquee Accent */}
      <MarqueeStrip />

      {/* 2. House Intro (Centered Narrative) */}
      <HouseIntro />

      {/* 3. Sticky Scroll Story (Jewellery for Life's Many Moments) */}
      <StickyScrollStory />

      {/* Real Keywords Marquee Accent */}
      <MarqueeStrip />

      {/* 4. Category Grid (Bento 4-column layout) */}
      <CategoryGrid />

      {/* 5. Suvarna Vruddhi Yojana Teaser with 11+1 Visual Stepper */}
      <SuvarnaVruddhiTeaser />
    </>
  );
}
