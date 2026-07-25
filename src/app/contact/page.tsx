"use client";

import React, { useActionState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { PageHeader } from "@/components/editorial";
import { sendContactEmail } from "./actions";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);

  return (
    <div className="site-shell contact-page">
      <section className="section contact-hero">
        <div className="site-container">
          <PageHeader
            kicker="Contact"
            title="Contact"
            lede="For thoughtful notes, introductions, and senior conversations about the work."
          />
        </div>
      </section>

      <section className="section border-b-0 contact-body">
        <div className="site-container contact-grid">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="body-copy">
              <p className="emphasis text-xl leading-relaxed">
                For transformation, advisory, or executive conversations, send a note.
              </p>
              <div className="ruled-list metadata">
                <div>Significant organizational transformation.</div>
                <div>Senior advisory mandates.</div>
                <div>Fractional or embedded executive leadership.</div>
                <div>Operating roles.</div>
                <div>Introductions from owners, CEOs, boards, and recruiters.</div>
              </div>
              <p>
                A line about the situation and what you&rsquo;re weighing is plenty to
                start.
              </p>
              <p>I read every message myself, and I reply personally.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            {state?.success ? (
              <div className="contact-confirmation text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center text-[var(--primary)]">
                  <Send className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-3xl">Thank you.</h2>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted-foreground)]">
                  I’ve received your note and will reply personally.
                </p>
                <a href="/contact" className="editorial-link mt-8">
                  Send another message
                </a>
              </div>
            ) : (
              <form action={formAction} className="contact-form space-y-8">
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
                    />
                    {state?.fieldErrors?.email && (
                      <p className="mt-2 text-xs text-red-600 dark:text-red-300">{state.fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="metadata mb-2 block text-[var(--primary)]">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    maxLength={150}
                    className="form-input-luxury"
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

                <p className="text-xs leading-relaxed text-[var(--muted-foreground)]">
                  Your message is only used so I can read and respond.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
