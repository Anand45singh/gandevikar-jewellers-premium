"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/content/site";
import { CheckCircle2, Phone, Calendar, MessageSquare } from "lucide-react";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  interest: z.string().min(1, "Please select your service of interest"),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: string;
}

export function EnquiryModal({ isOpen, onClose, defaultInterest }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      interest: defaultInterest || "Bespoke Bridal Suite Consultation",
      preferredDate: "",
      message: "",
    },
  });

  useEffect(() => {
    if (defaultInterest) {
      setValue("interest", defaultInterest);
    }
  }, [defaultInterest, setValue]);

  const onSubmit = async (data: EnquiryFormValues) => {
    // Generate WhatsApp direct text or send to store
    const text = encodeURIComponent(
      `Namaste, I would like to enquire about: ${data.interest}.\nName: ${data.fullName}\nPhone: ${data.phone}\nPreferred Date: ${data.preferredDate || "Anytime"}\nNote: ${data.message || "None"}`
    );
    // WhatsApp direct action
    const waUrl = `https://wa.me/919925579633?text=${text}`;
    setSubmitted(true);

    setTimeout(() => {
      window.open(waUrl, "_blank");
      reset();
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Atelier Consultation & Enrolment"
      className="max-w-lg"
    >
      {submitted ? (
        <div className="py-8 flex flex-col items-center text-center">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
          <h4 className="font-serif text-2xl text-ink font-normal mb-2">Request Received</h4>
          <p className="text-sm font-light text-ink-muted max-w-sm mb-4">
            Connecting you directly with our royal concierge on WhatsApp.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-sans uppercase tracking-royal text-ink font-medium mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="e.g. Radhika Gaekwad"
              className="w-full bg-white border border-gold/40 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-maroon"
            />
            {errors.fullName && (
              <p className="text-[11px] text-maroon mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-sans uppercase tracking-royal text-ink font-medium mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register("phone")}
                placeholder="+91 99000 00000"
                className="w-full bg-white border border-gold/40 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-maroon"
              />
              {errors.phone && (
                <p className="text-[11px] text-maroon mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-sans uppercase tracking-royal text-ink font-medium mb-1.5">
                Preferred Visit Date
              </label>
              <input
                type="date"
                {...register("preferredDate")}
                className="w-full bg-white border border-gold/40 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-maroon"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-royal text-ink font-medium mb-1.5">
              Subject of Interest *
            </label>
            <select
              {...register("interest")}
              className="w-full bg-white border border-gold/40 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-maroon"
            >
              <option value="Suvarna Vruddhi Yojana (11+1 Scheme) Enrolment">Suvarna Vruddhi Yojana (11+1 Scheme) Enrolment</option>
              <option value="Bespoke Bridal Suite Consultation">Bespoke Bridal Suite Consultation</option>
              <option value="Uncut Polki & Jadau Heirlooms">Uncut Polki & Jadau Heirlooms</option>
              <option value="Diamond Solitaire & Engagement Rings">Diamond Solitaire & Engagement Rings</option>
              <option value="Heirloom Redesign & Old Gold Valuation">Heirloom Redesign & Old Gold Valuation</option>
              <option value="Corporate Gifting & Gold Coins">Corporate Gifting & Gold Coins</option>
              <option value="AMYA Everyday 925 Silver & Diamond Enquiry">AMYA Everyday 925 Silver & Diamond Enquiry</option>
            </select>
            {errors.interest && (
              <p className="text-[11px] text-maroon mt-1">{errors.interest.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-royal text-ink font-medium mb-1.5">
              Specific Request or Notes (Optional)
            </label>
            <textarea
              rows={3}
              {...register("message")}
              placeholder="Tell us about the occasion, design preferences, or budget..."
              className="w-full bg-white border border-gold/40 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-maroon"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-[11px] text-ink-muted flex items-center gap-1">
              <Phone className="w-3 h-3 text-gold" />
              <span>Or call {siteContent.displayPhone}</span>
            </span>

            <Button
              type="submit"
              variant="solid-maroon"
              size="default"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Connecting..." : "Submit & Connect via WhatsApp"}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
