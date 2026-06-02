"use client";

import React, { useState } from "react";
import { ArrowRight, Send, HelpCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      
      {/* Structural Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.02]"></div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 relative z-20">
        
        {/* Page Header */}
        <div className="max-w-3xl fade-up-element visible">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">06 / Connect</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-none font-display mt-2">
            Contact
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-zinc-300 font-light font-display">
            Start a conversation.
          </p>
        </div>

        {/* Narrative & Profiles Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Targets */}
          <div className="lg:col-span-6 space-y-8 text-zinc-300 font-light leading-relaxed text-sm sm:text-base fade-up-element visible">
            <p className="text-lg text-white font-normal">
              I am not trying to build a large audience. But I am interested in the right conversations.
            </p>
            
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                [ Reach out if you are ]
              </span>
              
              <div className="grid grid-cols-1 gap-3 font-mono text-xs text-zinc-400">
                {[
                  "A business owner thinking about succession.",
                  "An investor interested in AI-enabled operating companies.",
                  "An operator working through similar questions.",
                  "An executive exploring what modern operational leverage could mean.",
                  "A technical collaborator who thinks deeply about systems.",
                  "A builder interested in meaningful service businesses."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 border border-white/5 bg-zinc-900/20 rounded-sm">
                    <span className="text-emerald-400 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l border-emerald-400/40 pl-4 py-1 text-xs font-mono text-zinc-400">
              No pitch required. Just signal.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 fade-up-element visible">
            {submitted ? (
              <div className="rounded-sm border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-4 theme-transition">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <Send className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-white font-display uppercase">Message Sent Successfully</h2>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto font-mono">
                  Thank you for reaching out. We will review your message and connect if there is a mutual fit.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-emerald-400 hover:underline uppercase font-mono tracking-widest"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-sm border border-white/5 bg-zinc-900/10 p-8 space-y-6 theme-transition">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-sm border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-700 focus:border-emerald-500 focus:outline-none transition-colors font-sans"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-sm border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-700 focus:border-emerald-500 focus:outline-none transition-colors font-sans"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">
                    Subject / Context
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-sm border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-700 focus:border-emerald-500 focus:outline-none transition-colors font-sans"
                    placeholder="e.g., succession inquiry / operator peer"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-sm border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-700 focus:border-emerald-500 focus:outline-none transition-colors resize-none font-sans"
                    placeholder="Introduce yourself and your system questions..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group interactive-hover flex w-full items-center justify-center gap-2 rounded-sm bg-white hover:bg-emerald-400 text-black py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer active:scale-95"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
