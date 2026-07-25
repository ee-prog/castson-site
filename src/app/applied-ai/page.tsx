import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TextLink } from "@/components/editorial";
import { ArtifactFrame } from "@/components/artifact";

export const metadata: Metadata = {
  title: "Applied AI and Systems",
  description:
    "AI as one component of organizational redesign — automation, executive reporting, institutional memory, decision support, custom applications, and integration across systems that never spoke.",
};

const heroThemes = ["Automation", "Reporting", "Memory", "Decision support", "Applications"];

const clarityQuestions = [
  "What is this organization trying to become?",
  "Where do decisions actually get made?",
  "Where does the work get stuck?",
  "What does the team need to know, and when?",
  "What should the system handle quietly?",
  "What must stay human?",
];

const builds = [
  "Automated reporting and executive dashboards.",
  "Automation of repetitive administrative work.",
  "Institutional memory the organization can query.",
  "Operational decision support.",
  "Custom applications where the software falls short.",
  "Integration across systems that never spoke to each other.",
];

const connectedWork = [
  "Marketing.",
  "Operations.",
  "Finance.",
  "Reporting.",
  "Knowledge.",
  "Team communication.",
  "Decision-making.",
];

const ownerDependency = [
  "The coordinator remembers.",
  "The manager chases.",
  "The founder decides again.",
  "The CEO becomes the operating system.",
];

const capabilityNegations = [
  "Not more generic.",
  "Not more complicated.",
  "Not more dependent on a platform nobody fully understands.",
];

type AiSectionProps = {
  number: string;
  kicker: string;
  title: string;
  children: ReactNode;
  quiet?: boolean;
  variant?: string;
};

function AiSection({
  number,
  kicker,
  title,
  children,
  quiet = false,
  variant = "default",
}: AiSectionProps) {
  return (
    <section className={`ai-section ai-section--${variant} story-section ${quiet ? "section-quiet" : ""}`}>
      <div className="site-container ai-section-grid">
        <div className="ai-section-marker">
          <span className="ai-section-number">{number}</span>
          <span className="section-kicker">{kicker}</span>
        </div>
        <div className="ai-section-title">
          <h2 className="story-heading">{title}</h2>
        </div>
        <div className="ai-section-copy body-copy">{children}</div>
      </div>
    </section>
  );
}

function RuleList({ items }: { items: string[] }) {
  return (
    <div className="ai-rule-list metadata">
      {items.map((item, idx) => (
        <div key={item}>
          <span>{String(idx + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function TermGrid({ items }: { items: string[] }) {
  return (
    <div className="ai-term-grid metadata">
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default function AppliedAI() {
  return (
    <div className="site-shell home-story ai-page">
      <section className="ai-hero ai-hero--statement">
        <div className="site-container ai-hero-grid">
          <div className="ai-hero-label">
            <Link href="/archive" className="chapter-breadcrumb">
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
              Archive
            </Link>
            <span className="page-kicker mt-6 block">Chapter 03</span>
          </div>
          <h1>AI is useful only when the business is clear enough to use it.</h1>
          <div className="ai-hero-copy">
            <p>
              One component of organizational redesign — not the strategy, and not a
              trend. Automation, reporting, memory, and custom software, applied to
              real work.
            </p>
          </div>
          <div className="ai-hero-index metadata" aria-label="Applied AI themes">
            {heroThemes.map((theme) => (
              <span key={theme}>{theme}</span>
            ))}
          </div>
        </div>
      </section>

      <AiSection number="01" kicker="Operator's View" title="AI is a component, not the strategy." variant="opening">
        <div className="ai-negations metadata">
          <span>Standards live in people&apos;s heads.</span>
          <span>Decisions depend on memory.</span>
          <span>Teams chase context.</span>
          <span>Reporting arrives too late to matter.</span>
          <span>Leaders become the system because the system does not quite hold.</span>
        </div>
        <p>AI does not solve that by itself.</p>
        <p>It makes the missing clarity harder to avoid.</p>
        <p className="mobile-pull emphasis">The useful work begins before the tool.</p>
      </AiSection>

      <AiSection number="02" kicker="Clarity First" title="Do not automate what the organization has not understood.">
        <p className="emphasis">The first questions are simple.</p>
        <RuleList items={clarityQuestions} />
        <p>A business cannot automate its way out of confusion.</p>
        <p className="emphasis">The work begins by making the organization easier to see.</p>
      </AiSection>

      <AiSection number="03" kicker="Applied, Made Specific" title="What the work actually builds." variant="standard" quiet>
        <p>Once the organization is clear, applied AI becomes concrete.</p>
        <RuleList items={builds} />
        <p>None of this is intelligence for its own sake.</p>
        <p className="emphasis">Each piece removes force from the work.</p>
      </AiSection>

      <section className="section">
        <div className="site-container">
          <ArtifactFrame
            variant="interface"
            index="01"
            label="Institutional memory"
            caption="What it changed: the organization could query its own decisions instead of re-deciding them."
            aspect="aspect-[16/9]"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>
      </section>

      <AiSection
        number="04"
        kicker="Coherence"
        title="The work connects what normally drifts apart."
        variant="technical"
      >
        <p>
          Most organizations do not suffer because they lack tools. They suffer
          because the tools do not share the same understanding of the business.
        </p>
        <TermGrid items={connectedWork} />
        <p>So people fill the gaps by hand.</p>
        <div className="ai-negations metadata">
          {ownerDependency.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <p>Applied AI should reduce that dependency — not by removing people from the work,</p>
        <p className="emphasis">but by giving the work a better structure to live in.</p>
      </AiSection>

      <AiSection number="05" kicker="Capability" title="AI should make the organization more capable." variant="closing">
        <div className="ai-negations metadata">
          {capabilityNegations.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <p>
          The goal is a cleaner organization with stronger standards, better timing,
          clearer information, and less force required from the top.
        </p>
        <div className="ai-sequence metadata">
          <span>More room for judgment.</span>
          <span>More room for the decisions that matter.</span>
          <span>More room for the work that actually needs a person.</span>
        </div>
        <p>That is the applied AI work I care about.</p>
        <p>Not artificial intelligence as performance.</p>
        <p className="mobile-pull emphasis">Intelligence applied to the work.</p>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          <TextLink href="/archive/current-work">Next: Current Work</TextLink>
          <TextLink href="/contact">Start a conversation</TextLink>
        </div>
      </AiSection>
    </div>
  );
}
