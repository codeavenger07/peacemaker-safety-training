import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Same GA4 property used on the previous Wix site, carried over so traffic
// history stays in one place across the migration.
const GA_MEASUREMENT_ID = "G-0TZDH1QSMD";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peacemaker Safety Training | Church Safety Training",
  description:
    "Equipping churches with the knowledge, confidence, and hands-on skills to respond boldly and effectively in times of crisis. CPR/AED certification, Safety Team development, and First Aid & Stop the Bleed training.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
