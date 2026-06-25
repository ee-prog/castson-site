"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { AccordionItem } from "@/components/animations";
import { PageHeader } from "@/components/editorial";

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
      "Taste becomes real when it survives contact with operations.",
    ],
  },
  {
    index: "02",
    title: "Make the work legible before you make it faster.",
    content: [
      "The temptation is to automate early.",
      "Take the existing process and make it faster.",
      "But if the process is confused, automation only preserves confusion at greater speed.",
      "The better move is slower at first.",
      "Understand what is really happening.",
      "Then accelerate what remains.",
    ],
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
      "It means the business learned.",
    ],
  },
  {
    index: "04",
    title: "Owner dependency is usually a design problem.",
    content: [
      "Many companies appear organized until the owner steps away.",
      "Then everything starts asking for permission.",
      "That is not only a staffing issue.",
      "It is a visibility issue.",
      "An approval issue.",
      "A trust issue.",
      "Reducing owner dependency does not mean caring less.",
      "It means building a company that can hold more of its own intelligence.",
    ],
  },
  {
    index: "05",
    title: "Luxury fails when it becomes vague.",
    content: [
      "Luxury does not mean saying more beautiful things.",
      "It means being more precise about what is allowed, what is not allowed, what must be felt, and what must never be left to chance.",
      "The higher the promise, the less room there is for vagueness.",
    ],
  },
  {
    index: "06",
    title: "Automation fails when the company is not yet legible.",
    content: [
      "Automation is leverage.",
      "But it works only when the business underneath it is clear.",
      "If the data is messy, the process is vague, and authority is undefined, AI becomes another expensive tool in the pile.",
      "The first layer is not intelligence.",
      "The first layer is operating truth.",
    ],
  },
  {
    index: "07",
    title: "Purpose changes the operating standard.",
    content: [
      "When the function of a company matters, the boring parts become less boring.",
      "First aid training gives the work a moral weight.",
      "The booking flow is not just a booking flow.",
      "The reminder is not just a reminder.",
      "The instructor workflow is not just an internal process.",
      "Each one supports the larger purpose.",
      "That changes how I think about the work.",
    ],
  },
];

export default function FieldNotes() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="site-shell">
      <section className="section">
        <div className="site-container">
          <PageHeader kicker="03 / The Archive" title="Field Notes" lede="Notes from inside the work." />
        </div>
      </section>

      <section className="section section-quiet">
        <div className="site-container grid gap-10 md:grid-cols-2">
          <div className="metadata ruled-list">
            <div>Not trend pieces.</div>
            <div>Not content marketing.</div>
          </div>
          <div className="metadata ruled-list">
            <div>Not keynote material.</div>
            <div>Short observations from operating, rebuilding, advising, and making companies sharper.</div>
          </div>
          <div className="md:col-span-2 body-copy max-w-2xl">
            <p>The point is not to explain everything.</p>
            <p className="emphasis">The point is to leave a trail of judgment.</p>
          </div>
        </div>
      </section>

      <section className="section border-b-0">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="border-y border-[var(--border)]">
            {themes.map((theme, i) => {
              const isOpen = openIndex === i;

              return (
                <AccordionItem
                  key={theme.index}
                  isOpen={isOpen}
                  onToggle={() => setOpenIndex(isOpen ? -1 : i)}
                  className="border-b border-[var(--border)] last:border-b-0"
                  trigger={
                    <div className="group flex items-start gap-4 py-6 text-left sm:gap-5 sm:py-7">
                      <span className="metadata w-8 shrink-0 text-[var(--primary)]">{theme.index}</span>
                      <h2 className="flex-1 text-[1.45rem] leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)] sm:text-3xl">
                        {theme.title}
                      </h2>
                      <span className="mt-1 text-[var(--primary)]">
                        {isOpen ? (
                          <Minus className="h-4 w-4" strokeWidth={1.5} />
                        ) : (
                          <Plus className="h-4 w-4" strokeWidth={1.5} />
                        )}
                      </span>
                    </div>
                  }
                >
                  <div className="pb-8 pl-10 sm:pl-16">
                    <div className="body-copy border-l border-[var(--border)] pl-5">
                      {theme.content.map((para) => (
                        <p
                          key={para}
                          className={
                            para.startsWith("Then") ||
                            para.startsWith("The better") ||
                            para.startsWith("It means") ||
                            para.startsWith("The first layer") ||
                            para.startsWith("Each one") ||
                            para.startsWith("Taste becomes") ||
                            para.startsWith("The higher")
                              ? "emphasis"
                              : ""
                          }
                        >
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
