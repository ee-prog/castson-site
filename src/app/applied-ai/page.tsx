import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EditorialImage, TextLink } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Applied AI and Systems",
  description:
    "Systems, workflows and applied intelligence designed around how the organization is actually meant to work. AI is useful only when the business is clear enough to use it.",
};

const heroThemes = ["Clarity", "Memory", "Decisions", "Handoffs", "Capability"];

const memoryItems = [
  "Decisions and their rationale.",
  "Operating standards.",
  "Policies and processes.",
  "Client and project history.",
  "Exceptions and escalation paths.",
];

const standardCarriers = [
  "Rules.",
  "Context.",
  "Approvals.",
  "Memory.",
  "Signals.",
  "Interfaces.",
  "Escalation points.",
  "Human oversight.",
];

const capabilityOutcomes = [
  "Remember more of what it knows.",
  "Prepare decisions with better context.",
  "Coordinate work with less chasing.",
  "Carry its standards more consistently.",
  "Recognize important signals earlier.",
  "Improve without depending on one person to hold the entire system together.",
];

function List({ items }: { items: string[] }) {
  return (
    <div className="ruled-list metadata">
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

function Section({
  number,
  name,
  title,
  children,
  quiet = false,
}: {
  number: string;
  name: string;
  title: string;
  children: ReactNode;
  quiet?: boolean;
}) {
  return (
    <section className={`section story-section ${quiet ? "section-quiet" : ""}`}>
      <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <span className="section-kicker">
            {number} · {name}
          </span>
          <h2 className="story-heading">{title}</h2>
        </div>
        <div className="lg:col-span-7">
          <div className="body-copy">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function AppliedAIPage() {
  return (
    <div className="site-shell chapter-page">
      <section className="chapter-hero">
        <div className="site-container">
          <Link href="/archive" className="chapter-breadcrumb">
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
            Archive
          </Link>
          <span className="page-kicker mt-8 block">Chapter 03 · Applied AI and Systems</span>
          <h1>AI is useful only when the business is clear enough to use it.</h1>
          <p className="chapter-hero-lede">
            Systems, workflows and applied intelligence designed around how the
            organization is actually meant to work.
          </p>
          <p className="mt-8 max-w-2xl metadata leading-relaxed">
            {heroThemes.join(" · ")}
          </p>
        </div>
      </section>

      <Section
        number="01"
        name="Operator's View"
        title="Most companies do not have a tool problem."
        quiet
      >
        <p>They have standards living in people&rsquo;s heads.</p>
        <p>Decisions depending on memory.</p>
        <p>Knowledge scattered across documents, inboxes and software.</p>
        <p>Teams chasing context the organization already possesses.</p>
        <p>Leaders becoming the system because the system does not quite hold.</p>
        <p>AI does not solve that by itself.</p>
        <p className="emphasis">The useful work begins before the tool.</p>
      </Section>

      <Section
        number="02"
        name="Clarity First"
        title="Do not automate what the business has not understood."
      >
        <p>The first questions are operating questions.</p>
        <p>What is supposed to happen?</p>
        <p>Who owns the decision?</p>
        <p>What does the team need to know?</p>
        <p>Where is judgment required?</p>
        <p>What should technology handle quietly?</p>
        <p>What should remain human?</p>
        <p>A business cannot automate its way out of confusion.</p>
        <p>The process has to be understood.</p>
        <p>The handoffs have to be clear.</p>
        <p>The standards have to be usable.</p>
        <p>The decisions need owners.</p>
        <p>This is the work many organizations want to skip.</p>
        <p className="emphasis">
          It is also the work that makes applied AI useful.
        </p>
      </Section>

      <Section
        number="03"
        name="Memory and Decisions"
        title="The organization should retain more of what it learns."
        quiet
      >
        <p>Most companies know more than they can consistently use.</p>
        <p>
          The knowledge is fragmented across policies, systems, conversations and the
          memories of capable people.
        </p>
        <p>A decision is made, but its reasoning disappears.</p>
        <p>A process changes, but the old instructions remain in circulation.</p>
        <p>A client or project history exists, but not where the next person needs it.</p>
        <p>Applied intelligence can help preserve and connect that context.</p>
        <List items={memoryItems} />
        <p>The purpose is not to record everything.</p>
        <p>It is to prepare the next action or decision with better context.</p>
        <p>The judgment remains human.</p>
        <p className="emphasis">
          The system makes it easier to see the situation clearly.
        </p>
      </Section>

      <section className="bh-image-section">
        <div className="site-container">
          <EditorialImage
            src="/images/editorial/light-study.webp"
            alt="A quiet study of light across a minimal interior"
            caption="Somewhere coherent for what the company knows to live"
            aspect="aspect-[4/3] sm:aspect-[16/7]"
            className="mobile-bleed"
            sizes="100vw"
          />
        </div>
      </section>

      <Section
        number="04"
        name="The Standard"
        title="The system should carry more of the standard."
      >
        <p>Distinctive organizations depend on judgment.</p>
        <p>
          But judgment is often forced to compensate for weak operating structure.
        </p>
        <p>A capable employee remembers the exception.</p>
        <p>A manager notices what has been missed.</p>
        <p>A founder holds the full context in their head.</p>
        <p>
          Applied AI becomes useful when the standard is clear enough for the system to
          help carry it.
        </p>
        <List items={standardCarriers} />
        <p>The point is not to replace judgment.</p>
        <p className="emphasis">
          It is to protect it from work the system should already understand.
        </p>
      </Section>

      <Section
        number="05"
        name="Connected Work"
        title="Context should travel with the work."
        quiet
      >
        <p>Marketing has one part of the picture.</p>
        <p>Operations has another.</p>
        <p>Finance holds the transaction.</p>
        <p>Scheduling holds the timing.</p>
        <p>Email contains the conversation.</p>
        <p>Documents contain the rules.</p>
        <p>Individual people carry the exceptions.</p>
        <p>
          The organization possesses the information, but its systems do not share a
          coherent understanding of the work.
        </p>
        <p>So people fill the gaps.</p>
        <p>The coordinator remembers.</p>
        <p>The manager chases.</p>
        <p>The founder decides again.</p>
        <p>The CEO becomes the operating system.</p>
        <p>Applied AI should reduce that dependency.</p>
        <p>Not by removing people from the work.</p>
        <p className="emphasis">By giving the work a better structure to live in.</p>
      </Section>

      <Section
        number="06"
        name="Invisible Technical Work"
        title="The technology should disappear into the operation."
      >
        <p>
          Behind the scenes, the work may involve custom software, connected systems,
          automation, AI-assisted workflows, company knowledge, dashboards, rules,
          approvals, APIs and human-in-the-loop interfaces.
        </p>
        <p>But the point is never the stack.</p>
        <p className="emphasis">
          The point is that the right information reaches the right person — or the right
          system — at the right moment.
        </p>
        <p>The team has better context.</p>
        <p>The business carries its standard with less noise.</p>
        <p>Decisions require less preparation.</p>
        <p>Work moves with less chasing and less force.</p>
      </Section>

      <section className="bh-image-section">
        <div className="site-container">
          <EditorialImage
            src="/images/editorial/scarpa-geometry.webp"
            alt="Minimal white architectural geometry with a circular opening"
            caption="The technology should disappear into the operation"
            aspect="aspect-[4/3] sm:aspect-[16/7]"
            className="mobile-bleed"
            objectPosition="54% center"
            sizes="100vw"
          />
        </div>
      </section>

      <Section
        number="07"
        name="Capability"
        title="AI should make the organization more capable."
        quiet
      >
        <p>Not more generic.</p>
        <p>Not more complicated.</p>
        <p>Not more dependent on another platform nobody fully understands.</p>
        <p>The objective is an organization that can:</p>
        <List items={capabilityOutcomes} />
        <p>That is the applied AI and systems work I care about.</p>
        <p>Not artificial intelligence as performance.</p>
        <p className="emphasis">Intelligence applied to real work.</p>
        <div className="mt-9">
          <TextLink href="/contact">Start a conversation</TextLink>
        </div>
      </Section>
    </div>
  );
}
