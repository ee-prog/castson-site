import { EditorialImage, TextLink } from "@/components/editorial";

const profileDetails = [
  {
    label: "Base",
    value: "Nova Scotia, Canada",
    note: "Shaped by eighteen years in Switzerland.",
  },
  {
    label: "Work",
    value: "Brand, service, systems, technology, and client experience.",
  },
  {
    label: "Advisory",
    value: "Selective work with leaders responsible for standards, growth, and transition.",
  },
];

const workingPreferences = [
  "Find the real constraint.",
  "Remove what does not belong.",
  "Build systems that make people more capable.",
];

export default function About() {
  return (
    <div className="site-shell about-page">
      <section className="about-hero">
        <div className="site-container about-hero-grid">
          <div className="about-hero-copy">
            <span className="page-kicker">05 / Profile</span>
            <h1>Eli Castson</h1>
            <p>Owner, builder, and selective advisor.</p>
          </div>

          <div className="about-hero-media">
            <EditorialImage
              src="/images/editorial/eli-business-portrait.png"
              alt="Eli Castson in a black suit leaning against concrete architecture"
              caption="Nova Scotia / Switzerland / operating work"
              aspect="aspect-[4/5]"
              objectPosition="52% center"
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
            <p>
              I am based in Nova Scotia and shaped by eighteen years in Switzerland.
            </p>
          </div>

          <div className="about-story-copy body-copy">
            <p>
              Before acquiring BraveHeart First Aid, I worked across creative direction,
              advertising, digital transformation, data, and technology.
            </p>
            <p>
              The titles varied: Creative Director, Tech &amp; Data; Disruption Officer.
              The work was consistent: helping serious organizations see what was changing,
              decide what mattered, and build new ways to move.
            </p>
            <p>
              That work moved through Swiss and international environments, including
              projects connected to UBS, La Prairie, and other premium or complex organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="about-practice">
        <div className="site-container about-practice-grid">
          <div className="about-practice-copy">
            <span className="section-kicker">Practice</span>
            <h2>I like working with people who care about the standard of the work.</h2>
          </div>

          <div className="about-preferences">
            {workingPreferences.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="about-index section-quiet border-b-0">
        <div className="site-container about-index-grid">
          <div>
            <span className="section-kicker">Profile Index</span>
            <h2>Current shape of the work.</h2>
          </div>

          <div className="about-detail-grid">
            {profileDetails.map((detail) => (
              <div key={detail.label} className="about-detail">
                <span className="metadata">{detail.label}</span>
                <p>{detail.value}</p>
                {detail.note ? <small>{detail.note}</small> : null}
              </div>
            ))}
          </div>

          <div className="about-continuity body-copy">
            <p><strong>BraveHeart</strong> is the operating proof.</p>
            <p><strong>Applied AI</strong> is the systems layer.</p>
            <p>Selective advisory work is where that pattern meets other companies and leaders.</p>
            <p><strong>Castson.com</strong> is the record.</p>
            <TextLink href="/contact" className="mt-8">Start a conversation</TextLink>
          </div>
        </div>
      </section>
    </div>
  );
}
