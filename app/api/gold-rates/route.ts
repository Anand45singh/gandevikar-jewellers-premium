import { NextResponse } from "next/server";
import { getGoldRates } from "@/lib/goldRates";

export const dynamic = "force-dynamic";
export const revalidate = 60; // 1 minute cache

export async function GET() {
  try {
    const data = await getGoldRates();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      {
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
      },
      { status: 200 }
    );
  }
}
