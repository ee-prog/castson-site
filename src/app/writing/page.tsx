import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const posts = [
  {
    slug: "systems-over-software",
    title: "Systems Over Software: The Automation Philosophy",
    date: "June 1, 2026",
    readTime: "4 min read",
    summary: "Why trying to fit business operations into rigid SaaS templates is a recipe for manual bottlenecks, and how building lightweight sync scripts transforms efficiency.",
  },
  {
    slug: "automating-braveheart-first-aid",
    title: "Automating BraveHeart First Aid Operations",
    date: "May 15, 2026",
    readTime: "6 min read",
    summary: "A technical walkthrough of how we built the Ripley automation engine to synchronize Acuity courses, Monday boards, and instructor shifts.",
  }
];

export default function Writing() {
  return (
    <div data-theme="dark" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl fade-up-element">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl uppercase font-display">
          Writing & Notes
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
          Thoughts, technical walkthroughs, and logs on building systems, automating workflows, and operational efficiency.
        </p>
      </div>

      {/* Posts List */}
      <div className="mt-16 space-y-10 max-w-3xl">
        {posts.map((post, index) => (
          <article
            key={post.slug}
            className={`group relative flex flex-col items-start rounded-2xl border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/10 p-6 card-hover-effect fade-up-element ${
              index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300"
            } theme-transition`}
          >
            <div className="flex items-center gap-3 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {post.date}
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            
            <h2 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
              <Link href={`/writing/${post.slug}`}>
                <span className="absolute inset-0 rounded-2xl" />
                {post.title}
              </Link>
            </h2>
            
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {post.summary}
            </p>
            
            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Read note <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
