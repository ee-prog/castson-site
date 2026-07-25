import Image from "next/image";
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

const recurringQuestions = [
  "How leaders see and steer the company.",
  "How teams, decisions and technology work together.",
  "What should be simplified, automated or rebuilt.",
  "Where AI can improve the operating model.",
  "How the organization delivers its product, service or client experience.",
];

const titlePath = [
  "Creative Director, Tech & Data.",
  "Disruption Officer.",
  "Advisor.",
  "Owner.",
];

const ownershipGains = [
  "Urgency to test and improve sooner.",
  "Compassion for the pressure carried by the person responsible for the outcome.",
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
          className="object-cover"
          style={{ objectPosition: "64% center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,240,232,0.90)_0%,rgba(244,240,232,0.74)_42%,rgba(244,240,232,0.20)_100%)] dark:bg-[linear-gradient(90deg,rgba(21,20,17,0.88)_0%,rgba(21,20,17,0.68)_46%,rgba(21,20,17,0.20)_100%)]" />
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
              <p>Systems no longer connect.</p>
              <p>Roles reflect an earlier version of the organization.</p>
              <p>
                Technology overlaps. Reporting is fragmented. Repetitive work consumes
                capable people. Valuable automation remains untouched because everyone
                is too busy managing the existing complexity.
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

      {/* 4 — Recurring work */}
      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">What changes</span>
            <h2 className="story-heading">
              The same organizational questions, redrawn for each business.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <div className="ruled-list metadata">
                {recurringQuestions.map((q) => (
                  <div key={q}>{q}</div>
                ))}
              </div>
              <p>
                The visible result may be an executive dashboard, a modernized
                technology stack, an automated workflow, a new application or a
                redesigned team.
              </p>
              <p className="emphasis">
                The real work is the operating system underneath the organization.
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
            <h2 className="story-heading">
              The titles changed. The question kept getting bigger.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                I trained in psychology and moved directly into marketing, drawn by how
                people think, decide and experience a brand.
              </p>
              <p>
                From there, I went deeper into the machinery behind that experience —
                from websites and data platforms to motion, automation and the broader
                marketing technology stack.
              </p>
              <p>
                I later completed an MBA at the University of Zurich, focused on digital
                transformation.
              </p>
              <p>
                By then, the question had outgrown marketing. It had become how the
                whole organization should work: its people, systems, technology,
                operating model and culture.
              </p>
              <div className="ruled-list metadata">
                {titlePath.map((title) => (
                  <div key={title}>{title}</div>
                ))}
              </div>
              <p>Different roles. One recurring mandate:</p>
              <p className="emphasis">
                Understand the whole system, find the simpler answer, and move people,
                business and technology together.
              </p>
            </div>
            <div className="mt-8">
              <TextLink href="/about">Read the story</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Disruption Officer */}
      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">A defining role</span>
            <h2 className="story-heading">Redesign the system.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                As Disruption Officer, my mandate was broader than adopting new
                technology.
              </p>
              <p>
                It was to rethink how the organization worked: restructure teams,
                modernize systems, remove outdated practices and lead the cultural shift
                toward a more capable, technology-literate business.
              </p>
              <p className="emphasis">
                That mandate still describes much of my work today.
              </p>
            </div>
            <div className="mt-8">
              <TextLink href="/archive/disruption-officer">Read the chapter</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Braveheart */}
      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Ownership</span>
            <h2 className="story-heading">
              Strategy changes when you carry the consequence.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                I acquired, transformed and now operate Braveheart, a workplace-training
                company in Nova Scotia.
              </p>
              <p>
                It became a live environment for rebuilding systems, automating work,
                designing software, improving the client experience and leading people
                through change.
              </p>
              <p>Ownership added two things to my work:</p>
              <div className="ruled-list metadata">
                {ownershipGains.map((gain) => (
                  <div key={gain}>{gain}</div>
                ))}
              </div>
              <p className="emphasis">
                Braveheart is not the centre of my identity. It is operating proof that
                the thinking has survived contact with a real business.
              </p>
            </div>
            <div className="mt-8">
              <TextLink href="/braveheart">Explore Braveheart</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Applied AI */}
      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Applied AI</span>
            <h2 className="story-heading">AI belongs inside the operating model.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>The useful question is not where an organization can add AI.</p>
              <p>
                It is where better information, clearer ownership, stronger memory or
                less repetitive work would materially improve how the organization
                operates.
              </p>
              <p>
                That may involve automation, decision support, knowledge systems or an
                application built for the work itself.
              </p>
              <p className="emphasis">
                AI is one part of the system — not a layer placed over confusion.
              </p>
            </div>
            <div className="mt-8">
              <TextLink href="/applied-ai">Explore Applied AI</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — Current work */}
      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Current work</span>
            <h2 className="story-heading">Close to consequential change.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                Through Castson, I work with senior leaders on organizational
                transformation, client experience, marketing systems, applied AI and
                operating-model change.
              </p>
              <p>
                The work ranges from strategic advisory to embedded transformation and
                operating responsibility.
              </p>
              <p>
                Current engagements span Canadian and Swiss organizations, particularly
                experience-led businesses navigating legacy systems, changing
                expectations and urgent technological change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — Notes */}
      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">From the work</span>
            <h2 className="story-heading">Notes on organizations in motion.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                Short observations on transformation, technology, operating systems,
                leadership and the human consequences of change.
              </p>
              <p className="emphasis">
                Not theory from a distance. Notes from inside the work.
              </p>
            </div>
            <div className="mt-8">
              <TextLink href="/notes">Read the notes</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — Contact */}
      <section className="section section-quiet story-section border-b-0">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Contact</span>
            <h2 className="story-heading">Tell me what is changing.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                For conversations about organizational transformation, technology,
                client experience or executive leadership, send a note.
              </p>
              <p className="emphasis">
                A few lines on the situation, what feels stuck and what you are weighing
                is enough.
              </p>
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
          <p className="home-signoff-line">Canadian–Swiss transformation executive.</p>
        </div>
      </section>
    </div>
  );
}
