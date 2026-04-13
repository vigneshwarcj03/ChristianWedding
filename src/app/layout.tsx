import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Inter, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GlobalEffects from "@/components/GlobalEffects";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Daniel McKay & Cassie Howard | June 21, 2026",
  description: "A Divine Celebration of Love - Modern Luxury Wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${playfair.variable} ${inter.variable} ${cormorant.variable} ${greatVibes.variable} antialiased`}
    >
      <body className="bg-base text-text-dark font-inter selection:bg-accent/30 selection:text-white">
        <SmoothScroll>
          <GlobalEffects />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
