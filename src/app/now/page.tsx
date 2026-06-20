"use client";

import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

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

export default function Now() {
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
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">04 / Active Work</span>
            <h1 className="text-white font-display">
              Now
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light">
              Current focus.
            </p>
          </div>
        </div>
      </section>

      {/* Focus & Roadmap Section */}
      <section className="py-12 md:py-20 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left: Prose */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <p className="text-lg text-white">
                I am currently focused on three connected areas.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-emerald-400 pl-4 space-y-2">
                  <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">First</span>
                  <p>
                    The accelerated clarification and automation of BraveHeart First Aid.
                  </p>
                  <p className="text-xs text-zinc-400">
                    The first year was about making the business understandable. The current phase is about building the systems the clarified business now needs.
                  </p>
                </div>

                <div className="border-l-2 border-emerald-400 pl-4 space-y-2">
                  <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">Second</span>
                  <p>
                    The development of Ripley as the operating layer underneath the work: internal tools, AI-assisted workflows, automation, operational memory, decision support, and better visibility.
                  </p>
                </div>

                <div className="border-l-2 border-emerald-400 pl-4 space-y-2">
                  <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">Third</span>
                  <p>
                    A small amount of selective advisory work with senior leaders in experience-led businesses where brand, service, standards, and commercial clarity need to come together.
                  </p>
                </div>
              </div>

              <p className="text-zinc-400 text-sm font-light border-l border-white/10 pl-4">
                Current advisory work includes a senior strategic and creative sparring-partner engagement with the CMO of a leading European luxury wellness hospitality brand.
              </p>

              <p className="text-white font-medium border-l border-emerald-400/40 pl-4 font-mono text-xs pt-2">
                The goal across all of it is the same: make the business clearer, stronger, and more capable without making it generic.
              </p>
            </div>

            {/* Right: Media placeholder */}
            <div className="lg:col-span-5 space-y-4">
              <ImagePlaceholder label="Active Rebuilding Roadmap Diagram" />
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-right">
                [ Q2 2026 Milestone ]
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Questions & Direction Section */}
      <section className="py-12 md:py-20 bg-zinc-950/20 theme-transition border-b border-white/[0.03]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            
            {/* Current Questions */}
            <div className="space-y-6">
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block border-b border-white/5 pb-2">
                [ Current questions ]
              </span>
              
              <ul className="space-y-4 text-xs font-mono text-zinc-300">
                {[
                  "What work should still require a human?",
                  "What work should never have required one?",
                  "Where is the business relying on memory instead of systems?",
                  "Where are platforms helping?",
                  "Where are they hiding the real shape of the work?",
                  "What should be automated?",
                  "What should be simplified instead?",
                  "What should be removed entirely?",
                  "Where is the brand promise not yet operational?"
                ].map((q, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <span className="text-emerald-500 font-bold font-mono shrink-0">Q{idx + 1} {"//"}</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current Direction */}
            <div className="space-y-6">
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block border-b border-white/5 pb-2">
                [ Current direction ]
              </span>
              
              <ul className="space-y-4 text-xs font-mono text-zinc-300">
                {[
                  "Finish the BraveHeart operating layer.",
                  "Make the transformation visible.",
                  "Build systems reliable enough to trust.",
                  "Use AI where it creates leverage.",
                  "Use code where reliability matters.",
                  "Use human judgment where responsibility matters.",
                  "Continue selective advisory work where the fit is strong.",
                  "Let the pattern become clearer before forcing it into a category."
                ].map((d, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <ArrowRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                    <span className={idx === 6 || idx === 7 ? "text-white font-medium" : ""}>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
