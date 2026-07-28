import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TextLink } from "@/components/editorial";
import styles from "./page.module.css";

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
    <article className={`${styles.page} site-shell`}>
      <header className={styles.hero}>
        <Image
          src="/images/braveheart/editorial/hero-instructor.avif"
          alt="A BraveHeart instructor in a red polo leading a relaxed group discussion"
          fill
          preload
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroScrim} aria-hidden="true" />

        <div className={styles.heroInner}>
          <Link href="/archive" className={styles.backLink}>
            <ArrowLeft aria-hidden="true" />
            Archive
          </Link>

          <div className={styles.heroCopy}>
            <p className={styles.kickerLight}>Chapter 02</p>
            <h1 className={styles.heroTitle}>Braveheart</h1>
            <p className={styles.heroLede}>
              An established Nova Scotia training company I acquired, transformed and
              continue to operate.
            </p>
            <p className={styles.heroFacts}>
              18 years established &nbsp;·&nbsp; Tens of thousands trained each year
              &nbsp;·&nbsp; A broad roster of courses and instructors
            </p>
          </div>
        </div>
      </header>

      <section className={`${styles.section} ${styles.stewardship}`}>
        <div className={styles.grid}>
          <header className={styles.chapterHeader}>
            <p className={styles.kicker}>Stewardship</p>
            <h2 className={styles.sectionTitle}>The company was already trusted.</h2>
          </header>

          <div className={`${styles.body} ${styles.stewardshipBody}`}>
            <p>Braveheart was not a blank page.</p>
            <p>
              It came with an excellent reputation, established clients, experienced
              instructors and a standard people already valued.
            </p>
            <p className={styles.emphasis}>
              The responsibility was to change the company without losing what had
              made it trusted.
            </p>
            <ul className={styles.obligationList}>
              {keepRunning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              The business had to keep delivering while the operation underneath it
              was being rebuilt: stewardship and transformation at the same time.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.performance}`}>
        <div className={`${styles.grid} ${styles.performanceGrid}`}>
          <header className={styles.performanceHeader}>
            <p className={styles.kickerDark}>The performance</p>
            <h2 className={`${styles.sectionTitle} ${styles.titleOnDark}`}>
              The system should protect the human experience.
            </h2>
          </header>

          <figure className={styles.performanceFigure}>
            <div className={styles.performanceImageFrame}>
              <Image
                src="/images/braveheart/editorial/instructor-room.avif"
                alt="An instructor laughing with learners during a first aid class"
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 58vw, 52vw"
                className={styles.coverImage}
              />
            </div>
            <figcaption className={styles.captionDark}>
              The instructor&apos;s attention belongs in the room
            </figcaption>
          </figure>

          <div className={`${styles.body} ${styles.bodyOnDark} ${styles.performanceBody}`}>
            <p>Training is delivered person to person.</p>
            <p>
              I think of an instructor much like a performer. Their attention belongs
              in the room: reading the learners, adjusting the pace, building
              confidence and helping people feel ready to act.
            </p>
            <p className={styles.emphasisOnDark}>
              The operation is everything backstage.
            </p>
            <p>
              Registration, scheduling, materials, learner information, certification
              and follow-up should not occupy the instructor&rsquo;s attention while
              they are preparing to teach.
            </p>
            <p className={styles.emphasisOnDark}>
              The system should carry what surrounds the performance so the instructor
              can focus on the work only a human can do.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.clientPath}`}>
        <div className={styles.grid}>
          <header className={styles.clientHeader}>
            <p className={styles.kicker}>The client path</p>
            <h2 className={styles.sectionTitle}>
              The client path became the operating map.
            </h2>
          </header>

          <div className={`${styles.body} ${styles.clientBody}`}>
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
            <p className={styles.emphasis}>The visible result is technology.</p>
            <p>
              The deeper result is more room for people to think, notice, respond and
              care. Technology should return people to the human work that matters
              most.
            </p>
          </div>

          <div className={styles.detailSequence}>
            <div className={styles.detailLandscape}>
              <Image
                src="/images/braveheart/editorial/bandaging-training.avif"
                alt="Gloved hands guiding a learner through bandaging a wrist"
                fill
                sizes="(max-width: 767px) 100vw, 47vw"
                className={styles.coverImage}
              />
            </div>
            <div className={styles.detailPortrait}>
              <Image
                src="/images/braveheart/editorial/tourniquet-training.avif"
                alt="An instructor fitting a training tourniquet to a learner's arm"
                fill
                sizes="(max-width: 767px) 72vw, 31vw"
                className={styles.coverImage}
              />
            </div>
          </div>
        </div>
      </section>

      <figure className={styles.humanPause}>
        <div className={styles.humanPauseFrame}>
          <Image
            src="/images/braveheart/editorial/classroom-preparation.avif"
            alt="An instructor preparing first aid equipment while learners get ready around the room"
            fill
            sizes="100vw"
            className={styles.humanPauseImage}
          />
        </div>
        <figcaption className={styles.pauseCaption}>
          More room for people to think, notice, respond and care
        </figcaption>
      </figure>

      <section className={`${styles.section} ${styles.scale}`}>
        <div className={styles.grid}>
          <header className={styles.scaleHeader}>
            <p className={styles.kicker}>Scale</p>
            <h2 className={styles.sectionTitle}>The next question is scale.</h2>
          </header>

          <div className={styles.scaleImageFrame}>
            <Image
              src="/images/braveheart/editorial/marine-class.avif"
              alt="A marine first aid instructor teaching a small working crew aboard a vessel"
              fill
              sizes="(max-width: 767px) 92vw, (max-width: 1199px) 56vw, 50vw"
              className={styles.scaleImage}
            />
          </div>

          <div className={styles.scaleContent}>
            <div className={styles.body}>
              <p>
                Braveheart now trains tens of thousands of people each year through a
                broad portfolio of courses and instructors.
              </p>
              <p>
                The first challenge was to modernize the operation without weakening the
                experience.
              </p>
              <p className={styles.emphasis}>
                The challenge now is to grow without weakening the standard.
              </p>
            </div>

            <ol className={styles.questionList}>
              {scaleQuestions.map((question, index) => (
                <li key={question}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{question}</p>
                </li>
              ))}
            </ol>

            <div className={styles.body}>
              <p>Growth is not simply more courses, instructors or locations.</p>
              <p className={styles.emphasis}>
                The operating model has to carry the reputation. The next stage is to
                make Braveheart more scalable without making it less human, or less
                Braveheart.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.ownership}`}>
        <div className={`${styles.grid} ${styles.ownershipGrid}`}>
          <header className={styles.ownershipHeader}>
            <p className={styles.kickerDark}>Ownership</p>
            <h2 className={`${styles.sectionTitle} ${styles.titleOnDark}`}>
              Ownership changed the judgment.
            </h2>
          </header>

          <div className={`${styles.body} ${styles.bodyOnDark} ${styles.ownershipBody}`}>
            <p className={styles.emphasisOnDark}>Ownership adds urgency.</p>
            <p>
              Plans cannot remain theoretical when decisions affect clients,
              instructors, employees, cash flow and what happens the following
              morning. Test sooner. Learn sooner. Improve the plan before the cost of
              being wrong becomes larger.
            </p>
            <p className={styles.emphasisOnDark}>Ownership also adds compassion.</p>
            <ul className={styles.compassionList}>
              {compassionFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.finalSection}`}>
        <div className={styles.grid}>
          <header className={styles.finalHeader}>
            <p className={styles.kicker}>The whole chain</p>
            <h2 className={styles.finalTitle}>
              At Braveheart, I hold the full chain together.
            </h2>
          </header>

          <div className={styles.chainList}>
            {fullChain.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className={`${styles.body} ${styles.finalBody}`}>
            <p>
              The company has to grow. The system has to hold. And the person in the
              room still has to feel cared for.
            </p>
            <p className={styles.emphasis}>That is the work.</p>
          </div>

          <div className={styles.nextChapter}>
            <TextLink href="/applied-ai">Next chapter: Applied AI and Systems</TextLink>
          </div>
        </div>
      </section>
    </article>
  );
}
