import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeObserver from "@/components/theme-observer";

const atacama = localFont({
  src: [
    {
      path: "../../public/fonts/atacama/atacama-var.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

const helix = localFont({
  src: [
    {
      path: "../../public/fonts/helix/helix-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/helix/helix-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/helix/helix-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
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
  description: "Eli Castson acquires, builds, and selectively advises distinctive service businesses where brand, operations, and standards have to hold.",
  keywords: [
    "Eli Castson",
    "Castson Inc.",
    "Experience Brands",
    "Hospitality Operations",
    "Service Design",
    "Operational Standards",
    "Tourism Succession",
    "BraveHeart First Aid",
    "Ripley Private Infrastructure"
  ],
  authors: [{ name: "Eli Castson", url: "https://castson.com" }],
  creator: "Eli Castson",
  metadataBase: new URL("https://castson.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://castson.com",
    title: "Eli Castson | Castson Inc.",
    description: "Eli Castson acquires, builds, and selectively advises distinctive service businesses. BraveHeart is the operating proof. Ripley is the private infrastructure.",
    siteName: "Eli Castson",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eli Castson | Castson Inc.",
    description: "Eli Castson acquires, builds, and selectively advises distinctive service businesses. BraveHeart is the operating proof. Ripley is the private infrastructure.",
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
      className={`${atacama.variable} ${helix.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline FOUC-prevention: resolve theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.classList.toggle('dark',t==='dark')}else{var d=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.classList.toggle('dark',d)}}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans relative">
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
