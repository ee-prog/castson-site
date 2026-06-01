import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Laptop, Settings, Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col">
      {/* 1. Structural Grid Lines (Blueprint overlay) */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
      </div>

      {/* Decorative radial glows */}
      <div className="absolute top-0 right-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-emerald-500/[0.03] blur-[150px]"></div>
      <div className="absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/[0.02] blur-[130px]"></div>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 border-b border-white/[0.03]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.02] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-8 animate-pulse">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <span>Available for operations & system advisory</span>
            </div>
            
            {/* Massive Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[0.95] uppercase">
              Designing systems.<br />
              Automating workflows.<br />
              Building operations.
            </h1>
            
            {/* Description */}
            <p className="mt-8 text-base sm:text-lg leading-relaxed text-zinc-400 max-w-2xl font-light">
              Hi, I&apos;m <span className="text-white font-semibold">Eli Castson</span>. I operate businesses and build custom software pipelines to orchestrate real-world operations. I bridge the gap between complex manual workflows and elegant automation.
            </p>

            {/* Muted operator status note */}
            <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-zinc-900 bg-zinc-950/40 p-3 text-[11px] font-mono text-zinc-500 max-w-xl">
              <span className="text-emerald-500 font-bold uppercase tracking-wider">[Operator Base]</span>
              <span>Awaiting final narrative input. Base: Halifax region, NS.</span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="group relative inline-flex items-center justify-center gap-1.5 rounded-sm bg-white text-black px-6 py-3.5 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 hover:text-black transition-all duration-300"
              >
                Selected Projects
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Expertise Section (Editorial Grid) */}
      <section className="py-24 border-b border-white/[0.03] bg-[#070707]/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            <div className="lg:pr-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">01 / Capabilities</span>
              <h2 className="text-2xl font-bold tracking-tight text-white uppercase mt-2">What I Do</h2>
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed font-light">
                I map business processes into reliable backend logic, replacing manual errors with custom event-driven integrations.
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
                    Connecting CRM pipelines, calendars, and schedules into a single database logic layer.
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
                    Automating background scripts, email templates, and bi-weekly payroll checks.
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
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mt-4">Business Ops</h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                    Optimizing class scheduling, staff coordination, and operational dispatch flows.
                  </p>
                </div>
                <div className="mt-8 text-[10px] font-mono text-zinc-600 group-hover:text-emerald-400 transition-colors">
                  [Scaling Loops]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Selected Projects Section (Asymmetric Editorial Layout) */}
      <section className="py-24 border-b border-white/[0.03]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">02 / Portfolio</span>
              <h2 className="text-3xl font-extrabold text-white uppercase mt-2 tracking-tight">Selected Projects</h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors pb-1 border-b border-emerald-500/20"
            >
              See all work <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Asymmetric grid spacing */}
          <div className="space-y-24">
            
            {/* Project 01 (BraveHeart First Aid) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Massive project index indicator */}
              <div className="lg:col-span-1 text-zinc-800 text-5xl font-mono font-light leading-none">
                01/
              </div>
              
              {/* Details column */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Founder & Operator</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">BraveHeart First Aid</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  A leading regional first-aid training service provider. I built the business logic, scheduling APIs, customer check-in registers, and administrative tools to manage high-volume class allocations.
                </p>
                
                {/* Clean inline placeholder state */}
                <div className="inline-flex items-start gap-2.5 rounded-sm border border-zinc-900 bg-zinc-950/40 p-2.5 text-[10px] font-mono text-zinc-500">
                  <span className="text-emerald-500 font-bold">[Status]</span>
                  <span>Awaiting historical growth metrics from operator.</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-white/[0.03]">Business Operations</span>
                  <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-white/[0.03]">Customer Experience</span>
                </div>
              </div>

              {/* Graphical Box (Rhye showcase card) */}
              <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-sm border border-white/[0.03] bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden flex flex-col justify-between p-8 hover:border-emerald-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Plus className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600">2020 - PRESENT</span>
                </div>
                <div className="z-10 mt-auto">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">First-Aid Training</div>
                  <div className="text-xl font-bold uppercase text-white tracking-tight mt-1 group-hover:text-emerald-400 transition-colors">Operational Infrastructure</div>
                </div>
              </div>
            </div>

            {/* Project 02 (Ripley / Autobot Automation) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Massive project index indicator */}
              <div className="lg:col-span-1 text-zinc-800 text-5xl font-mono font-light leading-none">
                02/
              </div>

              {/* Graphical Box (Placed on the left for asymmetry) */}
              <div className="lg:col-span-6 lg:order-2 relative aspect-[16/10] w-full rounded-sm border border-white/[0.03] bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden flex flex-col justify-between p-8 hover:border-emerald-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Settings className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600">2023 - PRESENT</span>
                </div>
                <div className="z-10 mt-auto">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Centralized Dispatch</div>
                  <div className="text-xl font-bold uppercase text-white tracking-tight mt-1 group-hover:text-emerald-400 transition-colors">Autobot Orchestrator</div>
                </div>
              </div>
              
              {/* Details column */}
              <div className="lg:col-span-5 lg:order-1 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Core Architect</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">Ripley / Autobot</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  A custom operations coordinator. Ripley acts as the database ledger and API sync engine, tracking student bookings, managing instructor availability alerts, and reconciling timesheets.
                </p>

                {/* Clean inline placeholder state */}
                <div className="inline-flex items-start gap-2.5 rounded-sm border border-zinc-900 bg-zinc-950/40 p-2.5 text-[10px] font-mono text-zinc-500">
                  <span className="text-emerald-500 font-bold">[Status]</span>
                  <span>Awaiting precise database structure and metric logs.</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-white/[0.03]">Supabase / Node.js</span>
                  <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-white/[0.03]">API Integration</span>
                  <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-white/[0.03]">PostgreSQL</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Contact CTA Section */}
      <section className="py-32 bg-[#060608] relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">03 / Advisory</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-white uppercase mt-4 mb-6">
            Let&apos;s build something reliable.
          </h2>
          <p className="mx-auto max-w-lg text-sm text-zinc-400 leading-relaxed font-light mb-10">
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
              href="/about" 
              className="text-xs font-bold uppercase tracking-wider text-white hover:text-emerald-400 transition-colors duration-300 pb-1 border-b border-white/10 hover:border-emerald-400/30"
            >
              Learn about me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
