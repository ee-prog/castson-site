import React from "react";
import Link from "next/link";
import { ArrowUpRight, Award, Compass, Monitor } from "lucide-react";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          About Eli Castson
        </h1>
        <p className="mt-6 text-lg text-zinc-400">
          I am an operator who builds and a builder who operates. I focus on creating reliable, scalable business architectures that connect real-world operations with software.
        </p>
      </div>

      {/* Main Narrative */}
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Left Columns - Story */}
        <div className="lg:col-span-2 space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">Founder & Operator</h2>
            <p className="text-zinc-400 leading-relaxed">
              My journey is rooted in running businesses and realizing that standard off-the-shelf software tools often fail to address specific operational bottlenecks. Rather than adapting business operations to match static software, I believe in designing custom software pipelines that match the business process perfectly.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              As the founder of <span className="text-white font-semibold">BraveHeart First Aid</span>, I operate a first-aid training service that handles complex logistics, hundreds of student bookings, multiple locations, and instructor schedules. By developing internal systems to manage these moving parts, I transitioned our day-to-day operations into an automated, software-driven workflow.
            </p>
            <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-sm text-zinc-300">
              <span className="font-semibold text-yellow-400">Biography Detail:</span> [NEEDS ELI INPUT: detailed personal biography, background, work history, and founder details]
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">Technical & Creative Philosophy</h2>
            <p className="text-zinc-400 leading-relaxed">
              I view coding not just as a software engineering task, but as a medium for business optimization and creative solution design. Whether it is synchronizing calendar availability, normalising advertising metrics, or writing data hooks to manage scheduling spikes, I build systems that operate reliably in the background.
            </p>
            <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-sm text-zinc-300">
              <span className="font-semibold text-yellow-400">Creative pursuits:</span> [NEEDS ELI INPUT: description of creative technology, photography, filmmaking, or other creative workers interests]
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">Current Focus</h2>
            <p className="text-zinc-400 leading-relaxed">
              Currently, I am focused on scaling my business operations and providing design consulting for workflow automation. I specialize in integrating tools like Supabase, PostgreSQL, APIs (Acuity, Connecteam, Monday.js), and Python/Node.js scripting to construct reliable pipelines.
            </p>
          </section>
        </div>

        {/* Right Column - Side Info */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/5 bg-zinc-900/40 p-6 space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">Quick Facts</h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <Monitor className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Identity Lanes</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Entrepreneur, Systems Practitioner, Operator</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Award className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Core Tech Stack</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">TypeScript / Next.js / Tailwind CSS / Python / PostgreSQL / Supabase</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Compass className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Location</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">[NEEDS ELI INPUT: location/base, e.g., Nova Scotia, Canada]</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 py-2.5 text-center text-sm font-semibold text-zinc-950 transition-colors"
              >
                Let&apos;s Connect <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
