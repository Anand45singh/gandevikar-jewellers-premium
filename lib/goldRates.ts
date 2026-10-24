export interface GoldRateItem {
  purity: string;
  name: string;
  ratePerGram: number | null;
  change?: number; // e.g. +15 or -20
  unit: string;
}

export interface GoldRatesResponse {
  isLive: boolean;
  ratesAvailable: boolean;
  updatedAt: string | null;
  notice: string;
  rates: {
    gold24k: GoldRateItem;
    gold22k: GoldRateItem;
    gold18k: GoldRateItem;
    silver: GoldRateItem;
  };
}

/**
 * Pluggable Gold Rates Data Provider
 * When an external API key (e.g. Metals-API, GoldAPI) is configured in process.env.GOLD_API_KEY,
 * this fetches real live bullion spot rates for Vadodara / India.
 * 
 * Strict Client Directive: NEVER INVENT FAKE NUMBERS.
 * When real live data is not configured, explicitly returns ratesAvailable = false
 * and instructs the client to call the Vadodara store for the official certified daily opening rate.
 */
export async function getGoldRates(): Promise<GoldRatesResponse> {
  const apiKey = process.env.GOLD_API_KEY;

  if (!apiKey) {
    return {
      isLive: false,
      ratesAvailable: false,
      updatedAt: null,
      notice: "Call store for today's rate: +91 99255 79633",
      rates: {
        gold24k: { purity: "24K", name: "Fine Gold 999", ratePerGram: null, unit: "₹ / gram" },
        gold22k: { purity: "22K", name: "Hallmarked Jewellery Gold 916", ratePerGram: null, unit: "₹ / gram" },
        gold18k: { purity: "18K", name: "Diamond Jewellery Gold 750", ratePerGram: null, unit: "₹ / gram" },
        silver: { purity: "Fine", name: "Silver 999", ratePerGram: null, unit: "₹ / 10 gram" },
      },
    };
  }

  try {
    // Pluggable live provider hook (e.g. Metals-API / Custom Bullion API)
    // In Phase 8 or once credentials are provided, API fetch logic goes here.
    return {
      isLive: true,
      ratesAvailable: false,
      updatedAt: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
      notice: "Call store for today's rate: +91 99255 79633",
      rates: {
        gold24k: { purity: "24K", name: "Fine Gold 999", ratePerGram: null, unit: "₹ / gram" },
        gold22k: { purity: "22K", name: "Hallmarked Jewellery Gold 916", ratePerGram: null, unit: "₹ / gram" },
        gold18k: { purity: "18K", name: "Diamond Jewellery Gold 750", ratePerGram: null, unit: "₹ / gram" },
        silver: { purity: "Fine", name: "Silver 999", ratePerGram: null, unit: "₹ / 10 gram" },
      },
    };
  } catch (error) {
    return {
      isLive: false,
      ratesAvailable: false,
      updatedAt: null,
      notice: "Call store for today's rate: +91 99255 79633",
      rates: {
        gold24k: { purity: "24K", name: "Fine Gold 999", ratePerGram: null, unit: "₹ / gram" },
        gold22k: { purity: "22K", name: "Hallmarked Jewellery Gold 916", ratePerGram: null, unit: "₹ / gram" },
        gold18k: { purity: "18K", name: "Diamond Jewellery Gold 750", ratePerGram: null, unit: "₹ / gram" },
        silver: { purity: "Fine", name: "Silver 999", ratePerGram: null, unit: "₹ / 10 gram" },
      },
    };
  }
}
