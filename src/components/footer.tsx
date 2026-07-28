import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--background)] py-8 theme-transition">
      <div className="site-container">
        <div className="flex flex-col gap-4 metadata sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Castson Inc.</span>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="transition-colors hover:text-[var(--primary)]">
              Contact
            </Link>
            <Link href="/colophon" className="transition-colors hover:text-[var(--primary)]">
              Colophon
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
