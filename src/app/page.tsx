import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TextLink } from "@/components/editorial";

const methodBlocks = [
  {
    label: "People",
    question: "How are people doing?",
    body: "Do they understand their roles, decisions and responsibilities? Where are they frustrated, unclear or compensating for a system that no longer works?",
  },
  {
    label: "Business",
    question: "What is the organization trying to achieve?",
    body: "What should the product, service or client experience become? What is preventing the business from delivering it consistently?",
  },
  {
    label: "Technology",
    question: "What should connect, disappear, automate or be rebuilt?",
    body: "Where can reporting, software and AI make the organization more capable without making it less human?",
  },
];

const buildList = [
  "Executive reporting and dashboards.",
  "Marketing technology stacks.",
  "Automation of repetitive work.",
  "AI inside the operating system.",
  "Custom applications where software falls short.",
  "Operating models and team structures.",
  "Client and service experiences.",
];

const chapters = [
  {
    href: "/archive/disruption-officer",
    index: "01",
    title: "Disruption Officer",
    line: "Responsible for changing how a global media organization worked: teams, systems and culture together.",
  },
  {
    href: "/braveheart",
    index: "02",
    title: "Braveheart",
    line: "A workplace-training company acquired, rebuilt and operated, with every consequence attached.",
  },
  {
    href: "/applied-ai",
    index: "03",
    title: "Applied AI and Systems",
    line: "Automation, reporting and applications built into real operations, not layered over confusion.",
  },
];

const noteTeasers = [
  {
    title: "Transformation is mostly subtraction.",
    line: "The hardest and most valuable work is deciding what should stop.",
  },
  {
    title: "Reporting is a leadership instrument, not an administrative one.",
    line: "If a number arrives too late to affect a decision, it is history, not reporting.",
  },
  {
    title: "AI is not the first layer.",
    line: "The first layer is truth.",
  },
];

export default function Home() {
  return (
    <div className="site-shell home-story">
      {/* 1 — Position */}
      <section className="home-hero relative min-h-[calc(88svh-4.5rem)] border-b border-[var(--border)] sm:min-h-[calc(92svh-4.5rem)] lg:min-h-[calc(100svh-4.5rem)]">
        <Image
          src="/images/editorial/eli-mountain-portrait.webp"
          alt="Eli Castson in a mountain landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[55%_50%] sm:object-[64%_50%]"
        />
        <div className="absolute inset-0" />
        <div className="site-container relative z-10 flex min-h-[calc(88svh-4.5rem)] items-end pb-14 pt-16 sm:min-h-[calc(92svh-4.5rem)] md:pb-24 lg:min-h-[calc(100svh-4.5rem)]">
          <div className="max-w-[55rem]">
            <span className="page-kicker">Eli Castson</span>
            <h1 className="mt-5">Transformation across people, business and technology.</h1>
            <div className="hero-copy mt-8 max-w-2xl space-y-5 body-copy">
              <p className="emphasis">
                I help organizations redesign how they operate when their systems,
                teams and culture have fallen behind what the business now needs.
              </p>
              <p>
                Canadian–Swiss transformation executive, former Disruption Officer,
                owner and advisor.
              </p>
            </div>
            <div className="mt-10">
              <TextLink href="/archive">Explore the archive</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Problem */}
      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">When the organization has outgrown its system</span>
            <h2 className="story-heading">The company changed. The way it works did not.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                Systems no longer connect. Roles reflect an earlier version of the
                organization. Technology overlaps, reporting is fragmented, and
                repetitive work consumes capable people.
              </p>
              <p>The answer is rarely another isolated tool or initiative.</p>
              <p className="emphasis">It is usually a clearer operating system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Method */}
      <section className="section section-quiet story-section">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="section-kicker">People · Business · Technology</span>
              <h2 className="story-heading">Changed together.</h2>
            </div>
            <div className="lg:col-span-7 lg:flex lg:items-end">
              <p className="body-copy">
                I move continuously between all three until the organization begins to
                work as one system.
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {methodBlocks.map((block) => (
              <div key={block.label} className="border-t border-[var(--border)] pt-6">
                <span className="section-kicker">{block.label}</span>
                <p className="mt-4 font-display text-xl leading-snug text-[var(--foreground)]">
                  {block.question}
                </p>
                <p className="body-copy mt-4">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — What I repeatedly build */}
      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">What I repeatedly build</span>
            <h2 className="story-heading">The same systems, redrawn for each business.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <div className="ruled-list metadata">
                {buildList.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
              <p className="emphasis">
                None of it sticks unless the organization changes with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Range */}
      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">The range</span>
            <h2 className="story-heading">The question kept getting bigger.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                Psychology first, then marketing, then the machinery behind it:
                technology, data and automation.
              </p>
              <p>
                By the time the title said Disruption Officer, the question had become
                how the whole organization should work: its people, systems, operating
                model and culture.
              </p>
            </div>
            <div className="mt-8">
              <TextLink href="/about">Read the story</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Selected chapters */}
      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Archive</span>
            <h2 className="story-heading">The evidence, in three chapters.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="ruled-list">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.href}
                  href={chapter.href}
                  className="group grid grid-cols-[2.25rem_1fr] gap-4 py-6 transition-colors"
                >
                  <span className="metadata pt-1.5 text-[var(--primary)]">{chapter.index}</span>
                  <span>
                    <span className="inline-flex items-baseline gap-2 font-display text-2xl leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)] sm:text-3xl">
                      {chapter.title}
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 translate-y-0.5 transition-transform group-hover:-translate-y-0 group-hover:translate-x-1"
                        strokeWidth={1.4}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="mt-2 block max-w-xl text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {chapter.line}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Current work */}
      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Current work</span>
            <h2 className="story-heading">From advisory to operating responsibility.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                Through Castson Inc., I work with senior leaders on organizational
                transformation, client experience, marketing systems, applied AI and
                operating-model change.
              </p>
              <p>
                Current engagements span Canadian and Swiss organizations:
                experience-led businesses navigating legacy systems, changing
                expectations and urgent technological change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Recent thinking */}
      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Recent thinking</span>
            <h2 className="story-heading">Notes from inside the work.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="ruled-list">
              {noteTeasers.map((note) => (
                <div key={note.title} className="py-5">
                  <p className="font-display text-lg leading-snug text-[var(--foreground)] sm:text-xl">
                    {note.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {note.line}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <TextLink href="/notes">Read all notes</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — Contact */}
      <section className="section section-quiet story-section border-b-0">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Contact</span>
            <h2 className="story-heading">Tell me what is changing.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                The right conversations concern organizational transformation, senior
                advisory mandates and executive roles.
              </p>
              <p className="emphasis">Here is how to begin the right one.</p>
            </div>
            <div className="mt-8">
              <TextLink href="/contact">Start a conversation</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-off */}
      <section className="home-signoff">
        <div className="site-container">
          <p className="home-signoff-mark">Castson Inc.</p>
        </div>
      </section>
    </div>
  );
}
