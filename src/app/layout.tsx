import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import ThemeObserver from "@/components/theme-observer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ripley | Systems & AI Operations",
    template: "%s | Ripley",
  },
  description: "Ripley is an advisory and operations practice specializing in practical AI-enabled operating models, operational data flows, and agentic workflows.",
  keywords: [
    "Ripley",
    "Systems & AI Operations",
    "AI Operating Models",
    "Agentic Workflows",
    "Business Automation",
    "System Design",
    "Operations Design",
    "Ripley Automation"
  ],
  authors: [{ name: "Ripley", url: "https://ripley.co" }],
  creator: "Ripley",
  metadataBase: new URL("https://ripley.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ripley.co",
    title: "Ripley | Systems & AI Operations",
    description: "Ripley is an advisory and operations practice specializing in practical AI-enabled operating models, operational data flows, and agentic workflows.",
    siteName: "Ripley",
    // [NEEDS ELI INPUT: Open Graph image asset path if available, e.g. /og-image.png. Marked as missing for now.]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripley | Systems & AI Operations",
    description: "Ripley is an advisory and operations practice specializing in practical AI-enabled operating models, operational data flows, and agentic workflows.",
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
      className={`${cinzel.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative">
        <ThemeObserver />
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
