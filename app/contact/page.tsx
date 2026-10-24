"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  MapPin,
  Phone,
  Clock,
  Compass,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";

const appointmentSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  occasion: z.string().min(1, "Please select an occasion"),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().optional(), // Bot field
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export default function ContactPage() {
  const { t } = useLanguage();
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      occasion: "Bridal Trousseau & High Jewellery",
      preferredDate: "",
      message: "",
      honeypot: "",
    },
  });

  // Live "Open now / Closed" status computed in Indian Standard Time (IST)
  useEffect(() => {
    const checkISTHours = () => {
      // Calculate current IST time
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5); // UTC + 5:30

      const dayOfWeek = istTime.getDay(); // 0 is Sunday
      const hour = istTime.getHours();

      // Closed Sunday; Mon–Sat 10:00 to 20:00
      if (dayOfWeek === 0) {
        setIsOpenNow(false);
      } else if (hour >= 10 && hour < 20) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };

    checkISTHours();
    const interval = setInterval(checkISTHours, 60000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data: AppointmentFormValues) => {
    setSubmitError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Unable to submit form. Please call or WhatsApp our store.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || "An error occurred.");
    }
  };

  const handleSendOnWhatsApp = () => {
    const values = watch();
    const text = encodeURIComponent(
      `Namaste, I would like to schedule a private visit to your Vadodara atelier.\nName: ${values.fullName || "Prospective Patron"}\nPhone: ${values.phone || "Not specified"}\nOccasion: ${values.occasion}\nDate: ${values.preferredDate || "Convenient slot"}\nMessage: ${values.message || "None"}`
    );
    window.open(`https://wa.me/919925579633?text=${text}`, "_blank");
  };

  return (
    <>
      {/* 1. Cinematic Page Header */}
      <PageHeader
        breadcrumb="Home / Contact Concierge"
        eyebrow="Vadodara Flagship Atelier"
        title="Contact Concierge & Private Salon"
        subtitle="Schedule a private bridal appointment or discuss bespoke creations at our historic Vadodara showroom."
        bgVariant="gradient"
      />

      <Section variant="ivory" padding="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Showroom Details & Live Hours */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-1.5 block">
                  Alkapuri Atelier
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink leading-tight mb-4">
                  {t(siteContent.name)}
                </h2>
                <div className="w-24 h-0.5 bg-gold mb-6" />

                {/* Live IST Status Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-white mb-6">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-red-500"
                    }`}
                  />
                  <span className="text-xs uppercase tracking-royal font-medium text-ink">
                    {isOpenNow ? "Open Now (IST)" : "Closed Now • Opens 10:00 AM IST"}
                  </span>
                </div>
              </div>

              {/* Verified Address */}
              <div className="space-y-4 text-sm font-light text-ink bg-white p-6 border border-gold/30 shadow-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-base font-normal text-ink mb-1">Flagship Address</h4>
                    <p className="leading-relaxed">{t(siteContent.address.full)}</p>
                    <p className="text-xs text-ink-muted mt-1">
                      Landmark: {t(siteContent.address.landmark)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-gold/15">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-base font-normal text-ink mb-1">Showroom Timings</h4>
                    <p>{t(siteContent.hours.days)}: {t(siteContent.hours.timing)}</p>
                    <p className="text-xs text-maroon font-medium">{t(siteContent.hours.closed)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-gold/15">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-base font-normal text-ink mb-1">Direct Hotline / WhatsApp</h4>
                    <a href={`tel:${siteContent.phone}`} className="hover:text-maroon transition-colors block font-medium">
                      {siteContent.displayPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={siteContent.geo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full bg-maroon text-ivory px-6 py-3.5 text-xs font-sans font-medium uppercase tracking-royal-wide hover:bg-maroon-light shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-gold" />
                <span>Get Driving Directions on Google Maps</span>
              </a>

              {/* Embedded Google Map (Lazy loaded iframe) */}
              <div className="relative aspect-[16/10] w-full border border-gold/30 overflow-hidden shadow-sm bg-obsidian-surface">
                <iframe
                  title="Girishbhai Gandevikar Jewellers Showroom Map"
                  src={siteContent.geo.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Right Column: Private Appointment Booking Form */}
            <div className="lg:col-span-7 bg-white border border-gold/30 p-8 sm:p-12 shadow-md">
              <span className="text-[10px] font-sans uppercase tracking-royal-wide text-maroon font-medium mb-1.5 block">
                Exclusive Salon Sitting
              </span>
              <h3 className="font-serif text-3xl font-normal text-ink mb-2">
                Book a Private Consultation
              </h3>
              <p className="text-xs font-light text-ink-muted leading-relaxed mb-8">
                Reserve an undisturbed appointment with our senior jewellery curators for bespoke bridal trousseau design, uncut Polki selections, or ancestral gold valuation.
              </p>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center bg-ivory p-8 border border-gold/30">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mb-4" />
                  <h4 className="font-serif text-3xl text-ink font-normal mb-2">
                    Consultation Requested
                  </h4>
                  <p className="text-sm font-light text-ink-muted max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out. Our royal concierge in Vadodara will verify your preferred time and confirm your salon booking shortly.
                  </p>
                  <Button variant="solid-maroon" onClick={() => setSubmitted(false)}>
                    Book Another Sitting
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Honeypot field (hidden from real users to trap spam bots) */}
                  <input
                    type="text"
                    {...register("honeypot")}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-royal text-ink font-medium mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register("fullName")}
                        placeholder="e.g. Radhika Gaekwad"
                        className="w-full bg-ivory border border-gold/40 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-maroon"
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-maroon mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-royal text-ink font-medium mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        placeholder="+91 99000 00000"
                        className="w-full bg-ivory border border-gold/40 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-maroon"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-maroon mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-royal text-ink font-medium mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="patron@domain.com"
                        className="w-full bg-ivory border border-gold/40 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-maroon"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-maroon mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-royal text-ink font-medium mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        {...register("preferredDate")}
                        className="w-full bg-ivory border border-gold/40 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-maroon"
                      />
                    </div>
                  </div>

                  {/* Occasion select */}
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-royal text-ink font-medium mb-1.5">
                      Consultation Purpose *
                    </label>
                    <select
                      {...register("occasion")}
                      className="w-full bg-ivory border border-gold/40 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-maroon"
                    >
                      <option value="Bridal Trousseau & High Jewellery">Bridal Trousseau & High Jewellery</option>
                      <option value="Uncut Polki & Jadau Suite">Uncut Polki & Jadau Suite</option>
                      <option value="Diamond Engagement Solitaire">Diamond Engagement Solitaire</option>
                      <option value="Suvarna Vruddhi (11+1) Enrolment">Suvarna Vruddhi (11+1) Enrolment</option>
                      <option value="Heirloom Redesign & Valuation">Heirloom Redesign & Valuation</option>
                      <option value="Corporate Gold Coins & Gifting">Corporate Gold Coins & Gifting</option>
                      <option value="AMYA Everyday Silver & Diamond Line">AMYA Everyday Silver & Diamond Line</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-royal text-ink font-medium mb-1.5">
                      Specific Notes or Design Vision
                    </label>
                    <textarea
                      rows={3}
                      {...register("message")}
                      placeholder="Share any special motifs, dates, or family heirloom details you would like us to prepare for..."
                      className="w-full bg-ivory border border-gold/40 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-maroon"
                    />
                  </div>

                  {submitError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700">
                      {submitError}
                    </div>
                  )}

                  {/* Submission and Alternative WhatsApp Action */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      type="submit"
                      variant="solid-maroon"
                      size="default"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex-1"
                    >
                      {isSubmitting ? "Submitting Request..." : "Request Salon Appointment"}
                    </Button>

                    <button
                      type="button"
                      onClick={handleSendOnWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-sans uppercase tracking-royal font-medium transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-200" />
                      <span>Send on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
