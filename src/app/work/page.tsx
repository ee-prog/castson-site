import React from "react";
import { Cpu, Film, GitBranch, Shield } from "lucide-react";

const projects = [
  {
    id: "braveheart",
    title: "BraveHeart First Aid",
    role: "Founder & Operations Architect",
    timeline: "2020 - Present",
    icon: Shield,
    description: "A leading regional first-aid and safety training provider. In this role, I designed and managed the primary booking flows, custom student database integrations, and overall business operations.",
    tech: ["Business Operations", "Customer Experience Flow", "Logistics Planning"],
    scope: "A regional first-aid training provider handling complex student booking allocations, instructor rosters, and payroll audits. Transitioned daily operations from manual spreadsheets into a custom, software-driven dispatch flow."
  },
  {
    id: "ripley",
    title: "Ripley / Autobot Automation",
    role: "Architect & Core Developer",
    timeline: "2023 - Present",
    icon: Cpu,
    description: "The custom operational nervous system built to orchestrate and run BraveHeart operations. Integrates and automates scheduling, instructor booking alerts, course capacities, and CRM boards.",
    tech: ["Node.js", "Python", "Supabase", "PostgreSQL", "Monday.js API", "Acuity API"],
    scope: "Automated core scheduling sync, class attendance roster verification, and payroll checks. Reconciled Connecteam timesheet entries against Acuity class data to identify pay anomalies automatically."
  },
  {
    id: "automations",
    title: "AI & Automation Architecture",
    role: "Systems Consultant",
    timeline: "Ongoing",
    icon: GitBranch,
    description: "Designing AI-enabled operating structures and workflow automation. Focused on integrating workflow redesigns, governance controls, operational data flows, and early agentic pipelines into service operations.",
    tech: ["AI Architecture", "Agentic Pipelines", "OAuth 2.0", "REST APIs"],
    scope: "Helping leaders turn AI opportunities into executable architectures. Setting up system governance, structured data flows, and clear ownership models for scaled AI adoption."
  },
  {
    id: "creative",
    title: "Creative & Film Projects",
    role: "Director / Technologist",
    timeline: "Ongoing",
    icon: Film,
    description: "Personal creative pursuits that merge storytelling with technology. Portfolio details and creative works are archived here.",
    tech: ["Filmmaking", "Creative Technology", "Visual Arts"],
    scope: "Exploring systems where technology supports the creative execution without making it mechanical. Developing visual projects and cinematic narrative workflows."
  }
];

export default function Work() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 pt-32">
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">02 / Selected Work</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl uppercase mt-2 font-display">
          Projects & Work
        </h1>
        <p className="mt-6 text-lg text-zinc-400 font-light leading-relaxed">
          A look at the operations I lead, the custom automation software I develop, and the creative projects I participate in.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-16 space-y-12">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.id}
              className="group relative rounded-sm border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 p-8 hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors font-display">
                      {project.title}
                    </h2>
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mt-0.5">{project.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 rounded-sm">
                    {project.timeline}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Info */}
                <div className="lg:col-span-2 space-y-4">
                  <p className="text-zinc-400 leading-relaxed text-sm font-light">
                    {project.description}
                  </p>
                  
                  {/* Scope Summary */}
                  <div className="rounded-sm border border-zinc-900 bg-zinc-950/40 p-4 text-xs text-zinc-400 font-light font-mono">
                    <span className="text-emerald-400 font-bold uppercase tracking-widest block mb-1.5">[System Scope]</span>
                    {project.scope}
                  </div>
                </div>

                {/* Tech Tags */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 font-mono">[Focus / Tech]</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-sm text-xs font-light bg-zinc-900 text-zinc-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
