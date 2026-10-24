import { NextResponse } from "next/server";
import * as z from "zod";

const enquirySchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal("")),
  occasion: z.string().min(1),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().optional(), // Bot honeypot field
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check honeypot: if filled, quietly reject bot submission
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Request received" }, { status: 200 });
    }

    const validatedData = enquirySchema.parse(body);

    // In production, dispatch email/SMS or forward to CRM/WhatsApp Webhook
    console.log("Verified Consultation Enquiry Received:", {
      name: validatedData.fullName,
      phone: validatedData.phone,
      occasion: validatedData.occasion,
      date: validatedData.preferredDate,
      time: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Your private consultation request has been received. Our concierge will contact you shortly.",
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: "Validation error", errors: err.errors || err.message },
      { status: 400 }
    );
  }
}
