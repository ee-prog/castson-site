"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, MessageSquare, Send } from "lucide-react";

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
    // In a production app, we would post this to an API route.
    // For now, we simulate success.
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-6 text-lg text-zinc-400">
          Have a project, system integration problem, or operational workflow challenge you want to discuss? Let&apos;s talk.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Left Column: Direct Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-white">Direct Communication</h2>
            <p className="mt-3 text-sm text-zinc-400">
              For personal advisory, custom systems design, or speaking opportunities, reach out directly.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-zinc-900/20">
              <Mail className="h-5 w-5 text-emerald-400" />
              <div>
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email</h3>
                <a href="mailto:ee@castson.com" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                  ee@castson.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-zinc-900/20">
              <MessageSquare className="h-5 w-5 text-emerald-400" />
              <div>
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">General Response Time</h3>
                <p className="text-sm font-semibold text-white">24-48 hours</p>
              </div>
            </div>
          </div>

          {/* Hard Boundary Disclaimer */}
          <div className="rounded-xl border border-red-500/10 bg-red-500/5 p-4 text-xs text-zinc-400 space-y-2">
            <span className="font-semibold text-red-400 block uppercase tracking-wider">BraveHeart Support Boundary</span>
            <p>
              This is Eli Castson&apos;s personal contact surface. If you are a student or client looking for course bookings, pricing adjustments, compliance documentation, or BraveHeart First Aid support, please route your query through the official BraveHeart First Aid channel.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                <Send className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Message Sent Successfully!</h2>
              <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                Thank you for reaching out. Eli will review your message and get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-semibold text-emerald-400 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/5 bg-zinc-900/10 p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="System Integration Advisory / Speaking"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your business workflows or systems..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 py-3 text-sm font-semibold text-zinc-950 transition-colors shadow-lg shadow-emerald-500/10"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
