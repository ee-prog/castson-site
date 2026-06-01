import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const postsContent = {
  "systems-over-software": {
    title: "Systems Over Software: The Automation Philosophy",
    date: "June 1, 2026",
    readTime: "4 min read",
    content: (
      <>
        <p>
          In modern business operations, it is common to see teams bending their operational workflows to fit within the constraints of their software. A team buys a CRM or a scheduling tool, discovers it doesn&apos;t support their specific payroll reporting workflow, and ends up running manual double-entry spreadsheets to make up the difference.
        </p>
        <p>
          This is what we call the <strong>&quot;Software-First Trap.&quot;</strong> Instead of allowing the software to dictate how a business is run, operators should focus on building <strong>Systems Over Software</strong>.
        </p>
        
        <h3 className="text-xl font-bold text-white mt-8 mb-4">The Logic of Orchestration</h3>
        <p>
          Software platforms like Monday.js, Acuity, and Connecteam are excellent at their primary responsibilities. Monday is a great board manager; Acuity is a solid calendar booking surface; Connecteam is ideal for mobile timeclock punches.
        </p>
        <p>
          However, they are not designed to know about each other. The magic happens in the <em>orchestration layer</em>. By writing lightweight backend integrations (using Python or TypeScript) and utilizing tools like Supabase as a shared operational state, you can glue these platforms together.
        </p>
        
        <blockquote className="border-l-2 border-emerald-500 pl-4 my-6 italic text-zinc-300">
          The goal is not to write a massive custom SaaS app. The goal is to build lightweight, event-driven pipes that synchronize your existing tools, allowing your team to work on what they do best without manual data double-entry.
        </blockquote>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Core Principles of Clean Workflows</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Single Source of Truth:</strong> Decide which platform owns which data. If a customer books a class, Acuity owns the initial booking event. Do not let other boards override this.</li>
          <li><strong>Idempotency:</strong> Write sync scripts so that they can fail and rerun without creating duplicate database rows or duplicate emails.</li>
          <li><strong>Decoupled Architecture:</strong> Use webhooks and serverless functions (like Supabase Edge Functions) so that if one external system goes down, it doesn&apos;t halt the rest of the operational pipeline.</li>
        </ul>
      </>
    )
  },
  "automating-braveheart-first-aid": {
    title: "Automating BraveHeart First Aid Operations",
    date: "May 15, 2026",
    readTime: "6 min read",
    content: (
      <>
        <p>
          Running a first-aid training business involves complex logistics: managing physical classroom locations, coordinating instructor availability, keeping track of certification expiries, and reconciling payroll with schedules.
        </p>
        <p>
          In scaling <strong>BraveHeart First Aid</strong>, it quickly became clear that manual coordination was the biggest bottleneck to growth. If an instructor called in sick, updating the class bookings, notifying the students, and logging the shift adjustments in the payroll spreadsheet took hours of admin work.
        </p>
        
        <h3 className="text-xl font-bold text-white mt-8 mb-4">Enter the Ripley Dashboard</h3>
        <p>
          To solve this, we designed and developed <strong>Ripley</strong> (the internal Autobot system). Built with a combination of Python server tasks, Node.js scripts, and a Supabase PostgreSQL backend, Ripley acts as the automated dispatch and operational coordinator.
        </p>
        <p>
          Here is how the core pipeline operates:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Acuity Sync:</strong> Class rosters and bookings are pulled automatically from Acuity scheduler.</li>
          <li><strong>Connecteam Integration:</strong> Work schedules and shift logs from Connecteam are reconciled against Acuity class registers.</li>
          <li><strong>Monday Sync:</strong> Leads, AED customer details, and invoice drafts are synchronized in Monday.js boards for sales tracking.</li>
          <li><strong>Operational Alerts:</strong> Auto-generated weekly emails summarize operations, and instructor alerts are triggered instantly on schedule updates.</li>
        </ol>

        <blockquote className="border-l-2 border-emerald-500 pl-4 my-6 italic text-zinc-300">
          Result: Admin overhead was reduced by over 70%, allowing us to focus entirely on course quality and student experience, rather than fighting software APIs.
        </blockquote>

        <div className="mt-8 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-sm text-zinc-300">
          <span className="font-semibold text-yellow-400">Systems Metric Input Needed:</span> [NEEDS ELI INPUT: Provide accurate metrics and technical summary of the Ripley system output]
        </div>
      </>
    )
  }
};

type Params = Promise<{ slug: string }>;

export default async function Post({ params }: { params: Params }) {
  const resolvedParams = await params;
  const post = postsContent[resolvedParams.slug as keyof typeof postsContent];

  if (!post) {
    notFound();
  }

  return (
    <article data-theme="dark" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link
        href="/writing"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-emerald-400 transition-colors mb-8 group"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        Back to writing
      </Link>

      {/* Header */}
      <header className="border-b border-white/5 pb-8 mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-zinc-500 mt-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="text-zinc-300 leading-relaxed space-y-6 text-base">
        {post.content}
      </div>
    </article>
  );
}

// Generate static params for the blog posts
export async function generateStaticParams() {
  return [
    { slug: "systems-over-software" },
    { slug: "automating-braveheart-first-aid" },
  ];
}
