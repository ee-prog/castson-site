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
    placeholder: "[NEEDS ELI INPUT: description of BraveHeart First Aid business growth, dates, and background detail]"
  },
  {
    id: "ripley",
    title: "Ripley / Autobot Automation",
    role: "Architect & Core Developer",
    timeline: "2023 - Present",
    icon: Cpu,
    description: "The custom operational nervous system built to orchestrate and run BraveHeart operations. Integrates and automates scheduling, instructor booking alerts, course capacities, and CRM boards.",
    tech: ["Node.js", "Python", "Supabase", "PostgreSQL", "Monday.js API", "Acuity API"],
    placeholder: "[NEEDS ELI INPUT: description of Ripley system architecture, specific outcomes, and metrics]"
  },
  {
    id: "automations",
    title: "Selected Automation Integrations",
    role: "Systems Consultant",
    timeline: "Ongoing",
    icon: GitBranch,
    description: "Bespoke scripts and data synchronization workflows designed to automate business metrics. Examples include normalized advertising extraction scripts, email alert builders, and payroll reconciliation pipelines.",
    tech: ["OAuth 2.0", "Google Apps Script", "Facebook Ads API", "REST APIs"],
    placeholder: "[NEEDS ELI INPUT: examples of other client or personal automation projects]"
  },
  {
    id: "creative",
    title: "Creative & Film Projects",
    role: "Director / Technologist",
    timeline: "Ongoing",
    icon: Film,
    description: "Personal creative pursuits that merge storytelling with technology. Portfolio details and creative works are archived here.",
    tech: ["Filmmaking", "Creative Technology", "Visual Arts"],
    placeholder: "[NEEDS ELI INPUT: details of Eli's creative pursuits, films, or creative projects]"
  }
];

export default function Work() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Selected Projects & Work
        </h1>
        <p className="mt-6 text-lg text-zinc-400">
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
              className="group relative rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 p-8 hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-zinc-400 font-medium mt-0.5">{project.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 rounded-full">
                    {project.timeline}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Info */}
                <div className="lg:col-span-2 space-y-4">
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Needs input highlight */}
                  <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-xs text-zinc-300">
                    <span className="font-semibold text-yellow-400">Eli Input Required:</span> {project.placeholder}
                  </div>
                </div>

                {/* Tech Tags */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">Focus / Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-white/5"
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
