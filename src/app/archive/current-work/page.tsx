import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TextLink } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Current Work",
  description:
    "Executive alignment, marketing transformation, client experience, applied AI, and operating systems across Canadian and Swiss organizations.",
};

const organizations = [
  "Established companies changing how they operate.",
  "Leadership teams aligning on a new direction.",
  "Businesses where technology has changed what is possible.",
  "Organizations across Canadian and Swiss markets.",
];

const questions = [
  "What should this organization become?",
  "What is the operating model getting in the way?",
  "Where should technology connect, disappear, or be built?",
  "What has to change in the team for any of it to hold?",
];

const fields = [
  "Executive alignment.",
  "Marketing transformation.",
  "Client experience.",
  "Applied AI.",
  "Operating systems.",
];

export default function CurrentWorkPage() {
  return (
    <div className="site-shell chapter-page">
      <section className="chapter-hero">
        <div className="site-container">
          <Link href="/archive" className="chapter-breadcrumb">
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
            Archive
          </Link>
          <span className="page-kicker mt-8 block">Chapter 04</span>
          <h1>Current Work</h1>
          <p className="chapter-hero-lede">
            Current work spans executive alignment, marketing transformation, client
            experience, applied AI, and operating systems across Canadian and Swiss
            organizations.
          </p>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">The organizations</span>
            <h2 className="story-heading">The work is senior and it is real.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                The engagements vary. What they share is a moment where the direction
                is changing and the operating model has to change with it.
              </p>
              <div className="ruled-list metadata">
                {organizations.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">The questions</span>
            <h2 className="story-heading">The questions rarely stay in one place.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>They usually start narrow and then touch the whole business.</p>
              <div className="ruled-list metadata">
                {questions.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
              <p className="emphasis">
                That is usually where the useful work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section border-b-0">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="section-kicker">The fields it crosses</span>
            <h2 className="story-heading">One person, held across the whole system.</h2>
            <div className="body-copy mt-7">
              <div className="ruled-list metadata">
                {fields.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
              <p>
                Clients are named where it serves the work, not the website.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <TextLink href="/about">Read the background</TextLink>
              <TextLink href="/contact">Start a conversation</TextLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
