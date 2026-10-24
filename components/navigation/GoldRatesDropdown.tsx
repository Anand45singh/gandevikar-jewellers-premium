"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, Phone, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoldRatesResponse } from "@/lib/goldRates";
import { cn } from "@/lib/utils";

export function GoldRatesDropdown({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ratesData, setRatesData] = useState<GoldRatesResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchRates() {
      try {
        setLoading(true);
        const res = await fetch("/api/gold-rates");
        const json = await res.json();
        setRatesData(json);
      } catch (err) {
        console.error("Failed to load gold rates", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRates();
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-sans font-medium uppercase tracking-royal-wide transition-all duration-300 border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold",
          isScrolled
            ? "border-gold/50 text-ink hover:border-maroon hover:text-maroon bg-ivory-card"
            : "border-gold/40 text-ivory hover:border-gold hover:bg-black/30 backdrop-blur-sm"
        )}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>GOLD RATES</span>
        <ChevronDown
          className={cn("w-3.5 h-3.5 transition-transform duration-300", isOpen && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 mt-2 w-72 sm:w-80 bg-ivory-light border border-gold/40 shadow-2xl z-50 p-4 text-ink"
          >
            {/* Top decorative hairline */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

            <div className="flex items-center justify-between pb-3 border-b border-gold/20 mb-3">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-royal-wide text-maroon block font-medium">
                  Official Vadodara Bullion
                </span>
                <h4 className="font-serif text-lg font-normal text-ink">Today's Metal Rates</h4>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-ink-muted">
                <Clock className="w-3 h-3 text-gold" />
                <span>{ratesData?.updatedAt || "Opening"}</span>
              </div>
            </div>

            {/* Rates Table / Fallback */}
            {ratesData?.ratesAvailable ? (
              <div className="space-y-2 mb-3">
                {Object.values(ratesData.rates).map((rate) => (
                  <div
                    key={rate.purity}
                    className="flex items-center justify-between py-1.5 border-b border-gold/10 text-xs"
                  >
                    <div>
                      <span className="font-medium text-ink mr-1.5">{rate.purity}</span>
                      <span className="text-[11px] text-ink-muted">{rate.name}</span>
                    </div>
                    <span className="font-serif text-sm font-semibold text-maroon">
                      ₹{rate.ratePerGram?.toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 bg-ivory border border-gold/30 mb-3 text-center">
                <p className="text-xs text-ink-muted mb-2">
                  Daily certified Vadodara bullion opening rates are verified directly with our trading desk.
                </p>
                <a
                  href="tel:+919925579633"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-maroon hover:underline"
                >
                  <Phone className="w-3 h-3 text-gold" />
                  <span>Call Store: +91 99255 79633</span>
                </a>
              </div>
            )}

            <div className="pt-2 flex items-center justify-between text-[11px] text-ink-muted">
              <span>*Excl. 3% GST & Making</span>
              <Link
                href="/gold-rates"
                onClick={() => setIsOpen(false)}
                className="text-maroon hover:text-maroon-dark font-medium inline-flex items-center gap-0.5 uppercase tracking-wider"
              >
                <span>Full Chart</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
