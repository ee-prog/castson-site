import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeObserver from "@/components/theme-observer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Castson Inc. | Systems & AI Operations",
    template: "%s | Castson Inc.",
  },
  description: "Castson Inc. is an advisory and operations practice specializing in practical AI-enabled operating models, operational data flows, and agentic workflows.",
  keywords: [
    "Castson Inc.",
    "Systems & AI Operations",
    "AI Operating Models",
    "Agentic Workflows",
    "Business Automation",
    "System Design",
    "Operations Design",
    "Castson Inc. Automation"
  ],
  authors: [{ name: "Castson Inc.", url: "https://castson.com" }],
  creator: "Castson Inc.",
  metadataBase: new URL("https://castson.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://castson.com",
    title: "Castson Inc. | Systems & AI Operations",
    description: "Castson Inc. is an advisory and operations practice specializing in practical AI-enabled operating models, operational data flows, and agentic workflows.",
    siteName: "Castson Inc.",
    // [NEEDS ELI INPUT: Open Graph image asset path if available, e.g. /og-image.png. Marked as missing for now.]
  },
  twitter: {
    card: "summary_large_image",
    title: "Castson Inc. | Systems & AI Operations",
    description: "Castson Inc. is an advisory and operations practice specializing in practical AI-enabled operating models, operational data flows, and agentic workflows.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative">
        <ThemeObserver />
        <Navbar />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
