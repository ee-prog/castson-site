import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Laptop, Settings, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 border-b border-white/5 bg-radial-gradient">
        {/* Decorative Grid and Gradients */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px]"></div>
        <div className="absolute top-1/3 left-1/4 -z-10 h-[300px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]"></div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400 mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Available for system & workflow design advisory</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Designing systems, automating workflows, and building operations.
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Hi, I&apos;m <span className="text-white font-semibold">Eli Castson</span>. I am an entrepreneur, builder, and operator. I specialize in designing and engineering automated internal systems to run businesses efficiently.
            </p>

            {/* Quick Bio Info / Placeholder */}
            <div className="mt-4 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-sm text-zinc-300 max-w-2xl">
              <span className="font-semibold text-yellow-400">Bio note:</span> [NEEDS ELI INPUT: short personal biography or tag line that sums up your identity lane preference (e.g. Creative Technologist, Business Architect, or Systems Practitioner)]
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
              >
                View Selected Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus & Expertise Section */}
      <section className="py-20 bg-zinc-950/50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">What I Do</h2>
            <p className="mt-4 text-zinc-400">
              I bridge the gap between business processes and technical automation, building tools that save time, eliminate errors, and scale operationally.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/50 hover:border-emerald-500/20 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">System Integration</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Connecting scheduling APIs, CRMs, task management boards, and messaging layers into a coherent operational nervous system.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/50 hover:border-emerald-500/20 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Settings className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">Workflow Automation</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Designing event-driven background scripts and database triggers that replace repetitive manual tasks and eliminate human error.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/50 hover:border-emerald-500/20 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Laptop className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">Business Operations</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Structuring business units, optimizing staff scheduling, automating payroll reconciliation, and creating direct-to-customer communication setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Selected Projects</h2>
              <p className="mt-4 text-zinc-400 max-w-2xl">
                A selection of systems I&apos;ve designed, built, and operated.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              See all work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card: BraveHeart */}
            <div className="flex flex-col rounded-2xl border border-white/5 bg-zinc-900/30 overflow-hidden hover:border-emerald-500/20 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-950 p-8 flex flex-col justify-between border-b border-white/5">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Founder & Operator</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">BraveHeart First Aid</h3>
                  <p className="text-sm text-zinc-400 mt-1">Direct operations & first-aid training infrastructure</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    BraveHeart is a leading regional provider of first-aid training. As founder, I architected the core operations, scheduling integrations, and customer booking funnels.
                  </p>
                  <div className="mt-4 p-3 rounded-lg border border-yellow-500/20 bg-yellow-500/5 text-xs text-zinc-300">
                    [NEEDS ELI INPUT: description of BraveHeart First Aid business growth, dates, and background detail]
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300">Business Operations</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300">Customer Flow</span>
                </div>
              </div>
            </div>

            {/* Project Card: Ripley */}
            <div className="flex flex-col rounded-2xl border border-white/5 bg-zinc-900/30 overflow-hidden hover:border-emerald-500/20 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-950/40 via-zinc-900 to-zinc-950 p-8 flex flex-col justify-between border-b border-white/5">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Internal Systems Architecture</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">Ripley / Autobot Automation</h3>
                  <p className="text-sm text-zinc-400 mt-1">Operational orchestration engine</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Ripley is the custom automation and operations dashboard built to manage scheduling, class capacity, client reporting, and payroll reconciliation.
                  </p>
                  <div className="mt-4 p-3 rounded-lg border border-yellow-500/20 bg-yellow-500/5 text-xs text-zinc-300">
                    [NEEDS ELI INPUT: description of Ripley system architecture, specific outcomes, and metrics]
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300">Node.js / Python</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300">Supabase</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300">APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Have a system design problem?</h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Let&apos;s talk about building workflows, setting up data pipelines, or refining business operations.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-lg bg-emerald-500 hover:bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors shadow-lg shadow-emerald-500/10"
            >
              Get in Touch
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-emerald-400 transition-colors">
              Learn more about me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
