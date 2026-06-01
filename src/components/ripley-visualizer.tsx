"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  RefreshCw, 
  Terminal, 
  Calendar, 
  Cpu, 
  Database, 
  Users, 
  Mail, 
  MessageSquare,
  Layers, 
  Clock
} from "lucide-react";

interface Node {
  id: string;
  name: string;
  type: "trigger" | "engine" | "action" | "database";
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  glow: string;
  description: string;
}

interface LogLine {
  text: string;
  type: "info" | "success" | "warn" | "error";
  time: string;
}

const NODES: Record<string, Node> = {
  acuity: {
    id: "acuity",
    name: "Acuity Scheduler",
    type: "trigger",
    icon: Calendar,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    glow: "shadow-blue-500/20",
    description: "Source of booking & roster events"
  },
  connecteam: {
    id: "connecteam",
    name: "Connecteam",
    type: "trigger",
    icon: Users,
    color: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    glow: "shadow-orange-500/20",
    description: "Shift schedules & hourly timesheets"
  },
  cron: {
    id: "cron",
    name: "Cron Scheduler",
    type: "trigger",
    icon: Clock,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    glow: "shadow-purple-500/20",
    description: "Automated trigger for periodic sync"
  },
  ripley: {
    id: "ripley",
    name: "Ripley Parser",
    type: "engine",
    icon: Cpu,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    glow: "shadow-emerald-500/40",
    description: "Custom Node.js / Python core processing engine"
  },
  supabase: {
    id: "supabase",
    name: "Supabase Postgres",
    type: "database",
    icon: Database,
    color: "text-teal-400 bg-teal-500/10 border-teal-500/30",
    glow: "shadow-teal-500/20",
    description: "Shared state database & operation logs"
  },
  monday: {
    id: "monday",
    name: "Monday.js CRM",
    type: "action",
    icon: Layers,
    color: "text-pink-400 bg-pink-500/10 border-pink-500/30",
    glow: "shadow-pink-500/20",
    description: "Lead tracking & tasks board"
  },
  email: {
    id: "email",
    name: "Gmail Dispatch",
    type: "action",
    icon: Mail,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    glow: "shadow-amber-500/20",
    description: "Auto roster confirmations & receipt emails"
  },
  sms: {
    id: "sms",
    name: "SMS Dispatch",
    type: "action",
    icon: MessageSquare,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
    glow: "shadow-indigo-500/20",
    description: "Immediate text alerts to instructors"
  }
};

const SIMULATIONS = [
  {
    id: "booking",
    title: "New Student Booking",
    description: "Simulates a booking hook from Acuity syncing leads & sending documents.",
    trigger: "acuity",
    steps: [
      { node: "acuity", log: "Acuity webhook triggered: appointment.scheduled", logType: "info" },
      { node: "ripley", log: "Parsing booking payload: Student 'Sarah Jenkins', Course 'Standard First Aid', June 10", logType: "info" },
      { node: "supabase", log: "Supabase DB lookup: checking class capacities for course 'SFA-0610'...", logType: "info" },
      { node: "supabase", log: "Database capacity updated from 7/12 to 8/12.", logType: "success" },
      { node: "monday", log: "Monday.js CRM synced: Added lead item 'Sarah Jenkins (SFA)' (Item ID: 981765)", logType: "success" },
      { node: "email", log: "Gmail dispatch: Sent Standard First Aid welcome package & receipt to sarah@example.com", logType: "success" }
    ]
  },
  {
    id: "cover_request",
    title: "Instructor Cover Broadcast",
    description: "Simulates an instructor cover request on Connecteam matching replacements.",
    trigger: "connecteam",
    steps: [
      { node: "connecteam", log: "Connecteam webhook triggered: shift.cover_request", logType: "info" },
      { node: "ripley", log: "Parsing cover request: Dave Miller requires cover for 'Blended CPR-C' on June 4", logType: "info" },
      { node: "supabase", log: "Querying active instructors in Halifax region with active CPR-C certification...", logType: "info" },
      { node: "supabase", log: "Matches found: Jane Smith, Bob Johnson. Lock state reserved.", logType: "success" },
      { node: "sms", log: "SMS notification dispatched to replacement pool: 'Cover shift available CPR-C June 4. Reply to accept.'", logType: "info" },
      { node: "monday", log: "Monday.js Board synced: Opened operational cover ticket (ID: 981768)", logType: "success" }
    ]
  },
  {
    id: "payroll",
    title: "Payroll Reconciliation Sync",
    description: "Periodically triggers bi-weekly Timesheet vs Roster audit rules.",
    trigger: "cron",
    steps: [
      { node: "cron", log: "Cron scheduled event triggered: payroll.reconcile_cycle", logType: "info" },
      { node: "ripley", log: "Initializing payroll verification for period May 13 - May 26", logType: "info" },
      { node: "connecteam", log: "Fetching clock-in timesheets for all 8 active instructors...", logType: "info" },
      { node: "acuity", log: "Fetching roster logs for scheduled classes...", logType: "info" },
      { node: "ripley", log: "Comparing clocked time vs class durations...", logType: "info" },
      { node: "supabase", log: "Payroll audit complete: 42 shifts matched. 2 discrepancies written to logs.", logType: "warn" },
      { node: "monday", log: "Monday.js board synced: Auto-logged approved shift pay, generated 2 review tickets.", logType: "success" }
    ]
  }
];

export default function RipleyVisualizer() {
  const [activeSim, setActiveSim] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [highlightedNodes, setHighlightedNodes] = useState<string[]>([]);
  const [activeLine, setActiveLine] = useState<{ from: string; to: string } | null>(null);
  
  const logEndRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const addLog = (text: string, type: "info" | "success" | "warn" | "error") => {
    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0];
    setLogs((prev) => [...prev, { text, type, time: timeStr }]);
  };

  const runSimulation = (simId: string) => {
    if (running) return;
    
    const sim = SIMULATIONS.find((s) => s.id === simId);
    if (!sim) return;

    setActiveSim(simId);
    setRunning(true);
    setLogs([]);
    setHighlightedNodes([sim.trigger]);
    
    addLog(`System: Initiating '${sim.title}' workflow...`, "info");
    
    executeStep(sim, 0);
  };

  const executeStep = (sim: typeof SIMULATIONS[0], stepIdx: number) => {
    if (stepIdx >= sim.steps.length) {
      // Completed simulation
      timerRef.current = setTimeout(() => {
        setRunning(false);
        setActiveLine(null);
        setHighlightedNodes([]);
        addLog("System: Workflow execution completed successfully.", "success");
      }, 1000);
      return;
    }

    const step = sim.steps[stepIdx];
    const prevNode = stepIdx > 0 ? sim.steps[stepIdx - 1].node : null;
    
    // Animate flow line from previous node to current node
    if (prevNode && prevNode !== step.node) {
      setActiveLine({ from: prevNode, to: step.node });
    } else if (stepIdx === 0) {
      // First step comes from trigger to Ripley
      setActiveLine({ from: sim.trigger, to: "ripley" });
    }

    timerRef.current = setTimeout(() => {
      // Update highlighted nodes
      setHighlightedNodes(["ripley", step.node, ...(stepIdx === 0 ? [sim.trigger] : [])]);

      addLog(step.log, step.logType as "info" | "success" | "warn" | "error");

      // Trigger next step
      executeStep(sim, stepIdx + 1);
    }, 1500); // 1.5 seconds per step animation
  };

  const resetVisualizer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setRunning(false);
    setActiveSim(null);
    setLogs([]);
    setHighlightedNodes([]);
    setActiveLine(null);
  };

  return (
    <div className="w-full py-6">
      {/* Simulation Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {SIMULATIONS.map((sim) => {
          const isSelected = activeSim === sim.id;
          const TriggerIcon = NODES[sim.trigger].icon;
          return (
            <button
              key={sim.id}
              disabled={running}
              onClick={() => runSimulation(sim.id)}
              className={`text-left p-5 rounded-xl border transition-all relative overflow-hidden ${
                isSelected 
                  ? "bg-zinc-900 border-emerald-500/40 shadow-md shadow-emerald-500/5" 
                  : "bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/60"
              } ${running ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              {isSelected && (
                <div className="absolute top-0 right-0 h-1.5 w-full bg-emerald-500"></div>
              )}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg border bg-white/5 text-xs`}>
                    <TriggerIcon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    {NODES[sim.trigger].name} Hook
                  </span>
                </div>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
                  <Play className="h-2.5 w-2.5 ml-0.5" />
                </div>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{sim.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">{sim.description}</p>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Interactive Canvas & Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Interactive Canvas (left 3 cols) */}
        <div className="lg:col-span-3 rounded-2xl border border-white/5 bg-zinc-950 p-6 flex flex-col justify-between min-h-[420px] relative overflow-hidden">
          {/* Grid lines background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>

          {/* Canvas title */}
          <div className="flex justify-between items-center z-10 mb-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${running ? "" : "hidden"}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${running ? "bg-emerald-500" : "bg-zinc-600"}`}></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Ripley Dispatch Diagram</span>
            </div>
            
            {activeSim && (
              <button 
                onClick={resetVisualizer}
                className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-emerald-400 transition-colors border border-white/5 px-2.5 py-1 rounded-md bg-zinc-900"
              >
                <RefreshCw className={`h-3 w-3 ${running ? "animate-spin" : ""}`} />
                Reset
              </button>
            )}
          </div>

          {/* Pipeline Layout (SVG Canvas) */}
          <div className="relative flex-1 flex flex-col justify-center items-center py-4 z-10">
            {/* SVG Connector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: "260px" }}>
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Trigger -> Ripley Lines */}
              {/* Row 1 (Acuity / Connecteam / Cron) to Row 2 (Ripley) */}
              <path d="M 90 60 Q 200 60, 240 130" fill="none" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 240 60 Q 240 100, 240 130" fill="none" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 390 60 Q 280 60, 240 130" fill="none" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" />

              {/* Ripley -> Supabase Line */}
              <path d="M 240 180 L 240 230" fill="none" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" />

              {/* Ripley -> Action nodes Lines */}
              <path d="M 240 155 L 75 230" fill="none" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 240 155 L 405 230" fill="none" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" />

              {/* Ripley -> SMS Line (Alternative path) */}
              {/* We draw connections dynamically if active */}
              {activeLine && (
                <path
                  d={
                    activeLine.from === "acuity" && activeLine.to === "ripley"
                      ? "M 90 60 Q 200 60, 240 130"
                      : activeLine.from === "connecteam" && activeLine.to === "ripley"
                      ? "M 240 60 Q 240 100, 240 130"
                      : activeLine.from === "cron" && activeLine.to === "ripley"
                      ? "M 390 60 Q 280 60, 240 130"
                      : activeLine.from === "ripley" && activeLine.to === "supabase"
                      ? "M 240 180 L 240 230"
                      : activeLine.from === "ripley" && activeLine.to === "monday"
                      ? "M 240 155 L 75 230"
                      : activeLine.from === "ripley" && activeLine.to === "email"
                      ? "M 240 155 L 405 230"
                      : activeLine.from === "ripley" && activeLine.to === "sms"
                      ? "M 240 155 Q 160 190, 150 230"
                      : "M 240 155 L 240 230"
                  }
                  fill="none"
                  stroke="url(#gradient-line)"
                  strokeWidth="2.5"
                  className="stroke-dash-animation"
                />
              )}
            </svg>

            {/* Layout Rows */}
            <div className="w-full flex flex-col justify-between items-center gap-12 h-full">
              
              {/* ROW 1: TRIGGERS */}
              <div className="w-full flex justify-between px-4 max-w-lg">
                {/* Node: Acuity */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    highlightedNodes.includes("acuity") 
                      ? `${NODES.acuity.color} shadow-lg ${NODES.acuity.glow} scale-110` 
                      : "bg-zinc-900 border-white/5 text-zinc-600"
                  }`}>
                    <Calendar className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-zinc-500 mt-2">Acuity</span>
                </div>

                {/* Node: Connecteam */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    highlightedNodes.includes("connecteam") 
                      ? `${NODES.connecteam.color} shadow-lg ${NODES.connecteam.glow} scale-110` 
                      : "bg-zinc-900 border-white/5 text-zinc-600"
                  }`}>
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-zinc-500 mt-2">Connecteam</span>
                </div>

                {/* Node: Cron */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    highlightedNodes.includes("cron") 
                      ? `${NODES.cron.color} shadow-lg ${NODES.cron.glow} scale-110` 
                      : "bg-zinc-900 border-white/5 text-zinc-600"
                  }`}>
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-zinc-500 mt-2">Cron Trigger</span>
                </div>
              </div>

              {/* ROW 2: CORE PROCESSOR */}
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                  highlightedNodes.includes("ripley") 
                    ? `${NODES.ripley.color} shadow-2xl ${NODES.ripley.glow} scale-110 border-emerald-400` 
                    : "bg-zinc-900 border-white/10 text-zinc-500"
                }`}>
                  <Cpu className={`h-8 w-8 ${running && highlightedNodes.includes("ripley") ? "animate-pulse" : ""}`} />
                </div>
                <span className="text-xs font-bold tracking-wider text-white mt-2">Ripley Engine</span>
                <span className="text-[9px] font-medium text-emerald-500">v2.1.0 - Active</span>
              </div>

              {/* ROW 3: DATABASE & ACTIONS */}
              <div className="w-full flex justify-between px-2 max-w-xl">
                {/* Node: Monday */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    highlightedNodes.includes("monday") 
                      ? `${NODES.monday.color} shadow-lg ${NODES.monday.glow} scale-110` 
                      : "bg-zinc-900 border-white/5 text-zinc-600"
                  }`}>
                    <Layers className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-zinc-500 mt-2">Monday CRM</span>
                </div>

                {/* Node: SMS */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    highlightedNodes.includes("sms") 
                      ? `${NODES.sms.color} shadow-lg ${NODES.sms.glow} scale-110` 
                      : "bg-zinc-900 border-white/5 text-zinc-600"
                  }`}>
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-zinc-500 mt-2">SMS Alert</span>
                </div>

                {/* Node: Database (Supabase) */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    highlightedNodes.includes("supabase") 
                      ? `${NODES.supabase.color} shadow-lg ${NODES.supabase.glow} scale-110` 
                      : "bg-zinc-900 border-white/5 text-zinc-600"
                  }`}>
                    <Database className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-zinc-500 mt-2">Postgres</span>
                </div>

                {/* Node: Email (Gmail) */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    highlightedNodes.includes("email") 
                      ? `${NODES.email.color} shadow-lg ${NODES.email.glow} scale-110` 
                      : "bg-zinc-900 border-white/5 text-zinc-600"
                  }`}>
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-zinc-500 mt-2">Gmail API</span>
                </div>
              </div>

            </div>
          </div>

          <div className="text-center text-[10px] text-zinc-500 z-10 border-t border-white/5 pt-4">
            Visualizes custom integrations connecting BraveHeart First Aid logistics with Next.js & Supabase.
          </div>
        </div>

        {/* Console / Terminal Output (right 2 cols) */}
        <div className="lg:col-span-2 rounded-2xl border border-white/5 bg-zinc-950 p-5 flex flex-col h-full min-h-[420px] max-h-[460px]">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-3">
            <Terminal className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">Stream Logs</span>
          </div>

          <div className="flex-1 overflow-y-auto font-mono text-[11px] leading-relaxed space-y-2 pr-1 scrollbar-thin select-text">
            {logs.length === 0 ? (
              <div className="text-zinc-600 italic h-full flex flex-col justify-center items-center text-center p-4">
                <Play className="h-8 w-8 text-zinc-800 mb-2" />
                <span>Select a workflow above and click trigger to stream events</span>
              </div>
            ) : (
              logs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2 border-l border-zinc-900 pl-2">
                  <span className="text-zinc-600 shrink-0 select-none">[{log.time}]</span>
                  <span className={
                    log.type === "success" 
                      ? "text-emerald-400" 
                      : log.type === "warn" 
                      ? "text-amber-400" 
                      : log.type === "error" 
                      ? "text-red-400" 
                      : "text-zinc-300"
                  }>
                    {log.text}
                  </span>
                </div>
              ))
            )}
            <div ref={logEndRef} />
          </div>

          <div className="border-t border-white/5 pt-3 mt-3 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              SYS: OK
            </span>
            <span>Logs auto-scrolling</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .stroke-dash-animation {
          stroke-dasharray: 8;
          animation: dash 1s linear infinite;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -16;
          }
        }
        /* Custom scrollbar rules */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #18181b;
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #27272a;
        }
      `}</style>
    </div>
  );
}
