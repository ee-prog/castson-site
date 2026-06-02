import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-12 text-zinc-500 theme-transition mt-auto">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="text-sm font-bold uppercase tracking-widest text-white font-display block">
              Castson Inc.
            </span>
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider max-w-md">
              Building and partnering with place-based experience businesses.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-[10px] font-mono">
            <span>© {year} Castson Inc.</span>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hover:text-white transition-colors uppercase tracking-wider">
                Contact
              </Link>
              <span className="text-zinc-800">•</span>
              <Link href="/colophon" className="hover:text-white transition-colors uppercase tracking-wider">
                Colophon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

