"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", meta: "Opening" },
  { name: "Archive", href: "/archive", meta: "The work" },
  { name: "Notes", href: "/notes", meta: "Thinking" },
  { name: "About", href: "/about", meta: "Profile" },
  { name: "Contact", href: "/contact", meta: "Start here" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sync = () => setIsDark(document.documentElement.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleTheme = () => {
    const win = window as Window & { __setTheme?: (mode: string) => void };
    win.__setTheme?.(isDark ? "light" : "dark");
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[4.5rem] border-b border-[var(--border)] bg-background/90 backdrop-blur-md theme-transition">
        <div className="site-container flex h-full items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group text-[1.05rem] leading-none"
            aria-label="Castson Inc. home"
          >
            <span className="font-display text-[var(--foreground)]">Castson Inc.</span>
          </Link>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              type="button"
              className="flex h-10 w-10 items-center justify-center text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun className="h-[18px] w-[18px]" strokeWidth={1.4} />
              ) : (
                <Moon className="h-[18px] w-[18px]" strokeWidth={1.4} />
              )}
            </button>

            <button
              onClick={() => setIsOpen((open) => !open)}
              type="button"
              className="flex h-10 w-10 items-center justify-center text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-5 w-5" strokeWidth={1.4} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.4} />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-[var(--background)] pt-[4.5rem] theme-transition ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="site-container flex min-h-[calc(100vh-4.5rem)] flex-col justify-between py-10 md:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="page-kicker">Index</p>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--muted-foreground)]">
                Eli Castson leads transformation across people, business, and
                technology. Former Disruption Officer. Canadian–Swiss.
              </p>
            </div>

            <nav className="lg:col-span-8" aria-label="Main navigation">
              <div className="ruled-list">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group grid gap-3 py-5 text-[var(--foreground)] transition-colors hover:text-[var(--primary)] sm:grid-cols-[4rem_1fr_auto]"
                    >
                      <span className="metadata text-[var(--primary)]">{String(idx).padStart(2, "0")}</span>
                      <span className="font-display text-3xl leading-none sm:text-5xl">
                        {item.name}
                      </span>
                      <span className="metadata self-end text-left text-[var(--muted-foreground)] sm:text-right">
                        {isActive ? "Current" : item.meta}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-6 metadata sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Castson Inc.</span>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1.5 text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
            >
              Contact <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
