import React from "react";
import Link from "next/link";
import { ArrowUpRight, Award, Compass, Monitor } from "lucide-react";

export default function About() {
  return (
    <div data-theme="light" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 pt-32">
      {/* Page Header */}
      <div className="max-w-3xl fade-up-element">
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-mono">01 / Profile</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl uppercase mt-2 font-display">
          About Ripley
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
          We work with leaders to reduce the friction that growth creates. Our perspective is operational, not theoretical. We actively lead, invest, and build to make execution strong enough to protect the magic.
        </p>
      </div>

      {/* Main Narrative */}
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Left Columns - Story */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="space-y-4 fade-up-element delay-100">
            <h2 className="text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-white font-display">The Friction of Growth</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-sm">
              You build growth, and eventually growth starts slowing you down. Not because your team lacks talent. Because complexity creeps in. Systems break. Decision-making drags. Execution gets heavier than it should be.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-sm">
              In high-performance, brand-sensitive sectors, that often means redesigning workflows, modernizing systems, clarifying ownership, or reducing the debt that quietly kills momentum.
            </p>
          </section>

          <section className="space-y-4 fade-up-element delay-150">
            <h2 className="text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-white font-display">Operational Perspective</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-sm">
              We actively invest in and lead complex founder-led businesses. Our principal, Eli Castson, currently serves as CEO of an event operations platform undergoing a full digital transformation. We test what we believe in inside real businesses, with real consequences.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-sm">
              Before that, Eli built his perspective inside global organizations including **La Prairie**, **TBWA**, and **MediaCom**, working across heritage brands, creative environments, and large-scale media operations. Today, Ripley applies those lessons to scale growing organizations.
            </p>
          </section>

          <section className="space-y-4 fade-up-element delay-200">
            <h2 className="text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-white font-display">Practical AI Operating Models</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-sm">
              Instead of focusing on isolated AI experiments, Ripley helps leaders design and implement structured, AI-enabled operating models. We build the operational layer around AI tools: detailing where AI fits into the work, what needs to be orchestrated, what controls are needed, and how the organization scales beyond pilots.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-sm">
              This includes mapping out data flows, identifying human-in-the-loop governance points, and establishing early agentic workflows that turn a portfolio of opportunities into executable change.
            </p>
          </section>

          <section className="space-y-4 fade-up-element delay-250">
            <h2 className="text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-white font-display">Protecting the Magic</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-sm">
              We care about velocity, but not at the expense of what makes a business special. The goal of Ripley is not to make a company more mechanical. It is to make execution strong enough to protect the magic.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-sm">
              Through advisory, system integrations, and development of custom dispatch platforms like **Ripley**, we design operational models where technology exists solely to liberate creative, operational, and customer-facing teams.
            </p>
          </section>

        </div>

        {/* Right Column - Side Info */}
        <div className="space-y-6 fade-up-element delay-300">
          <div className="rounded-sm border border-zinc-200 dark:border-white/5 bg-zinc-100/50 dark:bg-zinc-900/20 p-6 space-y-6 theme-transition">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-300 font-mono">[Quick Facts]</h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <Monitor className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Identity Lanes</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-light">Systems Advisory, AI Operations Practice, Tech Integration</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Core Focus</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-light">TypeScript / Python / PostgreSQL / Supabase / AI Architecture & Agentic Workflows</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Compass className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Location</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-light">Halifax Region, NS, Canada</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-white/5 theme-transition">
              <Link
                href="/contact"
                className="interactive-hover flex w-full items-center justify-center gap-1 rounded-sm bg-zinc-950 dark:bg-white text-white dark:text-black py-3 text-center text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
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
