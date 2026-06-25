"use client";

import React, { useActionState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { PageHeader } from "@/components/editorial";
import { sendContactEmail } from "./actions";

const fitList = [
  "An owner thinking about succession or transition",
  "A property holder considering an operating partner",
  "An operator building a service or place-based business",
  "A founder, CEO, or CMO who needs senior outside judgment",
  "A collaborator in hospitality, wellness, tourism, design, property, or service",
  "An investor aligned with patient operating-led value creation",
];

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);

  return (
    <div className="site-shell">
      <section className="section">
        <div className="site-container">
          <PageHeader
            kicker="06 / Connect"
            title="Contact"
            lede="Start with the real question."
          />
        </div>
      </section>

      <section className="section border-b-0">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="body-copy">
              <p className="emphasis text-xl leading-relaxed">
                Reach out when there is real ownership behind the question.
              </p>
              <p>
                I am interested in owners and senior leaders building, operating, selling, or stewarding businesses where place, service, taste, and standards matter.
              </p>
            </div>

            <div className="mt-10">
              <span className="section-kicker">Reach out if you are</span>
              <div className="ruled-list metadata">
                {fitList.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>

            <p className="metadata mt-10 border-l border-[var(--border-strong)] pl-5">
              I am most useful when the work is specific, consequential, and already moving. If something here connects with what you are building, carrying, or trying to make stronger, send a note.
            </p>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            {state?.success ? (
              <div className="quiet-panel text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center text-[var(--primary)]">
                  <Send className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-3xl">Message received.</h2>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted-foreground)]">
                  Thanks for the note. If it fits the kind of work I’m focused on, I’ll reply directly.
                </p>
                <a href="/contact" className="editorial-link mt-8">
                  Send another message
                </a>
              </div>
            ) : (
              <form action={formAction} className="quiet-panel space-y-8">
                {state?.error && (
                  <div className="border border-red-500/25 bg-red-500/5 p-4 text-sm text-red-600 dark:text-red-300">
                    {state.error}
                  </div>
                )}

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Website</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="metadata mb-2 block text-[var(--primary)]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      className="form-input-luxury"
                      placeholder="Jane Doe"
                    />
                    {state?.fieldErrors?.name && (
                      <p className="mt-2 text-xs text-red-600 dark:text-red-300">{state.fieldErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="metadata mb-2 block text-[var(--primary)]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={254}
                      className="form-input-luxury"
                      placeholder="jane@example.com"
                    />
                    {state?.fieldErrors?.email && (
                      <p className="mt-2 text-xs text-red-600 dark:text-red-300">{state.fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="metadata mb-2 block text-[var(--primary)]">
                    Subject / Context
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    maxLength={150}
                    className="form-input-luxury"
                    placeholder="e.g., succession / operating partner / advisory"
                  />
                  {state?.fieldErrors?.subject && (
                    <p className="mt-2 text-xs text-red-600 dark:text-red-300">{state.fieldErrors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="metadata mb-2 block text-[var(--primary)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={5000}
                    className="form-input-luxury resize-none"
                    placeholder="Introduce yourself and what you are trying to make stronger..."
                  />
                  {state?.fieldErrors?.message && (
                    <p className="mt-2 text-xs text-red-600 dark:text-red-300">{state.fieldErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="group inline-flex w-full items-center justify-center gap-2 border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-4 text-sm font-medium uppercase tracking-[0.08em] text-[var(--background)] transition-colors hover:border-[var(--primary)] hover:bg-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  <span>{isPending ? "Sending..." : "Send Message"}</span>
                  {!isPending && (
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}
                </button>

                <p className="border-t border-[var(--border)] pt-5 text-xs leading-relaxed text-[var(--muted-foreground)]">
                  By sending this form, you are sharing the information above so I can read and respond to your message. I do not use contact form submissions for a mailing list unless you explicitly ask.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
