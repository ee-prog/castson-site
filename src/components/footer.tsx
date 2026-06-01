import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-12 text-zinc-500">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-white">Eli Castson</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <p className="mt-3 text-sm text-zinc-400 max-w-xs">
              Entrepreneur, builder, and operator specializing in business automation and operations design.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Navigation</h4>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
              <Link href="/work" className="hover:text-emerald-400 transition-colors">Work & Projects</Link>
              <Link href="/writing" className="hover:text-emerald-400 transition-colors">Writing</Link>
              <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Connect</h4>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-zinc-400">
                Primary: <a href="mailto:ee@castson.com" className="hover:text-emerald-400 transition-colors">ee@castson.com</a>
              </p>
              <p className="text-xs text-zinc-600">
                This is the personal portfolio and web presence of Eli Castson. For BraveHeart First Aid business inquiries, please visit BraveHeart First Aid directly.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>© {year} Eli Castson. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-zinc-600">Built with Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
