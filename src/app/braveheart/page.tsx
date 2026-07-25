import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { EditorialImage, TextLink } from "@/components/editorial";

export const metadata: Metadata = {
  title: "BraveHeart",
  description:
    "The ownership chapter. A real operating company acquired, rebuilt, and run — with software built inside it and financial and human consequence attached to every decision.",
};

const readinessAreas = ["First aid", "Safety", "Mental health", "Resilience"];

const stillRunning = [
  "Clients still had to be served.",
  "Instructors still had to be paid.",
  "Courses still had to run.",
  "The business still had to open the next morning.",
];

const rebuilt = [
  "Booking and payments.",
  "Scheduling and instructor readiness.",
  "Certification and follow-up.",
  "Reminders and customer changes.",
  "Reporting and internal visibility.",
  "Custom tools where the software fell short.",
];

const consequence = [
  "Payroll.",
  "Clients.",
  "Standards.",
  "Mistakes.",
  "Repairs.",
  "The next morning.",
];

const referencePoints = [
  "Brand is not separate from operations.",
  "Service is not separate from systems.",
  "Technology is not separate from human experience.",
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

export default function BraveHeart() {
  return (
    <div className="site-shell home-story bh-page">
      <section className="bh-hero">
        <div className="site-container">
          <Link href="/archive" className="chapter-breadcrumb">
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
            Archive
          </Link>
          <div className="bh-hero-masthead mt-8">
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
              <span className="page-kicker">Chapter 02</span>
              <h1>BraveHeart</h1>
            </div>

            <p className="bh-hero-lede">
              The ownership chapter. A company I acquired, rebuilt, and now operate.
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
            caption="BraveHeart First Aid / a live operating company"
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
        kicker="Ownership"
        title="A real company, not an exercise."
        variant="opening"
      >
        <p>
          BraveHeart is a workplace training company — first aid, safety, mental
          health, resilience. I did not start it from a blank page.
        </p>
        <p>
          I acquired it. It came with clients, instructors, payroll, standards, and
          obligations already in motion.
        </p>
        <p className="emphasis">That distinction matters.</p>
        <p>The work was to transform a business while it kept running.</p>
        <PlainList items={stillRunning} />
        <p>
          You cannot pause a company to redesign it. Ownership makes that concrete in
          a way advising never fully can.
        </p>
      </BraveHeartSection>

      <BraveHeartSection
        number="02"
        kicker="Transformation"
        title="I rebuilt the operating system while it ran."
        variant="clarity"
        quiet
        aside={
          <EditorialImage
            src="/images/braveheart/classroom-first-aid-demo.png"
            alt="A first aid instructor demonstrating infant choking response to students in a classroom"
            caption="The client path became the operating path"
            aspect="aspect-[4/5]"
            className="mobile-bleed"
            objectPosition="50% center"
            sizes="(max-width: 1024px) 100vw, 32vw"
          />
        }
      >
        <p>First I made the business easier to see. The client path became the operating map.</p>
        <p>Then I rebuilt it, part by part, and built software where the tools fell short.</p>
        <PlainList items={rebuilt} />
        <p className="emphasis">
          Real systems, built inside a live company — not a diagram of one.
        </p>
      </BraveHeartSection>

      <BraveHeartSection
        number="03"
        kicker="Consequence"
        title="Every decision had financial and human weight."
        variant="consequence"
        quiet
      >
        <p>It is one thing to advise on change from the outside.</p>
        <p>It is another when the decision is yours and the business has to keep moving.</p>
        <PlainList items={consequence} />
        <p>
          Ownership teaches urgency and compassion at the same time. You feel the cost
          of a mistake, and you feel the people who carry it with you.
        </p>
        <p className="emphasis">It removes the abstraction.</p>
      </BraveHeartSection>

      <section className="bh-closing section section-quiet border-b-0">
        <div className="site-container">
          <div className="bh-closing-inner">
            <span className="section-kicker">What it proves</span>
            <h2>I have carried a business end to end.</h2>
            <div className="body-copy">
              <p>
                BraveHeart is not a case study. It is proof that the range is real —
                that I have owned the consequence, not only the recommendation.
              </p>
              <PlainList items={referencePoints} />
              <p className="emphasis">
                It supports the executive work. It does not replace it.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <TextLink href="/applied-ai">Next: Applied AI and Systems</TextLink>
              <TextLink href="/contact">Start a conversation</TextLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
