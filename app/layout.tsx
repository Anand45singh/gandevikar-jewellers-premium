import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { PageTransitionWrapper } from "@/components/providers/PageTransitionWrapper";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { FloatingActions } from "@/components/navigation/FloatingActions";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Girishbhai Gandevikar Jewellers | Royal Goldsmiths to the Gaekwad Dynasty",
  description:
    "Heritage jewellery crafted in Vadodara since 1927. Former royal jewellers to the Gaekwads of Baroda, presenting authentic Polki, Bridal, Jadau and antique gold heirlooms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans antialiased bg-ivory text-ink selection:bg-gold/30 selection:text-maroon-dark pb-16 md:pb-0">
        <Preloader />
        <CustomCursor />
        <LanguageProvider>
          <SmoothScroll>
            <Header />
            <div className="pt-24 sm:pt-28 lg:pt-32 min-h-screen flex flex-col justify-between">
              <main className="flex-grow">
                <PageTransitionWrapper>{children}</PageTransitionWrapper>
              </main>
              <Footer />
            </div>
            <FloatingActions />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}

