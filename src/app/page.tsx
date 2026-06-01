"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Laptop, Settings, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: "ai-operations",
    index: "01",
    eyebrow: "AI Systems Architect",
    title: "AI Operating Models",
    subtitle: "Orchestrating agentic workflows and practical AI execution.",
    description: "Helping organizations move from isolated AI experiments toward structured, AI-enabled operating models—designing the data flows, human-in-the-loop controls, and orchestration layers needed to scale beyond pilots.",
    link: "/contact",
    accentColor: "from-emerald-500/10 via-zinc-950 to-zinc-950",
    glowColor: "bg-emerald-500/5",
    badge: "AI Architecture"
  },
  {
    id: "braveheart",
    index: "02",
    eyebrow: "Founder & Operator",
    title: "BraveHeart First Aid",
    subtitle: "Direct-to-consumer operations & course delivery infrastructure.",
    description: "Architected the booking logic, Acuity schedule integrations, customer rosters, and automated alerts that transitioned regional operations into a software-driven dispatch flow.",
    link: "/work",
    accentColor: "from-emerald-500/10 via-zinc-950 to-zinc-950",
    glowColor: "bg-emerald-500/5",
    badge: "Operations & Scaling"
  },
  {
    id: "ripley",
    index: "03",
    eyebrow: "Core System Architect",
    title: "Ripley / Autobot Engine",
    subtitle: "Custom data parser & database sync coordinator.",
    description: "Built event-driven sync scripts and PostgreSQL triggers connecting timesheets, CRM leads, and course capacities into a single state model.",
    link: "/work",
    accentColor: "from-emerald-500/10 via-zinc-950 to-zinc-950",
    glowColor: "bg-emerald-500/5",
    badge: "Backend Integrations"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 600);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const activeSlide = SLIDES[currentSlide];

  return (
    <div className="relative w-full min-h-screen bg-zinc-950 overflow-hidden flex flex-col pt-20">
      
      {/* 1. Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
      </div>

      {/* 2. Fullscreen Showcase Slideshow (Hero) */}
      <section className="relative h-[80vh] sm:h-[85vh] min-h-[500px] border-b border-white/[0.03] flex items-center">
        {/* Glowing background gradient that updates depending on slide */}
        <div className={`absolute inset-0 bg-gradient-to-br ${activeSlide.accentColor} transition-all duration-1000 ease-in-out -z-10`} />
        
        {/* Dynamic Glow Orb */}
        <div className={`absolute top-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full ${activeSlide.glowColor} blur-[120px] transition-all duration-1000 ease-in-out`} />

        {/* Blueprint pattern inside slider */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>

        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 relative z-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Slide Content */}
            <div className={`lg:col-span-8 space-y-6 transition-all duration-500 ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
              
              {/* Eyebrow status pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.02] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>{activeSlide.eyebrow}</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-none font-display">
                {activeSlide.title}
              </h2>

              {/* Subtitle / Headline */}
              <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
                {activeSlide.subtitle}
              </p>

              {/* Description paragraph */}
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-light max-w-xl">
                {activeSlide.description}
              </p>

              {/* Action details */}
              <div className="pt-4 flex items-center gap-6">
                <Link
                  href={activeSlide.link}
                  className="group inline-flex items-center gap-1.5 rounded-sm bg-white text-black px-6 py-3.5 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 hover:text-black transition-all duration-300"
                >
                  Explore Details
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest border border-white/5 bg-zinc-950/40 px-3 py-1 rounded-sm">
                  {activeSlide.badge}
                </span>
              </div>

            </div>

            {/* Right Col: Slide index indicators */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center pr-8">
              <div className="text-zinc-800 text-9xl font-mono font-light leading-none select-none">
                {activeSlide.index}
              </div>
              <div className="h-[2px] w-24 bg-white/10 mt-4 relative">
                {/* Progress bar fill */}
                <div 
                  className="absolute h-full bg-emerald-400 top-0 left-0 transition-all duration-500" 
                  style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 mt-2">
                Slide 0{currentSlide + 1} / 0{SLIDES.length}
              </span>
            </div>

          </div>

          {/* Slider controls (Footer elements of hero) */}
          <div className="mt-12 flex justify-between items-center z-20 border-t border-white/5 pt-6">
            
            {/* Quick status */}
            <div className="text-[10px] font-mono text-zinc-500">
              [ Eliasson — Systems & AI Operations ]
            </div>

            {/* Arrow keys */}
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                disabled={isTransitioning}
                className="w-10 h-10 border border-white/5 bg-zinc-950/60 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/20 flex items-center justify-center rounded-sm transition-all duration-300 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button 
                onClick={nextSlide}
                disabled={isTransitioning}
                className="w-10 h-10 border border-white/5 bg-zinc-950/60 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/20 flex items-center justify-center rounded-sm transition-all duration-300 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Capabilities Section */}
      <section className="py-24 border-b border-white/[0.03] bg-[#070707]/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            <div className="lg:pr-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">01 / Capabilities</span>
              <h2 className="text-2xl font-bold tracking-tight text-white uppercase mt-2 font-display">What We Do</h2>
              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                We map complex manual workflows into reliable, automated logic. We bridge the gap between business operations and technical software engineering.
              </p>
            </div>

            {/* Capabilities grid lines */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 border border-white/[0.03] bg-zinc-950/20 rounded-sm overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/[0.03]">
              
              {/* Card 1 */}
              <div className="p-6 flex flex-col justify-between hover:bg-white/[0.01] transition-colors duration-300 group">
                <div>
                  <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-300 w-8 h-8 flex items-center">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mt-4">System Integration</h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                    Connecting CRM boards, booking engines, schedules, and custom APIs into a unified ledger.
                  </p>
                </div>
                <div className="mt-8 text-[10px] font-mono text-zinc-600 group-hover:text-emerald-400 transition-colors">
                  [APIs & Webhooks]
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 flex flex-col justify-between hover:bg-white/[0.01] transition-colors duration-300 group">
                <div>
                  <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-300 w-8 h-8 flex items-center">
                    <Settings className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mt-4">Workflow Automation</h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                    Designing event-driven background scripts, automated alerts, and timesheet reconcilers.
                  </p>
                </div>
                <div className="mt-8 text-[10px] font-mono text-zinc-600 group-hover:text-emerald-400 transition-colors">
                  [Python / Node.js]
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 flex flex-col justify-between hover:bg-white/[0.01] transition-colors duration-300 group">
                <div>
                  <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-300 w-8 h-8 flex items-center">
                    <Laptop className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mt-4">AI Operating Models</h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                    Transitioning companies from isolated AI pilots to executable, structured agentic systems with clear human control points.
                  </p>
                </div>
                <div className="mt-8 text-[10px] font-mono text-zinc-600 group-hover:text-emerald-400 transition-colors">
                  [Agentic Pipelines]
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Dynamic Call to Action */}
      <section className="py-32 bg-zinc-950/40 border-t border-white/[0.03] relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">02 / Advisory</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-white uppercase mt-4 mb-6 font-display">
            Let&apos;s build something reliable.
          </h2>
          <p className="mx-auto max-w-lg text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mb-10">
            Have a workflow challenge or system integration problem you want to automate? Let&apos;s discuss operations, APIs, or database pipelines.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link
              href="/contact"
              className="rounded-sm bg-white text-black px-6 py-3.5 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 hover:text-black transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <Link 
              href="/work" 
              className="text-xs font-bold uppercase tracking-wider text-white hover:text-emerald-400 transition-colors duration-300 pb-1 border-b border-white/10 hover:border-emerald-400/30"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
