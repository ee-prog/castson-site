import Image from "next/image";
import type { ReactNode } from "react";
import { EditorialImage, TextLink } from "@/components/editorial";

const readinessAreas = ["First aid", "Safety", "Mental health", "Resilience"];

const standardQuestions = [
  "Was the instructor ready?",
  "Was the information clear?",
  "Did the class feel calm and well held?",
  "Did people leave more confident than they arrived?",
];

const clarityQuestions = [
  "Where were clients getting uncertain?",
  "Where was the team carrying too much in memory?",
  "Where did instructors need better context?",
  "Where were learners missing simple information?",
  "Where was the operation creating noise instead of support?",
];

const operatingPath = [
  "Booking.",
  "Communication.",
  "Scheduling.",
  "Instructor readiness.",
  "Course delivery.",
  "Certification.",
  "Follow-up.",
  "Internal visibility.",
];

const platformWork = [
  "Booking",
  "Payments",
  "Registration",
  "Fulfilment",
  "Reminders",
  "Customer changes",
  "Admin visibility",
  "Integrations",
  "Internal tools",
];

const careMoments = [
  "In the timing.",
  "In the handoff.",
  "In the reminder.",
  "In the instructor's readiness.",
];

const teamEffort = [
  "Less repeated coordination.",
  "Less guessing.",
  "Less searching.",
  "Less manual follow-up.",
  "Less invisible pressure on the people doing the work.",
];

const dailyPressure = [
  "Customers are booked.",
  "Schedules change.",
  "Instructors need clarity.",
  "Certificates have to be issued.",
  "Questions need answers.",
  "People need the system to hold.",
];

const referencePoints = [
  "Brand is not separate from operations.",
  "Service is not separate from systems.",
  "Technology is not separate from human experience.",
];

const operatingProof = [
  "Acquisition.",
  "Ownership.",
  "Payroll.",
  "Clients.",
  "Standards.",
  "Systems.",
  "Mistakes.",
  "Repairs.",
  "The next morning.",
];

type BraveHeartSectionProps = {
  number: string;
  kicker: string;
  title: string;
  children: ReactNode;
  aside?: ReactNode;
  quiet?: boolean;
  variant?: string;
};

function BraveHeartSection({
  number,
  kicker,
  title,
  children,
  aside,
  quiet = false,
  variant = "default",
}: BraveHeartSectionProps) {
  return (
    <section className={`bh-section bh-section--${variant} story-section ${quiet ? "section-quiet" : ""}`}>
      <div className="site-container bh-section-grid">
        <div className="bh-section-marker">
          <span className="bh-section-number">{number}</span>
          <span className="section-kicker">{kicker}</span>
        </div>
        <div className="bh-section-title">
          <h2 className="story-heading">{title}</h2>
        </div>
        <div className="bh-section-copy body-copy">{children}</div>
        {aside ? <aside className="bh-section-aside">{aside}</aside> : null}
      </div>
    </section>
  );
}

function PlainList({ items }: { items: string[] }) {
  return (
    <div className="bh-plain-list metadata">
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

function ProofList({ items }: { items: string[] }) {
  return (
    <div className="bh-proof-list metadata">
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default function BraveHeart() {
  return (
    <div className="site-shell home-story bh-page">
      <section className="bh-hero">
        <div className="site-container">
          <div className="bh-hero-masthead">
            <div className="bh-logo-lockup" aria-hidden="true">
              <Image
                src="/images/braveheart/braveheart-black-vertical.png"
                alt=""
                width={3096}
                height={3741}
                priority
                className="h-auto w-full dark:hidden"
              />
              <Image
                src="/images/braveheart/braveheart-white-vertical.png"
                alt=""
                width={3096}
                height={3741}
                priority
                className="hidden h-auto w-full dark:block"
              />
            </div>

            <div className="bh-hero-title">
              <span className="page-kicker">01 / In Practice</span>
              <h1>BraveHeart</h1>
            </div>

            <p className="bh-hero-lede">
              A workplace training company I acquired, transformed, and now operate.
            </p>
          </div>

          <div className="bh-hero-index metadata" aria-label="BraveHeart training areas">
            {readinessAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bh-image-section">
        <div className="site-container">
          <EditorialImage
            src="/images/braveheart/instructor-group-session.png"
            alt="A BraveHeart instructor in a red shirt leading a group first aid training conversation"
            caption="BraveHeart First Aid / practical human readiness"
            aspect="aspect-[4/3] sm:aspect-[16/7]"
            className="mobile-bleed"
            objectPosition="58% center"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      <BraveHeartSection
        number="01"
        kicker="Real Business"
        title="A company that keeps the work honest."
        variant="opening"
      >
        <p>BraveHeart was not started as an advisory exercise.</p>
        <p>
          It was an operating company with clients, instructors, standards, habits,
          systems, and real obligations already in motion.
        </p>
        <p>I bought it, transformed it, and now operate it.</p>
        <p className="emphasis">That distinction matters.</p>
        <p>The work was not to invent a business from a blank page.</p>
        <p>
          It was to understand what was already valuable, strengthen what needed to hold,
          and rebuild what had started to create friction.
        </p>
        <PlainList
          items={[
            "Clients still had to be served.",
            "Courses still had to run.",
            "The business still had to open tomorrow.",
          ]}
        />
        <p>
          That is why BraveHeart is useful in my advisory work.
        </p>
        <p className="emphasis">It keeps the conversation close to reality.</p>
      </BraveHeartSection>

      <BraveHeartSection
        number="02"
        kicker="Standard"
        title="The standard is felt before it is explained."
        quiet
        variant="standard"
      >
        <p>BraveHeart prepares people for situations they hope never happen.</p>
        <p>That makes the standard simple.</p>
        <div className="bh-statement-list">
          <p>People should leave clearer than they arrived.</p>
          <p>More capable.</p>
          <p>More ready to act.</p>
          <p>Less alone with the moment.</p>
        </div>
        <p>A training company cannot hide behind language.</p>
        <p>The client feels the standard in the clarity of the booking.</p>
        <p>The instructor feels it in the support around the class.</p>
        <p>The learner feels it in the room.</p>
        <PlainList items={standardQuestions} />
        <p className="emphasis">That is the work.</p>
        <p>Not only what is promised.</p>
        <p className="emphasis">What is experienced.</p>
      </BraveHeartSection>

      <BraveHeartSection
        number="03"
        kicker="Clarity"
        title="Transformation began with seeing the business clearly."
        variant="clarity"
        quiet
        aside={
          <EditorialImage
            src="/images/braveheart/classroom-first-aid-demo.png"
            alt="A first aid instructor demonstrating infant choking response to students in a classroom"
            caption="Trust, readiness, and support in the room"
            aspect="aspect-[4/5]"
            className="mobile-bleed"
            objectPosition="50% center"
            sizes="(max-width: 1024px) 100vw, 32vw"
          />
        }
      >
        <p>Before anything could be improved, the business had to become easier to see.</p>
        <PlainList items={clarityQuestions} />
        <p>A business cannot improve what it cannot see.</p>
        <p className="emphasis">So the client experience became the operating map.</p>
      </BraveHeartSection>

      <BraveHeartSection
        number="04"
        kicker="Operating Map"
        title="The client path became the operating path."
        variant="operating"
        quiet
      >
        <PlainList items={operatingPath} />
        <p>Each part had to support the same promise:</p>
        <p>
          Help people feel prepared, cared for, and clear about what happens next.
        </p>
        <p>The work was not to make BraveHeart feel more digital.</p>
        <p className="emphasis">It was to make the experience feel more considered.</p>
      </BraveHeartSection>

      <BraveHeartSection
        number="05"
        kicker="Systems"
        title="Technology only mattered where it reduced friction."
        variant="systems"
        quiet
      >
        <p>The existing tools helped reveal the shape of the business.</p>
        <p className="emphasis">Then the business outgrew them.</p>
        <PlainList items={platformWork} />
        <p>The point was never technology for its own sake.</p>
        <p>The point was a business that could hold its standard with less strain.</p>
        <PlainList
          items={[
            "For the client.",
            "For the team.",
            "For the instructor.",
            "For the person who walks into class unsure of what they will be asked to do.",
          ]}
        />
        <p className="emphasis">Technology served the promise.</p>
        <p>Not the other way around.</p>
      </BraveHeartSection>

      <BraveHeartSection
        number="06"
        kicker="Team"
        title="The team should not have to carry the business in their heads."
        variant="team"
        quiet
      >
        <p className="emphasis">Good operations reduce the wrong kind of effort.</p>
        <PlainList items={teamEffort} />
        <p>The goal is not to remove judgment.</p>
        <p>The goal is to give judgment better support.</p>
        <p>
          When the business is clearer, the team can spend more energy on the work that
          actually needs them.
        </p>
        <p className="emphasis">That is where better operations become better care.</p>
      </BraveHeartSection>

      <BraveHeartSection
        number="07"
        kicker="Care"
        title="Clients feel the system, even when they never see it."
        variant="care"
        quiet
        aside={
          <EditorialImage
            src="/images/braveheart/babysitter-infant-training.png"
            alt="Students smiling while holding infant training mannequins during a babysitter first aid class"
            caption="The machinery underneath should strengthen the human experience"
            aspect="aspect-[4/5]"
            className="mobile-bleed"
            objectPosition="50% center"
            sizes="(max-width: 1024px) 100vw, 32vw"
          />
        }
      >
        <p>They feel it in the timing.</p>
        <PlainList items={careMoments} />
        <p>In the quiet sense that someone has thought ahead.</p>
        <p>Most of this is not dramatic.</p>
        <p className="emphasis">That is why it matters.</p>
        <p>A better business is often felt in ordinary moments done properly.</p>
      </BraveHeartSection>

      <BraveHeartSection
        number="08"
        kicker="Consequence"
        title="The standard has to survive the day."
        variant="consequence"
        quiet
      >
        <p>
          It is easy to talk about brand, service, systems, and technology from the
          outside.
        </p>
        <p>It is different when the business has to keep moving.</p>
        <PlainList items={dailyPressure} />
        <p>BraveHeart matters in my work because it removes abstraction.</p>
        <p className="emphasis">It is a company I bought, changed, and continue to carry.</p>
      </BraveHeartSection>

      <BraveHeartSection
        number="09"
        kicker="Reference Point"
        title="BraveHeart is not a case study. It is a reference point."
        variant="reference"
        quiet
      >
        <p>It gives the people I work with a simple way to understand how I think.</p>
        <PlainList items={referencePoints} />
        <p>
          The promise, the process, the people, and the tools underneath have to move
          together.
        </p>
        <p>That is true in a training company.</p>
        <p>It is true in hospitality.</p>
        <p>
          It is true in any business where the experience depends on trust, timing,
          clarity, and care.
        </p>
      </BraveHeartSection>

      <section className="bh-closing section section-quiet border-b-0">
        <div className="site-container">
          <div className="bh-closing-inner">
            <span className="section-kicker">Operating Proof</span>
            <h2>I am an operator speaking with other operators.</h2>
            <div className="body-copy">
              <p>
                BraveHeart is one of the places where my work carries full consequence.
              </p>
              <ProofList items={operatingProof} />
              <p className="emphasis">That changes the conversation.</p>
            </div>
            <TextLink href="/contact">Start a conversation</TextLink>
          </div>
        </div>
      </section>
    </div>
  );
}
