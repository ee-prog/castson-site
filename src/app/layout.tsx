import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Eli Castson, Transformation Executive",
    template: "%s · Eli Castson",
  },
  description:
    "Eli Castson redesigns how organizations work when people, business, and technology have to change together. A Canadian–Swiss transformation executive. Former Disruption Officer.",
  keywords: [
    "Eli Castson",
    "Castson Inc.",
    "Transformation Executive",
    "Disruption Officer",
    "Organizational Change",
    "Operating Systems",
    "Applied AI",
    "Executive Advisory",
    "Fractional Executive",
    "Canadian Swiss Executive",
  ],
  authors: [{ name: "Eli Castson", url: "https://castson.com" }],
  creator: "Eli Castson",
  metadataBase: new URL("https://castson.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://castson.com",
    title: "Eli Castson, Transformation Executive",
    description:
      "Redesigning how organizations work when technology changes what is possible. People, business, and technology, changed together. Canadian–Swiss. Former Disruption Officer.",
    siteName: "Eli Castson",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eli Castson, Transformation Executive",
    description:
      "Redesigning how organizations work when technology changes what is possible. People, business, and technology, changed together.",
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
      data-scroll-behavior="smooth"
      className={`${atacama.variable} ${helix.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <link
          id="castson-favicon"
          rel="icon"
          href="/favicon-light.svg"
          type="image/svg+xml"
          sizes="any"
        />
        {/* Inline FOUC-prevention: resolve theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=localStorage.getItem('theme')==='dark';document.documentElement.classList.toggle('dark',d);var f=document.getElementById('castson-favicon');if(f)f.setAttribute('href',d?'/favicon-dark.svg':'/favicon-light.svg')}catch(e){}})()`,
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
