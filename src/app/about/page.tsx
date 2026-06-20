"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      
      {/* Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] animate-grid-line delay-100 opacity-0"></div>
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] hidden md:block animate-grid-line delay-300 opacity-0"></div>
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] hidden md:block animate-grid-line delay-550 opacity-0"></div>
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] animate-grid-line delay-700 opacity-0"></div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-20 sm:px-6 lg:px-8 relative z-20">
        
        {/* Page Header */}
        <div className="max-w-3xl fade-up-element visible">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-mono">05 / Profile</span>
          <h1 className="text-foreground font-display mt-2">
            Eli Castson
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-zinc-700 dark:text-zinc-300 font-light">
            Operator, builder, and selective advisor.
          </p>
        </div>

        {/* Main Narrative */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
          
          {/* Left Columns - Story */}
          <div className="lg:col-span-8 space-y-8 text-zinc-800 dark:text-zinc-300 font-light leading-relaxed text-sm sm:text-base fade-up-element visible">
            
            <p>
              I am based in Nova Scotia and shaped by eighteen years in Switzerland.
            </p>
            
            <p>
              Before acquiring BraveHeart First Aid, I worked across creative direction, advertising, consulting, programmatic media, digital transformation, and technology.
            </p>

            <p className="border-l border-zinc-200 dark:border-white/10 pl-4 text-zinc-650 dark:text-zinc-400 opacity-80">
              That work moved through Swiss and international environments, including projects connected to UBS, La Prairie, and other premium or complex organizations.
            </p>

            <p>
              For years, I helped organizations change from the outside.
            </p>

            <p>
              That gave me range.
            </p>

            <div className="bg-white dark:bg-zinc-900/20 border border-zinc-200 dark:border-white/5 p-6 rounded-sm space-y-4">
              <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block border-b border-zinc-200 dark:border-white/5 pb-2">
                [ Ownership Changed the Work ]
              </span>
              <p className="text-sm font-medium text-zinc-900 dark:text-white">
                There is no abstraction in operating a real company.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-650 dark:text-zinc-400 pt-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                  <span>The system either works or it does not</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                  <span>The customer trusts the path or they do not</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                  <span>The team is supported or they are not</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                  <span>The business becomes clearer or heavier</span>
                </div>
              </div>
            </div>

            <p>
              That directness now matters to me.
            </p>

            <div className="space-y-2 pt-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-650 dark:text-zinc-400 pl-2">
                <li className="flex items-start gap-1.5">
                  <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                  <span>I like finding the real shape of a problem.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                  <span>I like removing what does not belong.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                  <span>I like building systems that make people more capable.</span>
                </li>
              </ul>
            </div>

            <p>
              And I like working with people who care about the standard of the thing, not just the appearance of it.
            </p>

            <div className="space-y-2 pt-6 border-t border-zinc-200 dark:border-white/5 text-zinc-650 dark:text-zinc-400 text-xs font-mono">
              <div className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                <span><strong className="text-zinc-900 dark:text-white">BraveHeart</strong> is the operating proof.</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                <span><strong className="text-zinc-900 dark:text-white">Ripley</strong> is the operating layer.</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                <span>Selected advisory work is where that pattern meets other companies, leaders, and decisions.</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                <span><strong className="text-zinc-900 dark:text-white">Castson.com</strong> is the record.</span>
              </div>
            </div>

          </div>

          {/* Right Column - Side Info Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 fade-up-element visible">
            <div className="rounded-sm border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/20 p-6 space-y-6 theme-transition">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-650 dark:text-zinc-300 font-mono">[ QUICK FACTS ]</h3>
              
              <div className="space-y-6">
                
                {/* Focus */}
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">FOCUS</span>
                  <p className="text-xs text-zinc-900 dark:text-white font-medium leading-relaxed">
                    Acquiring, building, and selectively advising experience-led businesses with character.
                  </p>
                </div>

                {/* Operating Company */}
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">OPERATING COMPANY</span>
                  <p className="text-xs text-zinc-900 dark:text-white font-medium">
                    BraveHeart First Aid
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-light">
                    Acquired June 2025
                  </p>
                </div>

                {/* Role */}
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">ROLE</span>
                  <p className="text-xs text-zinc-900 dark:text-white font-medium">
                    CEO / Owner-Operator
                  </p>
                </div>

                {/* Operating Layer */}
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">OPERATING LAYER</span>
                  <p className="text-xs text-zinc-900 dark:text-white font-medium">
                    Ripley
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                    Custom software, automation, AI-assisted workflows, and systems
                  </p>
                </div>

                {/* Selective Advisory */}
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">SELECTIVE ADVISORY</span>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                    Senior strategic and creative sparring-partner work with leaders responsible for brand, service, systems, and commercial clarity.
                  </p>
                </div>

                {/* Location */}
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">LOCATION</span>
                  <p className="text-xs text-zinc-900 dark:text-white font-medium">
                    Nova Scotia, Canada
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                    Deep professional roots in Switzerland
                  </p>
                </div>

              </div>

              <div className="pt-6 border-t border-zinc-200 dark:border-white/5">
                <Link
                  href="/contact"
                  className="interactive-hover flex w-full items-center justify-center gap-1.5 rounded-sm bg-zinc-950 dark:bg-white text-white dark:text-black py-3 text-center text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-all duration-300"
                >
                  GET IN TOUCH <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
