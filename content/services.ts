import { LocalizedString } from "./site";

export interface ServiceCategory {
  id: string;
  name: LocalizedString;
  eyebrow: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  details: LocalizedString[];
  image: string;
  enquiryName: string;
}

export interface CoreServiceItem {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: LocalizedString;
  category: "wedding" | "engagement" | "everyday" | "festive" | "mens" | "polki";
  image: string;
  specs: LocalizedString;
}

export interface ServicesPageData {
  hero: {
    title: LocalizedString;
    subtitle: LocalizedString;
    breadcrumb: LocalizedString;
  };
  categories: ServiceCategory[];
  suvarnaScheme: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    badge: LocalizedString;
    description: LocalizedString;
    howItWorks: {
      step: number;
      title: LocalizedString;
      desc: LocalizedString;
    }[];
    highlights: LocalizedString[];
  };
  coreServices: CoreServiceItem[];
  gallery: GalleryItem[];
}

export const servicesPageContent: ServicesPageData = {
  hero: {
    title: {
      en: "Jewellery & Services",
      gu: "ઘરેણાં અને વિશિષ્ટ સેવાઓ",
    },
    subtitle: {
      en: "Nearly a century of royal goldsmithing, bespoke bridal suites, certified hallmarked purity, and disciplined gold accumulation in Vadodara.",
      gu: "લગભગ એક સદીની સુવર્ણ કળા, રોયલ બ્રાઇડલ સેટ્સ, પ્રમાણિત શુદ્ધતા અને સુવર્ણ બચત.",
    },
    breadcrumb: {
      en: "Home / Jewellery & Services",
      gu: "મુખ્ય પૃષ્ઠ / ઘરેણાં અને સેવાઓ",
    },
  },
  categories: [
    {
      id: "wedding",
      name: { en: "Wedding", gu: "લગ્ન આભૂષણ" },
      eyebrow: { en: "Bridal Heirloom & Regalia", gu: "રોયલ બ્રાઇડલ સંગ્રહ" },
      title: { en: "Imperial Bridal Suites & Heirlooms", gu: "ભવ્ય લગ્ન ચોકર અને સેટ" },
      description: {
        en: "Elaborate bridal suites, heirloom pieces, royal traditional polki, and intricate Meenakari heritage masterworks tailored for weddings and royal celebrations across generations.",
        gu: "લગ્નોત્સવ માટે ખાસ કંડારેલા ભવ્ય ચોકર, રાણી હાર, કંગન અને પરંપરાગત મીનાકારી માસ્ટરપીસ.",
      },
      details: [
        { en: "22K BIS Hallmarked gold with unique HUID authentication", gu: "૨૨ કેરેટ હોલમાર્ક શુદ્ધ સોનું" },
        { en: "Traditional Meenakari enamel reverse detailing", gu: "પરંપરાગત પાછળની મીનાકારી કળા" },
        { en: "Custom bridal necklace contouring & weight balancing", gu: "ગળાના માપ મુજબ અનુકૂળ વજન સંતુલન" },
      ],
      image: "/images/ggj/wedding.webp",
      enquiryName: "Imperial Bridal Suite",
    },
    {
      id: "engagement",
      name: { en: "Engagement", gu: "સગાઈ" },
      eyebrow: { en: "Solitaires & Eternal Bands", gu: "હીરાની સગાઈ રિંગ્સ" },
      title: { en: "Diamond & Gold Engagement Creations", gu: "અતૂટ સંબંધોની અદભુત રિંગ્સ" },
      description: {
        en: "Exquisite natural diamond and fine gold rings created to mark sacred engagement milestones, pairing brilliant cuts with classic royal settings.",
        gu: "સગાઈના પવિત્ર અવસર માટે કુદરતી સર્ટિફાઇડ ડાયમંડ અને સોલિટેર રિંગ્સ.",
      },
      details: [
        { en: "Certified natural diamonds with international laboratory certificates", gu: "આઈજીઆઈ પ્રમાણિત કુદરતી હીરા" },
        { en: "Available in 18K Yellow Gold, Rose Gold, and Platinum", gu: "યલો ગોલ્ડ, રોઝ ગોલ્ડ અને પ્લેટિનમ" },
        { en: "Personalized inner ring engraving with bespoke initials", gu: "કસ્ટમ નામના અક્ષરોનું કોતરકામ" },
      ],
      image: "/images/ggj/engagement.webp",
      enquiryName: "Diamond Engagement Solitaire",
    },
    {
      id: "everyday",
      name: { en: "Everyday", gu: "રોજિંદી ફેશન" },
      eyebrow: { en: "Modern Poise & Daily Radiance", gu: "દૈનિક લાઇટવેઇટ કલેક્શન" },
      title: { en: "Contemporary Lightweight Luxury", gu: "હળવા વજનના આધુનિક ઘરેણાં" },
      description: {
        en: "Lightweight, practical, and contemporary daily-wear pieces crafted for effortless sophistication, accompanying the modern woman through every hour.",
        gu: "રોજિંદા પહેરવેશ માટે સુંદર, આરામદાયક અને ટકાઉ ગોલ્ડ તેમજ ડાયમંડ ઘરેણાં.",
      },
      details: [
        { en: "Featherlight ergonomic pendants and stackable daily rings", gu: "અત્યંત હળવા પેન્ડન્ટ અને સ્ટેકેબલ રિંગ્સ" },
        { en: "Scratch-resistant polished finishing for daily longevity", gu: "લાંબા સમય સુધી ચમક જાળવતી ફિનિશિંગ" },
        { en: "Ideal for workplace elegance and thoughtful personal gifts", gu: "ઓફિસ અને કેઝ્યુઅલ વેર માટે ઉત્તમ" },
      ],
      image: "/images/ggj/Everyday.webp",
      enquiryName: "Everyday Fine Gold Piece",
    },
    {
      id: "festive",
      name: { en: "Festive", gu: "તહેવાર" },
      eyebrow: { en: "Auspicious Celebrations", gu: "શુભ તહેવારોનું સોનું" },
      title: { en: "Statement Festive Gold & Gemstone Treasures", gu: "પરંપરાગત તહેવાર સંગ્રહ" },
      description: {
        en: "Statement pieces curated for Diwali, Navratri, Pushya Nakshatra, and cultural celebrations, imbued with spiritual symbolism and timeless Gujarati aesthetics.",
        gu: "દિવાળી, નવરાત્રિ અને પુષ્ય નક્ષત્ર જેવા શુભ અવસરો માટે ખાસ બનાવેલા ઘરેણાં.",
      },
      details: [
        { en: "Intricate filigree and antique temple gold motifs", gu: "નાજુક કંદોરા અને એન્ટિક ટેમ્પલ વર્ક" },
        { en: "Natural rubies, emeralds, and syndicate pearls", gu: "કુદરતી માણેક, પન્ના અને મોતી" },
        { en: "Traditional broad bangles, kadas, and temple jhumkas", gu: "પરંપરાગત બંગડી, કડા અને ઝૂમકા" },
      ],
      image: "/images/ggj/Festive.webp",
      enquiryName: "Festive Gold Ornament",
    },
    {
      id: "weddinggifting",
      name: { en: "Wedding Gifting", gu: "વેડિંગ ગિફ્ટિંગ" },
      eyebrow: { en: "Honorary Tokens", gu: "લગ્ન ભેટ સંગ્રહ" },
      title: { en: "Cherished Family Milestones & Presentation Sets", gu: "પરિવાર માટે યાદગાર ભેટ" },
      description: {
        en: "Precious jewellery and hallmarked mementos selected to express deep gratitude and love to brides, grooms, and esteemed wedding guests.",
        gu: "સગાં-સંબંધીઓ અને નવદંપતિને ભેટ આપવા માટે વિશ્વાસપાત્ર ગોલ્ડ અને સિલ્વર આઇટમ્સ.",
      },
      details: [
        { en: "Hallmarked gold coins with auspicious Lakshmi & Ganesha emblems", gu: "શ્રી લક્ષ્મી-ગણેશ ગોલ્ડ સિક્કા" },
        { en: "Fine 925 sterling silver tableware and ceremonial pooja sets", gu: "૯૨૫ ચાંદીના પૂજા સેટ" },
        { en: "Royal velvet presentation boxes with authentication cards", gu: "રોયલ વેલ્વેટ ગિફ્ટ પેકિંગ" },
      ],
      image: "/images/ggj/weddinggift.webp",
      enquiryName: "Wedding Gift Selection",
    },
    {
      id: "corporategifting",
      name: { en: "Corporate Gifting", gu: "કોર્પોરેટ ગિફ્ટિંગ" },
      eyebrow: { en: "Executive Distinction", gu: "સન્માનજનક કોર્પોરેટ ભેટ" },
      title: { en: "Custom Minted Bullion & Executive Awards", gu: "કસ્ટમ કોઈન્સ અને મોમેન્ટો" },
      description: {
        en: "Custom-minted gold and silver coins, engraved bullion bars, and bespoke mementos created for corporate milestones, executive awards, and institutional celebrations.",
        gu: "કંપની લોગો અને નામ સાથે કસ્ટમ ડાઈ-કાસ્ટ ગોલ્ડ અને સિલ્વર સિક્કા.",
      },
      details: [
        { en: "Certified 999 purity gold and fine 999 silver coins", gu: "૯૯૯ શુદ્ધતા પ્રમાણપત્ર સાથે" },
        { en: "Custom company crest and insignia die-cast engraving", gu: "કંપની લોગો એન્ગ્રેવિંગ સુવિધા" },
        { en: "Tamper-evident assay blister card packaging", gu: "સુરક્ષિત સીલ પેક પ્રમાણપત્ર" },
      ],
      image: "/images/ggj/corporategifting.webp",
      enquiryName: "Corporate Gifting Ingot / Coin",
    },
    {
      id: "custom",
      name: { en: "Custom Design", gu: "કસ્ટમ ડિઝાઇન" },
      eyebrow: { en: "Master Karigari", gu: "કારીગરી અને રીડિઝાઇન" },
      title: { en: "Bespoke Jewelry Crafting & Heirloom Remodeling", gu: "તમારી કલ્પના મુજબનું સર્જન" },
      description: {
        en: "Bespoke/custom jewelry design services allowing clients to bring personal ideas, sketches, and antique heirloom transformations to life alongside veteran artisans.",
        gu: "તમારા જૂના સોનાનું આધુનિક ડિઝાઇનમાં રૂપાંતરણ અથવા તમારી પોતાની ડિઝાઇન મુજબ નવા ઘરેણાં.",
      },
      details: [
        { en: "Hand-sketched renderings and digital 3D previews", gu: "હાથથી દોરેલી ડિઝાઇન્સ અને ૩ડી મોડેલિંગ" },
        { en: "Ancestral gold recycling with transparent computerized purity test", gu: "જૂના સોનાની પારદર્શક ચકાસણી" },
        { en: "Direct collaboration with third-generation master jewellers", gu: "માસ્ટર જ્વેલર્સ સાથે રૂબરૂ પરામર્શ" },
      ],
      image: "/images/ggj/custom.webp",
      enquiryName: "Custom Design Consultation",
    },
    {
      id: "mens",
      name: { en: "Men's Regalia", gu: "મેન્સ કલેક્શન" },
      eyebrow: { en: "Royal Gaekwad Accoutrements", gu: "પુરુષો માટે રોયલ સંગ્રહ" },
      title: { en: "Masculine Bands, Kalgis & Royal Buttons", gu: "કુરતા બટન, કલગી અને કડા" },
      description: {
        en: "Dedicated regal collections crafted for men, including masculine bands, signet rings, kurta button sets, safa kalgis, and brooches rooted in Baroda court traditions.",
        gu: "રોયલ લૂક માટે કુરતા બટન્સ, રિંગ્સ, કલગી અને ચેઇન.",
      },
      details: [
        { en: "Solid 22K gold cufflinks and hand-enamelled kurta buttons", gu: "સોલિડ ૨૨કે કફલિંક્સ અને બટન્સ" },
        { en: "Imperial turban kalgis with natural polki and ruby drops", gu: "સાફા માટે પરંપરાગત કલગી" },
        { en: "Heavy textured kadas and classic masculine signet rings", gu: "ભારે રોયલ કડા અને સિગ્નેટ રિંગ્સ" },
      ],
      image: "/images/ggj/mens.webp",
      enquiryName: "Men's Royal Regalia",
    },
  ],
  suvarnaScheme: {
    eyebrow: { en: "Savings & Jewel Bank Scheme", gu: "સુવર્ણ બચત યોજના" },
    title: { en: "Suvarna Vruddhi Yojana (11+1)", gu: "સુવર્ણ વૃદ્ધિ યોજના (૧૧+૧)" },
    badge: { en: "100% Purity • Store Bonus", gu: "૧૦૦% શુદ્ધતા • બોનસ લાભ" },
    description: {
      en: "Plan your gold purchases effortlessly with our 11+1 Suvarna Vruddhi Yojana. Pay 11 monthly installments, and Girishbhai Gandevikar Jewellers contributes the 12th month on your behalf.",
      gu: "અમારી ૧૧+૧ સુવર્ણ વૃદ્ધિ યોજના વડે સોનાની ખરીદીનું સરળ આયોજન કરો. ૧૧ માસિક હપ્તા ભરો, અને ૧૨મો મહિનો ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ તમારા વતી ચૂકવશે.",
    },
    howItWorks: [
      {
        step: 1,
        title: { en: "Choose Your Monthly Installment", gu: "માસિક રકમ પસંદ કરો" },
        desc: { en: "Select a comfortable fixed monthly deposit starting from ₹2,000.", gu: "રૂ. ૨,૦૦૦ થી શરૂ કરી કોઈપણ રકમ નક્કી કરો." },
      },
      {
        step: 2,
        title: { en: "Deposit for 11 Consecutive Months", gu: "૧૧ મહિના નિયમિત હપ્તા ભરો" },
        desc: { en: "Make payments on time each month in-store or online via UPI/banking.", gu: "દુકાને આવીને અથવા યુપીઆઈ દ્વારા સરળતાથી ભરો." },
      },
      {
        step: 3,
        title: { en: "We Add the 12th Month Free", gu: "૧૨મો હપ્તો અમારા તરફથી" },
        desc: { en: "Girishbhai Gandevikar Jewellers deposits the full 12th month contribution for you.", gu: "છેલ્લો હપ્તો ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ જમા કરશે." },
      },
      {
        step: 4,
        title: { en: "Redeem for Dream Jewellery", gu: "મનપસંદ ઘરેણાં ખરીદો" },
        desc: { en: "Select from our entire 22K hallmarked gold and diamond collections with special making charge benefits.", gu: "સમગ્ર કલેક્શનમાંથી વિશેષ ડિસ્કાઉન્ટ સાથે ઘરેણાં પસંદ કરો." },
      },
    ],
    highlights: [
      { en: "Zero risk, guaranteed 12th month store contribution", gu: "સંપૂર્ણ સુરક્ષિત અને નિશ્ચિત બોનસ" },
      { en: "Hedge against fluctuating daily bullion prices", gu: "બજારના ભાવ વધારા સામે રક્ષણ" },
      { en: "Applicable on Polki, Jadau, Gold, and Diamonds", gu: "પોલકી, જડતર અને સોના-હીરા પર માન્ય" },
      { en: "100% BIS Hallmarked jewellery with certificate", gu: "૧૦૦% હોલમાર્ક શુદ્ધ ઘરેણાં" },
    ],
  },
  coreServices: [
    {
      id: "bridal-suites",
      title: { en: "Bespoke Bridal Suites", gu: "બ્રાઇડલ જ્વેલરી કન્સલ્ટેશન" },
      subtitle: { en: "One-on-One Trousseau Styling", gu: "રૂબરૂ બ્રાઇડલ સિટિંગ" },
      description: {
        en: "Private salon consultations in Vadodara to design matching imperial chokers, raani haars, naths, and mathapattis tailored to your wedding attire.",
        gu: "તમારા લગ્નના લહેંગા અને લૂક મુજબ પરફેક્ટ મેચિંગ નેકલેસ અને આભૂષણોનું આયોજન.",
      },
      iconName: "Crown",
    },
    {
      id: "custom-design",
      title: { en: "Custom Jewellery & Remodeling", gu: "કસ્ટમ ડિઝાઇન અને રીમોડેલિંગ" },
      subtitle: { en: "Heirloom Transformation", gu: "જૂના ઘરેણાંનું નવસર્જન" },
      description: {
        en: "Bespoke/custom jewelry design services allowing clients to bring personal ideas, sketches, and antique heirloom transformations to life.",
        gu: "તમારી પોતાની કલ્પના મુજબના વિશિષ્ટ ઘરેણાં અથવા પૂર્વજોના જૂના સોનાનું આધુનિક રિડિઝાઇન.",
      },
      iconName: "Sparkles",
    },
    {
      id: "hallmark-certified",
      title: { en: "100% BIS Hallmarking & IGI Diamonds", gu: "હોલમાર્ક અને સર્ટિફાઇડ ડાયમંડ્સ" },
      subtitle: { en: "Government Verified Purity", gu: "સરકારી પ્રમાણિત શુદ્ધતા" },
      description: {
        en: "Every single gold piece carries the government BIS hallmark with unique laser-engraved HUID number, and diamonds are accompanied by IGI/SGL cards.",
        gu: "દરેક સોનાના દાગીના પર ૧૦૦% BIS હોલમાર્ક HUID કોડ અને હીરા પર લેબોરેટરી સર્ટિફિકેટ.",
      },
      iconName: "ShieldCheck",
    },
    {
      id: "meenakari",
      title: { en: "Royal Meenakari & Polki Setting", gu: "મીનાકારી અને પોલકી જડતર" },
      subtitle: { en: "Gaekwad Court Traditions", gu: "રાજસી પ્રાચીન કળા" },
      description: {
        en: "Preserving authentic Gujarati and Rajasthani enamelling techniques with natural syndicate polki diamonds in pure 24K gold kundan bezels.",
        gu: "કુદરતી અણઘડ પોલકી હીરા અને શુદ્ધ ૨૪કે કુંદન સાથે હાથેથી કરેલી બારીક મીનાકારી.",
      },
      iconName: "Gem",
    },
    {
      id: "gold-exchange",
      title: { en: "Old Gold Valuation & Exchange", gu: "જૂના સોનાનું એક્સચેન્જ" },
      subtitle: { en: "Transparent Caratometer Testing", gu: "કોમ્પ્યુટરાઈઝ્ડ શુદ્ધતા માપણી" },
      description: {
        en: "Bring your ancestral family gold for computerized non-destructive purity evaluation and transparent exchange towards our new heirlooms.",
        gu: "તમારા જૂના સોનાની તમારી સમક્ષ કોમ્પ્યુટરથી ચકાસણી અને પારદર્શક વજન-ભાવ સાથે બદલી.",
      },
      iconName: "Scale",
    },
    {
      id: "concierge",
      title: { en: "Personal Client Concierge", gu: "પર્સનલ ક્લાયન્ટ કન્સિયર્જ" },
      subtitle: { en: "Lifetime Care & Cleaning", gu: "લાઇફટાઇમ સર્વિસ અને ક્લિનિંગ" },
      description: {
        en: "Complimentary lifetime ultrasonic cleaning, gemstone prong inspections, restringing, and private appointment bookings.",
        gu: "અમારા દરેક ગ્રાહક માટે મફત લાઇફટાઇમ ક્લિનિંગ, પોલિશિંગ અને પર્સનલ એપોઇન્ટમેન્ટ.",
      },
      iconName: "HeartHandshake",
    },
  ],
  gallery: [
    {
      id: "gal-1",
      title: { en: "Imperial Jadau Choker Suite", gu: "રોયલ જડતર ચોકર સેટ" },
      category: "wedding",
      image: "/images/ggj/wedding.webp",
      specs: { en: "22K Yellow Gold • Natural Polki & Pearls", gu: "૨૨કે ગોલ્ડ • પોલકી અને મોતી" },
    },
    {
      id: "gal-2",
      title: { en: "Celestial Solitaire Diamond Ring", gu: "સોલિટેર ડાયમંડ રિંગ" },
      category: "engagement",
      image: "/images/ggj/engagement.webp",
      specs: { en: "18K White Gold • Certified Brilliant Diamond", gu: "૧૮કે વ્હાઇટ ગોલ્ડ • સર્ટિફાઇડ હીરો" },
    },
    {
      id: "gal-3",
      title: { en: "Everyday Aura Layering Pendant", gu: "ઓરા લેયરિંગ પેન્ડન્ટ" },
      category: "everyday",
      image: "/images/ggj/Everyday.webp",
      specs: { en: "18K Rose Gold • Micro Pavé Diamonds", gu: "૧૮કે રોઝ ગોલ્ડ • માઇક્રો પાવે હીરા" },
    },
    {
      id: "gal-4",
      title: { en: "Festive Temple Jhumkas", gu: "ફેસ્ટિવ ટેમ્પલ ઝૂમકા" },
      category: "festive",
      image: "/images/ggj/Festive.webp",
      specs: { en: "22K Antique Gold • Natural Rubies", gu: "૨૨કે એન્ટિક ગોલ્ડ • રુબીઝ" },
    },
    {
      id: "gal-5",
      title: { en: "Royal Gaekwad Kurta Buttons & Kalgi", gu: "રોયલ કુરતા બટન્સ અને કલગી" },
      category: "mens",
      image: "/images/ggj/mens.webp",
      specs: { en: "22K Gold • Hand Enamel & Uncut Polki", gu: "૨૨કે ગોલ્ડ • મીનાકારી અને પોલકી" },
    },
    {
      id: "gal-6",
      title: { en: "Ancestral Polki Hasli Necklace", gu: "રાજસી પોલકી હસલી હાર" },
      category: "polki",
      image: "/images/ggj/polki.webp",
      specs: { en: "22K Kundan • Syndicate Natural Polki", gu: "૨૨કે કુંદન • સિન્ડિકેટ પોલકી" },
    },
  ],
};
