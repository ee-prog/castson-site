"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work & Projects", href: "/work" },
  { name: "Writing", href: "/writing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Disable body scroll when menu is open and toggle menu-open class
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <>
      {/* 1. Header Bar */}
      <header className="fixed top-0 left-0 w-full h-20 z-50 border-b border-white/[0.03] backdrop-blur-md bg-zinc-950/60 transition-all duration-300">
        <div className="mx-auto max-w-5xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2 relative z-50"
          >
            <span className="text-lg font-bold uppercase tracking-widest text-white transition-colors group-hover:text-emerald-400 font-display">
              Ripley
            </span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:animate-ping"></span>
          </Link>

          {/* Toggle Burger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="group relative z-50 flex flex-col justify-center items-end gap-1.5 w-8 h-8 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {/* Top Line */}
            <span 
              className={`h-[1px] bg-white transition-all duration-300 ease-out ${
                isOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6 group-hover:w-8"
              }`}
            />
            {/* Middle Line */}
            <span 
              className={`h-[1px] bg-white transition-all duration-300 ease-out ${
                isOpen ? "w-0 opacity-0" : "w-4 group-hover:w-8"
              }`}
            />
            {/* Bottom Line */}
            <span 
              className={`h-[1px] bg-white transition-all duration-300 ease-out ${
                isOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-5 group-hover:w-8"
              }`}
            />
          </button>

        </div>
      </header>

      {/* 2. Fullscreen Menu Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-[#050505] z-40 transition-all duration-500 ease-in-out flex flex-col justify-between p-8 sm:p-12 lg:p-20 ${
          isOpen 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Subtle grid background inside overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

        {/* Top spacer matching header height */}
        <div className="h-20 w-full shrink-0"></div>

        {/* Main Content Area: Menu Links & Side Info */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 max-w-5xl mx-auto w-full z-10">
          
          {/* Left Column: Giant Navigation Links */}
          <nav className="lg:col-span-8 space-y-6 sm:space-y-8">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              
              // Calculate styling based on hover states
              let opacityClass = "opacity-100";
              if (hoveredIdx !== null && hoveredIdx !== idx) {
                opacityClass = "opacity-20 scale-95";
              }

              return (
                <div 
                  key={item.href}
                  className={`transform transition-all duration-500 ease-out ${opacityClass}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex items-center gap-4 focus:outline-none"
                  >
                    <span className="text-zinc-700 text-sm font-mono tracking-wider">
                      {String(idx + 1).padStart(2, "0")}/
                    </span>
                    <span className={`text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter font-display transition-colors duration-300 ${
                      isActive ? "text-emerald-400" : "text-white group-hover:text-emerald-400"
                    }`}>
                      {item.name}
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Column: Contact & Metadata Card */}
          <div className="lg:col-span-4 lg:pl-12 border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 space-y-8 self-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">
                [Inquiries]
              </span>
              <h4 className="text-white text-sm font-bold uppercase mt-2">Systems Advisory</h4>
              <a 
                href="mailto:ee@castson.com" 
                className="group flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors mt-2 text-sm"
              >
                ee@castson.com
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-400" />
              </a>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">
                [Focus]
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed font-light mt-2">
                AI Operating Models<br />
                Systems Integration<br />
                Workflow Orchestration
              </p>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">
                [Geography]
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed font-light mt-2">
                Halifax Region, NS<br />
                Canada
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright details */}
        <div className="w-full shrink-0 border-t border-white/5 pt-6 max-w-5xl mx-auto flex justify-between items-center text-[10px] text-zinc-600 font-mono z-10">
          <span>© {new Date().getFullYear()} Ripley</span>
          <span className="hidden sm:block">Built with Next.js & Tailwind v4</span>
        </div>

      </div>
    </>
  );
}
