"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

function ImagePlaceholder({ label }: { label: string }) {
  const refCode = label
    .toUpperCase()
    .replace(/[^A-Z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return (
    <div className="w-full aspect-[16/10] bg-zinc-900/10 border border-white/5 rounded-sm flex flex-col justify-between p-4 relative overflow-hidden group theme-transition">
      {/* Blueprint grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>
      <span className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase relative z-10 block">
        REF // {refCode}
      </span>
      <div className="w-full h-[1px] bg-white/[0.03] relative z-10"></div>
    </div>
  );
}

export default function BraveHeart() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      
      {/* Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.02] animate-grid-line delay-100 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block animate-grid-line delay-300 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block animate-grid-line delay-550 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] animate-grid-line delay-700 opacity-0"></div>
      </div>

      {/* Header */}
      <section className="relative py-12 md:py-24 border-b border-white/[0.03] theme-transition">
        <div className="absolute top-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        
        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">01 / First Acquisition</span>
            <h1 className="text-white font-display">
              BraveHeart
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light">
              A real business, rebuilt from the inside.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-12 md:py-20 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <p className="text-lg text-white">
                BraveHeart was the first company I acquired and operated. It taught me what ownership demands: standards, timing, care, and systems that work when people depend on them.
              </p>

              <p>
                First aid training is serious work. The student has to be supported. The instructor has to be prepared. The timing, equipment, communication, and certification process all have to work. Ownership made those standards real.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 py-4 px-6 rounded-sm bg-zinc-900/20 border border-white/5 font-mono text-xs text-zinc-400">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-400"></span>
                    <span>Real customers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-400"></span>
                    <span>Real instructors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-400"></span>
                    <span>Real standards</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-400"></span>
                    <span>Real timing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-400"></span>
                    <span>Real constraints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-400"></span>
                    <span className="text-white">Real consequences</span>
                  </div>
                </div>
              </div>

              <p className="text-white font-medium">
                That matters.
              </p>

              <p>
                It is easy to talk about transformation from the outside. It is different when the system either works or it does not.
              </p>
              
              <ul className="space-y-2 text-xs font-mono text-zinc-400 pl-4 border-l border-white/10 list-none">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                  <span>When a customer can trust the path, or they cannot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                  <span>When an instructor is ready to teach, or they are not.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                  <span>When a process creates clarity, or quietly creates more work.</span>
                </li>
              </ul>

              <p className="text-lg text-white font-medium pt-2">
                &ldquo;Ownership removes abstraction. There is nowhere to hide.&rdquo;
              </p>
            </div>

            {/* Right: Media placeholder */}
            <div className="lg:col-span-5 space-y-4">
              <ImagePlaceholder label="BraveHeart First Aid Classroom Session" />
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-right">
                [ Operations Surface, Halifax NS ]
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why BraveHeart Matters */}
      <section className="py-12 md:py-20 border-b border-white/[0.03] bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-8">
            
            <div className="space-y-4">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Moral Centre ]</span>
              <h2 className="text-3xl font-medium text-white">
                Why BraveHeart matters
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <p className="text-lg text-zinc-200">
                First aid training has a moral centre. The work is practical, local, and human.
              </p>
              
              <blockquote className="border-l-2 border-emerald-400 pl-6 my-6 text-white text-xl font-medium">
                &ldquo;People come to class carrying a simple hope: that if someone needs help, they won’t feel frozen.&rdquo;
              </blockquote>

              <p>
                That gives the business a seriousness I had not felt in much of my earlier work. The systems matter because the work matters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 py-4 text-xs font-mono text-zinc-400">
                {["Trust", "Standards", "Readiness", "Care", "Timing", "Instruction", "Confidence", "Responsibility"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 p-3 border border-white/5 bg-zinc-900/30 rounded-sm">
                    <span className="h-1 w-1 bg-emerald-400"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-white font-medium">
                The company exists so people can be better prepared to help. That is enough reason to make it excellent.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Year One & Year Two Split */}
      <section className="py-12 md:py-20 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            
            {/* Year One: Clarification */}
            <div className="space-y-6">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Year One ]</span>
              <h2 className="text-2xl font-medium text-white">
                Clarification
              </h2>
              
              <div className="text-zinc-300 font-light text-sm sm:text-base space-y-4">
                <p>
                  The first year was mostly invisible work. Not automation. Clarification.
                </p>
                <p>
                  Understanding what the business was really doing. Where information lived. Which decisions repeated. Where the owner was still holding the company together. Which processes were useful, and which were inherited.
                </p>
                <p>
                  The work was to make the business legible—to itself, to me, and to the people inside it.
                </p>
                <p className="text-white font-mono text-xs border-t border-white/5 pt-4">
                  &ldquo;A business cannot improve what it cannot see.&rdquo;
                </p>
              </div>

              <div className="space-y-2 pt-4">
                <h4 className="text-xs font-mono font-bold uppercase text-zinc-400">[ What Became Clear ]</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                  {["Public position", "Customer path", "Schedule logic", "Delivery standards", "Communication rhythm", "Instructor readiness", "Demand signals", "Operating visibility"].map((c) => (
                    <li key={c} className="flex items-center gap-1">
                      <ChevronRight className="h-4 w-4 text-emerald-500" strokeWidth={1.5} aria-hidden="true" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Year Two: Acceleration */}
            <div className="space-y-6">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Year Two ]</span>
              <h2 className="text-2xl font-medium text-white">
                Acceleration
              </h2>
              
              <div className="text-zinc-300 font-light text-sm sm:text-base space-y-4">
                <p>
                  The next phase is underway.
                </p>
                <p>
                  Now that the business is clearer, the work is to remove drag without removing judgment. Fewer repeated decisions. Better visibility. Stronger handoffs. Systems that support the people doing the work instead of asking them to carry the business in their heads.
                </p>
                <p className="border-l border-emerald-400/40 pl-4 text-zinc-400 opacity-80">
                  The goal is not to replace people. The goal is to remove drag around people. To reduce manual coordination, make the right work easier to see, and support judgment instead of overwhelming it.
                </p>
                <p>
                  This is the accelerated phase. The business is clearer now, so the systems can become stronger.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <ImagePlaceholder label="Acceleration Pipeline & Internal Sync Monitor" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Constraint & What I am watching */}
      <section className="py-12 md:py-20 border-b border-white/[0.03] bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left: The Constraint */}
            <div className="lg:col-span-6 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ The Constraint Changed ]</span>
              <h2 className="text-2xl font-medium text-white">
                Outgrowing the Platforms
              </h2>
              <p>
                At first, better platforms created progress. Then the business began to outgrow them.
              </p>
              <p>
                This has been one of the most useful lessons. Outgrowing a platform is not always a failure. Sometimes it means the business has become clearer than the software built to contain it.
              </p>
              <div className="border-l border-white/10 pl-4 text-zinc-400 text-xs font-mono space-y-4">
                <p>
                  Generic tools are useful when you are still learning the shape of a business. Once the shape becomes clear, the compromise becomes visible.
                </p>
                <p>
                  That is where custom systems begin to make sense — not because they are impressive, but because they can be more truthful to how the business actually works.
                </p>
              </div>
            </div>

            {/* Right: What I am Watching */}
            <div className="lg:col-span-6 space-y-4">
              <div className="border border-white/5 bg-zinc-900/30 p-6 sm:p-8 rounded-sm space-y-6">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                  [ What I am watching ]
                </span>
                
                <ul className="space-y-3 text-xs font-mono text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">Q1 //</span>
                    <span>Can BraveHeart grow without becoming harder to run?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">Q2 //</span>
                    <span>Can fewer decisions depend on me?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">Q3 //</span>
                    <span>Can the business hold more of its own intelligence?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">Q4 //</span>
                    <span>Can the work become easier to see before it becomes urgent?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold shrink-0">Q5 //</span>
                    <span className="text-white">Can a small service company gain leverage without losing its human standard?</span>
                  </li>
                </ul>

                <div className="text-[10px] font-mono text-zinc-500 uppercase text-center pt-2 border-t border-white/5">
                  [ End of active log — June 2026 ]
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
