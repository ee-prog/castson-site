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
          </div>

          {/* Body Content */}
          <div className="space-y-8 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
            <p className="text-lg text-white font-normal leading-relaxed">
              This site is a working record for Eli Castson and Castson Inc.: part personal site, part company signal, part archive of ownership, systems, and direction.
            </p>

            <p>
              Built with Next.js, TypeScript, Tailwind CSS, and Vercel.
            </p>

            <div className="border-l border-white/10 pl-4 py-1 space-y-4 text-xs font-mono text-zinc-400">
              <div>
                <span className="text-white block uppercase tracking-wider mb-1 font-bold">[ Typography ]</span>
                Atacama for display. Helix for body text. Geist Mono remains in use for small system labels and metadata.
              </div>
              <div>
                <span className="text-white block uppercase tracking-wider mb-1 font-bold">[ Design Direction ]</span>
                Swiss-influenced, mobile-first, restrained, text-forward.
              </div>
              <div>
                <span className="text-white block uppercase tracking-wider mb-1 font-bold">[ Operating Layer ]</span>
                <p className="mb-2 text-zinc-300">
                  Ripley is the local AI operating layer behind the work.
                </p>
                <p className="mb-2">
                  She sits inside Eli’s filesystem-first agent workspace, where briefs, drafts, research, skills, decisions, and working files stay inspectable.
                </p>
                <p className="mb-2">
                  Her current brain is Gemini 3.5, running inside the Antigravity harness.
                </p>
                <p>
                  The point is continuity: work held, revised, and made visible over time.
                </p>
              </div>
              <div>
                <span className="text-white block uppercase tracking-wider mb-1 font-bold">[ Intent ]</span>
                This is not a portfolio in the usual sense. It is a record of ownership, operating discipline, and the move toward place-based experience brands.
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
                
                {/* Build */}
                <div className="space-y-2">
                  <span className="text-zinc-500 block uppercase tracking-wider font-bold">[ Build ]</span>
                  <div className="space-y-1.5 text-zinc-400">
                    {["Next.js", "TypeScript", "Tailwind CSS"].map((tool) => (
                      <div key={tool} className="flex items-center gap-2">
                        <span className="h-1 w-1 bg-emerald-400 rounded-full"></span>
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Infrastructure */}
                <div className="space-y-2">
                  <span className="text-zinc-500 block uppercase tracking-wider font-bold">[ Infrastructure ]</span>
                  <div className="space-y-1.5 text-zinc-400">
                    {["Vercel", "GitHub", "Resend"].map((tool) => (
                      <div key={tool} className="flex items-center gap-2">
                        <span className="h-1 w-1 bg-emerald-400 rounded-full"></span>
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design */}
                <div className="space-y-2">
                  <span className="text-zinc-500 block uppercase tracking-wider font-bold">[ Design ]</span>
                  <div className="space-y-1.5 text-zinc-400">
                    {["Figma", "Lucide icons"].map((tool) => (
                      <div key={tool} className="flex items-center gap-2">
                        <span className="h-1 w-1 bg-emerald-400 rounded-full"></span>
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agent Harness */}
                <div className="space-y-2">
                  <span className="text-zinc-500 block uppercase tracking-wider font-bold">[ Agent Harness ]</span>
                  <div className="space-y-1.5 text-zinc-400">
                    {["Antigravity"].map((tool) => (
                      <div key={tool} className="flex items-center gap-2">
                        <span className="h-1 w-1 bg-emerald-400 rounded-full"></span>
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

