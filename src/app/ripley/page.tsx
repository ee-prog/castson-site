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

export default function Ripley() {
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
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">02 / System Architecture</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-none font-display">
              Ripley
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light font-display">
              The operating layer emerging from the work.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Narrative */}
      <section className="py-20 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <p className="text-lg text-white">
                Ripley did not begin as a product. It began as a need.
              </p>
              
              <p>
                As BraveHeart became clearer, it started asking for tools that did not exist. Not another dashboard. Not another disconnected SaaS account. Not another place for work to hide.
              </p>

              <blockquote className="border-l-2 border-emerald-400 pl-4 italic text-zinc-400 font-light">
                &ldquo;Something closer to an operating layer. A way for information, workflows, knowledge, and decisions to move through the company with less friction.&rdquo;
              </blockquote>

              <p className="text-white font-medium">
                Ripley is the name for that layer.
              </p>
            </div>

            {/* Right Col: Image Placeholder */}
            <div className="lg:col-span-5 space-y-4">
              <ImagePlaceholder label="Ripley Operating Layer Conceptual Architecture" />
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-right">
                [ Layer 0 State Engine ]
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Ripley is vs is not */}
      <section className="py-20 border-b border-white/[0.03] bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* What Ripley Is */}
            <div className="border border-white/5 bg-zinc-900/30 p-8 rounded-sm space-y-6">
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block border-b border-white/5 pb-2">
                [ What Ripley is ]
              </span>
              <p className="text-sm text-zinc-200">
                Ripley is an internal operating system being developed inside BraveHeart. It is made of:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                {["Custom software", "Automation", "AI-assisted workflows", "Operational memory", "Dashboards", "Rules", "Interfaces", "Human judgment"].map((el) => (
                  <li key={el} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-xs text-zinc-400">
                It connects the parts of the business that normally drift apart: Marketing, Scheduling, Operations, Finance, Knowledge, Customer experience, and Decision-making.
              </p>

              <p className="text-xs font-bold text-white uppercase font-mono">
                The point is not to make the company artificially intelligent. The point is to make the company more coherent.
              </p>
            </div>

            {/* What Ripley is NOT */}
            <div className="border border-white/5 bg-zinc-950/40 p-8 rounded-sm space-y-6">
              <span className="text-[9px] font-mono text-red-400 uppercase tracking-widest block border-b border-white/5 pb-2">
                [ What Ripley is not ]
              </span>
              <p className="text-sm text-zinc-300 italic">
                Ripley is not a chatbot. It is not AI decoration. It is not a thin wrapper on top of confusion. It is not a replacement for care, responsibility, leadership, or taste.
              </p>

              <div className="space-y-3 font-mono text-xs text-zinc-400">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>Solid code</span>
                  <span className="text-white">stable processes</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>Human-in-the-loop</span>
                  <span className="text-white">judgment</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>Automation</span>
                  <span className="text-white">repetition</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>AI</span>
                  <span className="text-white">leverage</span>
                </div>
              </div>

              <p className="text-xs font-bold text-zinc-400 uppercase font-mono">
                That distinction matters.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Principle & Why Now */}
      <section className="py-20 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* The Principle */}
            <div className="space-y-6">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ The Principle ]</span>
              <h2 className="text-2xl font-bold uppercase text-white font-display">
                Do not automate confusion.
              </h2>
              <div className="text-zinc-300 font-light text-sm sm:text-base space-y-4">
                <p>
                  Clarify first. Then automate.
                </p>
                <p>
                  Most organizations want speed before truth. I am trying to do the opposite:
                </p>
                
                <ol className="space-y-2 text-xs font-mono text-zinc-400 list-decimal pl-4">
                  <li>Understand the business.</li>
                  <li>Name the real process.</li>
                  <li>Find the bottleneck.</li>
                  <li>Remove unnecessary complexity.</li>
                  <li>Then build the tool.</li>
                </ol>

                <p className="text-white font-medium">
                  This is slower at first. Then much faster later.
                </p>
              </div>
            </div>

            {/* Why Now */}
            <div className="space-y-6">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Why Now ]</span>
              <h2 className="text-2xl font-bold uppercase text-white font-display">
                The Shift in Boundaries
              </h2>
              <div className="text-zinc-300 font-light text-sm sm:text-base space-y-4">
                <p>
                  Small companies used to face a hard choice: use generic software and reshape the business around the tool, or spend heavily to build custom systems.
                </p>
                <p>
                  That boundary is changing. AI-assisted development makes internal software more accessible. Automation tools make workflows more flexible. Modern APIs make systems more connected.
                </p>
                <p className="text-white font-medium border-l border-emerald-400/40 pl-4 font-mono text-xs">
                  Small teams can now build operating leverage that used to require departments. But the advantage does not come from tools alone. It comes from clarity. Ripley is what happens when clarity meets capability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Ripley Supports */}
      <section className="py-20 border-b border-white/[0.03] bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Diagram */}
            <div className="lg:col-span-5 space-y-4 fade-up-element visible">
              <ImagePlaceholder label="Ripley Modules & Integration Chart" />
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                [ Module Mapping: Course Operations & Marketing ]
              </div>
            </div>

            {/* Right: Modules list */}
            <div className="lg:col-span-7 space-y-6 fade-up-element visible">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Supported Operations ]</span>
              <h2 className="text-2xl font-bold uppercase text-white font-display">
                What Ripley supports
              </h2>
              <p className="text-zinc-300 font-light text-sm sm:text-base">
                Ripley is being developed around the actual needs of BraveHeart. Every module begins with the same question: <strong>What is the business trying to do here?</strong>
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-zinc-400">
                {[
                  "Course operations",
                  "Instructor coordination",
                  "Customer messaging",
                  "Scheduling visibility",
                  "Marketing production",
                  "Facebook content/ads",
                  "SEO & paid search",
                  "Operational reports",
                  "Financial visibility",
                  "Knowledge manager",
                  "Decision support",
                  "Reduced dependency"
                ].map((mod) => (
                  <div key={mod} className="flex items-center gap-1 p-2 bg-zinc-950/60 border border-white/5 rounded-sm">
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
