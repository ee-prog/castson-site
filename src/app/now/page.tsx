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

export default function Now() {
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
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">04 / Active Work</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-none font-display">
              Now
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light font-display">
              Current focus.
            </p>
          </div>
        </div>
      </section>

      {/* Focus & Roadmap Section */}
      <section className="py-20 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Prose */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <p className="text-lg text-white">
                I am currently focused on the accelerated automation and clarification of BraveHeart First Aid.
              </p>
              
              <p>
                The first year was about making the business understandable. The current phase is about building the systems the clarified business now needs.
              </p>

              <div className="space-y-4 pt-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                  [ System Pipeline Scope ]
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                  {[
                    "Custom internal tools",
                    "AI-assisted workflows",
                    "Automation",
                    "Facebook content & ads",
                    "SEO & search optimization",
                    "Operational dashboards",
                    "Scheduling intelligence",
                    "Knowledge systems",
                    "Marketing loops",
                    "Owner-dependency reduction"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-1">
                      <ChevronRight className="h-3.5 w-3.5 text-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-white font-medium border-l border-emerald-400/40 pl-4 font-mono text-xs pt-2">
                The goal is not to make the company look more technological. The goal is to make it easier to run, easier to understand, and more capable over time.
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

      {/* What I am trying to prove vs What I am not doing */}
      <section className="py-20 border-b border-white/[0.03] bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* What I am trying to prove */}
            <div className="space-y-6">
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block border-b border-white/5 pb-2">
                [ What I am trying to prove ]
              </span>
              
              <ul className="space-y-4 text-xs font-mono text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>That a small service business can be transformed without becoming soulless.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>That AI is most useful after clarification.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>That custom software can be practical, not precious.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>That the future of small business may look less like buying more platforms and more like building operating layers.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>That meaningful companies deserve excellent systems.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-white">That owners can move faster when the business becomes clearer.</span>
                </li>
              </ul>
            </div>

            {/* What I am not doing */}
            <div className="space-y-6">
              <span className="text-[9px] font-mono text-red-400 uppercase tracking-widest block border-b border-white/5 pb-2">
                [ What I am not doing ]
              </span>
              
              <ul className="space-y-4 text-xs font-mono text-zinc-400">
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">x</span>
                  <span>I am not trying to become an AI influencer.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">x</span>
                  <span>I am not building a public persona for its own sake.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">x</span>
                  <span>I am not publishing every internal detail.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">x</span>
                  <span>I am not sharing private information, competitive vulnerabilities, or operational secrets.</span>
                </li>
              </ul>

              <p className="text-xs font-bold text-zinc-500 uppercase font-mono pt-4 border-t border-white/5">
                This is a public record, not an open diary. The goal is signal. Not noise.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
