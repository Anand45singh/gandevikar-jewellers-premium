import { LocalizedString } from "./site";

export interface CategoryItem {
  id: string;
  title: LocalizedString;
  colSpanDesktop: number; // 1 or 2 columns in a 4-col bento grid
  aspectRatio: "wide" | "square" | "tall";
  image: string;
  href: string;
}

export interface HomePageData {
  hero: {
    label: LocalizedString;
    title: LocalizedString;
    viewMore: LocalizedString;
    poster: string;
    videoMp4: string;
    videoWebm: string;
    href: string;
  };
  houseIntro: {
    heading: LocalizedString;
    paragraph1: LocalizedString;
    paragraph2: LocalizedString;
    ctaButton: LocalizedString;
    ctaHref: string;
  };
  stickyStory: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    cta: LocalizedString;
    ctaHref: string;
    images: {
      src: string;
      alt: string;
      rotation: number;
    }[];
  };
  marqueeKeywords: string[];
  categories: CategoryItem[];
  suvarnaScheme: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    image: string;
    cta: LocalizedString;
    ctaHref: string;
  };
}

export const homePageContent: HomePageData = {
  hero: {
    label: {
      en: "GIRISHBHAI GANDEVIKAR JEWELLERS",
      gu: "ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ",
    },
    title: {
      en: "Jewellery for every Generation and every Occasion",
      gu: "દરેક પેઢી અને દરેક પ્રસંગ માટેના આભૂષણો",
    },
    viewMore: {
      en: "View More",
      gu: "વધુ જુઓ",
    },
    poster: "/images/hero_poster.webp",
    videoMp4: "/images/download.mp4",
    videoWebm: "/images/download.webm",
    href: "/services",
  },
  houseIntro: {
    heading: {
      en: "Jewellery for every Generation & every Occasion",
      gu: "દરેક પેઢી અને દરેક પ્રસંગ માટેના ઘરેણાં",
    },
    paragraph1: {
      en: "For nearly a century now, families in Vadodara have trusted Gandevikar Jewellers Girishbhai with their pure gold, their wedding celebrations, and their cherished memories.",
      gu: "લગભગ એક સદીથી, વડોદરાના પરિવારોએ પોતાના શુદ્ધ સોના, લગ્નોત્સવ અને અમૂલ્ય સ્મૃતિઓ માટે ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ પર અતૂટ વિશ્વાસ મૂક્યો છે.",
    },
    paragraph2: {
      en: "Today, the third generation carries that trust forward, bringing together India's jewellery traditions with a more contemporary way of experiencing them.",
      gu: "આજે, ત્રીજી પેઢી એ જ વિશ્વાસને આગળ ધપાવે છે, જે ભારતીય પરંપરાઓને આધુનિક સૌંદર્ય સાથે એકરૂપ કરે છે.",
    },
    ctaButton: {
      en: "Our Story",
      gu: "અમારો ઇતિહાસ",
    },
    ctaHref: "/timeline",
  },
  stickyStory: {
    eyebrow: {
      en: "The Living Chronicle",
      gu: "જીવંત વારસો",
    },
    title: {
      en: "Jewellery for Life's Many Moments",
      gu: "જીવનના અનેક યાદગાર ક્ષણોના આભૂષણો",
    },
    description: {
      en: "Sometimes it's tradition. Sometimes it's celebration. Sometimes, you just saw something and couldn't stop thinking about it. Gold, diamonds, polki and silver, find what speaks to you.",
      gu: "ક્યારેક આ પરંપરા છે. ક્યારેક ઉત્સવ છે. ક્યારેક કંઈક એવું જે આંખોમાં વસી જાય. સોનું, હીરા, પોલકી અને ચાંદી — તમારી પસંદગી શોધો.",
    },
    cta: {
      en: "Explore The Collections",
      gu: "કલેક્શન જુઓ",
    },
    ctaHref: "/collections",
    images: [
      { src: "/images/ggj/scroll1.webp", alt: "Gaekwad Royal Heritage Goldsmithing", rotation: -3 },
      { src: "/images/ggj/scroll2.webp", alt: "Heirloom Craftsmanship Archive", rotation: 4 },
      { src: "/images/ggj/scroll3.webp", alt: "Bridal Jewellery Heritage Baroda", rotation: -2 },
      { src: "/images/ggj/polki.webp", alt: "Uncut Diamond Polki Masterpiece", rotation: 3 },
    ],
  },
  marqueeKeywords: [
    "BIS Hallmarked 22k Gold",
    "GIA Certified Diamonds",
    "Royal Meenakari",
    "Bespoke Bridal Suites",
    "Since 1927",
  ],
  categories: [
    {
      id: "wedding",
      title: { en: "Wedding", gu: "લગ્ન આભૂષણ" },
      colSpanDesktop: 2,
      aspectRatio: "wide",
      image: "/images/ggj/wedding.webp",
      href: "/services#wedding",
    },
    {
      id: "engagement",
      title: { en: "Engagement", gu: "સગાઈ રિંગ્સ" },
      colSpanDesktop: 2,
      aspectRatio: "wide",
      image: "/images/ggj/engagement.webp",
      href: "/services#engagement",
    },
    {
      id: "everyday",
      title: { en: "Everyday", gu: "રોજિંદી ફેશન" },
      colSpanDesktop: 1,
      aspectRatio: "square",
      image: "/images/ggj/Everyday.webp",
      href: "/services#everyday",
    },
    {
      id: "festive",
      title: { en: "Festive", gu: "તહેવાર સંગ્રહ" },
      colSpanDesktop: 2,
      aspectRatio: "wide",
      image: "/images/ggj/Festive.webp",
      href: "/services#festive",
    },
    {
      id: "weddinggift",
      title: { en: "Wedding Gifting", gu: "વેડિંગ ગિફ્ટિંગ" },
      colSpanDesktop: 1,
      aspectRatio: "square",
      image: "/images/ggj/weddinggift.webp",
      href: "/services#weddinggifting",
    },
    {
      id: "corporate",
      title: { en: "Corporate Gifting", gu: "કોર્પોરેટ ગિફ્ટિંગ" },
      colSpanDesktop: 1,
      aspectRatio: "square",
      image: "/images/ggj/corporategifting.webp",
      href: "/services#corporategifting",
    },
    {
      id: "custom",
      title: { en: "Custom", gu: "કસ્ટમ આભૂષણ" },
      colSpanDesktop: 1,
      aspectRatio: "square",
      image: "/images/ggj/custom.webp",
      href: "/services#custom",
    },
    {
      id: "mens",
      title: { en: "Men's", gu: "મેન્સ કલેક્શન" },
      colSpanDesktop: 2,
      aspectRatio: "wide",
      image: "/images/ggj/mens.webp",
      href: "/services#mens",
    },
  ],
  suvarnaScheme: {
    eyebrow: {
      en: "Savings & Jewel Bank Scheme",
      gu: "સુવર્ણ બચત અને જ્વેલરી યોજના",
    },
    title: {
      en: "Suvarna Vruddhi Yojana",
      gu: "સુવર્ણ વૃદ્ધિ યોજના",
    },
    description: {
      en: "Plan your gold purchases effortlessly with our 11+1 Suvarna Vruddhi Yojana. Pay 11 monthly installments, and Girishbhai Gandevikar Jewellers contributes the 12th month on your behalf.",
      gu: "અમારી ૧૧+૧ સુવર્ણ વૃદ્ધિ યોજના વડે સોનાની ખરીદીનું સરળ આયોજન કરો. ૧૧ માસિક હપ્તા ભરો, અને ૧૨મો મહિનો ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ તમારા વતી ચૂકવશે.",
    },
    image: "/images/Suvarna_Vruddhi_Yojana.webp",
    cta: {
      en: "Explore Scheme Details",
      gu: "યોજનાની વિગતો જુઓ",
    },
    ctaHref: "/services#gold-scheme",
  },
};
