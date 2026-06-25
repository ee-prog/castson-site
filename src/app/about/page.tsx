import { EditorialImage, PageHeader, TextLink } from "@/components/editorial";

const quickFacts = [
  {
    label: "Focus",
    value: "Acquiring, building, and selectively advising service businesses where standards matter.",
  },
  {
    label: "Operating Company",
    value: "BraveHeart First Aid",
    note: "Acquired June 2025",
  },
  {
    label: "Role",
    value: "CEO / Owner",
  },
  {
    label: "Private Infrastructure",
    value: "Ripley",
    note: "Private infrastructure that turns standards, recurring work, and approval rules into usable operating infrastructure.",
  },
  {
    label: "Selective Advisory",
    value: "Senior strategic and creative sparring-partner work with leaders responsible for brand, service, growth, and transition.",
  },
  {
    label: "Location",
    value: "Nova Scotia, Canada",
    note: "Deep professional roots in Switzerland.",
  },
];

export default function About() {
  return (
    <div className="site-shell">
      <section className="section">
        <div className="site-container">
          <PageHeader
            kicker="05 / Profile"
            title="Eli Castson"
            lede="Owner, builder, and selective advisor."
          />
        </div>
      </section>

      <section className="section border-b-0">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>I am based in Nova Scotia and shaped by eighteen years in Switzerland.</p>
              <p>
                Before acquiring BraveHeart First Aid, I worked across creative direction, advertising, digital transformation, data, and technology.
              </p>
              <p>
                The titles varied — Creative Director, Tech &amp; Data; Disruption Officer — but the work was consistent: helping serious organizations see what was changing, decide what mattered, and build new ways to move.
              </p>
              <p className="border-l border-[var(--border-strong)] pl-5">
                That work moved through Swiss and international environments, including projects connected to UBS, La Prairie, and other premium or complex organizations.
              </p>
              <p>For years, I helped organizations change from the outside.</p>
              <p>Ownership made the standard sharper.</p>
              <div className="quiet-panel">
                <span className="section-kicker">Ownership Changed the Work</span>
                <p className="mobile-pull emphasis">There is no abstraction in operating a real company.</p>
                <div className="mt-6 grid grid-cols-1 gap-x-8 sm:grid-cols-2 metadata">
                  {[
                    "The operating layer either works or it does not",
                    "The customer trusts the path or they do not",
                    "The team is supported or they are not",
                    "The company becomes stronger or heavier",
                  ].map((item) => (
                    <div key={item} className="border-t border-[var(--border)] py-3">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <p>That directness now shapes the work.</p>
              <div className="ruled-list metadata">
                <div>I like finding the real constraint.</div>
                <div>I like removing what does not belong.</div>
                <div>I like building systems that make people more capable.</div>
              </div>
              <p>
                I like working with people who care about the standard of the work, not just the appearance of it.
              </p>
              <div className="ruled-list metadata pt-4">
                <div><strong className="text-[var(--foreground)]">BraveHeart</strong> is the operating proof.</div>
                <div><strong className="text-[var(--foreground)]">Ripley</strong> is the private infrastructure.</div>
                <div>Selected advisory work is where that pattern meets other companies and leaders.</div>
                <div><strong className="text-[var(--foreground)]">Castson.com</strong> is the record.</div>
              </div>
            </div>
          </div>

          <aside className="order-first lg:order-none lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <EditorialImage
                src="/images/editorial/eli-business-portrait.png"
                alt="Eli Castson in a black suit leaning against concrete architecture"
                caption="Eli Castson / Nova Scotia, Switzerland, operating work"
                aspect="aspect-[4/5]"
                className="mobile-bleed"
                objectPosition="52% center"
                sizes="(max-width: 1024px) 100vw, 36vw"
              />

              <div className="quiet-panel mt-10">
                <span className="section-kicker">Quick Facts</span>
                <div className="ruled-list">
                  {quickFacts.map((fact) => (
                    <div key={fact.label}>
                      <span className="metadata text-[var(--primary)]">{fact.label}</span>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--foreground)]">
                        {fact.value}
                      </p>
                      {fact.note ? (
                        <p className="mt-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                          {fact.note}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <TextLink href="/contact">Get in Touch</TextLink>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
