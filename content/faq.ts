import { LocalizedString } from "./site";

export interface FaqQuestion {
  id: string;
  category: "about" | "purity" | "services" | "scheme" | "care";
  question: LocalizedString;
  answer: LocalizedString;
  keywords: string[];
}

export interface FaqPageData {
  hero: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    subtitle: LocalizedString;
    breadcrumb: LocalizedString;
  };
  categories: {
    id: string;
    label: LocalizedString;
  }[];
  questions: FaqQuestion[];
}

export const faqPageContent: FaqPageData = {
  hero: {
    eyebrow: {
      en: "Heritage & Purchasing Clarifications",
      gu: "ગ્રાહકો માટે ઉપયોગી માહિતી અને પ્રશ્નોત્તરી",
    },
    title: {
      en: "Frequently Asked Questions",
      gu: "વારંવાર પૂછાતા પ્રશ્નો",
    },
    subtitle: {
      en: "Everything you need to know about Girishbhai Gandevikar Jewellers, our royal Gaekwad legacy, BIS hallmarking, GIA diamonds, and jewellery care.",
      gu: "ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ, શુદ્ધતાના નિયમો, હોલમાર્કિંગ અને કસ્ટમ સર્વિસ વિશે સંપૂર્ણ વિગતો.",
    },
    breadcrumb: {
      en: "Home / FAQs",
      gu: "મુખ્ય પૃષ્ઠ / પ્રશ્નોત્તરી",
    },
  },
  categories: [
    { id: "all", label: { en: "All Questions", gu: "તમામ પ્રશ્નો" } },
    { id: "about", label: { en: "About GGJ", gu: "પેઢી વિશે" } },
    { id: "purity", label: { en: "Purity & Certification", gu: "શુદ્ધતા & પ્રમાણપત્ર" } },
    { id: "services", label: { en: "Custom Services", gu: "કસ્ટમ સેવાઓ" } },
    { id: "scheme", label: { en: "Suvarna Scheme", gu: "સુવર્ણ યોજના" } },
    { id: "care", label: { en: "Jewellery Care", gu: "દાગીનાની સંભાળ" } },
  ],
  questions: [
    {
      id: "who-is-gandevikar",
      category: "about",
      question: {
        en: "Who is Gandevikar Jewellers Girishbhai?",
        gu: "ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ કોણ છે?",
      },
      answer: {
        en: "Girishbhai Gandevikar Jewellers is a renowned heritage jewellery house established in 1927 in Vadodara, Gujarat. Founded by Late Shri Laxmanrao Mahadevrao Gandevikar, the family served as trusted goldsmiths to courtiers of the royal Gaekwad dynasty. Today, the third generation upholds that century-old legacy of certified purity, master karigari, and family trust.",
        gu: "ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ વડોદરાની ૧૯૨૭ માં સ્થપાયેલી ઐતિહાસિક પેઢી છે. સ્વ. શ્રી લક્ષ્મણરાવ મહાદેવરાવ ગાંડેવીકર દ્વારા સ્થાપિત આ પેઢીએ ગાયકવાડ રાજવંશના દરબારીઓની સેવા કરી છે. આજે ત્રીજી પેઢી આ વારસો આગળ ધપાવે છે.",
      },
      keywords: ["who is", "founder", "history", "shethji", "heritage", "about"],
    },
    {
      id: "what-ggj-means",
      category: "about",
      question: {
        en: "What does GGJ mean?",
        gu: "GGJ નો અર્થ શું થાય છે?",
      },
      answer: {
        en: "GGJ is the authentic hallmark abbreviation and digital moniker for Girishbhai Gandevikar Jewellers, signifying 100% genuine craftsmanship, royal heritage, and generational trust in Vadodara.",
        gu: "GGJ એ 'ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ' નું ટૂંકું નામ અને બ્રાન્ડ મોનોગ્રામ છે.",
      },
      keywords: ["ggj", "abbreviation", "meaning", "name", "brand"],
    },
    {
      id: "showroom-location",
      category: "about",
      question: {
        en: "Where is your flagship showroom located in Vadodara?",
        gu: "વડોદરામાં તમારો મુખ્ય શોરૂમ ક્યાં આવેલો છે?",
      },
      answer: {
        en: "Our flagship atelier and showroom is located at B-3, Anand Nagar Society, Jetalpur Road Char Rasta, opposite Kashi Vishweshwar Temple, Alkapuri, Vadodara, Gujarat 390007. We welcome you to experience our private bridal preview lounge and heritage archives.",
        gu: "અમારો મુખ્ય શોરૂમ B-3, આનંદ નગર સોસાયટી, જેતલપુર રોડ ચાર રસ્તા, કાશી વિશ્વેશ્વર મંદિર સામે, અલકાપુરી, વડોદરા - ૩૯૦૦૦૭ પર આવેલો છે.",
      },
      keywords: ["location", "address", "alkapuri", "jetalpur road", "where", "showroom"],
    },
    {
      id: "store-hours-contact",
      category: "about",
      question: {
        en: "What are your showroom timings and contact numbers?",
        gu: "શોરૂમના સમય અને સંપર્ક નંબર શું છે?",
      },
      answer: {
        en: "We are open Monday through Saturday from 10:00 AM to 8:00 PM (closed on Sunday). You can reach our concierge desk at +91 99255 79633 or message us directly on WhatsApp.",
        gu: "સોમવારથી શનિવાર સવારે ૧૦:૦૦ થી રાત્રે ૮:૦૦ વાગ્યા સુધી (રવિવારે બંધ). સંપર્ક: +૯૧ ૯૯૨૫૫ ૭૯૬૩૩.",
      },
      keywords: ["hours", "timings", "sunday", "phone", "contact", "open"],
    },
    {
      id: "famous-for",
      category: "services",
      question: {
        en: "What is Girishbhai Gandevikar Jewellers most famous for?",
        gu: "ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ શેના માટે પ્રખ્યાત છે?",
      },
      answer: {
        en: "We are celebrated for imperial bridal suites, handcrafted Jadau and uncut Polki diamond necklaces, authentic Gujarati Meenakari, bespoke heirloom restoration, royal men's regalia (kalgis and kurta buttons), and the trusted Suvarna Vruddhi Yojana gold scheme.",
        gu: "અમે ભવ્ય લગ્ન ચોકર સેટ, અસલ પોલકી-જડતર, મીનાકારી, કસ્ટમ રીમોડેલિંગ અને ૧૧+૧ સુવર્ણ વૃદ્ધિ યોજના માટે જાણીતા છીએ.",
      },
      keywords: ["famous for", "specialty", "polki", "bridal", "jadau", "meenakari"],
    },
    {
      id: "bis-hallmarking",
      category: "purity",
      question: {
        en: "Is all your gold 100% BIS Hallmarked with HUID?",
        gu: "શું તમારું સોનું ૧૦૦% BIS હોલમાર્ક અને HUID સાથે પ્રમાણિત છે?",
      },
      answer: {
        en: "Yes, without exception. Every single item of gold jewellery carries the official BIS hallmark along with the unique laser-engraved 6-digit alphanumeric HUID (Hallmark Unique Identification) code, allowing instant digital verification of karat purity.",
        gu: "હા, સંપૂર્ણપણે. અમારો દરેક દાગીનો સરકાર માન્ય ૧૦૦% BIS હોલમાર્ક અને ૬ આંકડાના અનોખા HUID કોડ સાથે જ મળે છે.",
      },
      keywords: ["bis", "hallmark", "huid", "purity", "22k", "gold purity"],
    },
    {
      id: "gia-igi-diamonds",
      category: "purity",
      question: {
        en: "Do you supply GIA / IGI certifications for diamond jewellery?",
        gu: "શું હીરાના ઘરેણાં સાથે GIA / IGI લેબ સર્ટિફિકેટ મળે છે?",
      },
      answer: {
        en: "Yes. All natural diamonds used in our solitaires, engagement rings, and AMYA collection come with international grading reports from recognized gemological laboratories (such as GIA or IGI), verifying natural origin, cut, clarity, and carat weight.",
        gu: "હા, અમારા સોલિટેર અને ડાયમંડ ઘરેણાં GIA અથવા IGI જેવા આંતરરાષ્ટ્રીય લેબોરેટરી સર્ટિફિકેટ સાથે પ્રમાણિત હોય છે.",
      },
      keywords: ["gia", "igi", "diamond certificate", "natural diamond", "solitaire"],
    },
    {
      id: "suvarna-vruddhi-details",
      category: "scheme",
      question: {
        en: "How does the Suvarna Vruddhi Yojana (11+1) work?",
        gu: "સુવર્ણ વૃદ્ધિ યોજના (૧૧+૧) કેવી રીતે કામ કરે છે?",
      },
      answer: {
        en: "Under the Suvarna Vruddhi Yojana, you deposit a fixed monthly sum for 11 consecutive months. At the conclusion of the tenure, Girishbhai Gandevikar Jewellers contributes the 12th month's installment as our bonus, enabling you to acquire your desired gold or diamond jewellery with zero or privileged making charges.",
        gu: "આ યોજનામાં ૧૧ મહિના નિયમિત હપ્તા ભરવાના રહે છે. ૧૨મો મહિનો ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ તમારા ખાતામાં બોનસ તરીકે જમા કરે છે, જેથી તમે વિશેષ લાભ સાથે ઘરેણાં ખરીદી શકો છો.",
      },
      keywords: ["suvarna", "scheme", "11+1", "gold saving", "bonus", "monthly"],
    },
    {
      id: "jewellery-care-guide",
      category: "care",
      question: {
        en: "How should I store and clean my Polki, Jadau, and antique gold pieces?",
        gu: "પોલકી, જડતર અને સોનાના દાગીનાની સાચવણી કેવી રીતે કરવી?",
      },
      answer: {
        en: "Always store Polki and Jadau pieces in individual velvet or cotton-lined boxes away from moisture and direct perfumes. Avoid dipping Polki in water due to silver foil backings. We provide complimentary lifetime ultrasonic cleaning and prong inspection at our Alkapuri showroom anytime.",
        gu: "પોલકી અને જડતર ઘરેણાંને ભેજ અને પરફ્યુમથી દૂર અલગ બોક્સમાં રાખો. તેને પાણીમાં ન બોળવા. અમારા શોરૂમ પર ગમે ત્યારે વિનામૂલ્યે ક્લિનિંગ કરાવી શકાય છે.",
      },
      keywords: ["care", "cleaning", "maintenance", "polki care", "storage"],
    },
  ],
};
