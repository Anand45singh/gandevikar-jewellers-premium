"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import { navigationContent } from "@/content/nav";
import { siteContent } from "@/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";
import { GoldRatesDropdown } from "./GoldRatesDropdown";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showSecondRow, setShowSecondRow] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state after 60px
      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide second row on scroll down, show on scroll up
      if (currentScrollY > 120 && currentScrollY > lastScrollY.current) {
        setShowSecondRow(false);
      } else {
        setShowSecondRow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md border-b border-gold/30 text-ink shadow-sm py-2 sm:py-3"
            : "bg-gradient-to-b from-black/85 via-black/45 to-transparent text-ivory py-4 sm:py-5"
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Top Row: 3-column layout */}
          <div className="flex items-center justify-between">
            {/* Desktop Left: Instagram Link / Mobile: Hamburger */}
            <div className="flex items-center gap-3 flex-1 justify-start">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation drawer"
                className="lg:hidden p-1.5 -ml-1 text-inherit hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <Menu className="w-6 h-6" />
              </button>

              <a
                href={siteContent.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 text-[11px] font-sans tracking-royal uppercase hover:text-gold transition-colors"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-gold" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Centre: Brand Logo & Title */}
            <div className="flex flex-col items-center text-center px-2">
              <Link href="/" className="group flex flex-col items-center">
                {/* Royal Monogram / Crown Mark */}
                <div className="flex items-center justify-center mb-1 text-gold group-hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold" aria-hidden="true">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    <circle cx="12" cy="12" r="2" fill="#FAF6EB" />
                  </svg>
                </div>
                <span
                  className={cn(
                    "font-serif font-normal tracking-wide transition-all duration-300 whitespace-nowrap",
                    isScrolled
                      ? "text-xl sm:text-2xl text-ink"
                      : "text-2xl sm:text-3xl md:text-[32px] text-ivory drop-shadow-sm"
                  )}
                >
                  {t(siteContent.name)}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-royal-ultra text-gold-500 font-sans font-light mt-0.5">
                  VADODARA • ESTD. 1927
                </span>
              </Link>
            </div>

            {/* Right: Language Pill + Gold Rates Dropdown (+ Instagram on Mobile) */}
            <div className="flex items-center justify-end gap-2.5 sm:gap-4 flex-1">
              <LanguageToggle isScrolled={isScrolled} />
              <GoldRatesDropdown isScrolled={isScrolled} />
              <a
                href={siteContent.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:hidden p-1 text-inherit hover:text-gold transition-colors"
                aria-label="Instagram link"
              >
                <InstagramIcon className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>

          {/* Second Row: Centered Navigation Bar (Desktop) */}
          <AnimatePresence>
            {showSecondRow && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:flex items-center justify-center pt-3 pb-1 border-t border-gold/15 mt-2.5 overflow-hidden"
                aria-label="Main Navigation"
              >
                <ul className="flex items-center space-x-7 xl:space-x-9">
                  {navigationContent.mainNav.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={idx} className="relative group">
                        <Link
                          href={item.href}
                          className={cn(
                            "relative inline-block text-[11px] font-sans font-medium uppercase tracking-[0.25em] py-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold",
                            isActive
                              ? "text-maroon font-semibold"
                              : isScrolled
                              ? "text-ink hover:text-maroon"
                              : "text-ivory hover:text-gold"
                          )}
                        >
                          <span>{t(item.title)}</span>

                          {/* Animated underline that expands from left on hover or stays when active */}
                          <span
                            className={cn(
                              "absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-300 ease-out origin-left",
                              isActive
                                ? "w-full bg-maroon"
                                : "w-0 group-hover:w-full group-hover:bg-gold"
                            )}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
