"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 glass">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex">
            <Link href="/" className="group flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-emerald-400">
                Eli Castson
              </span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 group-hover:animate-ping"></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:text-white ${
                    isActive ? "text-emerald-400 font-semibold bg-white/5" : "text-zinc-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href="mailto:ee@castson.com"
              className="ml-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-500/5 px-3 py-1.5 rounded-full transition-all"
            >
              Email Me <ArrowUpRight className="h-3 w-3" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-lg" id="mobile-menu">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? "bg-white/5 text-emerald-400" : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href="mailto:ee@castson.com"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-1 rounded-md bg-emerald-500 py-2.5 text-center text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
