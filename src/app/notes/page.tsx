import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Short observations from inside transformation work — organizational change, technology adoption, executive reporting, operating models, and the human consequences of change.",
};

const notes = [
  {
    title: "Transformation is mostly subtraction.",
    body: [
      "The instinct is to add — a tool, a role, a process, a dashboard.",
      "But most organizations are not short of activity.",
      "They are buried in it.",
      "The hardest and most valuable work is deciding what should stop.",
      "A cleaner organization is not a smaller ambition.",
      "It is a clearer one.",
    ],
  },
  {
    title: "Reporting is a leadership instrument, not an administrative one.",
    body: [
      "Most reporting is built to record what happened.",
      "The useful kind is built to change what happens next.",
      "If a number arrives too late to affect a decision, it is history, not reporting.",
      "The question is never how much data a leader can see.",
      "It is which few things should reach them, and when.",
    ],
  },
  {
    title: "Decision rights are cheaper to change than org charts.",
    body: [
      "When work slows down, the reflex is to redraw the structure.",
      "Often the structure is fine.",
      "What is missing is clarity about who decides what, and who does not.",
      "Naming that is faster than a reorganization.",
      "And it usually reveals whether a reorganization was ever the real problem.",
    ],
  },
  {
    title: "Owner dependency is an information problem.",
    body: [
      "Many organizations appear to have systems until the leader steps away.",
      "Then everything starts asking for permission.",
      "That is not only a staffing issue.",
      "It is an information architecture issue.",
      "A decision design issue.",
      "A trust issue.",
      "Reducing dependency does not mean caring less.",
      "It means building a company that can hold more of its own intelligence.",
    ],
  },
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
    title: "Agent memory belongs in files a human can read.",
    body: [
      "The instinct is to let AI manage its own memory — embeddings, vector stores, hidden state.",
      "Developers are learning the hard way that this fails quietly. Memory you cannot read, you cannot audit, correct or trust.",
      "The discipline that works is plainer: flat files, clear names, version control, an append-only log.",
      "The model reads them. The human reads them. Corrections are edits, and history is kept.",
      "The model will change. The files remain.",
    ],
  },
  {
    title: "Most software is a temporary teacher.",
    body: [
      "Each tool a company adopts teaches it something.",
      "Something about booking, or operations, or how the work actually flows.",
      "Each one helps.",
      "Each one eventually reveals its limits.",
      "That does not mean the tools failed.",
      "It means the business learned.",
    ],
  },
  {
    title: "The people tell you where the system is broken.",
    body: [
      "Every workaround is a message.",
      "Every duplicate spreadsheet, every hallway approval, every task done twice.",
      "People do not carry unnecessary complexity because they enjoy it.",
      "They carry it because the system asked them to.",
      "Start with how they are doing.",
      "The rest of the diagnosis follows.",
    ],
  },
];

const emphasisStarts = [
  "It is a clearer one.",
  "It is which few things should reach them, and when.",
  "And it usually reveals",
  "It means building a company",
  "Understand first.",
  "The first layer is truth.",
  "The model will change.",
  "It means the business learned.",
  "The rest of the diagnosis follows.",
];

function isEmphasis(paragraph: string) {
  return emphasisStarts.some((start) => paragraph.startsWith(start));
}

export default function NotesPage() {
  return (
    <div className="site-shell home-story writing-page">
      <section className="writing-hero">
        <div className="site-container writing-hero-grid">
          <span className="page-kicker">Notes</span>
          <h1>Notes</h1>
          <p className="writing-hero-lede">
            Short observations from inside the work — change, technology, operating
            models, and the human consequences of both.
          </p>
        </div>
      </section>

      <section className="writing-notes section section-quiet border-b-0">
        <div className="site-container">
          <div className="writing-note-stack">
            {notes.map((note, idx) => (
              <article key={note.title} className="writing-note">
                <div className="writing-note-index metadata">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="writing-note-body">
                  <h2>{note.title}</h2>
                  <div className="body-copy">
                    {note.body.map((paragraph) => (
                      <p key={paragraph} className={isEmphasis(paragraph) ? "emphasis" : ""}>
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
    </div>
  );
}
