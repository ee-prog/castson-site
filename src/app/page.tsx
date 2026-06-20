"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Check, Minus } from "lucide-react";
import { ScrollReveal, StaggerChildren, TextReveal, CursorGlow, ParallaxLayer, GradientMesh, Magnetic } from '@/components/animations';

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

      {/* Hero Section */}
      <CursorGlow>
        <section className="relative py-12 md:py-32 border-b border-white/[0.03] flex items-center theme-transition">
          {/* Ambient gradient mesh — drifting color points */}
          <GradientMesh className="-z-10" cycleDuration={14} />

          <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 relative z-20">
            <ScrollReveal>
              <div className="max-w-3xl space-y-6">
                {/* Eyebrow status pill */}
                <div className="inline-flex items-center gap-2.5 rounded-sm border border-emerald-500/20 bg-emerald-500/[0.02] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-emerald-400 font-mono">
                  <span className="w-[2px] h-3 bg-emerald-400 animate-[cursor-blink_1.2s_steps(2)_infinite]"></span>
                  <span>Eli Castson</span>
                </div>

                {/* Title */}
                <TextReveal
                  text="I work where taste has to become operational."
                  as="h1"
                  className="text-white font-display"
                />

                <div className="space-y-4 text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl pt-2">
                  <p>
                    Through Castson Inc., I acquire, build, and selectively advise experience-led businesses.
                  </p>
                  <p>
                    The work is simple to describe and difficult to do well: clarify the promise, strengthen the service, and build the systems underneath so the business becomes more capable without becoming generic.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-4">
                  <span>Brand</span>
                  <span className="text-zinc-700">/</span>
                  <span>Service</span>
                  <span className="text-zinc-700">/</span>
                  <span>Systems</span>
                  <span className="text-zinc-700">/</span>
                  <span>Ownership</span>
                  <span className="text-zinc-700">/</span>
                  <span>Advisory</span>
                </div>

                <div className="pt-6">
                  <Magnetic inline strength={0.4} radius={80}>
                    <Link 
                      href="/contact" 
                      className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-400 hover:text-white transition-colors tracking-widest"
                    >
                      <span>Start a Conversation</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </CursorGlow>

      {/* Opening Narrative */}
      <section className="py-12 md:py-20 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Col: Narrative */}
            <div className="lg:col-span-7 space-y-8 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <ScrollReveal>
                <p className="text-sm text-white font-normal font-display">
                  I spent much of my career helping organizations change from the outside.
                </p>
              </ScrollReveal>
              
                <StaggerChildren className="flex flex-wrap gap-2 py-2">
                  {["Creative direction", "Advertising", "Digital transformation", "Technology", "Strategy"].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 border border-white/5 bg-zinc-900/30 rounded-sm text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </StaggerChildren>

              <ScrollReveal delay={0.15}>
                <div className="space-y-6">
                  <p>
                    That gave me range. It also taught me the limits of advice without consequence.
                  </p>
                  
                  <p className="border-l border-white/10 pl-4 text-zinc-400 font-light opacity-80">
                    Ownership changed the standard.
                  </p>

                  <p>
                    When you carry the business yourself, there is no presentation layer between the idea and the result. The customer books or they do not. The service holds or it does not. The team is supported or it is not. The business becomes clearer or heavier.
                  </p>

                  <p className="text-white font-medium">
                    That directness now shapes the work.
                  </p>

                  <p>
                    For eighteen years, Switzerland was home. It still is, in many ways. Much of my perspective, taste, and opportunity came from there.
                  </p>

                  <p>
                    Now I work from Nova Scotia, with one foot in operating reality and one foot in the kind of strategic and creative conversations that require distance, judgment, and trust.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Col: Image Placeholder */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
              <ScrollReveal direction="right" delay={0.2}>
                <ImagePlaceholder label="Eli in Switzerland / Nova Scotia shore" />
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-right">
                  [ Bay of Fundy, Nova Scotia ]
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* In Practice — BraveHeart */}
      <section className="relative py-12 md:py-24 border-b border-white/[0.03] bg-black/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl space-y-12">
            
            <ScrollReveal>
              <div className="border-l-2 border-emerald-400 pl-6 space-y-4">
                <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ In Practice ]</span>
                <TextReveal
                  text="BraveHeart First Aid"
                  as="h2"
                  className="font-medium text-white"
                />
                <p className="text-zinc-300 font-light leading-relaxed">
                  BraveHeart is the company I acquired and now operate.
                </p>
                <p className="text-zinc-300 font-light leading-relaxed">
                  It is practical, local, and serious. Standards, timing, care, communication, and systems have to hold because people depend on them.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-zinc-900/30 border border-white/5 rounded-sm p-6 sm:p-10 relative overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  &ldquo;Ownership made the work less abstract.&rdquo;
                </p>
                <p className="text-zinc-400 text-sm font-light">
                  Trust is operational.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="pt-4">
                <Magnetic inline strength={0.4} radius={80}>
                  <Link 
                    href="/braveheart" 
                    className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-400 hover:text-white transition-colors tracking-widest"
                  >
                    <span>Explore BraveHeart</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                </Magnetic>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Systems Layer — Ripley */}
      <section className="py-12 md:py-24 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left: Image Placeholder */}
            <div className="lg:col-span-5 space-y-4 order-last lg:order-first">
              <ScrollReveal direction="left">
                <ImagePlaceholder label="Ripley Operating Layer Interface" />
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  [ Operating Layer Architecture ]
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <ScrollReveal delay={0.1}>
                <div className="space-y-3">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Systems Layer ]</span>
                  <TextReveal
                    text="Ripley"
                    as="h2"
                    className="font-medium text-white"
                  />
                  <p className="text-sm text-zinc-200">
                    Ripley is the operating layer emerging from the work.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.15}>
                <div className="space-y-6">
                  <p>
                    It began inside BraveHeart as the business became clearer and started asking for tools that did not exist: better workflows, operational memory, internal software, automation, decision support, and visibility.
                  </p>

                  <p className="border-l border-white/15 pl-4 text-zinc-400 font-light opacity-80">
                    The point is not to make the company artificially intelligent.
                  </p>

                  <p className="text-white font-medium">
                    The point is to make it more coherent.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="pt-4">
                  <Magnetic inline strength={0.4} radius={80}>
                    <Link 
                      href="/ripley" 
                      className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-400 hover:text-white transition-colors tracking-widest"
                    >
                      <span>Explore Ripley</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                    </Link>
                  </Magnetic>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Selective Advisory */}
      <section className="py-12 md:py-24 border-b border-white/[0.03] bg-black/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <ScrollReveal>
                <div className="space-y-3">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Selective Advisory ]</span>
                  <TextReveal
                    text="Senior, direct thinking beside the person carrying the decision."
                    as="h2"
                    className="font-medium text-white"
                  />
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <p>
                    I take on a small number of advisory and sparring-partner engagements with founders, CEOs, CMOs, owners, and operators working on experience-led businesses.
                  </p>

                  <p className="border-l border-white/10 pl-4 text-zinc-400 font-light opacity-80">
                    This is not agency work. It is not outsourced execution.
                  </p>

                  <p>
                    The work is usually about clarity: what the business is really promising, where that promise breaks operationally, and how the brand, service, team, systems, and commercial model need to align.
                  </p>

                  <p className="text-zinc-400 text-sm font-light border-l-2 border-emerald-400 pl-4">
                    Current advisory work includes a senior strategic and creative sparring-partner engagement with the CMO of a leading European luxury wellness hospitality brand.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Relevance Card */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="rounded-sm border border-white/5 bg-zinc-900/30 p-6 sm:p-8 space-y-6">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                    [ Relevant when the work involves ]
                  </span>
                  
                  <StaggerChildren className="space-y-3 text-xs font-mono text-zinc-400" staggerDelay={0.05}>
                    {[
                      "Positioning",
                      "Commercial narrative",
                      "Guest or customer experience",
                      "Service standards",
                      "Brand and operating clarity",
                      "Digital systems",
                      "Marketing intelligence",
                      "Founder or executive decision support"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </StaggerChildren>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* System Mechanics */}
      <section className="py-12 md:py-24 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl space-y-12">
            
            <ScrollReveal>
              <div className="space-y-4">
                <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ System Mechanics ]</span>
                <TextReveal
                  text="Every experience is supported by a system."
                  as="h2"
                  className="font-medium text-white"
                />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <p>
                    Most people look at a hotel, a travel service, a training company, or a product business and see the front of house.
                  </p>
                  <p className="text-white font-medium text-lg">
                    I tend to see the coordination underneath.
                  </p>
                  <StaggerChildren className="flex flex-wrap gap-2" staggerDelay={0.05}>
                    {["Information flows", "Service standards", "Feedback loops", "Timing & Rhythm", "Decision points", "Operational drag", "Legacy transition", "Commercial pressure", "Human judgment"].map((term) => (
                      <span key={term} className="text-xs font-mono tracking-wide px-3 py-1 bg-white/5 border border-white/5 rounded-sm text-white">
                        {term}
                      </span>
                    ))}
                  </StaggerChildren>
                  <p>
                    A distinct brand is not just a logo or story. It is a living system that makes a standard of care possible.
                  </p>
                  <p className="text-white font-medium">
                    That is where I like to work.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.15}>
                <div className="space-y-4 border border-white/5 bg-black/[0.03] p-6 rounded-sm">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                    [ Operational Friction ]
                  </span>
                  <p className="text-xs text-zinc-400">
                    And most operations drift over time:
                  </p>
                  <StaggerChildren className="space-y-2 text-xs font-mono text-zinc-400" staggerDelay={0.06}>
                    <li className="flex items-start gap-1.5">
                      <Minus className="h-4 w-4 shrink-0 text-red-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>They collect assumptions.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Minus className="h-4 w-4 shrink-0 text-red-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>They inherit old habits.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Minus className="h-4 w-4 shrink-0 text-red-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>They compromise on standards.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Minus className="h-4 w-4 shrink-0 text-red-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>They make simple coordination complicated.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Minus className="h-4 w-4 shrink-0 text-red-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>They ask staff to compensate for what the system itself should handle.</span>
                    </li>
                  </StaggerChildren>
                  <p className="pt-2 text-xs font-mono text-white border-t border-white/5 mt-4">
                    I am interested in resolving that. Designing the systems that support hospitality.
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* What Castson Inc. is building */}
      <section className="py-12 md:py-24 relative theme-transition border-b border-white/[0.03]">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/[0.01] via-transparent to-transparent pointer-events-none"></div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left: Summary */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <ScrollReveal>
                <div className="space-y-3">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Identity ]</span>
                  <TextReveal
                    text="What Castson Inc. is building"
                    as="h2"
                    className="font-medium text-white"
                  />
                  <p className="text-sm text-zinc-200">
                    Castson Inc. is becoming a home for experience-led businesses with character.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="space-y-4">
                  <p>
                    The model is quiet:
                  </p>
                  
                  <StaggerChildren className="space-y-3 pl-4 border-l border-white/10 text-xs font-mono text-zinc-400 list-none" staggerDelay={0.06}>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>Find businesses with real taste, service, place, or reputation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>Preserve what makes them distinct.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>Strengthen the story and standards.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>Build the systems behind the experience.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>Make the business more capable without making it generic.</span>
                    </li>
                  </StaggerChildren>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="space-y-3 border-t border-white/5 pt-4 text-zinc-400">
                  <p>
                    The focus:
                  </p>
                  <StaggerChildren className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono text-zinc-400 pl-4" staggerDelay={0.05}>
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-emerald-500 rounded-full shrink-0"></span>
                      <span>Place-Based Brands</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-emerald-500 rounded-full shrink-0"></span>
                      <span>Service &amp; Standards</span>
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
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-emerald-500 rounded-full shrink-0"></span>
                      <span>Selective Advisory</span>
                    </div>
                  </StaggerChildren>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-1 text-xs font-mono text-zinc-500 pt-2 border-t border-white/5">
                  <p>BraveHeart is the acquired company under operation.</p>
                  <p>Ripley is the operating layer being built underneath the work.</p>
                  <p className="text-white">Castson.com is the record.</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: What I am trying to learn */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="rounded-sm border border-white/5 bg-zinc-900/30 p-6 sm:p-8 space-y-6">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                    [ What I am trying to learn ]
                  </span>
                  
                  <StaggerChildren className="space-y-4 text-xs font-mono text-zinc-400" staggerDelay={0.08}>
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
                  </StaggerChildren>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* How I share the work */}
      <section className="py-12 md:py-24 border-b border-white/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
              <ScrollReveal>
                <div className="space-y-3">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Publication Policy ]</span>
                  <TextReveal
                    text="How I share the work"
                    as="h2"
                    className="font-medium text-white"
                  />
                  <p className="text-sm text-zinc-200">
                    Castson.com is a selective public record.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <p>
                    I share the shape of the work: the questions, decisions, lessons, patterns, and mistakes once they become useful.
                  </p>
                  <p className="border-l border-white/15 pl-4 text-zinc-400 opacity-80">
                    I do not share private information, customer data, staff matters, operational vulnerabilities, or anything that belongs inside the company.
                  </p>
                  <p className="text-zinc-400 font-light">
                    The goal is not content.
                  </p>
                  <p className="text-white font-medium">
                    The goal is signal.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Visual Checklist */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal direction="right" delay={0.15}>
                <div className="border border-white/5 bg-black/[0.03] p-6 rounded-sm space-y-4">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                    [ Information Signal Grid ]
                  </span>
                  <StaggerChildren className="space-y-3 text-xs font-mono" staggerDelay={0.06}>
                    <div className="flex justify-between gap-4 border-b border-white/5 pb-1 text-emerald-400">
                      <span>The Questions &amp; Decisions</span>
                      <span>[Shared]</span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/5 pb-1 text-emerald-400">
                      <span>Lessons &amp; Patterns</span>
                      <span>[Shared]</span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/5 pb-1 text-emerald-400">
                      <span>Mistakes (when useful)</span>
                      <span>[Shared]</span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/5 pb-1 text-red-400/70">
                      <span>Private &amp; Staff Matters</span>
                      <span>[Private]</span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/5 pb-1 text-red-400/70">
                      <span>Customer Data</span>
                      <span>[Private]</span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/5 pb-1 text-red-400/70">
                      <span>Operational Vulnerabilities</span>
                      <span>[Private]</span>
                    </div>
                  </StaggerChildren>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-12 md:py-24 bg-black/[0.03] theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="space-y-12">
            <ScrollReveal>
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400">[ Connect ]</span>
                <TextReveal
                  text="Get in Touch"
                  as="h2"
                  className="font-medium text-white"
                />
                <p className="text-zinc-400 font-light text-sm">
                  If you own, operate, or are responsible for an experience-led business where place, service, taste, and standards matter, I would be interested in the conversation.
                </p>
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest pt-1">
                  Especially if the work involves hospitality, wellness, tourism, property, service, product, legacy transition, or executive decision support.
                </p>
              </div>
            </ScrollReveal>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
              
              {/* CTA 1: BraveHeart */}
              <Magnetic strength={0.3} radius={120}>
                <Link 
                  href="/braveheart"
                  className="group relative rounded-sm border border-white/5 bg-zinc-900/20 p-6 sm:p-8 flex flex-col justify-between min-h-56 hover:border-emerald-400/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>
                  <div className="space-y-4 relative z-10">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">[ In Practice ]</span>
                    <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                      BraveHeart First Aid
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      The company I acquired and now operate. Practical, local, and serious.
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-emerald-400 group-hover:text-white transition-colors relative z-10">
                    <span>Explore BraveHeart</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </Link>
              </Magnetic>

              {/* CTA 2: Field Notes */}
              <Magnetic strength={0.3} radius={120}>
                <Link 
                  href="/field-notes"
                  className="group relative rounded-sm border border-white/5 bg-zinc-900/20 p-6 sm:p-8 flex flex-col justify-between min-h-56 hover:border-emerald-400/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>
                  <div className="space-y-4 relative z-10">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">[ Insights ]</span>
                    <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                      Field Notes
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      Short observations from operating, rebuilding, advising, and making businesses more coherent.
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-emerald-400 group-hover:text-white transition-colors relative z-10">
                    <span>Read Field Notes</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </Link>
              </Magnetic>

              {/* CTA 3: Contact */}
              <Magnetic strength={0.3} radius={120}>
                <Link 
                  href="/contact"
                  className="group relative rounded-sm border border-white/5 bg-zinc-900/20 p-6 sm:p-8 flex flex-col justify-between min-h-56 hover:border-emerald-400/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>
                  <div className="space-y-4 relative z-10">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">[ Dialog ]</span>
                    <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                      Start a Conversation
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      Reach out if you are an owner, operator, founder, CEO, CMO, investor, or collaborator.
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-emerald-400 group-hover:text-white transition-colors relative z-10">
                    <span>Start a Conversation</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </Link>
              </Magnetic>

            </StaggerChildren>
          </div>
        </div>
      </section>

    </div>
  );
}
