import Image from "next/image";
import Link from "next/link";
import { EditorialImage, TextLink } from "@/components/editorial";

const focusTerms = ["Brand", "Service", "Systems", "Technology", "Ownership"];

const advisoryAreas = [
  "Positioning",
  "Commercial narrative",
  "Customer experience",
  "Service standards",
  "Brand and operating model",
  "Digital infrastructure",
  "Marketing intelligence",
  "Founder and executive judgment",
];

const operatingPriorities = [
  "Revenue path",
  "Service standards",
  "Customer handoffs",
  "Timing & rhythm",
  "Approval points",
  "Operational drag",
  "Legacy transition",
  "Commercial pressure",
  "Leadership judgment",
];

const questions = [
  "What makes a place worth travelling for?",
  "How do you scale care without making it feel standardized?",
  "Can better systems make hospitality feel more human, not less?",
  "How do you preserve the character of a place while making the business stronger?",
  "What should technology handle quietly, and what should remain human?",
  "How do you build operational leverage that makes a brand more distinctive, not more generic?",
];

export default function Home() {
  return (
    <div className="site-shell">
      <section className="relative min-h-[calc(88svh-4.5rem)] border-b border-[var(--border)] sm:min-h-[calc(92svh-4.5rem)] lg:min-h-[calc(100svh-4.5rem)]">
        <Image
          src="/images/editorial/eli-mountain-portrait.webp"
          alt="Eli Castson in a mountain landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "52% center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,240,232,0.88)_0%,rgba(244,240,232,0.72)_42%,rgba(244,240,232,0.20)_100%)] dark:bg-[linear-gradient(90deg,rgba(21,20,17,0.88)_0%,rgba(21,20,17,0.68)_46%,rgba(21,20,17,0.20)_100%)]" />
        <div className="site-container relative z-10 flex min-h-[calc(88svh-4.5rem)] items-end pb-14 pt-16 sm:min-h-[calc(92svh-4.5rem)] md:pb-24 lg:min-h-[calc(100svh-4.5rem)]">
          <div className="max-w-[54rem]">
            <span className="page-kicker">Eli Castson</span>
            <h1 className="mt-5 max-w-[14ch] md:max-w-[18ch]">
              I make distinctive businesses more intelligent.
            </h1>
            <div className="hero-copy mt-8 max-w-2xl space-y-5 body-copy">
              <p>
                Through Castson Inc., I acquire, build, and selectively advise distinctive service businesses.
              </p>
              <p>
                I work across brand, service, systems, and technology to make the promise sharper, the operation stronger, and the business less dependent on guesswork.
              </p>
            </div>
            <div className="tag-line mt-8">
              {focusTerms.map((term) => (
                <span key={term}>{term}</span>
              ))}
            </div>
            <div className="mt-10">
              <TextLink href="/contact">Start a Conversation</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p className="emphasis text-xl leading-relaxed">
                For years, I helped companies change from the outside.
              </p>
              <div className="tag-line py-2">
                <span>Creative direction</span>
                <span>Advertising</span>
                <span>Digital transformation</span>
                <span>Technology</span>
                <span>Strategy</span>
              </div>
              <p>That gave me range. It also taught me what advice cannot do when nobody has to carry the consequence.</p>
              <p className="emphasis border-l border-[var(--border-strong)] pl-5">
                Ownership changed the standard.
              </p>
              <p>
                When you carry the business yourself, there is no presentation layer between the idea and the result. The customer books or they do not. The service holds or it does not. The team is supported or it is not.
              </p>
              <p className="emphasis">That directness now shapes the work.</p>
              <p className="thumb-stop md:hidden">Ownership made the work less abstract.</p>
              <p>
                For eighteen years, Switzerland was home. It still is, in many ways. Much of my perspective, taste, and opportunity came from there.
              </p>
              <p>
                Now I work from Nova Scotia, close enough to the operating floor to know what holds, and far enough from inherited assumptions to see what should change.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <EditorialImage
              src="/images/editorial/eli-business-portrait.png"
              alt="Eli Castson in a black suit leaning against concrete architecture"
              caption="Eli Castson / advisory, ownership, operating discipline"
              aspect="aspect-[4/5]"
              className="mobile-bleed"
              objectPosition="52% center"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="site-container">
          <div className="max-w-4xl">
            <span className="section-kicker">In Practice</span>
            <h2>BraveHeart First Aid</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="body-copy">
                <p className="emphasis">
                  BraveHeart is the company I acquired and now operate.
                </p>
                <p>
                  It is practical, local, and serious. The promise is simple: when someone needs help, the people in the room should know what to do. That standard has to show up in the training, the booking path, and the way the company runs.
                </p>
              </div>
              <blockquote className="quiet-panel text-xl leading-relaxed text-[var(--foreground)]">
                “Ownership made the work less abstract.”
                <span className="mt-5 block text-sm text-[var(--muted-foreground)]">
                  Trust is operational.
                </span>
              </blockquote>
            </div>
            <div className="mt-10">
              <TextLink href="/braveheart">Explore BraveHeart</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <EditorialImage
              src="/images/editorial/scarpa-geometry.webp"
              alt="Minimal white architectural geometry with a circular opening"
              caption="Private infrastructure / authority before speed"
              aspect="aspect-[4/3] sm:aspect-[16/10]"
              className="mobile-bleed"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="section-kicker">Operating Layer</span>
            <h2>Ripley</h2>
            <div className="body-copy mt-7">
              <p className="emphasis">Ripley is proof that the boundary between operator and builder is dissolving.</p>
              <p>
                Most AI automation fails when it is added before the company is legible. Ripley works because the business came first: the standards, the approval rules, the customer path, and the owner’s judgment.
              </p>
              <p>
                It began inside BraveHeart when the work was clear enough to build what the business actually needed: booking, payments, fulfilment, reminders, customer changes, management visibility, and a controlled way for the work to move.
              </p>
              <p className="border-l border-[var(--border-strong)] pl-5">
                The value is pace with authority: intelligence directed inside a company whose rules are clear, with explicit standards for what can move and what must stop for approval.
              </p>
              <p className="emphasis">The company becomes more capable because the work has somewhere to go.</p>
            </div>
            <div className="mt-10">
              <TextLink href="/ripley">Explore Ripley</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">Selective Advisory</span>
            <h2>Senior thinking beside the person carrying the consequence.</h2>
            <div className="body-copy mt-7">
              <p>
                I take on a small amount of advisory and sparring-partner work with founders, CEOs, CMOs, owners, and operators responsible for brand, service, growth, or transition.
              </p>
              <p className="mobile-pull emphasis border-l border-[var(--border-strong)] pl-5">
                This is not agency work. It is not outsourced execution.
              </p>
              <p>
                The work is usually about the promise a company is asking customers to trust, where that trust breaks in delivery, and what has to change across brand, service, team, infrastructure, and commercial model.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="quiet-panel">
              <span className="section-kicker">Relevant when the work involves</span>
              <div className="ruled-list metadata">
                {advisoryAreas.map((area) => (
                  <div key={area}>{area}</div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">Behind the Experience</span>
            <h2>Every promise has machinery behind it.</h2>
            <div className="body-copy mt-7">
              <p>
                Most people look at a hotel, a travel service, a training company, or a product business and see the front of house.
              </p>
              <p className="emphasis text-xl leading-relaxed">
                I tend to see the handoffs underneath.
              </p>
              <p>
                A distinct brand is not just a story. It is the operating discipline that lets the same standard show up again tomorrow.
              </p>
              <p className="emphasis">That is where I like to work.</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="quiet-panel">
              <span className="section-kicker">Operating Priorities</span>
              <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 metadata">
                {operatingPriorities.map((priority) => (
                  <div key={priority} className="border-t border-[var(--border)] py-3">
                    {priority}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker">Identity</span>
            <h2>What Castson Inc. is building</h2>
            <div className="body-copy mt-7">
              <p className="emphasis">
                Castson Inc. is becoming a home for service businesses with real standards and stronger operating infrastructure behind them.
              </p>
              <p>The pattern is deliberate:</p>
              <div className="ruled-list">
                {[
                  "Find businesses with real service quality, place, reputation, or trust.",
                  "Preserve what makes them distinct.",
                  "Sharpen the promise and the standard.",
                  "Build the infrastructure behind the experience.",
                  "Make the business more capable without making it generic.",
                ].map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
              <p>BraveHeart is the operating proof.</p>
              <p>Ripley turns standards and recurring work into usable infrastructure.</p>
              <p className="emphasis">Castson.com is the record.</p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="quiet-panel">
              <span className="section-kicker">What I am trying to learn</span>
              <div className="ruled-list metadata">
                {questions.map((question, idx) => (
                  <div key={question} className="grid grid-cols-[3rem_1fr] gap-4">
                    <span className="text-[var(--primary)]">Q{idx + 1}</span>
                    <span>{question}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <span className="section-kicker">Publication Policy</span>
            <h2>How I share the work</h2>
            <div className="body-copy mt-7">
              <p>Castson.com is a selective public record.</p>
              <p>
                I share the shape of the work: the questions, moves, lessons, patterns, and mistakes once they are useful.
              </p>
              <p className="border-l border-[var(--border-strong)] pl-5">
                I do not share private information, customer data, staff matters, operational vulnerabilities, or anything that belongs inside the company.
              </p>
              <p>The goal is not content.</p>
              <p className="emphasis">The goal is commercial judgment.</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <EditorialImage
              src="/images/editorial/quiet-luxury-landscape.webp"
              alt="Quiet mountain architecture at dusk"
              caption="Restraint, judgment, and operating discipline"
              aspect="aspect-[16/9]"
              className="mobile-bleed"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-quiet border-b-0">
        <div className="site-container">
          <div className="max-w-2xl">
            <span className="section-kicker">Connect</span>
            <h2>Get in Touch</h2>
            <div className="body-copy mt-7">
              <p>
                If you own, operate, or are responsible for a business where place, service, taste, and standards matter, I would be interested in the conversation.
              </p>
              <p>
                Especially if the work involves hospitality, wellness, tourism, property, service, product, succession, or senior decision support.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/braveheart",
                label: "In Practice",
                title: "BraveHeart First Aid",
                body: "The company I acquired and operate. Practical, local, serious work.",
                action: "Explore BraveHeart",
              },
              {
                href: "/field-notes",
                label: "Insights",
                title: "Field Notes",
                body: "Short observations from operating, rebuilding, advising, and making companies sharper.",
                action: "Read Field Notes",
              },
              {
                href: "/contact",
                label: "Dialogue",
                title: "Start a Conversation",
                body: "For owners, operators, founders, senior leaders, investors, and serious collaborators.",
                action: "Start a Conversation",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-64 flex-col justify-between border-t border-[var(--border)] py-6 transition-colors hover:text-[var(--primary)]"
              >
                <div>
                  <span className="section-kicker">{item.label}</span>
                  <h3 className="mt-4">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {item.body}
                  </p>
                </div>
                <span className="editorial-link mt-8">{item.action}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
