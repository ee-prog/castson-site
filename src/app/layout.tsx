import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Eli Castson | Castson Inc.",
    template: "%s | Eli Castson",
  },
  description: "Eli Castson builds and partners with place-based experience brands rooted in service, taste, and story.",
  keywords: [
    "Eli Castson",
    "Castson Inc.",
    "Experience Brands",
    "Hospitality Operations",
    "Service Design",
    "Operational Standards",
    "Tourism Succession",
    "BraveHeart First Aid",
    "Ripley Operating Layer"
  ],
  authors: [{ name: "Eli Castson", url: "https://castson.com" }],
  creator: "Eli Castson",
  metadataBase: new URL("https://castson.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://castson.com",
    title: "Eli Castson | Castson Inc.",
    description: "Eli Castson builds and partners with place-based experience brands rooted in service, taste, and story. Castson Inc. is the vehicle. BraveHeart is the first proof. Ripley is the operating layer.",
    siteName: "Eli Castson",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eli Castson | Castson Inc.",
    description: "Eli Castson builds and partners with place-based experience brands rooted in service, taste, and story. Castson Inc. is the vehicle. BraveHeart is the first proof. Ripley is the operating layer.",
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
