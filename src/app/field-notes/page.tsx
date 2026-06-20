"use client";

import React, { useState } from "react";
import { ChevronRight, Plus, Minus } from "lucide-react";
import { AccordionItem } from "@/components/animations";

const themes = [
  {
    index: "01",
    title: "Taste is operational.",
    content: [
      "A brand is not only what it says.",
      "It is what happens after the promise is made.",
      "The timing.",
      "The handoff.",
      "The room.",
      "The wording.",
      "The follow-up.",
      "The standard the team can actually hold.",
      "Taste becomes real when it survives contact with operations."
    ]
  },
  {
    index: "02",
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
    index: "03",
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
    index: "04",
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
    index: "05",
    title: "Luxury fails when it becomes vague.",
    content: [
      "Luxury does not mean saying more beautiful things.",
      "It means being more precise about what is allowed, what is not allowed, what must be felt, and what must never be left to chance.",
      "The higher the promise, the less room there is for vagueness."
    ]
  },
  {
    index: "06",
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
    index: "07",
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
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      
      {/* Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] animate-grid-line delay-100 opacity-0"></div>
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] hidden md:block animate-grid-line delay-300 opacity-0"></div>
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] hidden md:block animate-grid-line delay-550 opacity-0"></div>
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] animate-grid-line delay-700 opacity-0"></div>
      </div>

      {/* Header */}
      <section className="relative py-12 md:py-24 border-b border-zinc-200 dark:border-white/[0.03] theme-transition">
        <div className="absolute top-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.02] dark:bg-emerald-500/5 blur-[120px]" />
        
        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-mono">03 / The Archive</span>
            <h1 className="text-foreground font-display">
              Field Notes
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-700 dark:text-zinc-300 font-light">
              Notes from inside the work.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Header / Philosophy */}
      <section className="py-8 md:py-12 border-b border-zinc-200 dark:border-white/[0.03] bg-zinc-100/30 dark:bg-zinc-950/10 theme-transition">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-xs font-mono text-zinc-600 dark:text-zinc-500 uppercase tracking-widest">
            <div className="space-y-2 text-zinc-650 dark:text-zinc-400">
              <div className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                <span>Not trend pieces.</span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                <span>Not advice content.</span>
              </div>
            </div>
            <div className="space-y-2 text-zinc-650 dark:text-zinc-400">
              <div className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                <span>Not thought leadership.</span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                <span>Short observations from operating, rebuilding, advising, and making businesses more coherent.</span>
              </div>
            </div>
          </div>
          <div className="mt-6 text-xs font-mono text-zinc-500 dark:text-zinc-500">
            <p>The point is not to explain everything.</p>
            <p className="text-zinc-900 dark:text-white font-medium mt-1">The point is to leave a trail of judgment.</p>
          </div>
        </div>
      </section>

      {/* Themes List — Accordion */}
      <section className="py-12 md:py-20 theme-transition">
        <div className="mx-auto max-w-3xl px-4 relative z-20">
          <div className="divide-y divide-zinc-200 dark:divide-white/[0.05] border-y border-zinc-200 dark:border-white/[0.05]">
            {themes.map((theme, i) => {
              const isOpen = openIndex === i;

              return (
                <AccordionItem
                  key={theme.index}
                  isOpen={isOpen}
                  onToggle={() => setOpenIndex(isOpen ? -1 : i)}
                  className="fade-up-element visible"
                  trigger={
                    <div className="flex items-start gap-4 py-6 group">
                      {/* Index number */}
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 pt-1 shrink-0">
                        {theme.index}
                      </span>

                      {/* Title */}
                      <h2 className={`text-lg sm:text-xl font-medium leading-tight flex-1 transition-colors duration-300 ${
                        isOpen
                          ? "text-zinc-900 dark:text-white"
                          : "text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white"
                      }`}>
                        {theme.title}
                      </h2>

                      {/* Toggle icon */}
                      <span className="shrink-0 pt-1 text-emerald-500">
                        {isOpen ? (
                          <Minus className="h-4 w-4" strokeWidth={1.5} />
                        ) : (
                          <Plus className="h-4 w-4" strokeWidth={1.5} />
                        )}
                      </span>
                    </div>
                  }
                >
                  {/* Expanded content */}
                  <div className="pb-8 pl-8 sm:pl-10">
                    <div className="text-zinc-800 dark:text-zinc-300 font-light text-sm sm:text-base leading-relaxed space-y-4 border-l border-emerald-500/20 pl-5">
                      {theme.content.map((para, j) => (
                        <p key={j} className={para.startsWith("Then") || para.startsWith("The better") || para.startsWith("It means") || para.startsWith("The first layer") || para.startsWith("Each one") || para.startsWith("Taste becomes") || para.startsWith("The higher") ? "text-zinc-950 dark:text-white font-medium" : ""}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </AccordionItem>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
