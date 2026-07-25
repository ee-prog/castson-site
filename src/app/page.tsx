import Image from "next/image";
import Link from "next/link";
import { TextLink } from "@/components/editorial";
import { ArtifactFrame } from "@/components/artifact";

const method = ["People.", "Business.", "Technology."];

const mandate = [
  "Systems that no longer speak to each other.",
  "Ways of working built for a company that has since changed.",
  "Responsibilities that no longer match the actual work.",
  "Technology bought faster than it was understood.",
  "Reporting that arrives too late to change a decision.",
  "Repetitive work no one has had time to remove.",
  "Teams too consumed by the current model to redesign it.",
];

const proof = [
  "Led disruption and transformation as a mandate, not a project.",
  "Acquired, rebuilt, and now operate a real company.",
  "Advised senior leaders through decisions with consequence.",
  "Designed the systems and software underneath the change.",
  "Carried responsibility for whether it held.",
];

const builds = [
  "Executive reporting",
  "Marketing technology",
  "Automation",
  "AI systems",
  "Custom applications",
  "Operating models",
  "Team structures",
  "Client experiences",
];

const chapters = [
  {
    href: "/archive/disruption-officer",
    title: "Disruption Officer",
    body: "The mandate that named the work.",
  },
  {
    href: "/braveheart",
    title: "BraveHeart",
    body: "A company owned and operated.",
  },
  {
    href: "/applied-ai",
    title: "Applied AI and Systems",
    body: "Intelligence applied to real work.",
  },
  {
    href: "/archive/current-work",
    title: "Current Work",
    body: "Canadian and Swiss organizations, now.",
  },
];

const recentThinking = [
  {
    title: "Transformation is mostly subtraction.",
    body: "The hardest work is deciding what should stop.",
  },
  {
    title: "Reporting is a leadership instrument.",
    body: "If a number arrives too late to change a decision, it is history.",
  },
  {
    title: "Decision rights are cheaper to change than org charts.",
    body: "Often the structure is fine. The clarity is missing.",
  },
];

export default function Home() {
  return (
    <div className="site-shell home-story">
      {/* 1 — Hero: name, category, the system he changes, breadth */}
      <section className="home-hero relative min-h-[calc(88svh-4.5rem)] border-b border-[var(--border)] sm:min-h-[calc(92svh-4.5rem)] lg:min-h-[calc(100svh-4.5rem)]">
        <Image
          src="/images/editorial/eli-mountain-portrait.webp"
          alt="Eli Castson in a mountain landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "64% center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,240,232,0.90)_0%,rgba(244,240,232,0.74)_42%,rgba(244,240,232,0.20)_100%)] dark:bg-[linear-gradient(90deg,rgba(21,20,17,0.88)_0%,rgba(21,20,17,0.68)_46%,rgba(21,20,17,0.20)_100%)]" />
        <div className="site-container relative z-10 flex min-h-[calc(88svh-4.5rem)] items-end pb-14 pt-16 sm:min-h-[calc(92svh-4.5rem)] md:pb-24 lg:min-h-[calc(100svh-4.5rem)]">
          <div className="max-w-[55rem]">
            <span className="page-kicker">Eli Castson</span>
            <h1 className="mt-5 max-w-[16ch] md:max-w-[20ch]">
              I redesign how organizations work when technology changes what is
              possible.
            </h1>
            <div className="hero-copy mt-8 max-w-2xl space-y-5 body-copy">
              <p className="emphasis">
                A transformation executive. Former Disruption Officer.
              </p>
              <p>
                I help organizations redesign how they operate when technology,
                systems, and culture have to change together.
              </p>
            </div>
            <div className="tag-line mt-8">
              {method.map((term) => (
                <span key={term}>{term.replace(".", "")}</span>
              ))}
            </div>
            <div className="mt-10">
              <TextLink href="/archive">See the work</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — The recurring mandate: what he finds and changes */}
      <section className="section story-section home-intro-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">The recurring mandate</span>
            <h2 className="story-heading">
              I keep finding the same thing, in different companies.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>An organization held back by its own operating system.</p>
              <div className="ruled-list metadata">
                {mandate.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
              <p className="mobile-pull emphasis">
                The work is to redesign that system — and to make the new one
                actually run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — The method */}
      <section className="section section-quiet story-section home-experience-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">The method</span>
            <h2 className="story-heading">People. Business. Technology.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>I begin with the people. How are they doing? Where is the work
                harder than it should be?</p>
              <p>
                I connect that to the business. What is it trying to become, and what
                operating model would support that?
              </p>
              <p>
                Then the technology. What should connect, what should disappear, what
                should be automated, what needs to be built.
              </p>
              <p className="mobile-pull emphasis">
                Not three workstreams. One system, changed together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — The operating proof */}
      <section className="section story-section home-trust-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="section-kicker">The operating proof</span>
            <h2 className="story-heading">I have carried the responsibility, not only the advice.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy mt-7">
              <div className="ruled-list metadata">
                {proof.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
              <p className="emphasis">
                The range is not a market invention. It was the job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — What Eli repeatedly builds */}
      <section className="section section-quiet story-section home-systems-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ArtifactFrame
              variant="dashboard"
              index="01"
              label="Executive reporting"
              caption="Systems built to change the next decision"
              aspect="aspect-[4/3] sm:aspect-[16/10]"
              className="mobile-bleed"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="section-kicker">What I keep building</span>
            <h2 className="story-heading">
              The same pieces, redrawn for each organization.
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-x-8 metadata">
              {builds.map((item) => (
                <div key={item} className="border-t border-[var(--border)] py-3 text-[var(--foreground)]">
                  {item}
                </div>
              ))}
            </div>
            <p className="body-copy mt-8">
              Rarely a single deliverable. Usually the operating system underneath
              the work.
            </p>
          </div>
        </div>
      </section>

      {/* 6 — Selected chapters */}
      <section className="section story-section home-proof-section">
        <div className="site-container">
          <span className="section-kicker">Selected chapters</span>
          <h2 className="story-heading max-w-2xl">Chapters in a career, read as evidence.</h2>
          <div className="mt-10 ruled-list">
            {chapters.map((chapter) => (
              <Link
                key={chapter.href}
                href={chapter.href}
                className="group grid gap-2 py-5 text-[var(--foreground)] transition-colors hover:text-[var(--primary)] sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="font-display text-2xl leading-tight sm:text-3xl">
                  {chapter.title}
                </span>
                <span className="metadata text-[var(--muted-foreground)] sm:text-right">
                  {chapter.body}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <TextLink href="/archive">Open the archive</TextLink>
          </div>
        </div>
      </section>

      {/* 7 — Recent thinking */}
      <section className="section section-quiet story-section home-technology-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="section-kicker">Recent thinking</span>
            <h2 className="story-heading">Notes from inside the work.</h2>
            <div className="mt-8 hidden lg:block">
              <TextLink href="/notes">Read the notes</TextLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="ruled-list">
              {recentThinking.map((note) => (
                <Link
                  key={note.title}
                  href="/notes"
                  className="group block py-5 transition-colors hover:text-[var(--primary)]"
                >
                  <span className="block font-display text-xl leading-snug text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)] sm:text-2xl">
                    {note.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {note.body}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8 lg:hidden">
              <TextLink href="/notes">Read the notes</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Quiet close */}
      <section className="section story-section border-b-0 home-closing-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">Start a conversation</span>
            <h2 className="story-heading">
              Here is how to begin the right conversation.
            </h2>
            <div className="body-copy mt-7">
              <p>
                If a transformation, senior advisory, or executive conversation makes
                sense, the simplest step is a direct note.
              </p>
              <p className="emphasis">You will hear back from me personally.</p>
            </div>
            <div className="mt-9">
              <TextLink href="/contact">Contact Eli</TextLink>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="quiet-panel">
              <span className="section-kicker">When my involvement is useful</span>
              <div className="ruled-list metadata">
                <div>Significant organizational transformation.</div>
                <div>Senior advisory mandates.</div>
                <div>Fractional or embedded executive leadership.</div>
                <div>Operating roles.</div>
                <div>Introductions from owners, CEOs, boards, and recruiters.</div>
              </div>
              <p className="mt-7 text-sm font-medium leading-relaxed text-[var(--foreground)]">
                No position needs to be named. The range is enough to imagine one.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-signoff">
        <div className="site-container">
          <p className="home-signoff-mark">Castson Inc.</p>
          <p className="home-signoff-line">
            Transformation across people, business, and technology.
          </p>
        </div>
      </section>
    </div>
  );
}
