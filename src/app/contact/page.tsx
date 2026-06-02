"use client";

import React, { useActionState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { sendContactEmail } from "./actions";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      
      {/* Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] animate-grid-line delay-100 opacity-0"></div>
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] hidden md:block animate-grid-line delay-300 opacity-0"></div>
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] hidden md:block animate-grid-line delay-550 opacity-0"></div>
        <div className="w-[1px] h-full bg-zinc-950/[0.03] dark:bg-white/[0.02] animate-grid-line delay-700 opacity-0"></div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-20 sm:px-6 lg:px-8 relative z-20">
        
        {/* Page Header */}
        <div className="max-w-3xl fade-up-element visible">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-mono">06 / Connect</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-none font-display mt-2">
            Contact
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-zinc-700 dark:text-zinc-300 font-light font-display">
            Start a conversation.
          </p>
        </div>

        {/* Narrative & Profiles Grid */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Targets */}
          <div className="lg:col-span-6 space-y-8 text-zinc-800 dark:text-zinc-300 font-light leading-relaxed text-sm sm:text-base fade-up-element visible">
            <div className="space-y-4">
              <p className="text-lg text-zinc-900 dark:text-white font-normal">
                Start with the right conversation.
              </p>
              <p>
                I am interested in people building, operating, selling, or stewarding businesses where place, service, taste, and standards matter.
              </p>
            </div>
            
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest block border-b border-zinc-200 dark:border-white/5 pb-2">
                [ Reach out if you are ]
              </span>
              
              <div className="grid grid-cols-1 gap-3 font-mono text-xs text-zinc-650 dark:text-zinc-400">
                {[
                  "An owner thinking about succession or transition",
                  "A property holder looking for an operating partner",
                  "An operator building a place-based experience business",
                  "A collaborator working in hospitality, tourism, design, or service",
                  "An investor aligned with patient, operating-led value creation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 border border-zinc-200 dark:border-white/5 bg-zinc-100/40 dark:bg-zinc-900/20 rounded-sm">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
 
            <div className="border-l border-emerald-500/40 dark:border-emerald-400/40 pl-4 py-1 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              If something here connects with what you are building, carrying, or trying to make stronger, send a note.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 fade-up-element visible">
            {state?.success ? (
              <div className="rounded-sm border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-500/5 p-8 text-center space-y-4 theme-transition">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Send className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-display uppercase">Message received.</h2>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto font-mono leading-relaxed">
                  Thanks for the note. If it fits the kind of work I’m focused on, I’ll reply directly.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-block text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline uppercase font-mono tracking-widest"
                >
                  Send another message
                </a>
              </div>
            ) : (
              <form action={formAction} className="rounded-sm border border-zinc-200 dark:border-white/5 bg-zinc-100/20 dark:bg-zinc-900/10 p-8 space-y-6 theme-transition">
                
                {state?.error && (
                  <div className="rounded-sm border border-red-500/20 bg-red-500/5 p-4 text-xs text-red-500 dark:text-red-400 font-mono">
                    {state.error}
                  </div>
                )}

                {/* Honeypot field (hidden from users) */}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-mono">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      className="w-full rounded-sm border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:border-emerald-500 focus:outline-none transition-colors font-sans"
                      placeholder="Jane Doe"
                    />
                    {state?.fieldErrors?.name && (
                      <p className="mt-1 text-[10px] text-red-500 dark:text-red-400 font-mono">{state.fieldErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={254}
                      className="w-full rounded-sm border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:border-emerald-500 focus:outline-none transition-colors font-sans"
                      placeholder="jane@example.com"
                    />
                    {state?.fieldErrors?.email && (
                      <p className="mt-1 text-[10px] text-red-500 dark:text-red-400 font-mono">{state.fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-mono">
                    Subject / Context
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    maxLength={150}
                    className="w-full rounded-sm border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:border-emerald-500 focus:outline-none transition-colors font-sans"
                    placeholder="e.g., succession inquiry / operator peer"
                  />
                  {state?.fieldErrors?.subject && (
                    <p className="mt-1 text-[10px] text-red-500 dark:text-red-400 font-mono">{state.fieldErrors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={5000}
                    className="w-full rounded-sm border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:border-emerald-500 focus:outline-none transition-colors resize-none font-sans"
                    placeholder="Introduce yourself and your system questions..."
                  />
                  {state?.fieldErrors?.message && (
                    <p className="mt-1 text-[10px] text-red-500 dark:text-red-400 font-mono">{state.fieldErrors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="group interactive-hover flex w-full items-center justify-center gap-2 rounded-sm bg-zinc-950 dark:bg-white hover:bg-emerald-500 dark:hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-650 text-white dark:text-black py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer active:scale-95 disabled:cursor-not-allowed"
                  >
                    <span>{isPending ? "Sending..." : "Send Message"}</span>
                    {!isPending && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} aria-hidden="true" />}
                  </button>
                </div>

                <p className="text-[10px] text-zinc-500 leading-relaxed font-light mt-4 pt-4 border-t border-zinc-200 dark:border-white/5">
                  By sending this form, you are sharing the information above so I can read and respond to your message. I do not use contact form submissions for a mailing list unless you explicitly ask.
                </p>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
