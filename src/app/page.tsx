"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

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

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      
      {/* Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.02] animate-grid-line delay-100 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block animate-grid-line delay-300 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block animate-grid-line delay-550 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] animate-grid-line delay-700 opacity-0"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-32 border-b border-white/[0.03] flex items-center theme-transition">
        {/* Dynamic Glow Orb */}
        <div className="absolute top-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />

        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow status pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.02] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-emerald-400 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Eli Castson</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl font-normal uppercase tracking-tighter text-white leading-none font-display fade-up-element visible">
              I build companies where taste, service, and operations meet.
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl pt-2">
              Castson Inc. is the vehicle for that work: acquiring, partnering with, and developing experience-led businesses with distinct character and room to become stronger.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-4">
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-emerald-400 rounded-full"></span>
                <span>Taste</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-emerald-400 rounded-full"></span>
                <span>Service</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-emerald-400 rounded-full"></span>
                <span>Systems</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-emerald-400 rounded-full"></span>
                <span>Ownership</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Swiss to Canada Narrative */}
      <section className="py-12 md:py-20 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Col: Narrative */}
            <div className="lg:col-span-7 space-y-8 text-zinc-300 font-light leading-relaxed text-sm sm:text-base fade-up-element visible">
              <p className="text-lg text-white font-normal font-display">
                I spent most of my career helping organizations change from the outside.
              </p>
              
              <div className="flex flex-wrap gap-2 py-2">
                {["Creative direction", "Technology", "Advertising", "Digital transformation", "Systems", "Strategy"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 border border-white/5 bg-zinc-900/30 rounded-sm text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>

              <p>
                I helped brands communicate, sell, grow, and adapt.
              </p>
              
              <p className="border-l border-white/10 pl-4 text-zinc-400 font-light opacity-80">
                Some of the work was interesting. Some of it was useful. Some of it, if I am honest, was hard to feel proud of.
              </p>

              <p>
                For eighteen years, Switzerland was home. It still is, in many ways. Much of my work, my perspective, and my opportunity came from there.
              </p>

              <p>
                Then I moved back to Canada. To Nova Scotia. To the Bay of Fundy.
              </p>

              <p>
                Coming home after a long time away has a strange effect. It does not erase the life you built elsewhere. It puts it in relation to something older.
              </p>

              <p className="text-white font-medium">
                You start to see the through-line. What you learned. What you carried. What still matters. What kind of work you want the next part of your life to be made of.
              </p>
            </div>

            {/* Right Col: Image Placeholder */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 fade-up-element visible">
              <ImagePlaceholder label="Eli in Switzerland / Nova Scotia shore" />
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-right">
                [ Bay of Fundy, Nova Scotia ]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BraveHeart Acquisition */}
      <section className="relative py-12 md:py-24 border-b border-white/[0.03] bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl space-y-12">
            
            <div className="border-l-2 border-emerald-400 pl-6 space-y-4 fade-up-element visible">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ The First Acquisition ]</span>
              <h2 className="text-2xl sm:text-3xl font-medium uppercase text-white">
                BraveHeart First Aid
              </h2>
              <p className="text-zinc-300 font-light leading-relaxed">
                BraveHeart was the first company I acquired and operated. It taught me what ownership demands: standards, timing, care, and systems that work when people depend on them.
              </p>
            </div>

            <div className="bg-zinc-900/30 border border-white/5 rounded-sm p-6 sm:p-10 relative overflow-hidden space-y-6 fade-up-element visible">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
              <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed">
                &ldquo;Trust is operational: timing, people, standards, communication, and care all have to work at once.&rdquo;
              </p>
              <p className="text-zinc-400 text-sm font-light">
                That changed my view of systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-zinc-300 font-light text-sm sm:text-base leading-relaxed fade-up-element visible">
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider">[ The Standard of Care ]</h4>
                <p>
                  First aid training has a moral centre. It is work done under pressure. At first, I thought of it as a proof of ownership and systems discipline. But ownership quickly taught me something deeper.
                </p>
                <p>
                  It taught me that standard of care is everything. If the student isn&apos;t supported, if the timing is off, if the instructors don&apos;t have what they need, the system fails.
                </p>
              </div>
              <div className="space-y-4 rounded-sm border border-white/5 bg-zinc-950/40 p-6">
                <h4 className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider mb-2">[ The Core Questions ]</h4>
                <ul className="space-y-2 text-xs font-mono text-zinc-400 border-b border-white/5 pb-4 mb-4">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={1.5} aria-hidden="true" />
                    <span>What makes a business work?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={1.5} aria-hidden="true" />
                    <span>What makes it harder than it needs to be?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={1.5} aria-hidden="true" />
                    <span>Why do so many organizations grow by accumulating complexity?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={1.5} aria-hidden="true" />
                    <span>What happens when you strip a company back to what is actually true?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-white font-medium">And what becomes possible when you rebuild from there?</span>
                  </li>
                </ul>
                <div className="space-y-1 text-xs font-mono text-zinc-500">
                  <p>BraveHeart was the first acquisition.</p>
                  <p>Ripley is the operating layer I am building underneath the work.</p>
                  <p className="text-white">castson.com is the record.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Year One: Clarity */}
      <section className="py-12 md:py-24 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left: Image Placeholder */}
            <div className="lg:col-span-5 space-y-4 order-last lg:order-first fade-up-element visible">
              <ImagePlaceholder label="Braveheart Operations & Stack Diagram" />
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                [ Squarespace + Acuity + Monday Stack Layout ]
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base fade-up-element visible">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Phase 01: The Foundation ]</span>
              <h2 className="text-3xl font-medium uppercase text-white">
                The first year was not about AI.
              </h2>
              <p className="text-lg text-zinc-200">
                The first year was about clarity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 py-4 text-xs font-mono text-zinc-400 border-y border-white/5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Understanding the business</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Removing owner dependency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Untangling complexity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Improving the website</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Moving onto better systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Cleaning up workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Standardizing operations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Learning what was real</span>
                  </div>
                </div>
              </div>

              <p>
                There were new platforms: Squarespace, Acuity, Monday.com, advertising systems, search, and operating visibility.
              </p>
              
              <p>
                Each step helped. Each step also revealed the next constraint.
              </p>

              <blockquote className="border-l border-white/15 pl-4 text-zinc-400 font-light opacity-80">
                Eventually, the pattern became clear. The business was outgrowing almost every platform it touched. Not because the platforms were bad. Because the company was becoming more specific. More understood. More alive.
              </blockquote>

              <p className="text-white font-medium">
                And when you understand a business deeply enough, generic software starts to feel like a compromise.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Year Two: Automation */}
      <section className="py-12 md:py-24 border-b border-white/[0.03] bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base fade-up-element visible">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Phase 02: Scale & Synced State ]</span>
              <h2 className="text-3xl font-medium uppercase text-white">
                Now the automation begins.
              </h2>
              <p className="text-lg text-zinc-200">
                Only recently did the real automation phase begin. That matters.
              </p>
              
              <p className="border-l-2 border-emerald-400 pl-4 text-zinc-400 opacity-80">
                The mistake would have been to automate the mess. Instead, the work was to clarify the business first. A business has to become understandable before it can become automated.
              </p>

              <p>
                Now BraveHeart is entering a new phase:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 py-2 text-xs font-mono">
                {["Custom software", "AI-assisted workflows", "Internal tools", "Decision support", "Automation", "Marketing intelligence", "Better reporting", "Tailored systems"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-zinc-400">
                    <span className="h-1 w-1 bg-emerald-400"></span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <p className="text-white font-medium">
                This is the fun part. But it is only possible because of the slower work that came before it.
              </p>
            </div>

            {/* Right: Image Placeholder */}
            <div className="lg:col-span-5 space-y-4 fade-up-element visible">
              <ImagePlaceholder label="Ripley sync engine dashboard mockup" />
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                [ Automated Operations Layer Interface ]
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Every Organization is an Operating System */}
      {/* Every Experience has a System */}
      <section className="py-12 md:py-24 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl space-y-12">
            
            <div className="space-y-4 fade-up-element visible">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ System Mechanics ]</span>
              <h2 className="text-3xl font-medium uppercase text-white">
                Every experience is supported by a system.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-zinc-300 font-light text-sm sm:text-base leading-relaxed fade-up-element visible">
              <div className="space-y-6">
                <p>
                  Most people look at a hotel, a travel service, or a product and see only the front of house.
                </p>
                <p className="text-white font-medium text-lg">
                  I tend to see the underlying coordination:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Information flows", "Service standards", "Feedback loops", "Timing & Rhythm", "Decision points", "Operational drag", "Legacy transition"].map((term) => (
                    <span key={term} className="text-xs font-mono tracking-wide px-3 py-1 bg-white/5 border border-white/5 rounded-sm text-white">
                      {term}
                    </span>
                  ))}
                </div>
                <p>
                  A distinct brand is not just a logo or a story. It is a living system that makes standard of care possible.
                </p>
              </div>

              <div className="space-y-4 border border-white/5 bg-zinc-950/60 p-6 rounded-sm">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                  [ Operational Friction ]
                </span>
                <p className="text-xs text-zinc-400">
                  And most operations drift over time:
                </p>
                <ul className="space-y-2 text-xs font-mono text-zinc-400">
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">-</span>
                    <span>They collect assumptions.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">-</span>
                    <span>They inherit old habits.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">-</span>
                    <span>They compromise on standards.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">-</span>
                    <span>They make simple coordination complicated.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">-</span>
                    <span>They ask staff to compensate for what the system itself should handle.</span>
                  </li>
                </ul>
                <p className="pt-2 text-xs font-mono text-white border-t border-white/5 mt-4">
                  I am interested in resolving that. Designing the systems that support hospitality.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Castson Inc. is building */}
      <section className="py-12 md:py-24 bg-zinc-950/40 relative theme-transition border-b border-white/[0.03]">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/[0.01] via-transparent to-transparent pointer-events-none"></div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left: Summary */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base fade-up-element visible">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Identity ]</span>
              <h2 className="text-3xl font-medium uppercase text-white">
                What Castson Inc. is building
              </h2>
              <p className="text-lg text-zinc-200">
                Castson Inc. is becoming a home for experience brands rooted in place.
              </p>
              <p>
                The model is straightforward:
              </p>
              
              <ul className="space-y-3 pl-4 border-l border-white/10 text-xs font-mono text-zinc-400 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">—</span>
                  <span>Find businesses with real taste, service, place, or reputation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">—</span>
                  <span>Preserve what makes them distinct.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">—</span>
                  <span>Strengthen the story and standards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">—</span>
                  <span>Build the systems behind the experience.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">—</span>
                  <span>Make the business more capable without making it generic.</span>
                </li>
              </ul>

              <div className="space-y-3 border-t border-white/5 pt-4 text-zinc-400">
                <p className="text-white font-medium">
                  We build the systems behind the experience so the front of house can feel effortless.
                </p>
                <p>
                  The focus is quiet:
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono text-zinc-400 pl-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-500 rounded-full shrink-0"></span>
                    <span>Place-Based Brands</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-500 rounded-full shrink-0"></span>
                    <span>Service & Standards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-500 rounded-full shrink-0"></span>
                    <span>Operating Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-500 rounded-full shrink-0"></span>
                    <span>Story</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-500 rounded-full shrink-0"></span>
                    <span>Ownership</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-xs font-mono text-zinc-500 pt-2 border-t border-white/5">
                <p>BraveHeart was the first acquisition.</p>
                <p>Ripley is the operating layer I am building underneath the work.</p>
                <p className="text-white">castson.com is the record.</p>
              </div>
            </div>

            {/* Right: What I am trying to learn */}
            <div className="lg:col-span-5 space-y-4 fade-up-element visible lg:sticky lg:top-28">
              <div className="rounded-sm border border-white/5 bg-zinc-900/30 p-6 sm:p-8 space-y-6">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                  [ What I am trying to learn ]
                </span>
                
                <ul className="space-y-4 text-xs font-mono text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">Q1 //</span>
                    <span>What makes a place worth travelling for?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">Q2 //</span>
                    <span>How do you scale care without making it feel standardized?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">Q3 //</span>
                    <span>Can better systems make hospitality feel more human, not less?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">Q4 //</span>
                    <span>How do you preserve the character of a place while making the business stronger?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">Q5 //</span>
                    <span>What should technology handle quietly, and what should remain human?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">Q6 //</span>
                    <span>How do you build operational leverage that makes a brand more distinctive, not more generic?</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How I share the work */}
      <section className="py-12 md:py-24 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base fade-up-element visible">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Publication Policy ]</span>
              <h2 className="text-3xl font-medium uppercase text-white">
                How I share the work
              </h2>
              <p className="text-lg text-zinc-200">
                castson.com is a selective public record.
              </p>
              <p>
                I share the shape of the transformation: the questions, decisions, lessons, patterns, and mistakes once they become useful.
              </p>
              <p className="border-l border-white/15 pl-4 text-zinc-400 opacity-80">
                I do not share private information, customer data, staff matters, operational vulnerabilities, or anything that belongs inside the company.
              </p>
              <p className="text-white font-medium">
                The goal is not content. The goal is a trail of signal.
              </p>
            </div>

            {/* Right: Visual Checklist */}
            <div className="lg:col-span-5 space-y-4 fade-up-element visible">
              <div className="border border-white/5 bg-zinc-950/60 p-6 rounded-sm space-y-4">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                  [ Information Signal Grid ]
                </span>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between border-b border-white/5 pb-1 text-emerald-400">
                    <span>The Questions & Decisions</span>
                    <span>[Shared]</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1 text-emerald-400">
                    <span>Lessons & Patterns</span>
                    <span>[Shared]</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1 text-emerald-400">
                    <span>Mistakes (when useful)</span>
                    <span>[Shared]</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1 text-red-400/70">
                    <span>Private & Staff Matters</span>
                    <span>[Private]</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1 text-red-400/70">
                    <span>Customer Data</span>
                    <span>[Private]</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1 text-red-400/70">
                    <span>Operational Vulnerabilities</span>
                    <span>[Private]</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Calls to Action */}
      <section className="py-12 md:py-24 bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Start a Conversation ]</span>
              <h2 className="text-3xl font-medium uppercase text-white">
                Start a Conversation
              </h2>
              <p className="text-zinc-400 font-light text-sm">
                If you own, operate, or are building an experience business rooted in place, I’d be interested in the conversation.
              </p>
              <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest pt-1">
                Especially if the work involves hospitality, tourism, property, service, product, or legacy transition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* CTA 1: BraveHeart */}
              <Link 
                href="/braveheart"
                className="group relative rounded-sm border border-white/5 bg-zinc-900/20 p-6 sm:p-8 flex flex-col justify-between h-56 hover:border-emerald-400/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>
                <div className="space-y-4 relative z-10">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">[ First Acquisition ]</span>
                  <h3 className="text-lg font-medium uppercase text-white group-hover:text-emerald-400 transition-colors">
                    The First Acquisition
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    BraveHeart was the first company I acquired and operated, serving as a real lesson in standards, timing, care, and systems.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-emerald-400 group-hover:text-white transition-colors relative z-10">
                  <span>Explore BraveHeart</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </Link>

              {/* CTA 2: Field Notes */}
              <Link 
                href="/field-notes"
                className="group relative rounded-sm border border-white/5 bg-zinc-900/20 p-6 sm:p-8 flex flex-col justify-between h-56 hover:border-emerald-400/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>
                <div className="space-y-4 relative z-10">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">[ Insights ]</span>
                  <h3 className="text-lg font-medium uppercase text-white group-hover:text-emerald-400 transition-colors">
                    Field Notes
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    Short, direct observations from building and automating systems inside a real transformation.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-emerald-400 group-hover:text-white transition-colors relative z-10">
                  <span>Read Field Notes</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </Link>

              {/* CTA 3: Contact */}
              <Link 
                href="/contact"
                className="group relative rounded-sm border border-white/5 bg-zinc-900/20 p-6 sm:p-8 flex flex-col justify-between h-56 hover:border-emerald-400/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>
                <div className="space-y-4 relative z-10">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">[ Dialog ]</span>
                  <h3 className="text-lg font-medium uppercase text-white group-hover:text-emerald-400 transition-colors">
                    Start a Conversation
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    Reach out for discussion if you are an owner, operator, investor, builder, or collaborator.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-emerald-400 group-hover:text-white transition-colors relative z-10">
                  <span>Connect Directly</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
