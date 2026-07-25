import type { Metadata } from "next";
import { PageHeader } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "How this site is built — typography, design direction, and the stack behind it.",
};

const buildTools = ["Next.js", "TypeScript", "Tailwind CSS"];
const infrastructure = ["Vercel", "GitHub", "Resend"];
const designTools = ["Figma", "Lucide icons"];
const workspaceTools = ["Antigravity"];

export default function Colophon() {
  return (
    <div className="site-shell colophon-page">
      <section className="section colophon-hero">
        <div className="site-container">
          <PageHeader kicker="Colophon" title="Colophon" />
        </div>
      </section>

      <section className="section border-b-0 colophon-body">
        <div className="site-container">
          <div className="body-copy">
            <p className="emphasis text-xl leading-relaxed">
              The personal site of Eli Castson — built with the same attention I bring
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
                  <p>Applied AI is the systems layer behind the work.</p>
                  <p>
                    It keeps briefs, drafts, research, decisions, working files, and repeatable rules inspectable instead of scattered.
                  </p>
                  <p>The point is continuity: work held, revised, improved, and made visible over time.</p>
                </div>
              </div>
              <div>
                <span className="section-kicker">Intent</span>
                <p>
                  Not a portfolio in the usual sense. A place to confirm an instinct: that the person you met leads transformation across people, business, and technology — and could take on a significant executive mandate.
                </p>
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
