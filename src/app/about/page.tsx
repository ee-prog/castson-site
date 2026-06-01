import React from "react";
import Link from "next/link";
import { ArrowUpRight, Award, Compass, Monitor } from "lucide-react";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 pt-32">
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">01 / Profile</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl uppercase mt-2 font-display">
          About Eli Castson
        </h1>
        <p className="mt-6 text-lg text-zinc-400 font-light leading-relaxed">
          I work with leaders to reduce the friction that growth creates. My perspective is operational, not theoretical. I actively lead, invest, and build to make execution strong enough to protect the magic.
        </p>
      </div>

      {/* Main Narrative */}
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Left Columns - Story */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-display">The Friction of Growth</h2>
            <p className="text-zinc-400 leading-relaxed font-light text-sm">
              You build growth, and eventually growth starts slowing you down. Not because your team lacks talent. Because complexity creeps in. Systems break. Decision-making drags. Execution gets heavier than it should be.
            </p>
            <p className="text-zinc-400 leading-relaxed font-light text-sm">
              In high-performance, brand-sensitive sectors, that often means redesigning workflows, modernizing systems, clarifying ownership, or reducing the debt that quietly kills momentum.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-display">Operational Perspective</h2>
            <p className="text-zinc-400 leading-relaxed font-light text-sm">
              I actively lead and invest in complex founder-led businesses. Currently, I serve as CEO of an event operations platform undergoing a full digital transformation. I test what I believe in inside real businesses, with real consequences.
            </p>
            <p className="text-zinc-400 leading-relaxed font-light text-sm">
              Before that, I built my perspective inside global organizations including **La Prairie**, **TBWA**, and **MediaCom**, working across heritage brands, creative environments, and large-scale media operations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white font-display">Protecting the Magic</h2>
            <p className="text-zinc-400 leading-relaxed font-light text-sm">
              I care about velocity, but not at the expense of what makes a business special. The goal is not to make a company more mechanical. It is to make execution strong enough to protect the magic.
            </p>
            <p className="text-zinc-400 leading-relaxed font-light text-sm">
              Through advisory, system integrations, and development of custom dispatch platforms like **Ripley**, I design operational models where technology exists solely to liberate creative and customer-facing teams.
            </p>
          </section>

        </div>

        {/* Right Column - Side Info */}
        <div className="space-y-6">
          <div className="rounded-sm border border-white/5 bg-zinc-900/20 p-6 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono">[Quick Facts]</h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <Monitor className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Identity Lanes</h4>
                  <p className="text-xs text-zinc-500 mt-1 font-light">CEO, Operations Leader, Systems Developer</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Award className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Core Focus</h4>
                  <p className="text-xs text-zinc-500 mt-1 font-light">TypeScript / Next.js / Python / PostgreSQL / Supabase / Workflow Audits</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Compass className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Location</h4>
                  <p className="text-xs text-zinc-500 mt-1 font-light">Halifax Region, NS, Canada</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-1 rounded-sm bg-white text-black py-3 text-center text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 hover:text-black transition-colors duration-300"
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
