import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "How this site is built: typography, design direction, and the stack behind it.",
};

const buildTools = ["Next.js", "TypeScript", "Tailwind CSS"];
const infrastructure = ["Vercel", "GitHub", "Resend"];
const designTools = ["Lucide icons"];
const workspaceTools = ["Ripley", "Claude Code", "Fable 5"];

export default function Colophon() {
  return (
    <div className="site-shell colophon-page">
      <section className="section colophon-hero">
        <Image
          src="/images/editorial/light-study.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="editorial-hero-image colophon-hero-image"
        />
        <div className="site-container">
          <PageHeader kicker="Colophon" title="Colophon" />
        </div>
      </section>

      <section className="section border-b-0 colophon-body">
        <div className="site-container">
          <div className="body-copy">
            <p className="emphasis text-xl leading-relaxed">
              The personal site of Eli Castson, built with the same attention I bring
              to the work it describes.
            </p>

            <p>Built with Next.js, TypeScript, Tailwind CSS, and Vercel.</p>

            <div className="colophon-panel space-y-8">
              <div>
                <span className="section-kicker">Typography</span>
                <p>Atacama for display. Helix for everything else.</p>
              </div>
              <div>
                <span className="section-kicker">Design Direction</span>
                <p>Swiss-influenced, mobile-first, restrained, text-forward.</p>
              </div>
              <div>
                <span className="section-kicker">Applied AI</span>
                <div className="space-y-4">
                  <p>
                    This site is written, revised and maintained through Ripley, the
                    AI scaffold described in the archive. Today it mostly runs on
                    Claude; by design, it is agnostic to model and runtime.
                  </p>
                  <p>
                    The briefs, drafts, decisions and repeatable rules behind it stay
                    inspectable instead of scattered.
                  </p>
                  <p>The point is continuity: work held, revised, improved, and made visible over time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              ["Build", buildTools],
              ["Infrastructure", infrastructure],
              ["Design", designTools],
              ["Workspace", workspaceTools],
            ].map(([label, items]) => (
              <div key={label as string}>
                <span className="section-kicker">{label as string}</span>
                <div className="ruled-list metadata">
                  {(items as string[]).map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
