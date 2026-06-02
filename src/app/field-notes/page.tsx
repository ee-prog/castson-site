"use client";

import React from "react";

const themes = [
  {
    index: "01",
    title: "A business has to become understandable before it can become automated.",
    content: [
      "The temptation is to automate early.",
      "Take the existing process and make it faster.",
      "But if the process is confused, automation only preserves confusion at greater speed.",
      "The better move is slower.",
      "Understand first.",
      "Then automate what remains."
    ]
  },
  {
    index: "02",
    title: "Most software is a temporary teacher.",
    content: [
      "Acuity taught us something about booking.",
      "Monday taught us something about operations.",
      "Squarespace taught us something about web presence.",
      "Each tool helped. Each eventually revealed its limits.",
      "That does not mean the tools failed.",
      "It means the business learned."
    ]
  },
  {
    index: "03",
    title: "Owner dependency is an information problem.",
    content: [
      "Many businesses appear to have systems until the owner steps away.",
      "Then everything starts asking for permission.",
      "That is not only a staffing issue.",
      "It is an information architecture issue.",
      "A decision design issue.",
      "A trust issue.",
      "Reducing owner dependency does not mean caring less.",
      "It means building a company that can hold more of its own intelligence."
    ]
  },
  {
    index: "04",
    title: "AI is not the first layer.",
    content: [
      "AI is powerful.",
      "But it works best when the business underneath it is clear.",
      "If the data is messy, the process is vague, and the decisions are undefined, AI becomes another confusing tool in the pile.",
      "The first layer is not AI.",
      "The first layer is truth."
    ]
  },
  {
    index: "05",
    title: "Meaning changes operations.",
    content: [
      "When the function of a company is good, the boring parts become less boring.",
      "First aid training gives the work a moral weight.",
      "The booking flow is not just a booking flow.",
      "The reminder is not just a reminder.",
      "The instructor workflow is not just an internal process.",
      "Each one supports the larger purpose.",
      "That changes how I think about the work."
    ]
  }
];

export default function FieldNotes() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      
      {/* Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.02] animate-grid-line delay-100 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block animate-grid-line delay-300 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block animate-grid-line delay-550 opacity-0"></div>
        <div className="w-[1px] h-full bg-white/[0.02] animate-grid-line delay-700 opacity-0"></div>
      </div>

      {/* Header */}
      <section className="relative py-12 md:py-24 border-b border-white/[0.03] theme-transition">
        <div className="absolute top-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        
        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">03 / The Archive</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-none font-display">
              Field Notes
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light font-display">
              Notes from inside the work.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Header / Philosophy */}
      <section className="py-8 md:py-12 border-b border-white/[0.03] bg-zinc-950/10 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span>—</span>
                <span>Short observations from building.</span>
              </div>
              <div className="flex items-start gap-2">
                <span>—</span>
                <span>Not trend pieces.</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span>—</span>
                <span>Not advice content. Not thought leadership.</span>
              </div>
              <div className="flex items-start gap-2">
                <span>—</span>
                <span>Notes from inside a real transformation: what changed, broke, worked, or became obvious.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes List */}
      <section className="py-12 md:py-20 theme-transition">
        <div className="mx-auto max-w-3xl px-4 relative z-20">
          <div className="space-y-24">
            {themes.map((theme) => (
              <article key={theme.index} className="space-y-6 fade-up-element visible">
                {/* Meta details */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/[0.02] px-2 py-0.5 rounded-sm">
                    Theme {theme.index}
                  </span>
                  <span className="h-[1px] flex-1 bg-white/5"></span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold uppercase text-white font-display leading-tight">
                  {theme.title}
                </h2>

                {/* Content paragraphs */}
                <div className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed space-y-4">
                  {theme.content.map((para, i) => (
                    <p key={i} className={para.startsWith("Then") || para.startsWith("The better") || para.startsWith("It means") || para.startsWith("The first layer") || para.startsWith("Each one") ? "text-white font-medium" : ""}>
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
