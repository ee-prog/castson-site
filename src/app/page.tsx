"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[16/10] bg-zinc-900/40 border border-white/5 rounded-sm flex flex-col items-center justify-center p-6 relative overflow-hidden group theme-transition">
      {/* Blueprint grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>
      <div className="absolute top-4 left-4 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">[ Image Placeholder ]</div>
      <span className="text-[10px] font-mono text-zinc-400 text-center tracking-widest uppercase px-4 py-2 border border-white/5 bg-zinc-950/80 rounded-sm relative z-10 group-hover:border-emerald-400/30 group-hover:text-emerald-400 transition-all duration-300">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      
      {/* Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 border-b border-white/[0.03] flex items-center theme-transition">
        {/* Dynamic Glow Orb */}
        <div className="absolute top-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />

        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow status pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.02] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Castson Inc. Personal Site</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-none font-display fade-up-element visible">
              Building from first principles.
            </h1>
          </div>
        </div>
      </section>

      {/* Swiss to Canada Narrative */}
      <section className="py-20 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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
              
              <p className="border-l border-white/10 pl-4 italic text-zinc-400 font-light">
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
      <section className="py-24 border-b border-white/[0.03] bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl space-y-12">
            
            <div className="border-l-2 border-emerald-400 pl-6 space-y-4 fade-up-element visible">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ The Pivot ]</span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white font-display">
                Then I bought a first aid training company.
              </h2>
              <p className="text-zinc-300 font-light leading-relaxed">
                Not because it was glamorous. Because it mattered.
              </p>
            </div>

            <div className="bg-zinc-900/30 border border-white/5 rounded-sm p-8 sm:p-10 relative overflow-hidden space-y-6 fade-up-element visible">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
              <p className="text-xl sm:text-2xl text-white font-light italic font-display leading-relaxed">
                &ldquo;Somewhere, someday, someone may stay alive because a person took a course from the company I now run.&rdquo;
              </p>
              <p className="text-zinc-400 text-sm font-light">
                That changed something in me. In June 2025, I acquired BraveHeart First Aid.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-300 font-light text-sm sm:text-base leading-relaxed fade-up-element visible">
              <div className="space-y-4">
                <p>
                  At first, I thought it would become a living case study for my consulting work. A real business where I could test ideas about operations, marketing, systems, and technology.
                </p>
                <p>
                  Instead, it became something more personal. It became a place to ask better questions.
                </p>
              </div>
              <div className="space-y-4 rounded-sm border border-white/5 bg-zinc-950/40 p-6">
                <h4 className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider mb-2">[ The Core Questions ]</h4>
                <ul className="space-y-2 text-xs font-mono text-zinc-400">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>What makes a business work?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>What makes it harder than it needs to be?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>Why do so many organizations grow by accumulating complexity?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>What happens when you strip a company back to what is actually true?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="text-white font-medium">And what becomes possible when you rebuild from there?</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Year One: Clarity */}
      <section className="py-24 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
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
              <h2 className="text-3xl font-bold uppercase text-white font-display">
                The first year was not about AI.
              </h2>
              <p className="text-lg text-zinc-200">
                The first year was about clarity.
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-4 text-xs font-mono text-zinc-400 border-y border-white/5">
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
                There were new platforms: Squarespace, Acuity, Monday.com, advertising systems, SEO, paid search, and operational dashboards.
              </p>
              
              <p>
                Each step helped. Each step also revealed the next constraint.
              </p>

              <blockquote className="border-l border-white/15 pl-4 italic text-zinc-400 font-light">
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
      <section className="py-24 border-b border-white/[0.03] bg-zinc-950/20 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base fade-up-element visible">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Phase 02: Scale & Synced State ]</span>
              <h2 className="text-3xl font-bold uppercase text-white font-display">
                Now the automation begins.
              </h2>
              <p className="text-lg text-zinc-200">
                Only recently did the real automation phase begin. That matters.
              </p>
              
              <p className="border-l-2 border-emerald-400 pl-4 italic text-zinc-400">
                The mistake would have been to automate the mess. Instead, the work was to clarify the business first. A business has to become understandable before it can become automated.
              </p>

              <p>
                Now BraveHeart is entering a new phase:
              </p>

              <div className="grid grid-cols-2 gap-3 py-2 text-xs font-mono">
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
      <section className="py-24 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl space-y-12">
            
            <div className="space-y-4 fade-up-element visible">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ System Mechanics ]</span>
              <h2 className="text-3xl font-extrabold uppercase text-white font-display">
                Every organization is an operating system.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-300 font-light text-sm sm:text-base leading-relaxed fade-up-element visible">
              <div className="space-y-6">
                <p>
                  Most people look at a business and see employees, customers, problems, and tasks.
                </p>
                <p className="text-white font-medium text-lg font-display">
                  I tend to see something else:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Information flows", "Bottlenecks", "Feedback loops", "State changes", "Decision points", "Hidden dependencies", "Operating models"].map((term) => (
                    <span key={term} className="text-xs font-mono tracking-wide px-3 py-1 bg-white/5 border border-white/5 rounded-sm text-white">
                      {term}
                    </span>
                  ))}
                </div>
                <p>
                  A company is not just a brand, a team, or a set of services. It is a living system.
                </p>
              </div>

              <div className="space-y-4 border border-white/5 bg-zinc-950/60 p-6 rounded-sm">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                  [ System Drift Analysis ]
                </span>
                <p className="text-xs text-zinc-400">
                  And most systems drift:
                </p>
                <ul className="space-y-2 text-xs font-mono text-zinc-400">
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">-</span>
                    <span>They collect assumptions.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">-</span>
                    <span>They inherit habits.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">-</span>
                    <span>They preserve old decisions.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">-</span>
                    <span>They make simple things complicated.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">-</span>
                    <span>They ask people to remember what the business itself should know.</span>
                  </li>
                </ul>
                <p className="pt-2 text-xs font-mono text-white border-t border-white/5 mt-4">
                  I am interested in reversing that. Finding the truth of the system. Then building from there.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Castson Inc. is */}
      <section className="py-24 bg-zinc-950/40 relative theme-transition">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/[0.02] via-transparent to-transparent pointer-events-none"></div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Summary */}
            <div className="lg:col-span-6 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base fade-up-element visible">
              <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Definition ]</span>
              <h2 className="text-3xl font-bold uppercase text-white font-display">
                What Castson Inc. is
              </h2>
              <p>
                Castson Inc. is the record of that work.
              </p>
              <p className="border-l border-emerald-400/40 pl-4 font-mono text-xs text-zinc-400 space-y-2">
                <span>• The current experiment is <strong>BraveHeart</strong>.</span><br />
                <span>• The emerging operating layer is <strong>Ripley</strong>.</span>
              </p>
              <p>
                I am documenting the process quietly. Not to perform expertise. To see the progress. And to let the right people find the signal.
              </p>
            </div>

            {/* Right: The Larger Questions List */}
            <div className="lg:col-span-6 space-y-4 fade-up-element visible">
              <div className="rounded-sm border border-white/5 bg-zinc-900/30 p-6 sm:p-8 space-y-6">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                  [ The Larger Question is Still Forming ]
                </span>
                
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  What can small companies become now?
                </h4>
                
                <ul className="space-y-3 text-xs font-mono text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0"></span>
                    <span>When custom software can be built faster.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0"></span>
                    <span>When AI can support judgment, production, analysis, and coordination.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0"></span>
                    <span>When small teams can begin to operate with the leverage of much larger ones.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0"></span>
                    <span>When service businesses can become clearer, faster, and more capable without becoming less human.</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/5">
                  <Link 
                    href="/braveheart"
                    className="group flex w-full items-center justify-between gap-1 rounded-sm bg-white text-black py-3 px-4 text-center text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all duration-300"
                  >
                    <span>View BraveHeart Experiment</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
