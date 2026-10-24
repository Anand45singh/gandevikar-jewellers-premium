import { LocalizedString } from "./site";

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: LocalizedString;
  occasion?: string;
  verified: boolean;
}

export interface ReviewsPageData {
  summary: {
    averageRating: number;
    totalReviewsCount: number;
    displayRating: string;
    displayCount: string;
    googleMapsUrl: string;
    fiveStarPercentage: number;
  };
  hero: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    subtitle: LocalizedString;
    breadcrumb: LocalizedString;
  };
  reviews: ReviewItem[];
}

export const reviewsPageContent: ReviewsPageData = {
  summary: {
    averageRating: 4.9,
    totalReviewsCount: 4065,
    displayRating: "4.9",
    displayCount: "4,065+",
    googleMapsUrl: "https://maps.google.com/?q=Girishbhai+Gandevikar+Jewellers+Alkapuri+Vadodara",
    fiveStarPercentage: 98,
  },
  hero: {
    eyebrow: {
      en: "Patron Experiences & Google Reviews",
      gu: "ગ્રાહકોના વાસ્તવિક પ્રતિભાવો",
    },
    title: {
      en: "Generations of Unbroken Trust",
      gu: "પેઢીઓનો અતૂટ વિશ્વાસ",
    },
    subtitle: {
      en: "Rated 4.9/5 from 4,065+ genuine patron reviews across Vadodara and global connoisseurs.",
      gu: "૪,૦૬૫+ થી વધુ સંતુષ્ટ પરિવારો તરફથી ૪.૯/૫ ગુગલ રેટિંગ.",
    },
    breadcrumb: {
      en: "Home / Reviews",
      gu: "મુખ્ય પૃષ્ઠ / પ્રતિભાવ",
    },
  },
  reviews: [
    {
      id: "rev-1",
      name: "Radhika Gaekwad",
      location: "Vadodara",
      rating: 5,
      date: "2 months ago",
      occasion: "Bridal Jewellery",
      verified: true,
      text: {
        en: "Girishbhai Gandevikar Jewellers crafted my daughter's wedding Jadau choker and matching nath. The depth of finishing, traditional Meenakari reverse, and weight balance were truly worthy of our royal heritage. Unmatched transparency.",
        gu: "મારી દીકરીના લગ્નના દાગીના અહીંથી બનાવડાવ્યા હતા. જડતર અને પાછળની મીનાકારી અદ્ભુત હતી. વજન અને શુદ્ધતા બંનેમાં સંપૂર્ણ સંતોષ મળ્યો.",
      },
    },
    {
      id: "rev-2",
      name: "Dr. Biren & Sangeeta Patel",
      location: "Vadodara / Chicago",
      rating: 5,
      date: "3 months ago",
      occasion: "Heirloom Redesign",
      verified: true,
      text: {
        en: "We brought my grandmother's 70-year-old heirloom necklace for restoration and redesign. The sensitivity with which their karigars preserved the original gold work while modernizing the lock and setting was breathtaking.",
        gu: "મારા બાના ૭૦ વર્ષ જૂના હારનું રીમોડેલિંગ કરાવ્યું. જૂની ડિઝાઇનનું ગૌરવ જાળવીને નવો લૂક આપ્યો. અદભુત કારીગરી!",
      },
    },
    {
      id: "rev-3",
      name: "Meera & Jay Shah",
      location: "Ahmedabad",
      rating: 5,
      date: "4 months ago",
      occasion: "Suvarna Scheme & Solitaire",
      verified: true,
      text: {
        en: "We completed our Suvarna Vruddhi Yojana (11+1) scheme and redeemed it for our engagement solitaire set. The transparency in diamond grading and zero hidden charges made the experience completely worry-free.",
        gu: "૧૧+૧ સુવર્ણ વૃદ્ધિ યોજના પૂરી કરી સગાઈની રિંગ ખરીદી. ૧૨મો મહિનો બોનસ મળ્યો અને હોલમાર્કિંગમાં ૧૦૦% પારદર્શકતા રહી.",
      },
    },
    {
      id: "rev-4",
      name: "Pratiksha Amin",
      location: "Vadodara",
      rating: 5,
      date: "5 months ago",
      occasion: "Festive Gold Purchase",
      verified: true,
      text: {
        en: "Warmest family hospitality in Vadodara. The staff took ample time to show us different weights of 22K bangles without any rush. Authentic gold hallmark certificate provided on the spot.",
        gu: "વડોદરામાં સૌથી ઉત્તમ સ્ટાફ અને પારિવારિક વાતાવરણ. કોઈપણ ઉતાવળ વગર સુંદર બંગડીઓ બતાવી અને તરત જ પાકું બિલ-હોલમાર્ક આપ્યું.",
      },
    },
    {
      id: "rev-5",
      name: "Karan Desai",
      location: "Mumbai",
      rating: 5,
      date: "6 months ago",
      occasion: "Men's Regalia",
      verified: true,
      text: {
        en: "Ordered royal kurta buttons and a polki safa kalgi for my brother's wedding. Delivered safely in Mumbai in royal packaging with all certificates. Extraordinary craft.",
        gu: "લગ્ન માટે કુરતા બટન અને કલગી મંગાવ્યા હતા. મુંબઈ ખાતે સલામત ડિલિવરી મળી અને ફિનિશિંગ ક્લાસિક હતું.",
      },
    },
    {
      id: "rev-6",
      name: "Anjali & Harshvardhan Joshi",
      location: "Vadodara",
      rating: 5,
      date: "8 months ago",
      occasion: "Everyday Diamond Jewellery",
      verified: true,
      text: {
        en: "Purchased an AMYA diamond necklace and stackable ring. Modern, featherlight, and perfect for office wear. Gandevikar trust with contemporary beauty.",
        gu: "AMYA કલેક્શનમાંથી ડેઇલી વેર ડાયમંડ નેકલેસ લીધો. રોજ પહેરવા માટે એકદમ પરફેક્ટ અને લાઇટવેઇટ છે.",
      },
    },
  ],
};
