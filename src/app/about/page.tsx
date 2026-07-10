import { EditorialImage, TextLink } from "@/components/editorial";

const titlePath = [
  "Creative Director, Tech & Data.",
  "Disruption Officer.",
  "Advisor.",
  "Builder.",
  "Owner.",
];

const ownershipReality = [
  "Clients book.",
  "Teams coordinate.",
  "Instructors teach.",
  "Payroll runs.",
  "Systems break.",
  "People ask questions.",
  "The business opens again tomorrow.",
];

const workQuestions = [
  "Something has become too complex.",
  "A standard is harder to hold.",
  "The client experience has drifted.",
  "A team is carrying too much in memory.",
  "Technology has been added faster than the business has been clarified.",
  "The leader can feel the issue, but the shape of it is not yet clear.",
];

const usefulMoves = [
  "I help find the real constraint.",
  "Remove what does not belong.",
  "Make the standard visible.",
  "Build systems that help capable people do better work with less unnecessary force.",
];

const currentShape = [
  {
    label: "BraveHeart",
    value: "The company I carry end to end.",
  },
  {
    label: "Applied AI",
    value:
      "The systems work: making standards, handoffs, memory, and judgment easier for the business to hold.",
  },
  {
    label: "Private work",
    value:
      "Where I sit beside owners and senior leaders facing questions that touch more than one part of the business.",
  },
];

const businessAreas = ["Brand.", "Service.", "Operations.", "Technology.", "Client experience."];

const quietWork = [
  "The standard.",
  "The handoff.",
  "The room.",
  "The system.",
  "The decision.",
  "The person who has to carry it.",
];

const simpleStandard = ["Clearer.", "Warmer.", "More capable.", "Easier to hold."];

export default function About() {
  return (
    <div className="site-shell about-page">
      <section className="about-hero">
        <div className="site-container about-hero-grid">
          <div className="about-hero-copy">
            <span className="page-kicker">04 / About</span>
            <h1>Eli Castson</h1>
            <p>Owner, operator, builder, and private advisor.</p>
            <p>
              I work with people who care about the standard of the work — and who have
              to make that standard hold in real life.
            </p>
          </div>

          <div className="about-hero-media">
            <EditorialImage
              src="/images/editorial/eli-business-portrait.png"
              alt="Eli Castson in a black suit leaning against concrete architecture"
              caption="Nova Scotia / Switzerland / owned businesses / private work"
              aspect="aspect-[4/5]"
              objectPosition="52% center"
              priority
              sizes="(max-width: 768px) 86vw, 32vw"
            />
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="site-container about-story-grid">
          <div className="about-story-marker">
            <span className="section-kicker">Background</span>
          </div>

          <div className="about-story-lede">
            <p>I have always worked close to change.</p>
          </div>

          <div className="about-story-copy body-copy">
            <p>
              I am based in Nova Scotia and shaped by eighteen years in Switzerland.
            </p>
            <p>
              Before acquiring BraveHeart First Aid, I worked across creative direction,
              advertising, digital transformation, data, and technology.
            </p>
            <p>The titles changed.</p>
            <div className="ruled-list metadata">
              {titlePath.map((title) => (
                <div key={title}>{title}</div>
              ))}
            </div>
            <p>The work underneath stayed consistent:</p>
            <p className="emphasis">
              Help serious people see what is changing, decide what matters, and build
              the conditions for better work to happen.
            </p>
            <p>
              That work moved through Swiss and international environments, including
              projects connected to UBS, La Prairie, and other premium or complex
              organizations.
            </p>
            <p>It taught me to care about precision.</p>
            <p>Not as decoration.</p>
            <p>
              As respect for the people who have to make decisions, deliver the
              experience, and live with the consequences.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="site-container about-story-grid">
          <div className="about-story-marker">
            <span className="section-kicker">Owned Work</span>
          </div>

          <div className="about-story-lede">
            <p>BraveHeart changed the weight of the work.</p>
          </div>

          <div className="about-story-copy body-copy">
            <p>
              BraveHeart is a workplace training company I acquired, transformed, and
              now operate.
            </p>
            <p className="emphasis">That distinction matters.</p>
            <p>It is one thing to advise a business.</p>
            <p>It is another to carry one.</p>
            <div className="ruled-list metadata">
              {ownershipReality.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
            <p>Ownership changes the conversation.</p>
            <p>It keeps language honest.</p>
            <p>It makes vague ideas expensive.</p>
            <p>
              It teaches you very quickly which recommendations are useful and which
              ones only sounded good in the room.
            </p>
          </div>
        </div>
      </section>

      <section className="about-practice">
        <div className="site-container about-practice-grid">
          <div className="about-practice-copy">
            <span className="section-kicker">How I Work</span>
            <h2>I like working with people who care.</h2>
          </div>

          <div className="about-detail-grid body-copy">
            <p className="emphasis">The work usually begins with a real question.</p>
            <div className="ruled-list metadata">
              {workQuestions.map((question) => (
                <div key={question}>{question}</div>
              ))}
            </div>
          </div>

          <div className="about-continuity body-copy">
            <p className="emphasis">That is where I am useful.</p>
            <div className="ruled-list metadata">
              {usefulMoves.map((move) => (
                <div key={move}>{move}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-index">
        <div className="site-container about-index-grid">
          <div>
            <span className="section-kicker">Current Shape</span>
            <h2>The work now lives in three places.</h2>
          </div>

          <div className="about-detail-grid">
            {currentShape.map((detail) => (
              <div key={detail.label} className="about-detail">
                <span className="metadata">{detail.label}</span>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>

          <div className="about-continuity body-copy">
            <div className="ruled-list metadata">
              {businessAreas.map((area) => (
                <div key={area}>{area}</div>
              ))}
            </div>
            <p>I am not interested in business as theatre.</p>
            <p>I am interested in the quieter work underneath.</p>
            <div className="ruled-list metadata">
              {quietWork.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-practice border-b-0">
        <div className="site-container about-practice-grid">
          <div className="about-practice-copy">
            <span className="section-kicker">A Simple Standard</span>
            <h2>Make the business easier to trust.</h2>
          </div>

          <div className="about-preferences">
            {simpleStandard.map((standard) => (
              <p key={standard}>{standard}</p>
            ))}
          </div>

          <div className="about-continuity body-copy">
            <p>That is the thread through the work.</p>
            <p>
              A business becomes stronger when the promise, the people, the process,
              and the systems underneath are brought closer together.
            </p>
            <p>Not louder.</p>
            <p>Not more complicated.</p>
            <p>Not more generic.</p>
            <p className="emphasis">That is the work I keep returning to.</p>
            <TextLink href="/contact" className="mt-8">
              Start a conversation
            </TextLink>
          </div>
        </div>
      </section>
    </div>
  );
}
