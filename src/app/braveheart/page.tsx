import Image from "next/image";
import { EditorialImage, PageHeader } from "@/components/editorial";

const realWork = [
  "Customers who need confidence",
  "Instructors who need support",
  "Standards that hold",
  "Schedules that work",
  "Equipment in the room",
  "Consequences outside the screen",
];

const proofMarkers = [
  "Public promise",
  "Customer path",
  "Schedule logic",
  "Delivery standards",
  "Communication rhythm",
  "Instructor readiness",
  "Demand patterns",
  "Management visibility",
];

const watchQuestions = [
  "Where is growth still being held together manually?",
  "Which habits are useful, and which are just inherited?",
  "Where does the customer path create trust or uncertainty?",
  "What does the instructor need before the room begins?",
  "How does a small service company gain leverage without lowering the human standard?",
];

export default function BraveHeart() {
  return (
    <div className="site-shell">
      <section className="section">
        <div className="site-container">
          <PageHeader
            kicker="01 / In Practice"
            title="BraveHeart"
            lede="Operating proof, not a case study."
          />

          <div className="mt-10 flex items-center justify-between gap-8 border-y border-[var(--border)] py-5 sm:mt-12 sm:py-6">
            <div className="relative w-24 shrink-0 sm:w-28">
              <Image
                src="/images/braveheart/braveheart-black-vertical.png"
                alt="BraveHeart First Aid logo"
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

            <div className="metadata min-w-0 flex-1 text-right sm:max-w-xs">
              <span className="block text-[var(--foreground)]">Operating company</span>
              <span className="mt-1 block">First aid training / Nova Scotia / acquired 2025</span>
            </div>
          </div>

          <EditorialImage
            src="/images/braveheart/instructor-group-session.png"
            alt="A BraveHeart instructor in a red shirt leading a group first aid training conversation"
            caption="BraveHeart First Aid / practical, local, serious"
            aspect="aspect-[4/3] sm:aspect-[16/7]"
            className="mobile-bleed mt-9 sm:mt-12"
            objectPosition="58% center"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="body-copy">
              <p className="emphasis text-xl leading-relaxed">
                BraveHeart is where the work has to hold in public.
              </p>
              <p>
                First aid training is not abstract. The student has to feel ready. The instructor has to be prepared. The room, equipment, timing, communication, payment, and certification path all have to work.
              </p>
              <p>
                Ownership changed the standard because weak execution has nowhere to hide.
              </p>
              <div className="ruled-list metadata">
                <div>The customer can trust the path, or they cannot.</div>
                <div>The instructor is ready to teach, or they are not.</div>
                <div>The process creates confidence, or quietly creates more work.</div>
              </div>
              <p className="emphasis text-xl leading-relaxed">
                “The work is only good if it holds after class.”
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <EditorialImage
              src="/images/braveheart/classroom-first-aid-demo.png"
              alt="A first aid instructor demonstrating infant choking response to students in a classroom"
              caption="Training standards / timing, care, communication"
              aspect="aspect-[4/5]"
              className="mobile-bleed"
              objectPosition="50% center"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
            <div className="quiet-panel mt-10">
              <span className="section-kicker">Operating proof</span>
              <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 metadata">
                {realWork.map((item) => (
                  <div key={item} className="border-t border-[var(--border)] py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <span className="section-kicker">Moral Centre</span>
            <h2>Why BraveHeart matters</h2>
            <div className="body-copy mt-7">
              <p className="emphasis">
                First aid training has a moral centre. The work is practical, local, and human.
              </p>
              <blockquote className="mobile-pull quiet-panel text-xl leading-relaxed text-[var(--foreground)]">
                “People come to class carrying a simple hope: that if someone needs help, they won’t feel frozen.”
              </blockquote>
              <p>
                That gives the business a seriousness I had not felt in much of my earlier work. The operating standard matters because the outcome matters.
              </p>
              <p className="emphasis">
                The company exists so people can be better prepared to help. That is enough reason to make it excellent.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <EditorialImage
              src="/images/braveheart/babysitter-infant-training.png"
              alt="Students smiling while holding infant training mannequins during a babysitter first aid class"
              caption="Confidence, readiness, and care in practice"
              aspect="aspect-[4/5]"
              className="mobile-bleed"
              objectPosition="50% center"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="section-kicker">Year One</span>
            <h2>Make it legible.</h2>
            <div className="body-copy mt-7">
              <p>The first year was mostly invisible work.</p>
              <p>
                What was the company really doing? Where did information live? Which decisions repeated? Where was owner judgment still holding the company together by force of memory?
              </p>
              <p>The work was to make BraveHeart legible to itself, to me, and to the people inside it.</p>
              <p className="emphasis">“A business cannot improve what it cannot see.”</p>
            </div>
            <div className="mt-8 quiet-panel">
              <span className="section-kicker">What Became Clear</span>
              <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 metadata">
                {proofMarkers.map((marker) => (
                  <div key={marker} className="border-t border-[var(--border)] py-3">
                    {marker}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="section-kicker">Year Two</span>
            <h2>Make it move.</h2>
            <div className="body-copy mt-7">
              <p>The next phase is underway.</p>
              <p>
                Now the work is to remove drag without removing judgment. Fewer repeated decisions. Better visibility. Stronger handoffs. Infrastructure that supports the people doing the work instead of asking them to carry the company in their heads.
              </p>
              <p className="mobile-pull border-l border-[var(--border-strong)] pl-5">
                The goal is not to replace people. The goal is to remove the drag around them.
              </p>
              <p>BraveHeart is clearer now, so the infrastructure behind it can become stronger.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet border-b-0">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <span className="section-kicker">The Constraint Changed</span>
            <h2>The work is now about disciplined change.</h2>
            <div className="body-copy mt-7">
              <p>The question is no longer whether the company should change. It is which work deserves priority, and at what standard.</p>
              <p>
                BraveHeart is not a case study from the outside. The decisions are live, the consequences are real, and the work has to hold.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-6">
            <div className="quiet-panel">
              <span className="section-kicker">What I am watching</span>
              <div className="ruled-list metadata">
                {watchQuestions.map((question, idx) => (
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
    </div>
  );
}
