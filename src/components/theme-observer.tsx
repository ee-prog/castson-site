"use client";

import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

/**
 * ThemeObserver
 *
 * Manages the site-wide dark/light theme:
 * 1. Reads the user's stored preference from localStorage('theme')
 * 2. Falls back to OS-level prefers-color-scheme
 * 3. Listens for OS preference changes (e.g. macOS auto dark mode at sunset)
 * 4. Exposes window.__setTheme('dark'|'light'|'system') for toggle buttons
 * 5. Re-runs scroll animation observer on route change
 */
export default function ThemeObserver() {
  const pathname = usePathname();

  // Core theme resolver
  const applyTheme = useCallback(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    let isDark: boolean;
    if (stored === "dark") {
      isDark = true;
    } else if (stored === "light") {
      isDark = false;
    } else {
      // 'system' or no preference — follow OS
      isDark = prefersDark;
    }

    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Set up theme + OS media query listener
  useEffect(() => {
    applyTheme();

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      // Only react to OS changes if user hasn't locked a preference
      const stored = localStorage.getItem("theme");
      if (!stored || stored === "system") {
        applyTheme();
      }
    };
    mq.addEventListener("change", onChange);

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

    return () => {
      mq.removeEventListener("change", onChange);
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
