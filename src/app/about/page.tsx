import type { Metadata } from "next";
import { EditorialImage, TextLink } from "@/components/editorial";

export const metadata: Metadata = {
  title: "About",
  description:
    "A transformation executive who understands the boardroom, the operating system, and the client-facing reality. A dual Canadian and Swiss citizen, based in Nova Scotia and shaped by eighteen years in Switzerland. Former Disruption Officer.",
};

const titlePath = [
  "Creative Director, Tech & Data.",
  "Disruption Officer.",
  "Advisor.",
  "Owner.",
];

const ownershipReality = [
  "Payroll runs.",
  "Clients book.",
  "Teams coordinate.",
  "Systems break.",
  "The business opens again tomorrow.",
];

const vantagePoints = ["The boardroom.", "The operating system.", "The client-facing reality."];

export default function About() {
  return (
    <div className="site-shell about-page">
      <section className="about-hero">
        <div className="site-container about-hero-grid">
          <div className="about-hero-copy">
            <span className="page-kicker">About</span>
            <h1>Eli Castson</h1>
            <p>A transformation executive.</p>
            <p>
              I redesign how organizations work — across strategy, technology, and the
              people who carry it.
            </p>
          </div>

          <div className="about-hero-media">
            <EditorialImage
              src="/images/editorial/eli-portrait-bio.png"
              alt="Eli Castson in a black suit leaning against concrete architecture"
              caption="Canadian / Swiss / operator / advisor"
              aspect="aspect-[4/5]"
              objectPosition="center"
              priority
              sizes="(max-width: 768px) 86vw, 32vw"
            />
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="site-container about-story-grid">
          <div className="about-story-marker">
            <span className="section-kicker">The range</span>
          </div>
          <div className="about-story-lede">
            <p>The titles changed. The work stayed the same.</p>
          </div>
          <div className="about-story-copy body-copy">
            <p>I began with people: how they think, decide and experience an organization.</p>
            <p>
              From there, the scope widened — to brand, client experience, technology,
              teams and the operating model behind them.
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
        </div>
      </section>

      <section className="about-story">
        <div className="site-container about-story-grid">
          <div className="about-story-marker">
            <span className="section-kicker">Canadian–Swiss</span>
          </div>
          <div className="about-story-lede">
            <p>Two places, one working perspective.</p>
          </div>
          <div className="about-story-copy body-copy">
            <p>I hold both nationalities — Canadian and Swiss.</p>
            <p>
              I am based in Nova Scotia and shaped by eighteen years in Switzerland,
              which is an active professional market for me, not a line on a map.
            </p>
            <p>
              That work moved through Swiss and international environments, including
              projects connected to UBS, La Prairie, and other premium or complex
              organizations.
            </p>
            <p>It taught me precision.</p>
            <p className="emphasis">
              Not as decoration — as respect for the people who make the decisions and
              live with them.
            </p>
          </div>
        </div>
      </section>

      <section className="about-quote">
        <div className="site-container">
          <blockquote>
            The range is not several careers. It is one point of view, built from
            several directions.
          </blockquote>
        </div>
      </section>

      <section className="about-story">
        <div className="site-container about-story-grid">
          <div className="about-story-marker">
            <span className="section-kicker">Disruption Officer</span>
          </div>
          <div className="about-story-lede">
            <p>The mandate had a name.</p>
          </div>
          <div className="about-story-copy body-copy">
            <p className="emphasis">
              For a time, that was my title, and it was meant literally.
            </p>
            <p>
              Redesign the operating model. Modernize the technology. Restructure the
              teams and decision rights. Lead the cultural shift required to make the
              new model work.
            </p>
            <p>It is still the clearest description of what I do.</p>
            <TextLink href="/archive/disruption-officer" className="mt-6">
              Read the chapter
            </TextLink>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="site-container about-story-grid">
          <div className="about-story-marker">
            <span className="section-kicker">Ownership</span>
          </div>
          <div className="about-story-lede">
            <p>Then I bought a company.</p>
          </div>
          <div className="about-story-copy body-copy">
            <p>
              Braveheart is a workplace training company I acquired, rebuilt, and now
              operate.
            </p>
            <div className="ruled-list metadata">
              {ownershipReality.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
            <p className="emphasis">
              It teaches you quickly which recommendations are useful, and which only
              sounded good in the room.
            </p>
            <TextLink href="/braveheart" className="mt-6">
              Read the chapter
            </TextLink>
          </div>
        </div>
      </section>

      <section className="about-quote">
        <div className="site-container">
          <blockquote>Ownership keeps language honest. It makes vague ideas expensive.</blockquote>
        </div>
      </section>

      <section className="about-story">
        <div className="site-container about-story-grid">
          <div className="about-story-marker">
            <span className="section-kicker">Now</span>
          </div>
          <div className="about-story-lede">
            <p>Where the work lives now.</p>
          </div>
          <div className="about-story-copy body-copy">
            <p>
              Today, I work at the level where strategy, growth, operating model and
              technology meet.
            </p>
            <p>
              The questions may concern how an organization should scale, where it
              should invest, what it should automate, how its teams should be
              structured, or whether its current model can support the next stage of
              growth.
            </p>
            <p>
              Sometimes I work beside an executive team. Sometimes I am carrying the
              decision as an owner.
            </p>
            <p>
              The work may surface through transformation, AI, marketing, client
              experience or expansion. The underlying question is broader:
            </p>
            <p className="emphasis">
              What should this organization become — and what must change to make that
              real?
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="site-container about-story-grid">
          <div className="about-story-marker">
            <span className="section-kicker">The underlying point</span>
          </div>
          <div className="about-story-lede">
            <p>I make organizations easier to change, and easier to trust.</p>
          </div>
          <div className="about-story-copy body-copy">
            <div className="ruled-list metadata">
              {vantagePoints.map((point) => (
                <div key={point}>{point}</div>
              ))}
            </div>
            <p>
              Most people who do this work know one of those three worlds. The value is
              in holding all of them at once — and knowing how a decision in one shows
              up in the others.
            </p>
            <p className="emphasis">That is the thread through everything above.</p>
            <TextLink href="/contact" className="mt-8">
              Start a conversation
            </TextLink>
          </div>
        </div>
      </section>
    </div>
  );
}
