const fieldNotes = [
  {
    title: "A business has to become understandable before it can become automated.",
    body: [
      "The temptation is to automate early.",
      "Take the existing process and make it faster.",
      "But if the process is confused, automation only preserves confusion at greater speed.",
      "The better move is slower.",
      "Understand first.",
      "Then automate what remains.",
    ],
  },
  {
    title: "Most software is a temporary teacher.",
    body: [
      "Acuity taught us something about booking.",
      "Monday taught us something about operations.",
      "Squarespace taught us something about web presence.",
      "Each tool helped.",
      "Each eventually revealed its limits.",
      "That does not mean the tools failed.",
      "It means the business learned.",
    ],
  },
  {
    title: "Owner dependency is an information problem.",
    body: [
      "Many businesses appear to have systems until the owner steps away.",
      "Then everything starts asking for permission.",
      "That is not only a staffing issue.",
      "It is an information architecture issue.",
      "A decision design issue.",
      "A trust issue.",
      "Reducing owner dependency does not mean caring less.",
      "It means building a company that can hold more of its own intelligence.",
    ],
  },
  {
    title: "AI is not the first layer.",
    body: [
      "AI is powerful.",
      "But it works best when the business underneath it is clear.",
      "If the data is messy, the process is vague, and the decisions are undefined, AI becomes another confusing tool in the pile.",
      "The first layer is not AI.",
      "The first layer is truth.",
    ],
  },
  {
    title: "Meaning changes operations.",
    body: [
      "When the function of a company is good, the boring parts become less boring.",
      "Training people for moments that matter gives the work moral weight.",
      "The booking flow is not just a booking flow.",
      "The reminder is not just a reminder.",
      "The instructor workflow is not just an internal process.",
      "Each one supports the larger purpose.",
      "That changes how I think about the work.",
    ],
  },
];

export default function Writing() {
  return (
    <div className="site-shell home-story writing-page">
      <section className="writing-hero">
        <div className="site-container writing-hero-grid">
          <span className="page-kicker">03 / Writing</span>
          <h1>Writing</h1>
          <p className="writing-hero-lede">
            Field notes, essays, and selected published work on service, systems, technology, and the human experience.
          </p>
        </div>
      </section>

      <section className="writing-notes section section-quiet">
        <div className="site-container">
          <div className="writing-notes-header">
            <span className="section-kicker">Field Notes</span>
            <h2>Field Notes</h2>
            <p className="body-copy">
              Short observations from inside the work.
            </p>
          </div>

          <div className="writing-note-stack">
            {fieldNotes.map((note, idx) => (
              <article key={note.title} className="writing-note">
                <div className="writing-note-index metadata">{String(idx + 1).padStart(2, "0")}</div>
                <div className="writing-note-body">
                  <h3>{note.title}</h3>
                  <div className="body-copy">
                    {note.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className={
                          paragraph.startsWith("The better") ||
                          paragraph.startsWith("Understand") ||
                          paragraph.startsWith("Then") ||
                          paragraph.startsWith("It means") ||
                          paragraph.startsWith("The first layer") ||
                          paragraph.startsWith("Each one") ||
                          paragraph.startsWith("That changes")
                            ? "emphasis"
                            : ""
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="writing-coming section">
        <div className="site-container writing-coming-grid">
          <div>
            <span className="section-kicker">Essays</span>
            <h2>Essays</h2>
          </div>
          <div className="body-copy">
            <p className="emphasis">Coming soon.</p>
            <p>
              Longer pieces on how distinctive businesses become more capable without becoming generic.
            </p>
            <div className="writing-term-list metadata">
              {["Service.", "Systems.", "Taste.", "Technology.", "Care.", "The machinery behind lasting experiences."].map((term) => (
                <div key={term}>{term}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="writing-coming section section-quiet border-b-0">
        <div className="site-container writing-coming-grid">
          <div>
            <span className="section-kicker">Published Work</span>
            <h2>Published Work</h2>
          </div>
          <div className="body-copy">
            <p className="emphasis">Coming soon.</p>
            <p>Selected articles and essays published elsewhere will live here as well.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
