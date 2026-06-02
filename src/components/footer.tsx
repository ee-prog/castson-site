import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-white/5 bg-background py-8 text-zinc-500 theme-transition mt-auto">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-wider">
          <span className="text-zinc-400 dark:text-zinc-500">© {year} Castson Inc.</span>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-zinc-950 dark:hover:text-white transition-colors uppercase">
              Contact
            </Link>
            <span className="text-zinc-300 dark:text-zinc-800">•</span>
            <Link href="/colophon" className="hover:text-zinc-950 dark:hover:text-white transition-colors uppercase">
              Colophon
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

