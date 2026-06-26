import type { ReactNode } from "react";

const clarityQuestions = [
  "What is the client supposed to feel?",
  "Where does trust get built?",
  "Where does it get lost?",
  "What does the team need to know?",
  "What should technology handle quietly?",
  "What should remain human?",
];

const debtWork = [
  "The client experience has to be understood.",
  "The process has to be refined.",
  "The handoffs have to be clear.",
  "The standards have to be usable.",
  "The decisions need owners.",
];

const experienceMoments = [
  "The welcome",
  "The timing",
  "The follow-up",
  "The handoff",
  "The moment someone needs help",
  "The moment someone needs confidence",
  "The feeling that someone thought ahead",
];

const standardCarriers = [
  "Rules",
  "Context",
  "Approvals",
  "Memory",
  "Signals",
  "Interfaces",
  "Escalation points",
  "Human oversight",
];

const connectedWork = [
  "Marketing",
  "Scheduling",
  "Operations",
  "Finance",
  "Knowledge",
  "Client experience",
  "Team communication",
  "Decision-making",
];

const clientOutcomes = [
  "Better timing",
  "Cleaner communication",
  "Fewer dropped handoffs",
  "More consistent standards",
  "More thoughtful follow-up",
  "Less friction when something changes",
];

const teamOutcomes = [
  "Less noise",
  "Less guessing",
  "Less repeated work",
  "More room for the human parts of the service",
];

const technicalWork = [
  "Custom software",
  "Connected systems",
  "Automation",
  "AI-assisted workflows",
  "Operational memory",
  "Dashboards",
  "Rules",
  "Approvals",
  "APIs",
  "Human-in-the-loop interfaces",
];

type AiSectionProps = {
  number: string;
  kicker: string;
  title: string;
  children: ReactNode;
  quiet?: boolean;
};

function AiSection({ number, kicker, title, children, quiet = false }: AiSectionProps) {
  return (
    <section className={`ai-section story-section ${quiet ? "section-quiet" : ""}`}>
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
      <section className="ai-hero">
        <div className="site-container ai-hero-grid">
          <div className="ai-hero-label">
            <span className="page-kicker">02 / Applied AI</span>
          </div>
          <h1>Applied AI</h1>
          <div className="ai-hero-copy">
            <p>Systems that make the business more human, not less.</p>
          </div>
          <div className="ai-hero-index metadata" aria-label="Applied AI themes">
            <span>Clarity</span>
            <span>Standard</span>
            <span>Care</span>
            <span>Capability</span>
          </div>
        </div>
      </section>

      <AiSection number="01" kicker="Clarity First" title="Applied AI begins with clarity.">
        <div className="ai-negations metadata">
          <span>Not prompts.</span>
          <span>Not theatre.</span>
          <span>Not automation layered over confusion.</span>
        </div>
        <p className="emphasis">The work begins by making the business legible.</p>
        <RuleList items={clarityQuestions} />
        <p className="mobile-pull emphasis">Only then does AI become useful.</p>
      </AiSection>

      <AiSection number="02" kicker="Organizational Debt" title="Do not automate confusion." quiet>
        <p className="emphasis">AI does not fix a messy business. It makes the mess move faster.</p>
        <p>Before automation can help, the organizational debt has to be paid down.</p>
        <RuleList items={debtWork} />
        <p>This is the work most companies want to skip.</p>
        <p className="emphasis">It is also the work that makes AI land.</p>
      </AiSection>

      <AiSection number="03" kicker="Experience Before System" title="The client experience comes first.">
        <div className="ai-sequence metadata">
          <span>Then the process.</span>
          <span>Then the system.</span>
          <span>Then the automation.</span>
        </div>
        <p className="emphasis">
          A good AI project does not start with the tool. It starts with the experience the business is trying to create.
        </p>
        <RuleList items={experienceMoments} />
        <p>Technology should support those moments.</p>
        <p className="emphasis">Not flatten them.</p>
      </AiSection>

      <AiSection number="04" kicker="Standard" title="The system should carry the standard." quiet>
        <p>A distinctive business depends on judgment.</p>
        <p>
          But too often, that judgment lives in people&apos;s heads, old habits, scattered tools, or private workarounds.
        </p>
        <p className="emphasis">
          Applied AI becomes useful when the standard is clear enough to be carried by the system.
        </p>
        <TermGrid items={standardCarriers} />
        <p>The point is not to replace judgment.</p>
        <p className="emphasis">The point is to protect it.</p>
      </AiSection>

      <AiSection number="05" kicker="Invisible Technical Work" title="The technical work should disappear into the experience.">
        <p>
          Behind the scenes, the work may involve custom software, connected systems, automation, AI-assisted workflows, operational memory, dashboards, rules, approvals, APIs, and human-in-the-loop interfaces.
        </p>
        <TermGrid items={technicalWork} />
        <p className="emphasis">But the point is never the stack.</p>
        <p>The point is that the right thing happens earlier, cleaner, and with more care.</p>
        <div className="ai-outcome-row metadata">
          <span>The client feels better timing.</span>
          <span>The team has better context.</span>
          <span>The business keeps its standard with less noise.</span>
        </div>
      </AiSection>

      <AiSection number="06" kicker="Coherence" title="The work connects what normally drifts apart." quiet>
        <RuleList items={connectedWork} />
        <p>Most businesses do not suffer from a lack of tools.</p>
        <p>They suffer because the tools do not share the same understanding of the business.</p>
        <p className="mobile-pull emphasis">Applied AI should help the business become more coherent.</p>
      </AiSection>

      <AiSection number="07" kicker="Leverage" title="Small teams can now build serious leverage.">
        <p className="emphasis">The boundary has changed.</p>
        <p>
          Small companies used to face a hard choice: accept generic software and reshape the business around the tool, or spend heavily to build custom systems.
        </p>
        <p>That is no longer the whole story.</p>
        <p>
          Modern APIs, automation platforms, AI-assisted development, and better internal tools make more tailored systems possible.
        </p>
        <p>But the advantage does not come from the tools alone.</p>
        <p className="emphasis">It comes from knowing what the business is trying to become.</p>
      </AiSection>

      <AiSection number="08" kicker="Care" title="Better systems should feel like better care." quiet>
        <p>If the work is done well, the client may never think about the technology.</p>
        <p className="emphasis">They simply experience more clarity.</p>
        <div className="ai-two-lists">
          <div>
            <span className="section-kicker">The Client Feels</span>
            <RuleList items={clientOutcomes} />
          </div>
          <div>
            <span className="section-kicker">The Team Feels</span>
            <RuleList items={teamOutcomes} />
          </div>
        </div>
      </AiSection>

      <AiSection number="09" kicker="Capability" title="AI should make the business more capable.">
        <div className="ai-negations metadata">
          <span>Not more generic.</span>
          <span>Not more complicated.</span>
          <span>Not more dependent on another platform nobody fully understands.</span>
        </div>
        <p>
          The goal is a cleaner business with stronger standards, better timing, clearer information, and more room for care.
        </p>
        <p className="mobile-pull emphasis">
          That is the promise of applied AI. Not artificial intelligence as performance. Intelligence applied to the work.
        </p>
      </AiSection>
    </div>
  );
}
