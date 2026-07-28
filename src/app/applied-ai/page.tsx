import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EditorialImage, TextLink } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Applied AI and Systems",
  description:
    "Systems, workflows and applied intelligence designed around how the organization is actually meant to work, from global martech and clienteling systems to AI-enabled operating infrastructure. AI is useful only when the business is clear enough to use it.",
};

const heroThemes = ["Clarity", "Memory", "Decisions", "Handoffs", "Capability"];

const trackRecord = [
  "A retail operations audit across roughly 50 countries and thousands of boutiques.",
  "A clienteling application for a Swiss luxury skincare house: high-touch service translated into frontline workflows.",
  "Salesforce CRM and marketing systems built for frontline sales and service teams.",
  "MongoDB and Power BI reporting environments built for decisions, not dashboards.",
  "Enterprise martech, analytics and data platforms across a global media agency.",
];

const capabilityOutcomes = [
  "Remember more of what it knows.",
  "Prepare decisions with better context.",
  "Coordinate work with less chasing.",
  "Carry its standards more consistently.",
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
        <p>
          They have standards living in people&rsquo;s heads. Decisions depending on
          memory. Knowledge scattered across documents, inboxes and software.
        </p>
        <p>Leaders become the system because the system does not quite hold.</p>
        <p>AI does not solve that by itself.</p>
        <p className="emphasis">The useful work begins before the tool.</p>
      </Section>

      <Section
        number="02"
        name="Clarity First"
        title="Do not automate what the business has not understood."
      >
        <p>
          The first questions are operating questions. What is supposed to happen?
          Who owns the decision? Where is judgment required? What should technology
          handle quietly?
        </p>
        <p>A business cannot automate its way out of confusion.</p>
        <p>
          Once the work is understood, the system can begin to carry it: the
          decisions and their rationale, the operating standards, the client and
          project history, the exceptions.
        </p>
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
        number="03"
        name="The Record"
        title="This pattern is older than the current AI moment."
        quiet
      >
        <p>
          The work of connecting systems, data and frontline reality has run through
          my whole career.
        </p>
        <List items={trackRecord} />
        <p>
          Different industries, one discipline: connect what is fragmented, clean the
          data, and design around how people actually work.
        </p>
        <p className="emphasis">The systems changed. The discipline did not.</p>
      </Section>

      <Section
        number="04"
        name="The Current Build"
        title="Now the systems can reason."
      >
        <p>
          Today that discipline produces AI-enabled operating systems. The deepest
          example is the one I built for myself.
        </p>
        <p>
          Ripley is an AI system I built for my own work. It is my assistant across
          both halves of the job: the executive work and the building of systems
          and software. It runs against the real operation: accounting,
          payroll, email, scheduling, deployments. Not a demo.
        </p>
        <p>
          Architecturally, it is a scaffold, not a harness. The durable structure is
          a version-controlled operating law, a strict filesystem doctrine, a
          registry of reusable skills, and structured memory. The model and runtime
          underneath are interchangeable; the system is built to outlive them.
        </p>
        <p className="emphasis">
          AI expands the execution. The architecture and the judgment remain mine.
        </p>
      </Section>

      <Section
        number="05"
        name="Memory"
        title="Nothing important dies with a conversation."
        quiet
      >
        <p>
          Memory was the first hard problem: a model starts every session knowing
          nothing about yesterday.
        </p>
        <p>
          Ripley solves this structurally: session state that bridges
          conversations, an append-only log that keeps the record, corrections that
          become standing rules the moment they are made.
        </p>
        <p>
          All of it lives in plain, versioned files a human can read, not an opaque
          store the model manages for itself. Corrections are edits. History is
          kept.
        </p>
        <p>
          The memory is still evolving: from holding what happened toward retrieving
          exactly what the next decision needs.
        </p>
        <p className="emphasis">
          Memory you cannot read is memory you cannot trust.
        </p>
      </Section>

      <Section
        number="06"
        name="Governance"
        title="It knows what it must not touch."
      >
        <p>An assistant with hands needs rules.</p>
        <p>
          Every action is classified against a tiered risk policy: what Ripley may
          execute directly, what it must draft for approval, what it may never
          touch. Production, money, payroll and credentials sit behind explicit
          human approval.
        </p>
        <p>
          The direction is set: the capability layer is standardizing on MCP, and a
          purpose-built runtime will come when autonomous operation earns it.
        </p>
        <p>
          Ripley is not finished and not for sale. It is proprietary
          infrastructure: knowledge, standards and judgment living in the system
          the business runs on.
        </p>
        <p className="emphasis">Trust is an architecture decision.</p>
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
        <p>Not more generic. Not more complicated.</p>
        <p>
          What Ripley proves in miniature is what an organization needs at scale.
        </p>
        <p>The objective is an organization that can:</p>
        <List items={capabilityOutcomes} />
        <p>Not artificial intelligence as performance.</p>
        <p className="emphasis">Intelligence applied to real work.</p>
        <div className="mt-9">
          <TextLink href="/contact">Start a conversation</TextLink>
        </div>
      </Section>
    </div>
  );
}
