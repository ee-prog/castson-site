"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Award, Compass, Monitor } from "lucide-react";

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      
      {/* Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 relative z-20">
        
        {/* Page Header */}
        <div className="max-w-3xl fade-up-element visible">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">05 / Profile</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-none font-display mt-2">
            Eli Castson
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-zinc-300 font-light font-display">
            Operator, builder, and creative technologist.
          </p>
        </div>

        {/* Main Narrative */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Columns - Story */}
          <div className="lg:col-span-8 space-y-8 text-zinc-300 font-light leading-relaxed text-sm sm:text-base fade-up-element visible">
            
            <p>
              I am an operator, builder, and creative technologist based in Nova Scotia and shaped by eighteen years in Switzerland.
            </p>
            
            <p>
              Before acquiring BraveHeart First Aid, I worked across creative direction, advertising, programmatic media, consulting, digital transformation, and technology. For years, I helped organizations change from the outside.
            </p>

            <p className="border-l border-white/10 pl-4 text-zinc-400 italic">
              That gave me range. But ownership changed the work.
            </p>

            <div className="bg-zinc-900/20 border border-white/5 p-6 rounded-sm space-y-4">
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block border-b border-white/5 pb-2">
                [ The Reality of Ownership ]
              </span>
              <p className="text-sm font-medium text-white">
                There is no presentation layer between the idea and the consequence.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-400 pt-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                  <span>The system either works or it doesn&apos;t</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                  <span>The customer books or they don&apos;t</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                  <span>The instructor is supported or they aren&apos;t</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                  <span>The business gets clearer or heavier</span>
                </div>
              </div>
            </div>

            <p>
              That directness has become important to me.
            </p>

            <div className="space-y-2 pt-2">
              <p className="text-white font-medium font-display text-lg">
                I like bringing things back to first principles:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-400 pl-4">
                <li className="list-disc">I like finding the real shape of a problem.</li>
                <li className="list-disc">I like removing what does not belong.</li>
                <li className="list-disc">I like building systems that make people more capable.</li>
              </ul>
            </div>

            <p className="border-t border-white/5 pt-6 text-zinc-400 text-xs font-mono">
              • <strong>BraveHeart</strong> is where I am doing that now.<br />
              • <strong>Ripley</strong> is the operating layer emerging from it.<br />
              • <strong>castson.com</strong> is where I keep the record.
            </p>

          </div>

          {/* Right Column - Side Info Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 fade-up-element visible">
            <div className="rounded-sm border border-white/5 bg-zinc-900/20 p-6 space-y-6 theme-transition">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono">[Quick Facts]</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Monitor className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Identity Lanes</h4>
                    <p className="text-xs text-zinc-400 mt-1 font-light">Operator, Builder, Systems & Creative Technologist</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Award className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Acquisition</h4>
                    <p className="text-xs text-zinc-400 mt-1 font-light">BraveHeart First Aid (acquired June 2025)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Compass className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Location</h4>
                    <p className="text-xs text-zinc-400 mt-1 font-light">Nova Scotia, Canada (shaping: 18 years in Switzerland)</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <a
                  href="mailto:ee@castson.com"
                  className="interactive-hover flex w-full items-center justify-center gap-1 rounded-sm bg-white text-black py-3 text-center text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all duration-300"
                >
                  Let&apos;s Connect <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
