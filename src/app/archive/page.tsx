import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "A curated record of operating judgment — the Disruption Officer mandate, the BraveHeart ownership, applied AI and systems, and current work.",
};

const chapters = [
  {
    href: "/archive/disruption-officer",
    index: "01",
    title: "Disruption Officer",
    line: "The origin mandate. Redesign the system, modernize the technology, restructure the teams, and lead the cultural shift required to make the new model work.",
    tags: ["Operating model", "Technology", "Teams", "Culture"],
  },
  {
    href: "/braveheart",
    index: "02",
    title: "BraveHeart",
    line: "The ownership chapter. A real operating company acquired, rebuilt, and run — with financial and human consequence attached to every decision.",
    tags: ["Ownership", "Operations", "Software", "Consequence"],
  },
  {
    href: "/applied-ai",
    index: "03",
    title: "Applied AI and Systems",
    line: "AI as one component of organizational redesign — automation, reporting, institutional memory, and custom applications inside real work.",
    tags: ["Automation", "Reporting", "Memory", "Applications"],
  },
  {
    href: "/archive/current-work",
    index: "04",
    title: "Current Work",
    line: "Executive alignment, marketing transformation, client experience, and operating systems across Canadian and Swiss organizations.",
    tags: ["Advisory", "Transformation", "Canadian–Swiss"],
  },
];

export default function ArchivePage() {
  return (
    <div className="site-shell archive-page">
      <section className="archive-hero">
        <div className="site-container archive-hero-grid">
          <span className="page-kicker">Archive</span>
          <h1>The work.</h1>
          <p className="archive-hero-lede">
            A clear, living record of executive judgment and operating work. Read any
            chapter cold — each one stands on its own.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="archive-index">
            {chapters.map((chapter) => (
              <Link key={chapter.href} href={chapter.href} className="archive-chapter group">
                <span className="archive-chapter-index metadata">{chapter.index}</span>
                <div className="archive-chapter-body">
                  <h2 className="inline-flex items-baseline gap-3">
                    {chapter.title}
                    <ArrowUpRight
                      className="h-6 w-6 shrink-0 translate-y-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </h2>
                  <p className="archive-chapter-line">{chapter.line}</p>
                  <div className="archive-chapter-tags">
                    {chapter.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
