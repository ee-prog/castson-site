import Image from "next/image";
import type { ReactNode } from "react";
import { EditorialImage, TextLink } from "@/components/editorial";

const readinessAreas = ["First aid", "Safety", "Mental health", "Resilience"];

const clarityQuestions = [
  "Where did clients get uncertain?",
  "Where did the team have to remember too much?",
  "Where did instructors need better context?",
  "Where did learners need more clarity?",
  "Where did the system create noise instead of support?",
];

const operatingPath = [
  "Booking",
  "Communication",
  "Scheduling",
  "Instructor readiness",
  "Course delivery",
  "Certification",
  "Follow-up",
  "Internal visibility",
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

const lessEffort = [
  "Less repeated coordination.",
  "Less guessing.",
  "Less searching.",
  "Less manual follow-up.",
  "Less invisible pressure on the people doing the work.",
];

const careMoments = [
  "In the timing.",
  "In the clarity.",
  "In the handoff.",
  "In the reminder.",
  "In the instructor's readiness.",
  "In the calm sense that someone has thought ahead.",
];

const dailyPressure = [
  "Customers are booked.",
  "Instructors need clarity.",
  "Schedules change.",
  "Certificates have to be issued.",
  "Questions need answers.",
  "The team needs the system to hold.",
];

const handoffProof = [
  "A client knows what to book.",
  "A coordinator sees what needs attention.",
  "An instructor has the right context.",
  "A learner arrives with fewer questions.",
  "A certificate is handled without confusion.",
  "A reminder happens before someone has to chase it.",
];

type BraveHeartSectionProps = {
  number: string;
  kicker: string;
  title: string;
  children: ReactNode;
  aside?: ReactNode;
  quiet?: boolean;
};

function BraveHeartSection({
  number,
  kicker,
  title,
  children,
  aside,
  quiet = false,
}: BraveHeartSectionProps) {
  return (
    <section className={`bh-section story-section ${quiet ? "section-quiet" : ""}`}>
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

function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="bh-rule-list metadata">
      {items.map((item, idx) => (
        <div key={item}>
          <span>{String(idx + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
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
              A workplace training company rebuilt around practical human readiness.
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
        kicker="Real People"
        title="BraveHeart is where the work met real people."
      >
        <p className="emphasis">
          BraveHeart helps organizations prepare people for moments that matter.
        </p>
        <PlainList items={readinessAreas.map((area) => `${area}.`)} />
        <p>The work is practical, human, and serious.</p>
        <p>
          People come to training with a simple hope: that when something happens,
          they will not feel frozen.
        </p>
        <p className="mobile-pull emphasis">
          That is enough reason to make the business excellent.
        </p>
      </BraveHeartSection>

      <BraveHeartSection
        number="02"
        kicker="Standard"
        title="The standard has to be felt."
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
        <p>A training company cannot hide behind strategy.</p>
        <div className="bh-statement-list">
          <p>The client has to trust the training.</p>
          <p>The instructor has to feel supported.</p>
          <p>The learner has to leave with more confidence than they arrived with.</p>
        </div>
        <p>
          The system underneath has to help all of that happen with less friction.
        </p>
        <p className="emphasis">
          BraveHeart matters because the work has to hold in real life.
        </p>
      </BraveHeartSection>

      <BraveHeartSection
        number="03"
        kicker="Clarity"
        title="The experience had to become clearer."
      >
        <p>The first work was not automation.</p>
        <p className="emphasis">It was understanding.</p>
        <NumberedList items={clarityQuestions} />
        <p>A business cannot improve what it cannot see.</p>
        <p className="emphasis">
          Before anything could move faster, the experience had to become more legible.
        </p>
      </BraveHeartSection>

      <BraveHeartSection
        number="04"
        kicker="Operating Path"
        title="The client path became the operating path."
        quiet
      >
        <PlainList items={operatingPath.map((item) => `${item}.`)} />
        <p>
          Each part had to support the same promise: help organizations and learners
          feel prepared, cared for, and clear about what happens next.
        </p>
        <p>The work was not to make BraveHeart feel more digital.</p>
        <p className="emphasis">
          It was to make the experience feel more considered.
        </p>
      </BraveHeartSection>

      <BraveHeartSection
        number="05"
        kicker="Systems"
        title="The systems underneath had to catch up."
      >
        <p>
          Once the business became clearer, the platform compromises became clearer too.
        </p>
        <p>Generic tools helped reveal the shape of the work.</p>
        <p className="emphasis">Then the work outgrew the tools.</p>
        <PlainList items={platformWork} />
        <p>Not technology for display.</p>
        <p className="emphasis">Technology in service of the standard.</p>
      </BraveHeartSection>

      <BraveHeartSection
        number="06"
        kicker="Team"
        title="The team should not have to carry the business in their heads."
        quiet
      >
        <p className="emphasis">Good systems reduce the wrong kind of effort.</p>
        <PlainList items={lessEffort} />
        <p>The goal is not to remove judgment.</p>
        <p>The goal is to give judgment better support.</p>
        <p>A clearer business is easier to operate.</p>
        <p className="emphasis">It is also easier to trust.</p>
      </BraveHeartSection>

      <BraveHeartSection
        number="07"
        kicker="Care"
        title="Better operations should feel like better care."
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
        <p>The client may never see the operating system.</p>
        <p className="emphasis">They feel it anyway.</p>
        <PlainList items={careMoments} />
        <p>That is the point of the work.</p>
        <p className="emphasis">
          The machinery underneath should make the human experience stronger.
        </p>
      </BraveHeartSection>

      <BraveHeartSection
        number="08"
        kicker="Consequence"
        title="The business has to open tomorrow."
        quiet
      >
        <p>
          It is easy to talk about brand, service, systems, and technology from the outside.
        </p>
        <p className="emphasis">
          It is different when the business has to keep moving.
        </p>
        <PlainList items={dailyPressure} />
        <p>BraveHeart sharpened the work because it removed abstraction.</p>
        <p className="emphasis">The standard had to survive the day.</p>
      </BraveHeartSection>

      <BraveHeartSection
        number="09"
        kicker="Handoff"
        title="The proof is in the handoff."
      >
        <p>A better business is felt in ordinary moments.</p>
        <NumberedList items={handoffProof} />
        <p>None of this is dramatic.</p>
        <p>That is why it matters.</p>
        <p className="emphasis">
          The experience becomes calmer, clearer, and easier to trust.
        </p>
      </BraveHeartSection>

      <section className="bh-closing section section-quiet border-b-0">
        <div className="site-container">
          <div className="bh-closing-inner">
            <span className="section-kicker">Operating Proof</span>
            <h2>BraveHeart is proof that the work can become real.</h2>
            <div className="body-copy">
              <p>
                A distinctive service business can become clearer, stronger, more
                trusted, and more capable when the promise, the process, the people,
                and the systems underneath begin to move together.
              </p>
            </div>
            <TextLink href="/contact">Start a conversation</TextLink>
          </div>
        </div>
      </section>
    </div>
  );
}
