import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

import { Footer } from "@/shared/layout/footer/Footer";
import { Header } from "@/shared/layout/header/Header";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MIH",
  description: "Marketing site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable}`}>
        <Providers>
          <Header />
          <div className="page-shell">
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}