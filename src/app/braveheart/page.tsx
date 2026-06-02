"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[16/10] bg-zinc-900/40 border border-white/5 rounded-sm flex flex-col items-center justify-center p-6 relative overflow-hidden group theme-transition">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>
      <div className="absolute top-4 left-4 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">[ Image Placeholder ]</div>
      <span className="text-[10px] font-mono text-zinc-400 text-center tracking-widest uppercase px-4 py-2 border border-white/5 bg-zinc-950/80 rounded-sm relative z-10 group-hover:border-emerald-400/30 group-hover:text-emerald-400 transition-all duration-300">
        {label}
      </span>
    </div>
  );
}

export default function BraveHeart() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      
      {/* Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
      </div>

      {/* Header */}
      <section className="relative py-24 border-b border-white/[0.03] theme-transition">
        <div className="absolute top-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        
        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">01 / The Active Sandbox</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-none font-display">
              The BraveHeart Experiment
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light font-display">
              A real business, rebuilt from the inside.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-20 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <p className="text-lg text-white">
                BraveHeart First Aid is the first full expression of this work. It is not a simulation.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 px-6 rounded-sm bg-zinc-900/20 border border-white/5 font-mono text-xs text-zinc-400">
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
                    <span>Real schedules</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-400"></span>
                    <span>Real revenue</span>
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
              
              <ul className="space-y-2 text-xs font-mono text-zinc-400 pl-4 border-l border-white/10">
                <li>• When a customer can book or they cannot.</li>
                <li>• When an instructor has what they need or they do not.</li>
                <li>• When a process saves time or quietly creates more work.</li>
              </ul>

              <p className="text-lg font-display text-white italic pt-2">
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
      <section className="py-20 border-b border-white/[0.03] bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-8">
            
            <div className="space-y-4">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Moral Center ]</span>
              <h2 className="text-3xl font-bold uppercase text-white font-display">
                Why BraveHeart matters
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <p className="text-lg text-zinc-200">
                First aid training has a moral centre. The work is practical, local, and human.
              </p>
              
              <blockquote className="border-l-2 border-emerald-400 pl-6 my-6 italic text-white font-display text-xl">
                &ldquo;People come into a classroom because someday they may need to act when someone else cannot.&rdquo;
              </blockquote>

              <p>
                That gives the business a seriousness I had not felt in much of my earlier work. The systems matter because the work matters.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-xs font-mono text-zinc-400">
                {["Website", "Booking flow", "Reminders", "Instructor flow", "Follow-ups", "Advertising", "Daily operations", "Student safety"].map((item) => (
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
      <section className="py-20 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Year One: Clarification */}
            <div className="space-y-6">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Year One ]</span>
              <h2 className="text-2xl font-bold uppercase text-white font-display">
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
                <h4 className="text-xs font-mono font-bold uppercase text-zinc-400">[ What Changed First ]</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                  {["A clearer website", "Better booking flow", "Improved scheduling", "Course operations", "Customer emails", "Cleaner workflows", "SEO & Paid search", "Operational dashboards"].map((c) => (
                    <li key={c} className="flex items-center gap-1">
                      <ChevronRight className="h-3.5 w-3.5 text-emerald-500" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Year Two: Acceleration */}
            <div className="space-y-6">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Year Two ]</span>
              <h2 className="text-2xl font-bold uppercase text-white font-display">
                Acceleration
              </h2>
              
              <div className="text-zinc-300 font-light text-sm sm:text-base space-y-4">
                <p>
                  The next phase is underway. Automation, custom software, AI-assisted workflows, decision support, knowledge infrastructure, marketing systems, reporting, and internal tools.
                </p>
                <p className="border-l border-emerald-400/40 pl-4 text-zinc-400 italic">
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
      <section className="py-20 border-b border-white/[0.03] bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: The Constraint */}
            <div className="lg:col-span-6 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ The Constraint Changed ]</span>
              <h2 className="text-2xl font-bold uppercase text-white font-display">
                Outgrowing the Platforms
              </h2>
              <p>
                At first, better platforms created progress. Then the business began to outgrow them.
              </p>
              <p>
                This has been one of the most useful lessons. Outgrowing a platform is not always a failure. Sometimes it means the business has become clearer than the software built to contain it.
              </p>
              <p className="border-l border-white/10 pl-4 text-zinc-400 text-xs font-mono">
                Generic tools are useful when you are learning the shape of the business. But once the shape becomes clear, the compromise becomes visible. That is where custom systems begin to make sense. Not because they are impressive, but because they can be more truthful.
              </p>
            </div>

            {/* Right: What I am Watching */}
            <div className="lg:col-span-6 space-y-4">
              <div className="border border-white/5 bg-zinc-900/30 p-6 sm:p-8 rounded-sm space-y-6">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                  [ What I am watching ]
                </span>
                
                <ul className="space-y-3 text-xs font-mono text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">?</span>
                    <span>Can BraveHeart grow without becoming more complicated?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">?</span>
                    <span>Can fewer decisions depend on me?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">?</span>
                    <span>Can the business hold more of its own intelligence?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">?</span>
                    <span>Can marketing, operations, finance, scheduling, and customer experience become part of the same living picture?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">?</span>
                    <span className="text-white">Can a small service company operate with the leverage of a much larger one while staying human?</span>
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
