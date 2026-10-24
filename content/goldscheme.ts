export interface SchemeTier {
  monthlyAmount: number;
  tenureMonths: number;
  customerTotal: number;
  storeContributionBonus: number;
  totalMaturityValue: number;
  highlights: string[];
}

export const goldSchemeContent: {
  name: string;
  subtitle: string;
  badge: string;
  description: string;
  tenure: string;
  image: string;
  benefits: { title: string; desc: string }[];
  steps: { step: number; title: string; description: string }[];
  tiers: SchemeTier[];
  termsAndConditions: string[];
} = {
  name: "Suvarna Vruddhi Yojana",
  subtitle: "Disciplined Gold Accumulation with Guaranteed Goldsmith Bonus",
  badge: "Government Hallmarked 100% Purity",
  description:
    "An intelligent, risk-mitigated gold accumulation plan designed by Girishbhai Gandevikar Jewellers to assist families in preparing for auspicious weddings, anniversaries, and festive celebrations.",
  tenure: "11 Months Scheme",
  image: "/images/Suvarna_Vruddhi_Yojana.webp",
  benefits: [
    {
      title: "Store Bonus Contribution",
      desc: "Upon punctual completion of 11 instalments, Girishbhai Gandevikar Jewellers contributes a generous bonus toward your final jewellery purchase.",
    },
    {
      title: "Hedge Against Gold Volatility",
      desc: "Average out fluctuations in market gold rates through steady, monthly disciplined contributions.",
    },
    {
      title: "Special Making Charge Concession",
      desc: "Redeem your accumulated corpus against exquisite Polki, Jadau, Gold or Diamond pieces with privileged making charges.",
    },
    {
      title: "100% BIS Hallmarked Redemption",
      desc: "Every gram redeemed carries government-certified HUID hallmark and international diamond grading.",
    },
  ],
  steps: [
    {
      step: 1,
      title: "Select Monthly Amount",
      description: "Choose a comfortable fixed monthly instalment starting from ₹2,000 up to ₹50,000+.",
    },
    {
      step: 2,
      title: "Deposit for 11 Consecutive Months",
      description: "Pay conveniently via UPI, net-banking, or in-person at our Vadodara showroom.",
    },
    {
      step: 3,
      title: "Receive Store Contribution",
      description: "We add our special bonus contribution directly into your scheme account.",
    },
    {
      step: 4,
      title: "Select Your Heirloom",
      description: "Choose your dream jewellery with special VIP making-charge concessions at the atelier.",
    },
  ],
  tiers: [
    {
      monthlyAmount: 5000,
      tenureMonths: 11,
      customerTotal: 55000,
      storeContributionBonus: 5000,
      totalMaturityValue: 60000,
      highlights: ["Ideal for festive gold coins and everyday diamond rings", "Privileged making charge rates"],
    },
    {
      monthlyAmount: 10000,
      tenureMonths: 11,
      customerTotal: 110000,
      storeContributionBonus: 10000,
      totalMaturityValue: 120000,
      highlights: ["Perfect for bridal bangles, necklaces, and polki earrings", "Complimentary appraisal"],
    },
    {
      monthlyAmount: 25000,
      tenureMonths: 11,
      customerTotal: 275000,
      storeContributionBonus: 25000,
      totalMaturityValue: 300000,
      highlights: ["Tailored for bridal trousseau sets and bespoke commissions", "Private salon preview booking"],
    },
  ],
  termsAndConditions: [
    "Instalments must be paid regularly on or before the due date each month.",
    "Redemption is applicable against gold, diamond, polki, and gemstone jewellery at our Vadodara showroom.",
    "Cash refunds are not permissible under standard bullion accumulation regulations.",
    "Government GST as applicable will be charged at the time of final jewellery billing.",
  ],
};
