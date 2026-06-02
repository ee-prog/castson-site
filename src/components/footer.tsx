import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-16 text-zinc-500 theme-transition">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold uppercase tracking-widest text-white font-display">Castson Inc.</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Building from first principles.
            </p>
          </div>

          {/* Anatomy Col */}
          <div className="space-y-2 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 bg-emerald-500"></span>
              <span>BraveHeart is the experiment.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 bg-emerald-500"></span>
              <span>Ripley is the operating layer.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 bg-emerald-500"></span>
              <span>castson.com is the record.</span>
            </div>
          </div>

          {/* Summary / Contact Col */}
          <div className="space-y-4">
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              For owners, investors, operators, executives, and builders interested in meaningful service businesses and the next era of operational leverage.
            </p>
            <div className="pt-2">
              <a 
                href="mailto:ee@castson.com" 
                className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white hover:text-emerald-400 transition-colors"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono gap-4 text-zinc-650">
          <p>© {year} Castson Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Built with Next.js & Tailwind v4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
