import type { Metadata } from "next";
import { Cinzel, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Eliasson | Systems & AI Operations",
    template: "%s | Eliasson",
  },
  description: "Eliasson is an advisory and operations practice specializing in practical AI-enabled operating models, operational data flows, and agentic workflows.",
  keywords: [
    "Eliasson",
    "Systems & AI Operations",
    "AI Operating Models",
    "Agentic Workflows",
    "Business Automation",
    "System Design",
    "Operations Design",
    "Ripley Automation"
  ],
  authors: [{ name: "Eliasson", url: "https://eliasson.co" }],
  creator: "Eliasson",
  metadataBase: new URL("https://eliasson.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eliasson.co",
    title: "Eliasson | Systems & AI Operations",
    description: "Eliasson is an advisory and operations practice specializing in practical AI-enabled operating models, operational data flows, and agentic workflows.",
    siteName: "Eliasson",
    // [NEEDS ELI INPUT: Open Graph image asset path if available, e.g. /og-image.png. Marked as missing for now.]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eliasson | Systems & AI Operations",
    description: "Eliasson is an advisory and operations practice specializing in practical AI-enabled operating models, operational data flows, and agentic workflows.",
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
      className={`${cinzel.variable} ${raleway.variable} h-full antialiased dark`}
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
