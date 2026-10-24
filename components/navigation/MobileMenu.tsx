"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Phone, MapPin, ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import { navigationContent } from "@/content/nav";
import { siteContent } from "@/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  const { t } = useLanguage();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const containerVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut" as const,
        when: "beforeChildren",
        staggerChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: { duration: 0.35, ease: "easeIn" as const },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <motion.div
            ref={drawerRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-md bg-ivory text-ink h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-r border-gold/30 p-6 sm:p-8"
          >
            {/* Top Bar inside Drawer */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gold/20">
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-wider text-ink">
                    {t(siteContent.name)}
                  </span>
                  <span className="text-[10px] uppercase tracking-royal text-maroon font-medium">
                    Estd. 1927 • Vadodara
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 text-ink hover:text-maroon transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="my-4">
                <OrnamentDivider tone="gold" size="sm" className="my-2" />
              </div>

              {/* Staggered Navigation Links */}
              <nav className="flex flex-col space-y-4 py-2">
                {navigationContent.mainNav.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div key={idx} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`group flex items-center justify-between font-serif text-2xl tracking-wide py-1.5 transition-colors ${
                          isActive ? "text-maroon font-normal" : "text-ink hover:text-maroon"
                        }`}
                      >
                        <span>{t(item.title)}</span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                            isActive ? "text-maroon" : "text-gold/50 group-hover:text-maroon"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Contact & Heritage Info */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-gold/25 mt-6 space-y-4 text-xs font-light">
              <div className="flex items-start gap-2.5 text-ink-muted">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{t(siteContent.address.full)}</span>
              </div>

              <div className="flex items-center gap-2.5 text-ink-muted">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${siteContent.phone}`} className="hover:text-maroon transition-colors">
                  {siteContent.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={siteContent.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gold/40 text-maroon hover:bg-gold/10 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteContent.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 text-center bg-maroon text-ivory uppercase tracking-royal text-[11px] font-medium hover:bg-maroon-light transition-colors"
                >
                  WhatsApp Inquiries
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
