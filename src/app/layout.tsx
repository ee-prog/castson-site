import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Eli Castson | Entrepreneur, Builder & Operator",
    template: "%s | Eli Castson",
  },
  description: "Personal portfolio of Eli Castson. Entrepreneur, builder, and operator specializing in business automation, system design, and operational workflows.",
  keywords: [
    "Eli Castson",
    "Castson",
    "BraveHeart First Aid",
    "Ripley Automation",
    "Business Automation",
    "System Design",
    "Operations Operator"
  ],
  authors: [{ name: "Eli Castson", url: "https://castson.com" }],
  creator: "Eli Castson",
  metadataBase: new URL("https://castson.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://castson.com",
    title: "Eli Castson | Entrepreneur, Builder & Operator",
    description: "Personal portfolio of Eli Castson. Entrepreneur, builder, and operator specializing in business automation, system design, and operational workflows.",
    siteName: "Eli Castson Web Presence",
    // [NEEDS ELI INPUT: Open Graph image asset path if available, e.g. /og-image.png. Marked as missing for now.]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eli Castson | Entrepreneur, Builder & Operator",
    description: "Personal portfolio of Eli Castson, founder of BraveHeart First Aid, focusing on business automation and operations design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative">
        <CustomCursor />
        <Navbar />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
