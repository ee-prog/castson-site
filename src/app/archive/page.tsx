import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Four chapters in how Eli Castson thinks, builds and leads: disruption, ownership, applied technology, and the executive questions shaping the work now.",
};

const chapters = [
  {
    href: "/archive/disruption-officer",
    index: "01",
    title: "Disruption Officer",
    subtitle: "The defining mandate.",
    line: "Redesign the operating model. Modernize the technology. Restructure the teams. Lead the cultural shift required to make the new system work.",
    tags: ["Operating model", "Technology", "Teams", "Culture"],
  },
  {
    href: "/braveheart",
    index: "02",
    title: "BraveHeart",
    subtitle: "The ownership chapter.",
    line: "A real operating company acquired, rebuilt and run — with financial, human and client consequences attached to every decision.",
    tags: ["Ownership", "Operations", "Software", "Consequence"],
  },
  {
    href: "/applied-ai",
    index: "03",
    title: "Applied AI and Systems",
    subtitle: "Technology inside the operating model.",
    line: "Automated reporting, institutional memory, repetitive work removed and applications designed around how the organization actually operates.",
    tags: ["Automation", "Reporting", "AI", "Applications"],
  },
  {
    href: "/archive/current-work",
    index: "04",
    title: "Current Work",
    subtitle: "Where the work lives now.",
    line: "Strategy, growth, operating model and technology — working beside leaders on the questions that determine what the organization becomes next.",
    tags: ["Strategy", "Growth", "Transformation", "Canadian–Swiss"],
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
            Four chapters in how I think, build and lead: disruption, ownership,
            applied technology and the executive questions shaping the work now.
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
                  <p className="archive-chapter-subtitle">{chapter.subtitle}</p>
                  <p className="archive-chapter-line">{chapter.line}</p>
                  <div className="archive-chapter-tags">{chapter.tags.join(" · ")}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
