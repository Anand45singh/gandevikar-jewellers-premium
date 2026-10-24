import { LocalizedString } from "./site";

export interface TimelineMilestone {
  year: string;
  generation: LocalizedString;
  title: LocalizedString;
  leadSnippet: LocalizedString;
  description: LocalizedString;
  bulletPoints: LocalizedString[];
  image: string;
  badge: string;
}

export interface TimelinePageData {
  hero: {
    title: LocalizedString;
    eyebrow: LocalizedString;
    subtitle: LocalizedString;
    breadcrumb: LocalizedString;
  };
  narrativeOverview: {
    heading: LocalizedString;
    quote: LocalizedString;
    founderName: LocalizedString;
  };
  milestones: TimelineMilestone[];
}

export const timelinePageContent: TimelinePageData = {
  hero: {
    title: {
      en: "100-Year Heritage",
      gu: "૧૦૦ વર્ષનો ઐતિહાસિક વારસો",
    },
    eyebrow: {
      en: "From Royal Goldsmiths of Baroda to Third-Generation Masters",
      gu: "ગાયકવાડ રાજદરબારના સુવર્ણકારોથી ત્રીજી પેઢી સુધી",
    },
    subtitle: {
      en: "The chronological chronicle of Girishbhai Gandevikar Jewellers: four generations of unwavering purity, master karigari, and royal Gaekwad patronage in Vadodara since 1927.",
      gu: "૧૯૨૭ થી વડોદરામાં શુદ્ધ સોનું, અતૂટ વિશ્વાસ અને રાજસી પરંપરાનું સદી લાંબુ સફર.",
    },
    breadcrumb: {
      en: "Home / Heritage Timeline",
      gu: "મુખ્ય પૃષ્ઠ / ઇતિહાસ",
    },
  },
  narrativeOverview: {
    heading: {
      en: "A Century of Sovereign Trust",
      gu: "વિશ્વાસ અને સન્માનની સદી",
    },
    quote: {
      en: "Purity is not a commercial policy; it is our sacred family pledge to every bride and patron who crosses our threshold.",
      gu: "શુદ્ધતા એ કોઈ વ્યાપારી નીતિ નથી, પરંતુ અમારા ઉંબરે પગ મૂકનાર દરેક પરિવારને આપેલો અમારો પવિત્ર પારિવારિક કોલ છે.",
    },
    founderName: {
      en: "Late Shri Laxmanrao Mahadevrao Gandevikar (Shethji)",
      gu: "સ્વ. શ્રી લક્ષ્મણરાવ મહાદેવરાવ ગાંડેવીકર (શેઠજી)",
    },
  },
  milestones: [
    {
      year: "1927",
      badge: "Founding Era",
      generation: { en: "1st Generation • Late Shri Laxmanrao Mahadevrao Gandevikar", gu: "પ્રથમ પેઢી • સ્વ. શ્રી લક્ષ્મણરાવ મહાદેવરાવ ગાંડેવીકર" },
      title: {
        en: "Inception by Shethji & Royal Court Patronage",
        gu: "શેઠજી દ્વારા સ્થાપના અને ગાયકવાડ રાજદરબારની માન્યતા",
      },
      leadSnippet: {
        en: "Founded by Late Shri Laxmanrao Mahadevrao Gandevikar (affectionately remembered as Shethji), a visionary master artisan and jeweller.",
        gu: "માસ્ટર આર્ટિઝન અને સ્વપ્નદ્રષ્ટા શેઠજી દ્વારા વડોદરાના ઐતિહાસિક બજારમાં પાયો નંખાયો.",
      },
      description: {
        en: "Operating from a dedicated workshop near Mandvi in the historic capital of Baroda State, Shethji earned the respect of Maharaja Sayajirao Gaekwad III's royal household. His hallmark was absolute metallurgical purity, unmatched hand-filigree, and custom regalia for court ceremonies.",
        gu: "માંડવી નજીક શરૂ થયેલી આ વર્કશોપે પોતાની બેજોડ શુદ્ધતા અને ઉત્કૃષ્ટ ઘડતરથી વડોદરાના રાજવી પરિવારો અને ગાયકવાડ દરબારીઓનું દિલ જીતી લીધું.",
      },
      bulletPoints: [
        { en: "Appointment as trusted goldsmiths to courtiers of the Gaekwad dynasty", gu: "ગાયકવાડ રાજવંશના દરબારીઓ માટે વિશિષ્ટ આભૂષણોનું ઘડતર" },
        { en: "Pioneered transparent karat weighing in old Baroda bazaars", gu: "પારદર્શક વજન અને શુદ્ધતાના નિયમોની સ્થાપના" },
      ],
      image: "/images/ggj/scroll1.webp",
    },
    {
      year: "1950s - 1970s",
      badge: "Second Generation",
      generation: { en: "2nd Generation • Shri Girishbhai Gandevikar & Family", gu: "દ્વિતીય પેઢી • શ્રી ગિરીશભાઈ ગાંડેવીકર અને પરિવાર" },
      title: {
        en: "From Modest 10'x10' Workshop to Vadodara Institution",
        gu: "૧૦'x૧૦' ની નાની વર્કશોપથી વડોદરાની વિશ્વસનીય પેઢી",
      },
      leadSnippet: {
        en: "Transitioned from a modest workbench display into a celebrated regional jewellery house under the stewardship of Girishbhai Gandevikar.",
        gu: "શ્રી ગિરીશભાઈના નેતૃત્વમાં પેઢીએ વિશાળ લોકચાહના અને વિશ્વાસ સંપાદન કર્યો.",
      },
      description: {
        en: "While other jewellers expanded into mass casting, Girishbhai doubled down on master karigari—procuring syndicate-cut uncut Polki diamonds, Burmese rubies, and Colombian emeralds for majestic Gujarati bridal trousseaus while upholding zero-compromise hallmarked gold purity.",
        gu: "ગિરીશભાઈએ પરંપરાગત હાથકારીગરી, પોલકી ડાયમંડ્સ અને શુદ્ધ ગોલ્ડ જ્વેલરી પર ભાર મૂકી પેઢીને ગુજરાતભરમાં અગ્રેસર સ્થાન અપાવ્યું.",
      },
      bulletPoints: [
        { en: "Introduction of syndicate Polki sets and traditional Meenakari", gu: "સિન્ડિકેટ પોલકી અને મીનાકારી સેટ્સનું વિસ્તરણ" },
        { en: "Generations of Baroda brides visiting as a rite of passage", gu: "વડોદરાના પરિવારો માટે લગ્ન ખરીદીનું કાયમી સરનામું" },
      ],
      image: "/images/ggj/scroll2.webp",
    },
    {
      year: "2000s",
      badge: "Community Trust",
      generation: { en: "Bridging Traditions with Financial Security", gu: "પરંપરા અને નાણાકીય સુરક્ષાનો સમન્વય" },
      title: {
        en: "Launch of Suvarna Vruddhi Yojana",
        gu: "સુવર્ણ વૃદ્ધિ યોજનાની શરૂઆત",
      },
      leadSnippet: {
        en: "Introduced the landmark 11+1 gold accumulation plan to empower families to plan for weddings and secure their futures effortlessly.",
        gu: "પરિવારો સરળતાથી સોનાની ખરીદીનું આયોજન કરી શકે તે માટે ૧૧+૧ યોજના શરૂ કરાઈ.",
      },
      description: {
        en: "Recognizing that bridal jewellery represents a family's lifetime savings, the Suvarna Vruddhi Yojana allowed patrons to accumulate gold over 11 months, with Girishbhai Gandevikar Jewellers contributing the 12th month as a token of goodwill and partnership.",
        gu: "૧૧ મહિનાના નિયમિત હપ્તા બાદ ૧૨મો મહિનો પેઢી તરફથી ભેટ આપવાની આ પારદર્શક યોજના ખૂબ લોકપ્રિય બની.",
      },
      bulletPoints: [
        { en: "Thousands of completed bridal savings cycles in Gujarat", gu: "ગુજરાતના હજારો પરિવારોએ યોજનાનો લાભ લીધો" },
        { en: "Guaranteed purity with zero hidden deduction clauses", gu: "કોઈપણ છૂપા ચાર્જ વગર ૧૦૦% પારદર્શકતા" },
      ],
      image: "/images/Suvarna_Vruddhi_Yojana.webp",
    },
    {
      year: "Present Day",
      badge: "Third Generation",
      generation: { en: "3rd Generation • Modern Flagship & AMYA Launch", gu: "ત્રીજી પેઢી • આધુનિક શોરૂમ અને AMYA બ્રાન્ડ" },
      title: {
        en: "Flagship Showroom on Jetalpur Road & The AMYA Everyday Line",
        gu: "જેતલપુર રોડ પર ભવ્ય ફ્લેગશિપ શોરૂમ અને AMYA સંગ્રહ",
      },
      leadSnippet: {
        en: "Carrying that trust forward into a modern flagship space on Jetalpur Road, Alkapuri, and launching AMYA for contemporary daily brilliance.",
        gu: "આધુનિક ગ્રાહકો માટે જેતલપુર રોડ પર ભવ્ય શોરૂમ અને રોજિંદા પહેરવેશ માટે AMYA લાઇન.",
      },
      description: {
        en: "Today, the third generation bridges antique Gaekwad court artistry with cutting-edge 3D CAD modeling, 100% BIS HUID hallmarking, and the AMYA everyday 925 silver & diamond line delivered across India, ensuring the Gandevikar name shines brightly into its second century.",
        gu: "આજે ત્રીજી પેઢી પરંપરાગત રોયલ ડિઝાઇન સાથે આધુનિક ટેકનોલોજી, સરકારી હોલમાર્કિંગ અને AMYA સંગ્રહ સાથે આગળ વધી રહી છે.",
      },
      bulletPoints: [
        { en: "Expanded flagship atelier with private bridal preview lounges", gu: "ખાનગી બ્રાઇડલ લોન્જ સાથેનો ભવ્ય શોરૂમ" },
        { en: "Pan-India insured doorstep delivery for AMYA contemporary line", gu: "AMYA કલેક્શનની સમગ્ર ભારતમાં સુરક્ષિત હોમ ડિલિવરી" },
      ],
      image: "/images/store.webp",
    },
  ],
};
