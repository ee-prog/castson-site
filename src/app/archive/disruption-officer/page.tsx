import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EditorialImage, TextLink } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Disruption Officer",
  description:
    "The origin mandate — redesign the system, modernize the technology, restructure the teams, and lead the cultural shift required to make the new model work.",
};

const outdated = [
  "Systems that no longer spoke to each other.",
  "Roles written for a company that no longer existed.",
  "Reporting that arrived too late to change a decision.",
  "Work repeated by hand because no one had time to remove it.",
  "Technology bought to solve problems no one had defined.",
];

const scope = [
  "Redesign the operating model.",
  "Modernize the technology.",
  "Restructure teams and decision rights.",
  "Remove work that no longer earned its place.",
  "Improve the client experience.",
  "Lead the cultural shift the new model required.",
];

const throughLine = ["People.", "Business.", "Technology.", "Changed together."];

export default function DisruptionOfficerPage() {
  return (
    <div className="site-shell chapter-page">
      <section className="chapter-hero">
        <div className="site-container">
          <Link href="/archive" className="chapter-breadcrumb">
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
            Archive
          </Link>
          <span className="page-kicker mt-8 block">Chapter 01</span>
          <h1>Disruption Officer</h1>
          <p className="chapter-hero-lede">
            The title was literal. The mandate was to change how the organization
            worked — not to advise on it from the side.
          </p>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Why the role existed</span>
            <h2 className="story-heading">Someone had to own the redesign.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                Most organizations know something has to change. Fewer give anyone
                the authority to change it across every part at once.
              </p>
              <p>
                The role existed because strategy, technology, teams, and client
                experience had drifted apart, and no single function could pull them
                back together.
              </p>
              <p className="emphasis">
                The work was to redesign the operating system of the business, and
                to carry the responsibility for whether it held.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">What had become outdated</span>
            <h2 className="story-heading">The old model was still running everything.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>The symptoms were familiar before anyone named them.</p>
              <div className="ruled-list metadata">
                {outdated.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
              <p className="emphasis">
                None of it was anyone&rsquo;s fault. It was simply the residue of a
                company that had grown faster than its own operating model.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <EditorialImage
              src="/images/editorial/marble-operating-layer.webp"
              alt="A marble monolith standing on a frozen lakeshore at dusk"
              caption="Roles and decision rights, redrawn"
              aspect="aspect-[4/3]"
              className="mobile-bleed"
              objectPosition="center"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="section-kicker">The scope carried</span>
            <h2 className="story-heading">Authority across the whole system.</h2>
            <div className="body-copy mt-7">
              <p>
                A mandate this wide only works when it is genuinely owned. The scope
                was not a workstream. It was the system.
              </p>
              <div className="ruled-list metadata">
                {scope.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
              <p>
                Each of these usually belongs to a different leader. The point of the
                role was to hold them together long enough to change them together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">The method</span>
            <h2 className="story-heading">
              Teams, systems, and culture had to move at once.
            </h2>
            <div className="body-copy mt-7">
              <p>
                Change any one of them alone and the other two pull it back. New
                technology on old roles fails. New roles on old technology fail. New
                intent without either is just a memo.
              </p>
              <p>
                So the work moved continuously among the three — the people first,
                then the business, then the technology — never treating them as
                separate projects.
              </p>
              <div className="ruled-list metadata">
                {throughLine.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="quiet-panel">
              <span className="section-kicker">What it produced</span>
              <div className="ruled-list metadata">
                <div>Automated reporting and executive dashboards.</div>
                <div>A marketing and communications technology stack.</div>
                <div>Automation of repetitive administrative work.</div>
                <div>Custom applications where software fell short.</div>
                <div>Clearer roles, ownership, and decision rights.</div>
              </div>
              <p className="mt-7 text-sm font-medium leading-relaxed text-[var(--foreground)]">
                The organization ended with a working system, not a slide deck about
                one.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section story-section border-b-0">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="section-kicker">Why it still defines the work</span>
            <h2 className="story-heading">The mandate did not end with the title.</h2>
            <div className="body-copy mt-7">
              <p>
                Since then, the same pattern keeps reappearing. Different
                organizations, the same underlying problem: a business held back by
                its own operating system.
              </p>
              <p className="emphasis">
                This is why the range is not a market invention. It was the job.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <TextLink href="/braveheart">Next: BraveHeart</TextLink>
              <TextLink href="/contact">Start a conversation</TextLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
