import { LocalizedString } from "./site";

export interface NavItem {
  title: LocalizedString;
  href: string;
  children?: {
    title: LocalizedString;
    href: string;
    description?: LocalizedString;
  }[];
}

export const navigationContent: {
  topBarNote: LocalizedString;
  ctaButton: {
    label: LocalizedString;
    href: string;
  };
  mainNav: NavItem[];
} = {
  topBarNote: {
    en: "Royal Goldsmiths to the Gaekwad Dynasty • Handcrafting Heirlooms Since 1927",
    gu: "ગાયકવાડ રાજવંશના સુવર્ણકારો • ૧૯૨૭ થી વારસાગત કળા",
  },
  ctaButton: {
    label: { en: "Book Appointment", gu: "મુલાકાત બુક કરો" },
    href: "/contact",
  },
  mainNav: [
    {
      title: { en: "HOME", gu: "મુખ્ય પૃષ્ઠ" },
      href: "/",
    },
    {
      title: { en: "JEWELLERY & SERVICES", gu: "ઘરેણાં અને સેવાઓ" },
      href: "/collections",
      children: [
        { title: { en: "Polki & Jadau", gu: "પોલકી અને જડતર" }, href: "/collections#polki" },
        { title: { en: "Bridal Heirloom", gu: "લગ્ન આભૂષણો" }, href: "/collections#bridal" },
        { title: { en: "Bespoke Services", gu: "વિશિષ્ટ સેવાઓ" }, href: "/services" },
      ],
    },
    {
      title: { en: "AMYA", gu: "AMYA" },
      href: "/amya",
    },
    {
      title: { en: "TIMELINE", gu: "ઇતિહાસ યાત્રા" },
      href: "/timeline",
    },
    {
      title: { en: "REVIEWS", gu: "પ્રતિભાવ" },
      href: "/reviews",
    },
    {
      title: { en: "JOURNAL", gu: "બ્લોગ & લેખ" },
      href: "/journal",
    },
    {
      title: { en: "FAQS", gu: "વારંવાર પૂછાતા પ્રશ્નો" },
      href: "/faq",
    },
    {
      title: { en: "CONTACT", gu: "સંપર્ક" },
      href: "/contact",
    },
  ],
};
