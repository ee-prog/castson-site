import Image from "next/image";
import Link from "next/link";
import { EditorialImage, TextLink } from "@/components/editorial";

const focusTerms = ["Brand", "Service", "Systems", "Technology", "Judgment"];

const advisoryAreas = [
  "The promise",
  "The client experience",
  "The commercial reality",
  "The operating drag",
  "The technology path",
];

const experienceSignals = [
  "Brand is not separate from service.",
  "Service is not separate from operations.",
  "Operations are not separate from technology.",
  "Technology is not separate from trust.",
];

const clientSequence = [
  "The client experience",
  "The process",
  "The handoffs",
  "The standards",
  "The technology",
];

const clientMoments = [
  "The timing",
  "The welcome",
  "The handoff",
  "The follow-up",
  "The feeling that someone thought ahead",
];

const advisoryRange = [
  "Creative direction",
  "Strategy",
  "Digital transformation",
  "Technology",
  "Commercial judgment",
];

const capabilityMoves = [
  "Reduce noise",
  "Clarify ownership",
  "Protect the standard",
  "Support the team",
  "Improve the client path",
];

const distinctiveExamples = [
  "A hotel is not only a hotel.",
  "A clinic is not only a clinic.",
  "A training company is not only a training company.",
  "A place-based business is not only a place.",
];

export default function Home() {
  return (
    <div className="site-shell home-story">
      <section className="home-hero relative min-h-[calc(88svh-4.5rem)] border-b border-[var(--border)] sm:min-h-[calc(92svh-4.5rem)] lg:min-h-[calc(100svh-4.5rem)]">
        <Image
          src="/images/editorial/eli-mountain-portrait.webp"
          alt="Eli Castson in a mountain landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "52% center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,240,232,0.90)_0%,rgba(244,240,232,0.74)_42%,rgba(244,240,232,0.20)_100%)] dark:bg-[linear-gradient(90deg,rgba(21,20,17,0.88)_0%,rgba(21,20,17,0.68)_46%,rgba(21,20,17,0.20)_100%)]" />
        <div className="site-container relative z-10 flex min-h-[calc(88svh-4.5rem)] items-end pb-14 pt-16 sm:min-h-[calc(92svh-4.5rem)] md:pb-24 lg:min-h-[calc(100svh-4.5rem)]">
          <div className="max-w-[55rem]">
            <span className="page-kicker">Eli Castson</span>
            <h1 className="mt-5 max-w-[14ch] md:max-w-[18ch]">
              I make distinctive businesses more capable.
            </h1>
            <div className="hero-copy mt-8 max-w-2xl space-y-5 body-copy">
              <p className="emphasis">
                Senior judgment beside the person who has to decide.
              </p>
              <p>
                I work with owners, CEOs, CMOs, and operators facing complex questions of brand, service, systems, technology, and client experience.
              </p>
              <p>
                The work is useful when a business has real standards, real ambition, and too much complexity sitting between the promise and the delivery.
              </p>
            </div>
            <div className="tag-line mt-8">
              {focusTerms.map((term) => (
                <span key={term}>{term}</span>
              ))}
            </div>
            <div className="mt-10">
              <TextLink href="/contact">Private Advisory</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-8">
              <span className="section-kicker">Private Advisory</span>
              <h2 className="story-heading max-w-3xl">This is not agency work.</h2>
              <div className="body-copy mt-7">
                <p className="emphasis">It is not outsourced execution.</p>
                <p>
                  It is senior thinking for decision-makers who need to see the whole business more clearly.
                </p>
                <p>
                  The work is selective because it requires context, trust, and consequence.
                </p>
                <p>The point is not more activity.</p>
                <p className="mobile-pull emphasis border-l border-[var(--border-strong)] pl-5">
                  The point is capability. And the real measure of capability is whether the business becomes easier to trust.
                </p>
                <div className="mt-10">
                  <TextLink href="/contact">Private Advisory</TextLink>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:border-l lg:border-[var(--border)] lg:pl-8 lg:pt-16">
              <span className="section-kicker">The Whole Business</span>
              <div className="ruled-list metadata">
                {advisoryAreas.map((area, idx) => (
                  <div key={area} className="grid grid-cols-[2.25rem_1fr] gap-4">
                    <span className="text-[var(--primary)]">{String(idx + 1).padStart(2, "0")}</span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-quiet story-section">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="section-kicker">Client Experience</span>
              <h2 className="story-heading">Your client experiences one business.</h2>
            </div>

            <div className="lg:col-span-7">
              <div className="body-copy">
                <p className="emphasis text-xl leading-relaxed">
                  Most companies manage the pieces separately. The client never does.
                </p>
                <div className="grid gap-x-8 sm:grid-cols-2 metadata">
                  {experienceSignals.map((item) => (
                    <div key={item} className="border-t border-[var(--border)] py-3">
                      {item}
                    </div>
                  ))}
                </div>
                <p>Every handoff says something.</p>
                <p>Every delay says something.</p>
                <p>Every unclear moment says something.</p>
                <p>Every thoughtful detail says something too.</p>
                <p className="mobile-pull emphasis">The experience is the system made visible.</p>
              </div>
            </div>
          </div>

          <div className="mt-14 border-y border-[var(--border)] py-5">
            <span className="section-kicker">Order of Work</span>
            <div className="grid gap-px md:grid-cols-5">
              {clientSequence.map((item, idx) => (
                <div key={item} className="border-t border-[var(--border)] py-4 md:border-t-0 md:border-r md:px-5 md:last:border-r-0">
                  <span className="metadata text-[var(--primary)]">{String(idx + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[var(--foreground)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="section-kicker">What Holds Trust</span>
              <h2 className="story-heading">The client experience comes first.</h2>
            </div>

            <div className="lg:col-span-7">
              <div className="body-copy">
                <p>
                  A lasting brand relationship is not created by messaging alone. It is built in the small moments.
                </p>
                <div className="grid gap-x-8 sm:grid-cols-2 metadata">
                  {clientMoments.map((moment) => (
                    <div key={moment} className="border-t border-[var(--border)] py-3">
                      {moment}
                    </div>
                  ))}
                </div>
                <p>
                  Good business judgment, human understanding, refined process, and useful technology have to support the same promise.
                </p>
                <p className="emphasis">That is where I work best.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <span className="section-kicker">Where Advice Becomes Real</span>
            <h2 className="story-heading">The work starts where advice usually stops.</h2>
            <div className="body-copy mt-7">
              <p>A recommendation only matters if the business can act on it.</p>
              <p>
                I have spent much of my career helping organizations change from the outside.
              </p>
              <div className="tag-line py-2">
                {advisoryRange.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <p>That work gave me range. It also made the limit of advice obvious.</p>
              <p>That is why the work has to account for the business as it actually runs.</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="section-kicker">Consequence</span>
            <h2 className="story-heading">A recommendation has to survive the business.</h2>
            <div className="body-copy mt-7">
              <p>
                It has to survive the team, the system, the calendar, the customer path, and the pressure of daily operations.
              </p>
              <p className="emphasis">
                That is where the real work begins.
              </p>
              <div className="quiet-panel">
                <span className="section-kicker">Useful Advisory Changes The Operating Reality</span>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  Not by adding more opinion, but by clarifying what the business has to make true.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">Promise and Delivery</span>
            <h2 className="story-heading">The promise and the machinery have to match.</h2>
            <div className="body-copy mt-7">
              <p className="emphasis">Taste is not enough. Standards need systems.</p>
              <p>
                A distinctive business can have a beautiful promise and still lose trust through unclear handoffs, weak follow-up, confusing booking paths, vague ownership, slow approvals, or tools that do not reflect the standard.
              </p>
              <p>
                The brand cannot say one thing while the service, systems, and team are forced to deliver another.
              </p>
              <p>The small moments carry the brand.</p>
              <p className="emphasis">
                The machinery underneath has to be good enough for the promise on top.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <EditorialImage
              src="/images/editorial/quiet-luxury-landscape.webp"
              alt="Quiet mountain architecture at dusk"
              caption="Promise, standard, system"
              aspect="aspect-[4/5]"
              className="mobile-bleed"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container">
          <div className="max-w-4xl">
            <span className="section-kicker">Operating Proof</span>
            <h2 className="story-heading">BraveHeart is where the method became real.</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="body-copy">
                <p>
                  I acquired BraveHeart as a workplace training company focused on practical human readiness.
                </p>
                <p>
                  The work spans first aid, safety, mental health, and resilience training for organizations that need their people prepared when it matters.
                </p>
                <p>
                  The business became a live case study in making a real service company clearer, stronger, and more capable.
                </p>
              </div>
              <div className="quiet-panel">
                <span className="section-kicker">Under Consequence</span>
                <div className="ruled-list metadata">
                  <div>The client trusts the training or they do not.</div>
                  <div>The team understands the standard or they do not.</div>
                  <div>The experience holds or it does not.</div>
                  <div>The system supports the work or it quietly weakens it.</div>
                </div>
              </div>
            </div>
            <div className="body-copy mt-8 max-w-2xl">
              <p>
                The work touched the brand, the booking path, the client experience, the operating process, the team&apos;s workflow, and the systems underneath.
              </p>
              <p className="emphasis">That directness sharpens the advisory work.</p>
            </div>
            <div className="mt-10">
              <TextLink href="/braveheart">Explore BraveHeart</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <EditorialImage
              src="/images/editorial/scarpa-geometry.webp"
              alt="Minimal white architectural geometry with a circular opening"
              caption="Applied AI / clarity before automation"
              aspect="aspect-[4/3] sm:aspect-[16/10]"
              className="mobile-bleed"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="section-kicker">Systems Layer</span>
            <h2 className="story-heading">Applied AI begins by paying down organizational debt.</h2>
            <div className="body-copy mt-7">
              <p className="emphasis">AI does not fix a messy business. It makes the mess move faster.</p>
              <p>Before automation can help, the business has to become legible.</p>
              <div className="ruled-list metadata">
                <div>The client experience has to be understood.</div>
                <div>The process has to be refined.</div>
                <div>The handoffs have to be clear.</div>
                <div>The standards have to be usable.</div>
                <div>The decisions need owners.</div>
              </div>
              <p>
                That is the work most companies want to skip. But it is the work that makes AI useful.
              </p>
              <p className="mobile-pull emphasis border-l border-[var(--border-strong)] pl-5">
                Not automation over confusion. Not technology as theatre. A cleaner business, made more capable.
              </p>
            </div>
            <div className="mt-10">
              <TextLink href="/applied-ai">Explore Applied AI</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">Technology</span>
            <h2 className="story-heading">Technology is not a boundary.</h2>
            <div className="body-copy mt-7">
              <p>
                It is one of the tools for making the experience clearer, faster, and more consistent.
              </p>
              <p>
                I am not interested in technology as a separate layer from the business.
              </p>
              <p>
                Technology is useful when it carries standards, reduces friction, protects judgment, improves timing, clarifies ownership, or helps the team deliver the experience with less confusion.
              </p>
              <p className="emphasis">
                The goal is not to replace the human parts. The goal is to protect them.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="quiet-panel">
              <span className="section-kicker">Less Noise. Higher Standards.</span>
              <div className="ruled-list metadata">
                {capabilityMoves.map((move) => (
                  <div key={move}>{move}</div>
                ))}
              </div>
              <p className="mt-7 text-sm font-medium leading-relaxed text-[var(--foreground)]">
                Good systems should not make a business colder. They should make it easier for people to do the right thing at the right moment.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-quiet story-section border-b-0">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">Distinctive Businesses</span>
            <h2 className="story-heading">Distinctive businesses should not become generic to become stronger.</h2>
            <div className="body-copy mt-7">
              <p className="emphasis">
                The system should protect what makes the business worth choosing.
              </p>
              <div className="ruled-list metadata">
                {distinctiveExamples.map((example) => (
                  <div key={example}>{example}</div>
                ))}
              </div>
              <p>
                Each one has standards, rituals, timing, tone, handoffs, and moments where trust is either strengthened or lost.
              </p>
              <p>
                A distinctive business becomes stronger when the machinery underneath becomes clear enough to support what makes it distinct.
              </p>
              <p className="emphasis">Not smoother at the expense of character. More capable because of it.</p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="quiet-panel">
              <span className="section-kicker">Continue</span>
              <div className="ruled-list">
                {[
                  {
                    href: "/braveheart",
                    title: "Explore BraveHeart",
                    body: "The operating proof.",
                  },
                  {
                    href: "/applied-ai",
                    title: "Explore Applied AI",
                    body: "The systems layer.",
                  },
                  {
                    href: "/contact",
                    title: "Private Advisory",
                    body: "For consequential questions.",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block py-3 transition-colors hover:text-[var(--primary)]"
                  >
                    <span className="editorial-link">{item.title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {item.body}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
