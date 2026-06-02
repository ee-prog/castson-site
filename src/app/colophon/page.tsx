import React from "react";

export default function Colophon() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      
      {/* Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.02] animate-grid-line delay-100 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block animate-grid-line delay-300 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block animate-grid-line delay-550 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] animate-grid-line delay-700 opacity-0"></div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-20 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-2xl space-y-12">
          
          {/* Header */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">07 / Identity</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-none font-display">
              Colophon
            </h1>
            <p className="text-zinc-400 text-xs font-mono mt-2 uppercase tracking-wider">
              Technical & design specifications
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-8 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
            <p className="text-lg text-white font-normal leading-relaxed">
              This site is a public working record for Eli Castson and Castson Inc.: part personal site, part company signal, part archive of ownership, systems, and direction.
            </p>

            <p>
              It is built with Next.js, TypeScript, Tailwind CSS, and Vercel.
            </p>

            <div className="border-l border-white/10 pl-4 py-1 space-y-4 text-xs font-mono text-zinc-400">
              <div>
                <span className="text-white block uppercase tracking-wider mb-1 font-bold">[ Typography ]</span>
                Geist Sans and Geist Mono.
              </div>
              <div>
                <span className="text-white block uppercase tracking-wider mb-1 font-bold">[ Design Direction ]</span>
                Swiss-influenced, mobile-first, restrained, text-forward, and deliberately sparse.
              </div>
              <div>
                <span className="text-white block uppercase tracking-wider mb-1 font-bold">[ Operating Layer ]</span>
                <p className="mb-2 text-zinc-300">
                  Ripley is the local AI operating layer behind the work.
                </p>
                <p className="mb-2">
                  She sits inside Eli’s filesystem-first agent workspace: a local operating environment of briefs, drafts, research, skills, decisions, and working files kept inspectable over time.
                </p>
                <p className="mb-2">
                  Her current brain is Gemini 3.5, running inside the Antigravity harness.
                </p>
                <p>
                  The point is not automation for its own sake. It is continuity: a way to keep the work held, revisable, and visible over time.
                </p>
              </div>
              <div>
                <span className="text-white block uppercase tracking-wider mb-1 font-bold">[ Intent ]</span>
                This is not a portfolio in the usual sense. It is a record of how the work is being shaped: ownership, operating discipline, and the move toward place-based experience brands.
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                [ Tools ]
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-zinc-400">
                {["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Lucide icons", "Antigravity"].map((tool) => (
                  <div key={tool} className="flex items-center gap-1.5 p-2 border border-white/5 bg-zinc-900/10 rounded-sm">
                    <span className="h-1 w-1 bg-emerald-400"></span>
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
