import { EditorialImage, PageHeader } from "@/components/editorial";

const operatingOutcomes = [
  "Commercial rules",
  "Service standards",
  "Customer journeys",
  "Booking and payment flows",
  "Admin visibility",
  "Approval gates",
  "Repeatable launches",
  "Owner command",
];

const connectedOperations = [
  {
    label: "Revenue and customer path",
    items: [
      "Course pages and booking",
      "Cart and checkout",
      "Equipment and online training",
      "Registration changes",
    ],
  },
  {
    label: "Delivery and standards",
    items: [
      "Instructor coordination",
      "Availability and scheduling",
      "Customer communication",
      "Certificate reminders",
    ],
  },
  {
    label: "Management view",
    items: [
      "Financial visibility",
      "Advertising performance",
      "Company knowledge",
      "Approval gates",
    ],
  },
];

const operatingModel = [
  ["Promise", "what customers are being asked to trust"],
  ["Standards", "how the work has to happen"],
  ["Infrastructure", "where the work moves"],
  ["Judgment", "what still requires approval"],
];

export default function Ripley() {
  return (
    <div className="site-shell">
      <section className="section">
        <div className="site-container">
          <PageHeader
            kicker="02 / Operating Layer"
            title="Ripley"
            lede="The private infrastructure behind faster execution, cleaner authority, and more disciplined growth."
          />
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p className="emphasis text-xl leading-relaxed">
                Ripley was built because BraveHeart did not need another tool. It needed the work to move.
              </p>
              <p>
                It is not a story about adding AI inside a company. It is a story about making the company clear enough to know where intelligence belongs.
              </p>
              <p>
                Course pages, booking, payments, customer changes, certification reminders, admin visibility, marketing performance, and management reporting all had to connect. Not in theory. In daily use.
              </p>
              <blockquote className="mobile-pull quiet-panel text-xl leading-relaxed text-[var(--foreground)]">
                “The point is not an impressive machine. The point is knowing what happens next, who can approve it, and what must never be left to chance.”
              </blockquote>
              <p>
                Ripley holds the rules, workflows, connected tools, operating memory, and approval gates behind the work. It exists to make execution cleaner, not to put technology at the center.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <EditorialImage
              src="/images/editorial/light-study.webp"
              alt="A focused beam of light falling across a circular plinth"
              caption="Execution layer / approval-led authority"
              aspect="aspect-[4/3] sm:aspect-[16/10]"
              className="mobile-bleed"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="quiet-panel">
            <span className="section-kicker">What Ripley is</span>
            <div className="body-copy">
              <p className="emphasis">
                Private infrastructure for a company that has to move with discipline.
              </p>
              <p>
                Ripley turns standards and recurring decisions into practical infrastructure. It reduces the amount of work that depends on individual memory or manual follow-up.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-8 sm:grid-cols-2 metadata">
              {operatingOutcomes.map((outcome) => (
                <div key={outcome} className="border-t border-[var(--border)] py-3">
                  {outcome}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium leading-relaxed text-[var(--foreground)]">
              The value is practical: less manual coordination, fewer dropped handoffs, faster launches, and more room for judgment.
            </p>
          </div>

          <div className="quiet-panel">
            <span className="section-kicker">What Ripley built</span>
            <div className="body-copy">
              <p className="emphasis text-xl leading-relaxed">
                Fourteen days. A full production commerce and operations platform.
              </p>
              <p>
                Real-time course booking, unified cart, Stripe checkout, automated fulfilment, self-serve registration management, recertification reminders, and an admin dashboard strong enough to replace Monday.com.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-x-8 metadata sm:grid-cols-3">
              {[
                ["14", "days to launch"],
                ["28", "course pages"],
                ["1", "unified checkout"],
                ["5", "connected tools"],
                ["19", "critical payment tests"],
                ["Live", "business platform"],
              ].map(([value, label]) => (
                <div key={label} className="border-t border-[var(--border)] py-3">
                  <span className="block font-sans text-2xl font-medium leading-none text-[var(--foreground)]">
                    {value}
                  </span>
                  <span className="mt-2 block">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm font-medium leading-relaxed text-[var(--foreground)]">
              The site is live. Bookings, payments, equipment sales, instructor coordination, and customer communication now move through one controlled platform.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="section-kicker">Connected Operations</span>
            <h2>One view across the work.</h2>
            <div className="body-copy mt-7">
              <p>
                The site is only part of the picture. Ripley connects the tools BraveHeart already depends on and turns them into a coordinated management view.
              </p>
              <p className="emphasis border-l border-[var(--border-strong)] pl-5">
                The value is not more software. The value is fewer blind spots, fewer handoffs, and faster decisions without losing command.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {connectedOperations.map((group) => (
              <div key={group.label} className="quiet-panel">
                <span className="section-kicker">{group.label}</span>
                <div className="ruled-list metadata">
                  {group.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <EditorialImage
              src="/images/editorial/marble-operating-layer.webp"
              alt="A marble cube in a quiet icy landscape at dawn"
              caption="Discipline as structure"
              aspect="aspect-[4/5]"
              className="mobile-bleed"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="section-kicker">What holds it together</span>
            <h2>Discipline is the luxury.</h2>
            <div className="body-copy mt-7">
              <p>
                The useful version of speed is not chaos. It is knowing what can move, what needs approval, and what should never be touched casually.
              </p>
              <p>
                Payments, credentials, customer records, financial tools, and production changes all carry explicit approval rules. Ripley can prepare, coordinate, and recommend. Judgment stays where it belongs.
              </p>
              <p className="mobile-pull emphasis border-l border-[var(--border-strong)] pl-5">
                The company gets faster because the boundaries are stronger.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="section-kicker">The Principle</span>
            <h2>Clarify before you accelerate.</h2>
            <div className="body-copy mt-7">
              <p>Most AI automation projects fail because they start automating before the company has made its own rules explicit.</p>
              <p>Ripley works in the opposite order:</p>
              <ol className="metadata list-decimal space-y-2 pl-5">
                <li>Name the commercial promise.</li>
                <li>Map how the work really happens.</li>
                <li>Decide what can move without approval.</li>
                <li>Define what must stop for judgment.</li>
                <li>Remove inherited friction before automating anything.</li>
                <li>Then build what should exist.</li>
              </ol>
              <p className="emphasis">That is slower for a moment. Then the business starts moving with much less drag.</p>
            </div>
          </div>

          <div>
            <span className="section-kicker">The Control Model</span>
            <h2>Judgment stays at the top.</h2>
            <div className="body-copy mt-7">
              <p>
                Ripley removes the coordination around leadership that should never have required executive attention in the first place.
              </p>
              <p>
                Routine work can move quickly. Consequential actions stop for approval. That distinction is what makes the platform useful in a real company, not just impressive in a demo.
              </p>
              <p className="emphasis">
                More pace. Better visibility. Cleaner authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">What This Means</span>
            <h2>A serious owner can now build like a much larger company.</h2>
            <div className="body-copy mt-7">
              <p>
                One owner. A live commerce and operations platform holding the work.
              </p>
              <p>
                Booking, payments, fulfilment, equipment sales, certificate tracking, admin visibility, and customer communication now move through one coordinated layer.
              </p>
              <p className="emphasis">That is not a technology story. It is an ownership story.</p>
              <blockquote className="mobile-pull quiet-panel text-xl leading-relaxed text-[var(--foreground)]">
                “The advantage is not that the platform is clever. The advantage is that the business is clear enough to execute.”
              </blockquote>
              <p>
                For decades, smaller operators faced a hard ceiling. Use generic software and reshape the business around it, or spend heavily on custom systems, consultants, and project management.
              </p>
              <p className="emphasis">
                That ceiling is no longer fixed. The advantage goes to the owner who can see clearly and move decisively.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="quiet-panel">
              <span className="section-kicker">Operating Model</span>
              <div className="ruled-list metadata">
                {operatingModel.map(([layer, definition]) => (
                  <div key={layer} className="grid gap-2 sm:grid-cols-[7rem_1fr]">
                    <span className="text-[var(--foreground)]">{layer}</span>
                    <span>{definition}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section border-b-0">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="section-kicker">The Lesson</span>
            <h2>Execution improves when the rules are clear.</h2>
            <div className="body-copy mt-7">
              <p>
                Every clean launch started as a commercial call, not a technical one.
              </p>
              <p>
                What promise are we making? Who owns it? What must happen next? What can move without approval? Where does judgment enter? Once those questions were answered, the right infrastructure could be built quickly and responsibly.
              </p>
              <p>
                That is the real lesson. Speed is not the advantage. Clean authority is.
              </p>
            </div>
          </div>

          <div>
            <span className="section-kicker">Where This Goes</span>
            <h2>The model is ready before the move is.</h2>
            <div className="body-copy mt-7">
              <p>
                The real test is not whether the platform works today. It is whether tomorrow&apos;s expansion can happen without rebuilding around every new move.
              </p>
              <p>
                A new course should not become a small web project, booking project, payment project, and admin project. It should be a launch move. The page, booking path, payment flow, catalog listing, and sitemap update follow the pattern already in place.
              </p>
              <p>
                A new city should not mean starting from scratch. Scheduling, availability, local search, redirects, and customer communication become configuration, not construction.
              </p>
              <p>
                And if the move were to franchise, the foundation is already doing the right kind of work. Standards, approval gates, customer pathways, and management visibility are no longer scattered across people&apos;s heads and disconnected platforms.
              </p>
              <p className="mobile-pull emphasis border-l border-[var(--accent-emerald)] pl-5">
                That was the key motivator from the beginning. Not just to run the company well, but to build the kind of infrastructure that makes growth a decision, not a project.
              </p>
              <p>
                BraveHeart is one company. The pattern is not. Hospitality, training, wellness, tourism, and food service all run on the same physics: scheduling, coordination, communication, quality control, financial visibility, and customer experience.
              </p>
              <p>
                Ripley is becoming a deployable capability for companies where service, standards, and commercial clarity matter. One layer of coordination. Strong boundaries. Connected tools. Owner command.
              </p>
              <p>
                That is what Castson Inc. is building toward. Not shelf software. A capability to install where taste, service, and operational clarity are the competitive advantage.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl py-16 text-center lg:col-span-2">
            <p className="metadata">
              The point was never the technology.
            </p>
            <p className="mt-5 text-xl font-medium leading-relaxed text-[var(--foreground)]">
              The point was to find out how powerful one serious owner can be when the operating layer is strong enough to scale without diluting what made the company worth owning in the first place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
