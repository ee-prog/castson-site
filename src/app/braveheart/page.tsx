import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { EditorialImage, TextLink } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Braveheart",
  description:
    "The ownership chapter. An established Nova Scotia training company acquired, transformed and operated, rebuilding the systems while protecting the human experience, and now growing without losing the standard.",
};

const keepRunning = [
  "Courses still had to run.",
  "Clients still needed answers.",
  "Instructors still needed support.",
  "Payroll still had to be met.",
];

const scaleQuestions = [
  "How should the course portfolio evolve?",
  "How should instructors be recruited, developed and supported?",
  "Which decisions should remain central, and which should move closer to the work?",
  "How can technology support a larger operation without making the experience impersonal?",
  "Could a model such as franchising extend the company responsibly?",
];

const compassionFor = [
  "For the people expected to work inside changing systems.",
  "For the leaders carrying responsibility for the outcome.",
  "For the client who experiences every internal decision as a moment of clarity, confidence, friction or doubt.",
];

const fullChain = [
  "The direction of the company.",
  "The model for growth.",
  "The systems underneath it.",
  "The people doing the work.",
  "The experience delivered in the room.",
];

export default function BraveheartPage() {
  return (
    <div className="site-shell chapter-page">
      {/* Hero — cinematic, the real work */}
      <section className="bh-cinema-hero">
        <Image
          src="/images/braveheart/instructor-group-session.png"
          alt="A Braveheart instructor leading a group first aid training session"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "58% center" }}
        />
        <div className="site-container pb-16 pt-28 md:pb-20">
          <Link
            href="/archive"
            className="cinema-dim inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
            Archive
          </Link>
          <p className="cinema-dim mt-7 text-[0.625rem] font-medium uppercase tracking-[0.22em]">
            Chapter 02
          </p>
          <h1 className="mt-3">Braveheart</h1>
          <p className="mt-6 max-w-xl font-display text-xl leading-snug md:text-2xl">
            An established Nova Scotia training company I acquired, transformed and
            continue to operate.
          </p>
          <p className="cinema-dim mt-8 max-w-2xl text-[0.6875rem] uppercase leading-relaxed tracking-[0.12em]">
            18 years established &nbsp;·&nbsp; Tens of thousands trained each year
            &nbsp;·&nbsp; A broad roster of courses and instructors
          </p>
        </div>
      </section>

      {/* Stewardship */}
      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Stewardship</span>
            <h2 className="story-heading">The company was already trusted.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>Braveheart was not a blank page.</p>
              <p>
                It came with an excellent reputation, established clients, experienced
                instructors and a standard people already valued.
              </p>
              <p className="emphasis">
                The responsibility was to change the company without losing what had
                made it trusted.
              </p>
              <div className="ruled-list metadata">
                {keepRunning.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
              <p>
                The business had to keep delivering while the operation underneath it
                was being rebuilt: stewardship and transformation at the same time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The performance — image + text pairing */}
      <section className="section section-quiet">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="section-kicker">The performance</span>
            <h2 className="story-heading">
              The system should protect the human experience.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <EditorialImage
              src="/images/braveheart/classroom-first-aid-demo.png"
              alt="A first aid instructor demonstrating infant choking response to students in a classroom"
              caption="The instructor's attention belongs in the room"
              aspect="aspect-[4/5]"
              className="mobile-bleed"
              objectPosition="50% center"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
            <div className="body-copy">
              <p>Training is delivered person to person.</p>
              <p>
                I think of an instructor much like a performer. Their attention belongs
                in the room: reading the learners, adjusting the pace, building
                confidence and helping people feel ready to act.
              </p>
              <p className="emphasis">The operation is everything backstage.</p>
              <p>
                Registration, scheduling, materials, learner information, certification
                and follow-up should not occupy the instructor&rsquo;s attention while
                they are preparing to teach.
              </p>
              <p className="emphasis">
                The system should carry what surrounds the performance so the instructor
                can focus on the work only a human can do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The operating map — client experience + rebuild */}
      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">The client path</span>
            <h2 className="story-heading">The client path became the operating map.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                From the first enquiry through booking, training, certification and
                follow-up, each handoff reveals something about the organization beneath
                it.
              </p>
              <p>
                Unclear communication may point to uncertain ownership. A delayed
                certificate may reveal disconnected information. Repeated questions often
                indicate that a process has been designed around the company rather than
                the client.
              </p>
              <p>
                So I rebuilt how information moved, how work became visible, where
                decisions sat and what could happen automatically, from registration
                and scheduling through communication, reporting, certification and
                follow-up. Some of it meant integrating existing systems, some meant
                designing software around the company&rsquo;s actual work, and some meant
                changing roles and responsibilities.
              </p>
              <p className="emphasis">The visible result is technology.</p>
              <p>
                The deeper result is more room for people to think, notice, respond and
                care. Technology should return people to the human work that matters
                most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width human moment */}
      <section className="bh-image-section">
        <div className="site-container">
          <EditorialImage
            src="/images/braveheart/babysitter-infant-training.png"
            alt="Students smiling while practising with infant training mannequins in a Braveheart class"
            caption="More room for people to think, notice, respond and care"
            aspect="aspect-[4/3] sm:aspect-[16/7]"
            className="mobile-bleed"
            objectPosition="50% center"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Scale — with the growth questions as a numbered sequence */}
      <section className="section section-quiet story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Scale</span>
            <h2 className="story-heading">The next question is scale.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p>
                Braveheart now trains tens of thousands of people each year through a
                broad portfolio of courses and instructors.
              </p>
              <p>
                The first challenge was to modernize the operation without weakening the
                experience.
              </p>
              <p className="emphasis">
                The challenge now is to grow without weakening the standard.
              </p>
            </div>
            <ol className="mt-9">
              {scaleQuestions.map((q, i) => (
                <li
                  key={q}
                  className="grid grid-cols-[2.25rem_1fr] gap-4 border-t border-[var(--border)] py-4 last:border-b"
                >
                  <span className="metadata text-[var(--primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug text-[var(--foreground)]">{q}</span>
                </li>
              ))}
            </ol>
            <div className="body-copy mt-8">
              <p>Growth is not simply more courses, instructors or locations.</p>
              <p className="emphasis">
                The operating model has to carry the reputation. The next stage is to
                make Braveheart more scalable without making it less human, or less
                Braveheart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section className="section story-section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-kicker">Ownership</span>
            <h2 className="story-heading">Ownership changed the judgment.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p className="emphasis">Ownership adds urgency.</p>
              <p>
                Plans cannot remain theoretical when decisions affect clients,
                instructors, employees, cash flow and what happens the following
                morning. Test sooner. Learn sooner. Improve the plan before the cost of
                being wrong becomes larger.
              </p>
              <p className="emphasis">Ownership also adds compassion.</p>
              <div className="ruled-list metadata">
                {compassionFor.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finale — the whole chain */}
      <section className="section section-quiet border-b-0">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="section-kicker">The whole chain</span>
            <h2 className="story-heading">
              At Braveheart, I hold the full chain together.
            </h2>
            <div className="mt-10 border-t border-[var(--border-strong)]">
              {fullChain.map((item) => (
                <p
                  key={item}
                  className="border-b border-[var(--border)] py-4 font-display text-xl leading-tight text-[var(--foreground)] sm:text-2xl"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="body-copy mt-9">
              <p>
                The company has to grow. The system has to hold. And the person in the
                room still has to feel cared for.
              </p>
              <p className="emphasis">That is the work.</p>
            </div>
            <div className="mt-10">
              <TextLink href="/applied-ai">Next chapter: Applied AI and Systems</TextLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
