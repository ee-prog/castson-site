"use client";

import { useEffect, useCallback } from "react";

interface SectionThemeObserverProps {
  /** Fallback theme when no `[data-theme]` section is in the center strip. */
  defaultTheme?: "light" | "dark";
}

/**
 * Observes all elements with a `data-theme` attribute and toggles the `dark`
 * class on `<html>` as the user scrolls.
 *
 * The switch happens when a section crosses the narrow center strip of the
 * viewport (middle 10 %, defined by `rootMargin: '-45% 0px -45% 0px'`).
 *
 * When multiple sections occupy the strip simultaneously, the one whose
 * vertical midpoint is closest to the viewport center wins.
 *
 * Renders nothing — this is a side-effect-only component.
 */
export function SectionThemeObserver({
  defaultTheme = "dark",
}: SectionThemeObserverProps) {
  /** Apply the given theme string to `<html>`. */
  const applyTheme = useCallback((theme: "light" | "dark") => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    // Collect every element that declares a section theme.
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-theme]"),
    );

    if (sections.length === 0) {
      // Nothing to observe — apply the fallback and bail out.
      applyTheme(defaultTheme);
      return;
    }

    // ------------------------------------------------------------------
    // Track which observed sections are currently inside the center strip.
    // ------------------------------------------------------------------
    const activeSections = new Set<HTMLElement>();

    /**
     * Pick the winning section from the active set and apply its theme.
     * "Winning" = the one whose vertical midpoint is closest to the
     * viewport's vertical center.
     */
    const resolveTheme = () => {
      if (activeSections.size === 0) {
        applyTheme(defaultTheme);
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      let closest: HTMLElement | null = null;
      let closestDistance = Infinity;

      activeSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = el;
        }
      });

      if (closest) {
        const theme = (closest as HTMLElement).dataset.theme as
          | "light"
          | "dark"
          | undefined;
        applyTheme(theme ?? defaultTheme);
      }
    };

    // ------------------------------------------------------------------
    // IntersectionObserver — fires when a section enters / leaves the
    // narrow center strip of the viewport.
    // ------------------------------------------------------------------
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            activeSections.add(target);
          } else {
            activeSections.delete(target);
          }
        });

        resolveTheme();
      },
      {
        root: null,
        // Top 45 % and bottom 45 % are dead-zone → only the middle 10 %
        // of the viewport triggers intersection callbacks.
        rootMargin: "-45% 0px -45% 0px",
        // A tiny threshold is enough — we just need the "entered" event.
        threshold: 0.01,
      },
    );

    sections.forEach((el) => observer.observe(el));

    // Apply the correct theme immediately on mount (before any scroll)
    // by checking which section is already in the center strip.
    resolveTheme();

    return () => {
      observer.disconnect();
      activeSections.clear();
    };
  }, [defaultTheme, applyTheme]);

  return null;
}
