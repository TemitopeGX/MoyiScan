import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoyiScan - Digital Payment Solutions",
  description: "Experience the future of digital payments with MoyiScan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <div className="px-4 sm:px-6 md:px-8">
          <Navbar />
          {children}
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
