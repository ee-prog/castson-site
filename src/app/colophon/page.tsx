import { PageHeader } from "@/components/editorial";

const buildTools = ["Next.js", "TypeScript", "Tailwind CSS"];
const infrastructure = ["Vercel", "GitHub", "Resend"];
const designTools = ["Figma", "Lucide icons"];
const workspaceTools = ["Antigravity"];

export default function Colophon() {
  return (
    <div className="site-shell">
      <section className="section">
        <div className="site-container">
          <PageHeader kicker="07 / Identity" title="Colophon" />
        </div>
      </section>

      <section className="section border-b-0">
        <div className="site-container max-w-3xl">
          <div className="body-copy">
            <p className="emphasis text-xl leading-relaxed">
              This site is a working record for Eli Castson and Castson Inc.: part personal site, part company ledger, part archive of ownership, operating discipline, and direction.
            </p>

            <p>Built with Next.js, TypeScript, Tailwind CSS, and Vercel.</p>

            <div className="quiet-panel space-y-8">
              <div>
                <span className="section-kicker">Typography</span>
                <p>Atacama for display. Helix for body text. Geist Mono in use for small system labels and metadata.</p>
              </div>
              <div>
                <span className="section-kicker">Design Direction</span>
                <p>Swiss-influenced, mobile-first, restrained, text-forward.</p>
              </div>
              <div>
                <span className="section-kicker">Private Infrastructure</span>
                <div className="space-y-4">
                  <p>Ripley is the private infrastructure behind the work.</p>
                  <p>
                    It keeps briefs, drafts, research, decisions, working files, and repeatable rules inspectable instead of scattered.
                  </p>
                  <p>The point is continuity: work held, revised, improved, and made visible over time.</p>
                </div>
              </div>
              <div>
                <span className="section-kicker">Intent</span>
                <p>
                  This is not a portfolio in the usual sense. It is a record of ownership, operating discipline, and the move toward service and experience businesses with stronger operating infrastructure behind them.
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
