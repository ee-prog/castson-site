import type { ReactNode } from "react";

const heroThemes = ["Clarity", "Standards", "Handoffs", "Memory", "Capability"];

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
  "The welcome.",
  "The timing.",
  "The follow-up.",
  "The handoff.",
  "The moment someone needs help.",
  "The moment someone needs confidence.",
  "The quiet sense that someone thought ahead.",
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

const connectedWork = [
  "Marketing.",
  "Scheduling.",
  "Operations.",
  "Finance.",
  "Knowledge.",
  "Client experience.",
  "Team communication.",
  "Decision-making.",
];

const leverageQuestions = [
  "What should be easier.",
  "What should be more consistent.",
  "What should be remembered.",
  "What should be escalated.",
  "What should stay deeply human.",
];

const clientOutcomes = [
  "More clarity.",
  "Better timing.",
  "Cleaner communication.",
  "Fewer dropped handoffs.",
  "More consistent standards.",
  "More thoughtful follow-up.",
  "Less friction when something changes.",
];

const teamOutcomes = [
  "Less noise.",
  "Less guessing.",
  "Less repeated work.",
  "More room for the parts of service that actually need a person.",
];

const capabilityNegations = [
  "Not more generic.",
  "Not more complicated.",
  "Not more dependent on another platform nobody fully understands.",
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
            <span className="page-kicker">02 / Applied AI</span>
          </div>
          <h1>AI is useful only when the business is clear enough to use it.</h1>
          <div className="ai-hero-copy">
            <p>
              Systems, workflows, and applied intelligence in service of the standard
              the business is here to keep.
            </p>
          </div>
          <div className="ai-hero-index metadata" aria-label="Applied AI themes">
            {heroThemes.map((theme) => (
              <span key={theme}>{theme}</span>
            ))}
          </div>
        </div>
      </section>

      <AiSection number="01" kicker="Operator's View" title="Most companies do not have a tool problem." variant="opening">
        <div className="ai-negations metadata">
          <span>They have standards living in people&apos;s heads.</span>
          <span>Decisions depending on memory.</span>
          <span>Teams chasing context.</span>
          <span>Clients repeating information.</span>
          <span>Leaders becoming the system because the system does not quite hold.</span>
        </div>
        <p>AI does not solve that by itself.</p>
        <p>It makes the need for clarity harder to avoid.</p>
        <p className="mobile-pull emphasis">The useful work begins before the tool.</p>
      </AiSection>

      <AiSection number="02" kicker="Clarity First" title="Do not automate what the business has not understood.">
        <p className="emphasis">The first questions are simple.</p>
        <RuleList items={clarityQuestions} />
        <p>A business cannot automate its way out of confusion.</p>
        <p className="emphasis">The work begins by making the business easier to see.</p>
        <div className="ai-subsection">
          <span className="section-kicker">Organizational Debt</span>
          <h3>The debt has to be paid down first.</h3>
          <p>Before AI can help, the basic operating questions need answers.</p>
          <RuleList items={debtWork} />
          <p>This is the work most companies want to skip.</p>
          <p className="emphasis">It is also the work that makes applied AI useful.</p>
        </div>
      </AiSection>

      <AiSection
        number="03"
        kicker="Experience Before System"
        title="The client path becomes the operating map."
        variant="experience"
        quiet
      >
        <p>A good AI project does not start with the tool.</p>
        <p className="emphasis">
          It starts with the experience the business is trying to protect.
        </p>
        <RuleList items={experienceMoments} />
        <p>Technology should support those moments.</p>
        <p className="emphasis">Not flatten them.</p>
      </AiSection>

      <AiSection number="04" kicker="Standard" title="The system should carry more of the standard." variant="standard">
        <p>Distinctive businesses depend on judgment.</p>
        <p>
          But judgment often lives in old habits, private workarounds, scattered tools,
          and the memory of a few capable people.
        </p>
        <p>That creates strain.</p>
        <p className="emphasis">
          Applied AI becomes useful when the standard is clear enough for the system to
          help carry it.
        </p>
        <TermGrid items={standardCarriers} />
        <p>The point is not to replace judgment.</p>
        <p className="emphasis">The point is to protect it.</p>
      </AiSection>

      <AiSection
        number="05"
        kicker="Invisible Technical Work"
        title="The technical work should disappear into the experience."
        variant="technical"
        quiet
      >
        <p>
          Behind the scenes, the work may involve custom software, connected systems,
          automation, AI-assisted workflows, operational memory, dashboards, rules,
          approvals, APIs, and human-in-the-loop interfaces.
        </p>
        <p className="emphasis">But the point is never the stack.</p>
        <p>The point is that the right thing happens earlier, cleaner, and with less force.</p>
        <div className="ai-outcome-row metadata">
          <span>The client feels better timing.</span>
          <span>The team has better context.</span>
          <span>The business holds its standard with less noise.</span>
        </div>
        <div className="ai-subsection">
          <span className="section-kicker">Coherence</span>
          <h3>The work connects what normally drifts apart.</h3>
          <RuleList items={connectedWork} />
          <p>Most businesses do not suffer because they lack tools.</p>
          <p>
            They suffer because the tools do not share the same understanding of the
            business.
          </p>
          <p className="emphasis">So people fill the gaps.</p>
          <div className="ai-negations metadata">
            <span>The coordinator remembers.</span>
            <span>The manager chases.</span>
            <span>The founder decides again.</span>
            <span>The CEO becomes the operating system.</span>
          </div>
          <p>Applied AI should reduce that dependency.</p>
          <p>Not by removing people from the work.</p>
          <p className="emphasis">By giving the work a better structure to live in.</p>
        </div>
      </AiSection>

      <AiSection number="06" kicker="Leverage" title="Small teams can now build serious operating leverage." variant="care">
        <p className="emphasis">The boundary has changed.</p>
        <p>
          Small companies no longer have to choose only between generic software and
          expensive custom builds.
        </p>
        <p>
          Better APIs, automation platforms, AI-assisted development, and internal tools
          have changed what is possible.
        </p>
        <p>But the advantage does not come from the tools alone.</p>
        <p className="emphasis">It comes from knowing what the business is trying to become.</p>
        <RuleList items={leverageQuestions} />
        <p>The system follows the standard.</p>
        <p className="emphasis">Not the other way around.</p>
        <div className="ai-subsection">
          <span className="section-kicker">Care</span>
          <h3>Better systems should feel like better care.</h3>
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
        </div>
      </AiSection>

      <AiSection number="07" kicker="Capability" title="AI should make the business more capable." variant="closing">
        <div className="ai-negations metadata">
          {capabilityNegations.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <p>
          The goal is a cleaner business with stronger standards, better timing, clearer
          information, and less force required from the top.
        </p>
        <div className="ai-sequence metadata">
          <span>More room for judgment.</span>
          <span>More room for service.</span>
          <span>More room for care.</span>
        </div>
        <p>That is the applied AI work I care about.</p>
        <p>Not artificial intelligence as performance.</p>
        <p className="mobile-pull emphasis">Intelligence applied to the work.</p>
      </AiSection>
    </div>
  );
}
