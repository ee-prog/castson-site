"use client";

import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

/**
 * ThemeObserver
 *
 * Manages the site-wide dark/light theme:
 * 1. Reads the user's stored preference from localStorage('theme')
 * 2. Defaults to light mode when no preference has been stored
 * 3. Exposes window.__setTheme('dark'|'light'|'system') for toggle buttons
 * 4. Re-runs scroll animation observer on route change
 */
export default function ThemeObserver() {
  const pathname = usePathname();

  // Core theme resolver
  const applyTheme = useCallback(() => {
    const stored = localStorage.getItem("theme");

    let isDark: boolean;
    if (stored === "dark") {
      isDark = true;
    } else if (stored === "light") {
      isDark = false;
    } else {
      // 'system' or no preference defaults to the site's light presentation.
      isDark = false;
    }

    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Set up theme preference handling
  useEffect(() => {
    applyTheme();

    // Expose a global setter for toggle buttons
    // Usage: window.__setTheme('dark') / window.__setTheme('light') / window.__setTheme('system')
    (window as Window & { __setTheme?: (mode: string) => void }).__setTheme = (
      mode: string
    ) => {
      if (mode === "system") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", mode);
      }
      applyTheme();
    };
  }, [applyTheme]);

  // Scroll Animation Observer — re-run on route change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const fadeUpElements = document.querySelectorAll(".fade-up-element");
      let animationObserver: IntersectionObserver | null = null;

      if (fadeUpElements.length > 0) {
        const animationOptions = {
          root: null,
          rootMargin: "0px 0px -12% 0px", // Trigger when elements are 12% in view
          threshold: 0.05,
        };

        animationObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              // Unobserve once animated for performance
              animationObserver?.unobserve(entry.target);
            }
          });
        }, animationOptions);

        fadeUpElements.forEach((el) => animationObserver?.observe(el));
      }

      return () => {
        if (animationObserver) {
          fadeUpElements.forEach((el) => animationObserver?.unobserve(el));
        }
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
