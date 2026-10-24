import { LocalizedString } from "./site";

export interface BlogPost {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  featured?: boolean;
  content: {
    heading: LocalizedString;
    paragraphs: LocalizedString[];
    keyTakeaway?: LocalizedString;
  }[];
}

export const journalPageContent: {
  hero: {
    title: LocalizedString;
    eyebrow: LocalizedString;
    subtitle: LocalizedString;
    breadcrumb: LocalizedString;
  };
  posts: BlogPost[];
} = {
  hero: {
    title: {
      en: "The Goldsmith's Journal",
      gu: "સુવર્ણકાર ડાયરી અને લેખ",
    },
    eyebrow: {
      en: "Chronicles of Art, Gems & Heritage",
      gu: "કળા, રત્નો અને રાજસી વારસાના લેખો",
    },
    subtitle: {
      en: "Reflections on traditional Indian jewellery techniques, gemological mastery, bridal etiquette, and royal Baroda history.",
      gu: "ભારતીય આભૂષણોની પ્રાચીન કળા, ડાયમંડ ગ્રેડિંગ, લગ્ન ઘરેણાં અને વડોદરાના ઈતિહાસ પર આલેખાયેલા લેખ.",
    },
    breadcrumb: {
      en: "Home / Journal",
      gu: "મુખ્ય પૃષ્ઠ / જર્નલ",
    },
  },
  posts: [
    {
      slug: "polki-vs-kundan-understanding-the-distinction",
      featured: true,
      title: {
        en: "Polki vs. Kundan: Understanding the Imperial Crafts",
        gu: "પોલકી અને કુંદન: રાજસી ઘડતર વચ્ચેનો સાચો તફાવત",
      },
      excerpt: {
        en: "While often used interchangeably in contemporary conversations, Polki and Kundan represent distinct antique jewellery traditions with separate roots and craftsmanship techniques.",
        gu: "પોલકી અને કુંદન બંને વચ્ચેનો તફાવત, બનાવટ અને શુદ્ધતાની બારીક વિગતો.",
      },
      category: "Craftsmanship & Heritage",
      date: "October 14, 2024",
      readTime: "5 min read",
      image: "/images/ggj/polki.webp",
      author: "Gandevikar Atelier Curators",
      content: [
        {
          heading: {
            en: "The Organic Splendour of Uncut Polki Diamonds",
            gu: "અણઘડ કુદરતી હીરા: પોલકીનું સૌંદર્ય",
          },
          paragraphs: [
            {
              en: "Polki refers specifically to uncut, natural diamonds in their raw, organic form. Unlike modern brilliant-cut diamonds with mathematical facets, Polki diamonds are cleaved naturally, retaining their historical character and unfaceted brilliance.",
              gu: "પોલકી એટલે કુદરતી, અનકટ હીરા. તેમાં આધુનિક મશીન કટિંગ વગર પ્રાકૃતિક ચમક અને આકાર જળવાઈ રહે છે.",
            },
            {
              en: "Originating during the Mughal and Rajput courts and perfected under the Gaekwads of Baroda, Polki diamonds are set with pure 24-karat gold foils that reflect light organically.",
              gu: "મોગલ, રાજપૂત અને ગાયકવાડ દરબારોમાં પોલકીને શુદ્ધ ૨૪કે સોનાના વરખ સાથે કંડારીને રોયલ હાર તૈયાર કરવામાં આવતા.",
            },
          ],
        },
        {
          heading: {
            en: "What is Kundan?",
            gu: "કુંદન એટલે શું?",
          },
          paragraphs: [
            {
              en: "Kundan, by contrast, is not a gemstone but an ancient metallurgical technique. It refers to highly refined, 24-karat gold foil (kundan) pressed cold between the stones and their gold collets to securely encase gems.",
              gu: "કુંદન કોઈ પથ્થર નથી, પરંતુ ૨૪ કેરેટ શુદ્ધ સોનાના અત્યંત પાતળા વરખ વડે પથ્થરને જડવાની પ્રાચીન ટેકનિક છે.",
            },
          ],
          keyTakeaway: {
            en: "A masterpiece can be both: natural uncut Polki diamonds set using the traditional Kundan technique, finished with delicate Meenakari on the reverse.",
            gu: "શ્રેષ્ઠ ઘરેણું એ છે જેમાં પોલકી હીરા હોય, કુંદન ટેકનિકથી જડેલા હોય અને પાછળ હાથથી કરેલી મીનાકારી હોય.",
          },
        },
      ],
    },
    {
      slug: "royal-jewellery-traditions-of-the-gaekwad-court",
      featured: false,
      title: {
        en: "The Sovereign Splendour: Royal Ornaments of the Gaekwad Court",
        gu: "વડોદરાના ગાયકવાડ રાજદરબારના શાનદાર આભૂષણો",
      },
      excerpt: {
        en: "An insider perspective into how the Gaekwads of Baroda shaped royal Indian jewellery aesthetics from ceremonial kalgis to grand emerald haars.",
        gu: "મહારાજા સયાજીરાવ ગાયકવાડના શાસનમાં વડોદરા વિશ્વ કક્ષાનું જ્વેલરી કેન્દ્ર કેવી રીતે બન્યું.",
      },
      category: "Baroda Royal History",
      date: "September 28, 2024",
      readTime: "7 min read",
      image: "/images/store.webp",
      author: "Heritage Archival Team",
      content: [
        {
          heading: {
            en: "Baroda as the Epicenter of Haute Joaillerie",
            gu: "હાઈ જ્વેલરીનું વૈશ્વિક કેન્દ્ર: બરોડા",
          },
          paragraphs: [
            {
              en: "Under the visionary patronage of Maharaja Sayajirao Gaekwad III, Vadodara became an international capital of high jewellery. The Gaekwad collection included legendary gems such as the Star of the South diamond and the historic Baroda Pearls.",
              gu: "મહારાજા સયાજીરાવ ગાયકવાડ ત્રીજાના આશ્રય હેઠળ વડોદરા વિશ્વભરમાં રત્નો અને કલાના આભૂષણો માટે વિખ્યાત બન્યું.",
            },
          ],
        },
      ],
    },
    {
      slug: "suvarna-vruddhi-smart-wealth-planning-in-gold",
      featured: false,
      title: {
        en: "Suvarna Vruddhi: Timeless Wealth Planning Through Gold",
        gu: "સુવર્ણ વૃદ્ધિ: સોનામાં શિસ્તબદ્ધ અને સુરક્ષિત રોકાણ",
      },
      excerpt: {
        en: "How disciplined periodic gold accumulation shields family savings against inflation and prepares you seamlessly for bridal milestones.",
        gu: "૧૧+૧ માસિક યોજના દ્વારા લગ્ન માટે સોનું એકત્રિત કરવાની સૌથી સ્માર્ટ રીત.",
      },
      category: "Wealth & Gold Investment",
      date: "August 19, 2024",
      readTime: "4 min read",
      image: "/images/Suvarna_Vruddhi_Yojana.webp",
      author: "Gandevikar Advisory Team",
      content: [
        {
          heading: {
            en: "The 11+1 Advantage",
            gu: "૧૧+૧ નો વિશેષ લાભ",
          },
          paragraphs: [
            {
              en: "Gold is both culturally auspicious and financially resilient. Our Suvarna Vruddhi Yojana offers a structured, risk-mitigated pathway for families to accumulate pure gold over 11 months with a guaranteed 12th-month bonus.",
              gu: "૧૧ મહિના નિયમિત રકમ ભરી ૧૨મો મહિનો બોનસ મેળવવાથી સોનાની ખરીદી અત્યંત સરળ બની જાય છે.",
            },
          ],
        },
      ],
    },
  ],
};
