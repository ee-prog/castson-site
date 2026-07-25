import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EditorialImage, TextLink } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Disruption Officer",
  description:
    "The defining mandate — responsible for changing how a global media organization worked. Redesign the operating model, modernize the technology, restructure the teams, and lead the cultural shift.",
};

export default function DisruptionOfficerPage() {
  return (
    <div className="site-shell chapter-page">
      <section className="chapter-hero">
        <div className="site-container">
          <Link href="/archive" className="chapter-breadcrumb">
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
            Archive
          </Link>
          <span className="page-kicker mt-8 block">Chapter 01</span>
          <h1>Disruption Officer</h1>
          <p className="chapter-hero-lede">
            The title was unusual. The mandate was literal.
          </p>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container">
          <p className="story-heading max-w-4xl">
            I was responsible for changing how a global media organization worked — not
            improving one isolated function from the side.
          </p>
        </div>
      </section>

      <section className="bh-image-section">
        <div className="site-container">
          <EditorialImage
            src="/images/editorial/marble-operating-layer.webp"
            alt="A marble monolith standing on a frozen lakeshore at dusk"
            caption="The organization was the system"
            aspect="aspect-[4/3] sm:aspect-[16/7]"
            className="mobile-bleed"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">The role</span>
            <h2 className="story-heading">The mandate had a name.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                By then, I had already moved from psychology into marketing, technology,
                data and client experience.
              </p>
              <p className="emphasis">
                The boundaries between those disciplines had become the problem.
              </p>
              <p>
                A better client experience required different systems behind it. New
                technology could not succeed inside outdated roles. Leaders could not
                steer the business when reporting arrived late or data remained
                fragmented.
              </p>
              <p>The organization had changed.</p>
              <p className="emphasis">Its operating model had not.</p>
              <p>
                Disruption Officer was the first role that formally brought the whole
                question together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">The method</span>
            <h2 className="story-heading">The organization was the system.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                The work moved across leadership, teams, technology, data and delivery.
              </p>
              <p className="emphasis">I began with the people.</p>
              <p>
                How were they doing? Did their roles still make sense? Where were
                capable people compensating for broken processes? What looked like
                resistance but was really uncertainty, overload or a loss of trust?
              </p>
              <p className="emphasis">Then the business.</p>
              <p>
                What were we trying to become? What did clients need to experience?
                Where was the current model creating delay, duplication or ambiguity?
              </p>
              <p className="emphasis">Then the technology.</p>
              <p>
                What should connect? What should disappear? What needed to become
                visible, automated or rebuilt?
              </p>
              <p>I moved continuously between all three.</p>
              <p className="mobile-pull emphasis">
                People. Business. Technology. Changed together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">The harder work</span>
            <h2 className="story-heading">Technology was rarely the hardest part.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                The harder work was helping managers lead differently, enabling teams to
                work across old boundaries and making change understandable enough that
                people could participate in it rather than defend themselves from it.
              </p>
              <p>
                The visible work included executive reporting, data consolidation,
                project delivery, team design and new operating practices.
              </p>
              <p>They were not separate projects.</p>
              <p className="emphasis">
                They were different parts of the same organizational system.
              </p>

              <div className="quiet-panel mt-2">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <span className="section-kicker">On-time delivery</span>
                    <p className="mt-3 font-display text-3xl leading-none text-[var(--foreground)] sm:text-4xl">
                      67% → 98%
                    </p>
                  </div>
                  <div>
                    <span className="section-kicker">Attrition</span>
                    <p className="mt-3 font-display text-3xl leading-none text-[var(--foreground)] sm:text-4xl">
                      35% → 18%
                    </p>
                  </div>
                </div>
              </div>

              <p>
                The numbers mattered. More important was what they reflected: clearer
                information, more coherent teams and a more reliable organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">The pattern</span>
            <h2 className="story-heading">The title ended. The mandate did not.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                I still encounter the same underlying pattern: organizations constrained
                by systems, roles and habits designed for an earlier version of the
                business.
              </p>
              <p>
                Sometimes it appears through AI. Sometimes through growth, reporting,
                marketing, client experience or team structure.
              </p>
              <p>The surface changes. The work underneath remains the same:</p>
              <p className="emphasis">
                Understand the whole system. Find the simpler answer. Help the
                organization become capable of what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section border-b-0">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="section-kicker">Why it defines the work</span>
            <h2 className="story-heading">The range is not a market invention.</h2>
            <div className="body-copy mt-7">
              <p className="emphasis">It was the job.</p>
            </div>
            <div className="mt-10">
              <TextLink href="/braveheart">Next chapter — BraveHeart</TextLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
