import { LocalizedString } from "./site";

export interface AmyaProduct {
  id: string;
  name: LocalizedString;
  category: "rings" | "earrings" | "pendants" | "necklaces" | "bracelets";
  material: LocalizedString;
  shortCopy: LocalizedString;
  image: string;
  hoverImage: string;
}

export interface AmyaPageData {
  hero: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    tagline: LocalizedString;
    description: LocalizedString;
    instagramHandle: string;
    instagramUrl: string;
  };
  howItWorks: {
    title: LocalizedString;
    description: LocalizedString;
    steps: {
      number: string;
      title: LocalizedString;
      desc: LocalizedString;
    }[];
  };
  collections: AmyaProduct[];
}

export const amyaPageContent: AmyaPageData = {
  hero: {
    eyebrow: {
      en: "Contemporary Line by Girishbhai Gandevikar Jewellers",
      gu: "ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ દ્વારા આધુનિક કલેક્શન",
    },
    title: {
      en: "AMYA Everyday",
      gu: "AMYA એવરીડે",
    },
    tagline: {
      en: "925 Silver, Fine 18K Gold & Certified Diamonds Designed for Daily Poise",
      gu: "૯૨૫ સિલ્વર, ૧૮કે ગોલ્ડ અને સર્ટિફાઇડ ડાયમંડ્સ",
    },
    description: {
      en: "AMYA is the contemporary 925 silver, lightweight gold and fine diamond expression from the house of Girishbhai Gandevikar Jewellers. Conceived for the dynamic woman who embraces minimalist lines, layering chains, and effortless luxury every single day.",
      gu: "AMYA એ ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સની આધુનિક સિલ્વર અને લાઇટવેઇટ જ્વેલરી લાઇન છે. રોજિંદા પહેરવેશ માટે ઉત્કૃષ્ટ શૈલી અને આકર્ષક ડિઝાઇન્સ.",
    },
    instagramHandle: "@amya.ggj",
    instagramUrl: "https://www.instagram.com/amya.ggj",
  },
  howItWorks: {
    title: {
      en: "Direct-to-Consumer Curation & Insured Delivery",
      gu: "ઓનલાઇન ઓર્ડર અને સમગ્ર ભારતમાં સુરક્ષિત ડિલિવરી",
    },
    description: {
      en: "Browse our latest weekly drops directly on Instagram, converse with our styling team on WhatsApp or DM, and receive insured doorstep delivery across India in our signature AMYA luxury packaging.",
      gu: "ઇન્સ્ટાગ્રામ પર કલેક્શન પસંદ કરો, વોટ્સએપ પર ઓર્ડર કરો અને તમારા ઘરે સુરક્ષિત પાર્સલ મેળવો.",
    },
    steps: [
      {
        number: "01",
        title: { en: "Discover the Drop", gu: "ડિઝાઇન પસંદ કરો" },
        desc: { en: "Explore our latest minimalist curations and daily styling tips on @amya.ggj.", gu: "ઇન્સ્ટાગ્રામ અથવા વેબસાઇટ પર નવીનતમ કલેક્શન જુઓ." },
      },
      {
        number: "02",
        title: { en: "Enquire via WhatsApp", gu: "વોટ્સએપ પર સંપર્ક કરો" },
        desc: { en: "Click to enquire with prefilled design names for size consultation and availability.", gu: "પસંદ કરેલ ડિઝાઇનના નામ સાથે સીધો વોટ્સએપ મેસેજ મોકલો." },
      },
      {
        number: "03",
        title: { en: "Insured Doorstep Delivery", gu: "સુરક્ષિત હોમ ડિલિવરી" },
        desc: { en: "Dispatched with certified hallmark cards in velvet pouches, fully insured across India.", gu: "ઓથેન્ટિસિટી સર્ટિફિકેટ સાથે ભારતભરમાં હોમ ડિલિવરી." },
      },
    ],
  },
  collections: [
    {
      id: "amya-celestial-band",
      name: { en: "Celestial Diamond Stacking Band", gu: "સેલેસ્ટિયલ ડાયમંડ સ્ટેકિંગ બેન્ડ" },
      category: "rings",
      material: { en: "18K Rose Gold • Natural Pavé Diamonds", gu: "૧૮કે રોઝ ગોલ્ડ • નેચરલ પાવે હીરા" },
      shortCopy: {
        en: "Ultra-slim micro-pavé band designed to be worn solo or stacked alongside wedding rings.",
        gu: "એકલું અથવા અન્ય રિંગ્સ સાથે સ્ટેક કરી શકાય તેવું સ્લિમ ડિઝાઇનર બેન્ડ.",
      },
      image: "/images/ggj/engagement.webp",
      hoverImage: "/images/ggj/Everyday.webp",
    },
    {
      id: "amya-aura-drops",
      name: { en: "Aura Fluid Diamond Drops", gu: "ઓરા ફ્લુઇડ ડાયમંડ ડ્રોપ્સ" },
      category: "earrings",
      material: { en: "18K White & Yellow Gold • Brilliant Diamonds", gu: "૧૮કે વ્હાઇટ & યલો ગોલ્ડ" },
      shortCopy: {
        en: "Articulated architectural drops with effortless kinetic motion for desk-to-dinner sophistication.",
        gu: "ઓફિસથી લઈ સાંજની પાર્ટી માટે ઉત્કૃષ્ટ મૂવમેન્ટ ધરાવતા ડ્રોપ્સ.",
      },
      image: "/images/ggj/Everyday.webp",
      hoverImage: "/images/ggj/custom.webp",
    },
    {
      id: "amya-silver-rope-chain",
      name: { en: "Solstice 925 Sterling Layering Chain", gu: "સોલસ્ટિસ ૯૨૫ સ્ટેન્ડિંગ ચેઇન" },
      category: "necklaces",
      material: { en: "925 Sterling Silver • Rhodium Polish", gu: "૯૨૫ શુદ્ધ ચાંદી • રોડિયમ પોલિશ" },
      shortCopy: {
        en: "Italian diamond-cut sterling rope link engineered for lightweight durability and lustrous shine.",
        gu: "ઇટાલિયન ડાયમંડ-કટ ૯૨૫ સિલ્વર ચેઇન, રોજિંદા પહેરવેશ માટે બેસ્ટ.",
      },
      image: "/images/ggj/weddinggift.webp",
      hoverImage: "/images/ggj/wedding.webp",
    },
    {
      id: "amya-sol-bezel-pendant",
      name: { en: "Eternal Sol Minimalist Pendant", gu: "ઇટર્નલ સોલ મિનિમલિસ્ટ પેન્ડન્ટ" },
      category: "pendants",
      material: { en: "18K Yellow Gold • Certified Solitaire", gu: "૧૮કે યલો ગોલ્ડ • સર્ટિફાઇડ સોલિટેર" },
      shortCopy: {
        en: "Bezel-encased natural brilliant solitaire on a whisper-thin adjustable gold chain.",
        gu: "બેઝલ-સેટિંગ સાથેનો સુંદર સોલિટેર હીરો અને પાતળી ગોલ્ડ ચેઇન.",
      },
      image: "/images/ggj/custom.webp",
      hoverImage: "/images/ggj/polki.webp",
    },
    {
      id: "amya-geometric-cuff",
      name: { en: "Lumina Architectural Diamond Cuff", gu: "લ્યુમિના આર્કિટેક્ચરલ કફ" },
      category: "bracelets",
      material: { en: "18K Yellow Gold • Flush-Set Diamonds", gu: "૧૮કે યલો ગોલ્ડ • ફ્લશ-સેટ ડાયમંડ્સ" },
      shortCopy: {
        en: "Hinged ergonomic bangle featuring bezel-set round solitaires and crisp polished bevels.",
        gu: "હાથના માપ મુજબ આરામદાયક ફિટિંગ ધરાવતું આધુનિક ગોલ્ડ કડું.",
      },
      image: "/images/ggj/Festive.webp",
      hoverImage: "/images/ggj/engagement.webp",
    },
    {
      id: "amya-enamel-medallion",
      name: { en: "Lotus Enamel & Gold Petite Charm", gu: "કમળ મીનાકારી ગોલ્ડ ચાર્મ" },
      category: "pendants",
      material: { en: "22K Gold • Hand Enamel Accent", gu: "૨૨કે ગોલ્ડ • હેન્ડ એનેમલ" },
      shortCopy: {
        en: "Miniature handcrafted enamel charm honoring Gujarat's heritage in a petite contemporary talisman.",
        gu: "ગુજરાતની પરંપરાગત મીનાકારીનું નાજુક આધુનિક પેન્ડન્ટ ચાર્મ.",
      },
      image: "/images/ggj/polki.webp",
      hoverImage: "/images/store.webp",
    },
  ],
};
