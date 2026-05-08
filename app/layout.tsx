import type { Metadata } from "next";
import { Montserrat, Inter, Anton, Outfit } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Lotto - Play to Win",
  description: "Play Daily Lotto, Football Trivia, Wheel of Fortune and win big!",
};

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { VerticalNav } from "@/components/layout/vertical-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${montserrat.variable} ${anton.variable} ${outfit.variable} font-sans antialiased bg-[var(--background)] text-white min-h-screen flex flex-col selection:bg-[var(--brand-primary)] selection:text-black`}
      >
        <Header />
        <VerticalNav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
