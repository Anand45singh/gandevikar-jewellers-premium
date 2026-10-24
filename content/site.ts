export interface LocalizedString {
  en: string;
  gu?: string;
}

export interface SiteConfig {
  name: { en: string; gu?: string };
  tagline: { en: string; gu?: string };
  foundingYear: number;
  courtTitle: { en: string; gu?: string };
  phone: string;
  displayPhone: string;
  email: string;
  address: {
    street: { en: string; gu?: string };
    landmark: { en: string; gu?: string };
    area: { en: string; gu?: string };
    city: { en: string; gu?: string };
    state: { en: string; gu?: string };
    pincode: string;
    country: { en: string; gu?: string };
    full: { en: string; gu?: string };
  };
  hours: {
    days: { en: string; gu?: string };
    timing: { en: string; gu?: string };
    closed: { en: string; gu?: string };
    openHour: number; // 10 AM
    closeHour: number; // 20 (8 PM)
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    whatsapp: string;
    youtube?: string;
  };
  geo: {
    latitude: number;
    longitude: number;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
}

export const siteContent: SiteConfig = {
  name: {
    en: "Girishbhai Gandevikar Jewellers",
    gu: "ગિરીશભાઈ ગાંડેવીકર જ્વેલર્સ",
  },
  tagline: {
    en: "Royal Goldsmiths to the Gaekwad Dynasty",
    gu: "ગાયકવાડ રાજવંશના રાજસી સુવર્ણકારો",
  },
  foundingYear: 1927,
  courtTitle: {
    en: "Purveyors of Heirloom & Fine Jewellery to the Royal Court of Baroda",
    gu: "વડોદરાના રાજદરબારના વારસાગત અને ઉત્કૃષ્ટ આભૂષણોના સર્જક",
  },
  phone: "+919925579633",
  displayPhone: "+91 99255 79633",
  email: "contact@girishbhaigandevikar.com",
  address: {
    street: { en: "B-3 Anand Nagar Society", gu: "B-3 આનંદ નગર સોસાયટી" },
    landmark: { en: "Jetalpur Road Char Rasta, Opp. Kashi Vishweshwar Temple", gu: "જેતલપુર રોડ ચાર રસ્તા, કાશી વિશ્વેશ્વર મંદિર સામે" },
    area: { en: "Alkapuri", gu: "અલકાપુરી" },
    city: { en: "Vadodara", gu: "વડોદરા" },
    state: { en: "Gujarat", gu: "ગુજરાત" },
    pincode: "390007",
    country: { en: "India", gu: "ભારત" },
    full: {
      en: "B-3 Anand Nagar Society, Jetalpur Road Char Rasta, opp. Kashi Vishweshwar Temple, Alkapuri, Vadodara, Gujarat 390007",
      gu: "B-3 આનંદ નગર સોસાયટી, જેતલપુર રોડ ચાર રસ્તા, કાશી વિશ્વેશ્વર મંદિર સામે, અલકાપુરી, વડોદરા, ગુજરાત ૩૯૦૦૦૭",
    },
  },
  hours: {
    days: { en: "Monday – Saturday", gu: "સોમવાર – શનિવાર" },
    timing: { en: "10:00 AM – 8:00 PM", gu: "૧૦:૦૦ સવારે – ૮:૦૦ સાંજે" },
    closed: { en: "Sunday Closed", gu: "રવિવાર બંધ" },
    openHour: 10,
    closeHour: 20,
  },
  socialLinks: {
    instagram: "https://www.instagram.com/girishbhaigandevikar",
    facebook: "https://www.facebook.com/girishbhaigandevikar",
    whatsapp: "https://wa.me/919925579633?text=Namaste%2C%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collection.",
    youtube: "https://www.youtube.com/@girishbhaigandevikar",
  },
  geo: {
    latitude: 22.3105,
    longitude: 73.1722,
    googleMapsUrl: "https://maps.google.com/?q=Girishbhai+Gandevikar+Jewellers+Alkapuri+Vadodara",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3283286395914!2d73.16962297598818!3d22.31054597967926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b000000001%3A0x1c676d3e8e19574!2sGirishbhai%20Gandevikar%20Jewellers!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
};
