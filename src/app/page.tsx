import Image from "next/image";
import Link from "next/link";
import { EditorialImage, TextLink } from "@/components/editorial";

const focusTerms = ["SERVICE", "CLIENT EXPERIENCE", "OPERATIONS", "SYSTEMS", "OWNERSHIP"];

const decisionQuestions = [
  "What matters.",
  "What is getting in the way.",
  "What the next decision will change.",
];

const decisionCarriers = ["Owners.", "CEOs.", "CMOs.", "Operators."];

const questionOrigins = ["Brand.", "Service.", "Digital.", "Team.", "Growth.", "Systems.", "Execution."];

const experienceSignals = [
  "Brand is not separate from service.",
  "Service is not separate from operations.",
  "Operations are not separate from technology.",
  "Technology is not separate from trust.",
];

const experienceMoments = [
  "Every handoff says something.",
  "Every delay says something.",
  "Every unclear moment says something.",
  "Every thoughtful detail says something too.",
];

const standardMoments = [
  "The timing.",
  "The welcome.",
  "The handoff.",
  "The answer.",
  "The follow-up.",
  "The quiet sense that someone thought ahead.",
];

const consequencePressures = [
  "It has to survive the team.",
  "The calendar.",
  "The client path.",
  "The operating pressure.",
  "The tools already in use.",
  "The habits no one sees anymore because everyone has learned to work around them.",
];

const promiseTrio = ["Promise.", "Standard.", "System."];

const braveHeartDomains = ["First aid.", "Safety.", "Mental health.", "Resilience."];

const braveHeartOperations = [
  "Clients book.",
  "Instructors teach.",
  "Teams coordinate.",
  "Certificates go out.",
  "Questions come in.",
];

const appliedNeeds = [
  "They need clearer standards.",
  "Cleaner handoffs.",
  "Better memory.",
  "Better ownership.",
  "Better ways for the right information to reach the right person at the right moment.",
];

const capabilityMoves = [
  "Less noise.",
  "Clearer ownership.",
  "Better timing.",
  "Stronger standards.",
  "More room for judgment.",
];

const continueLinks = [
  {
    href: "/braveheart",
    title: "Explore BraveHeart",
    body: "A company carried end to end.",
  },
  {
    href: "/applied-ai",
    title: "Explore Applied AI",
    body: "Systems that serve the standard.",
  },
  {
    href: "/contact",
    title: "Private work",
    body: "For questions with consequence.",
  },
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
          style={{ objectPosition: "64% center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,240,232,0.90)_0%,rgba(244,240,232,0.74)_42%,rgba(244,240,232,0.20)_100%)] dark:bg-[linear-gradient(90deg,rgba(21,20,17,0.88)_0%,rgba(21,20,17,0.68)_46%,rgba(21,20,17,0.20)_100%)]" />
        <div className="site-container relative z-10 flex min-h-[calc(88svh-4.5rem)] items-end pb-14 pt-16 sm:min-h-[calc(92svh-4.5rem)] md:pb-24 lg:min-h-[calc(100svh-4.5rem)]">
          <div className="max-w-[55rem]">
            <span className="page-kicker">Eli Castson</span>
            <h1 className="mt-5 max-w-[14ch] md:max-w-[18ch]">
              I work where the standard has to hold.
            </h1>
            <div className="hero-copy mt-8 max-w-2xl space-y-5 body-copy">
              <p className="emphasis">
                Private work with owners, CEOs, CMOs, and operators facing questions
                where brand, service, operations, technology, and client experience
                cannot be separated.
              </p>
              <p>
                Useful when the ambition is real, the promise matters, and too much of
                the business depends on memory, force, or a few exceptional people.
              </p>
            </div>
            <div className="tag-line mt-8">
              {focusTerms.map((term) => (
                <span key={term}>{term}</span>
              ))}
            </div>
            <div className="mt-10">
              <TextLink href="/contact">Private work</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section home-intro-section">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <span className="section-kicker">Private Work</span>
              <h2 className="story-heading max-w-3xl">
                Senior judgment beside the person carrying the decision.
              </h2>
              <div className="body-copy mt-7">
                <p>There are moments when the business does not need another plan.</p>
                <p className="emphasis">It needs a clearer view of what is happening.</p>
                <div className="ruled-list metadata">
                  {decisionQuestions.map((question) => (
                    <div key={question}>{question}</div>
                  ))}
                </div>
                <p>I work with people who carry the consequence.</p>
                <p>Often the question starts in one place.</p>
                <p>Then it touches the whole business.</p>
                <p className="mobile-pull emphasis">
                  That is usually where the useful work begins.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5 lg:border-l lg:border-[var(--border)] lg:pl-8 lg:pt-16">
              <span className="section-kicker">Carrying The Decision</span>
              <div className="ruled-list metadata">
                {decisionCarriers.map((person) => (
                  <div key={person}>{person}</div>
                ))}
              </div>
              <span className="section-kicker mt-10">Where It Starts</span>
              <div className="ruled-list metadata">
                {questionOrigins.map((origin) => (
                  <div key={origin}>{origin}</div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-quiet story-section home-experience-section">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="section-kicker">The Whole Business</span>
              <h2 className="story-heading">The client experiences one business.</h2>
            </div>

            <div className="lg:col-span-7">
              <div className="body-copy">
                <p className="emphasis text-xl leading-relaxed">
                  Most companies manage the pieces separately.
                </p>
                <p>The client never does.</p>
                <div className="grid gap-x-8 sm:grid-cols-2 metadata">
                  {experienceSignals.map((item) => (
                    <div key={item} className="border-t border-[var(--border)] py-3">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-14">
                  <div className="grid gap-px md:grid-cols-4">
                    {experienceMoments.map((moment) => (
                      <div key={moment} className="py-3 md:px-5">
                        <p className="m-0 text-sm leading-relaxed text-[var(--cinema-foreground)]">
                          {moment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mobile-pull emphasis">
                  The experience is the business made visible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section home-trust-section">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="section-kicker">Standard</span>
              <h2 className="story-heading">
                The standard is carried in ordinary moments.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="body-copy">
                <p>
                  A lasting client relationship is rarely made by one large gesture.
                </p>
                <p>
                  It is built in the moments people remember because they felt
                  considered.
                </p>
                <div className="grid gap-x-8 sm:grid-cols-2 metadata">
                  {standardMoments.map((moment) => (
                    <div key={moment} className="border-t border-[var(--border)] py-3">
                      {moment}
                    </div>
                  ))}
                </div>
                <p>
                  Good judgment, human understanding, refined process, and useful
                  technology have to support the same promise.
                </p>
                <p className="emphasis">That is where I work best.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section home-consequence-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="section-kicker">Consequence</span>
            <h2 className="story-heading">
              A recommendation has to survive the business.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="body-copy mt-7">
              <div className="ruled-list metadata">
                {consequencePressures.map((pressure) => (
                  <div key={pressure}>{pressure}</div>
                ))}
              </div>
              <p>
                This is why the work has to stay close to the people carrying it.
              </p>
              <p className="emphasis">
                An idea is only useful if the business can hold it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet story-section home-promise-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">Promise and Delivery</span>
            <h2 className="story-heading">The promise and the machinery have to match.</h2>
            <div className="body-copy mt-7">
              <p>Taste matters.</p>
              <p className="emphasis">So does the machinery underneath.</p>
              <p>
                A distinctive business can have a beautiful promise and still lose
                trust through unclear handoffs, slow approvals, weak follow-up,
                confusing booking paths, vague ownership, or systems that do not
                reflect the standard.
              </p>
              <p>
                The brand cannot say one thing while the team, tools, and operating
                model are forced to deliver another.
              </p>
              <p>The work is to bring them closer together.</p>
              <div className="ruled-list metadata">
                {promiseTrio.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
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

      <section className="section story-section home-proof-section">
        <div className="site-container">
          <div className="max-w-4xl">
            <span className="section-kicker">BraveHeart</span>
            <h2 className="story-heading">
              BraveHeart is a company I acquired, transformed, and now operate.
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="body-copy">
                <p>
                  It is a workplace training company focused on practical human
                  readiness.
                </p>
                <div className="ruled-list metadata">
                  {braveHeartDomains.map((domain) => (
                    <div key={domain}>{domain}</div>
                  ))}
                </div>
                <p>The work carries consequence.</p>
              </div>
              <div className="quiet-panel">
                <div className="ruled-list metadata">
                  {braveHeartOperations.map((operation) => (
                    <div key={operation}>{operation}</div>
                  ))}
                </div>
                <p className="mt-7 text-sm font-medium leading-relaxed text-[var(--foreground)]">
                  The system has to hold tomorrow.
                </p>
              </div>
            </div>
            <div className="body-copy mt-8 max-w-2xl">
              <p>BraveHeart keeps my work close to reality.</p>
              <p>
                It is one reference point for how I think about promise, service,
                operations, systems, and the people who have to make the standard hold.
              </p>
            </div>
            <div className="mt-10">
              <TextLink href="/braveheart">Explore BraveHeart</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet story-section home-systems-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <EditorialImage
              src="/images/editorial/scarpa-geometry.webp"
              alt="Minimal white architectural geometry with a circular opening"
              caption="Applied AI / systems that serve the standard"
              aspect="aspect-[4/3] sm:aspect-[16/10]"
              className="mobile-bleed"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="section-kicker">Applied AI</span>
            <h2 className="story-heading">
              AI is useful only when the business is clear enough to use it.
            </h2>
            <div className="body-copy mt-7">
              <p>Most companies do not need more tools first.</p>
              <div className="ruled-list metadata">
                {appliedNeeds.map((need) => (
                  <div key={need}>{need}</div>
                ))}
              </div>
              <p>That is where applied AI becomes useful.</p>
              <p>Not automation over confusion.</p>
              <p className="mobile-pull emphasis">
                A cleaner business, made more capable.
              </p>
            </div>
            <div className="mt-10">
              <TextLink href="/applied-ai">Explore Applied AI</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section home-technology-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">Systems</span>
            <h2 className="story-heading">
              Systems should reduce the force required to run the business.
            </h2>
            <div className="body-copy mt-7">
              <p>
                I am not interested in technology as a separate layer from the
                business.
              </p>
              <p>
                It is useful when it carries standards, reduces friction, protects
                judgment, improves timing, clarifies ownership, or helps the team
                deliver with less confusion.
              </p>
              <p className="emphasis">
                The goal is not to replace the human parts.
              </p>
              <p>The goal is to protect them.</p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="quiet-panel">
              <div className="ruled-list metadata">
                {capabilityMoves.map((move) => (
                  <div key={move}>{move}</div>
                ))}
              </div>
              <p className="mt-7 text-sm font-medium leading-relaxed text-[var(--foreground)]">
                Good systems should not make a business colder.
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[var(--foreground)]">
                They should make it easier for people to do the right thing at the
                right moment.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-quiet story-section border-b-0 home-closing-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">Distinctive Businesses</span>
            <h2 className="story-heading">
              A stronger business should not become more generic.
            </h2>
            <div className="body-copy mt-7">
              <p className="emphasis">
                The system should protect what makes the business worth choosing.
              </p>
              <p>A hotel is not only a hotel.</p>
              <p>A clinic is not only a clinic.</p>
              <p>A training company is not only a training company.</p>
              <p>A place-based business is not only a place.</p>
              <p>
                Each one has standards, rituals, timing, tone, handoffs, and moments
                where trust is either strengthened or lost.
              </p>
              <p>
                The work is to make the machinery underneath clear enough to support
                what makes the business distinct.
              </p>
              <p>Not smoother at the expense of character.</p>
              <p className="emphasis">Stronger because of it.</p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="quiet-panel">
              <span className="section-kicker">Continue</span>
              <div className="ruled-list">
                {continueLinks.map((item) => (
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
