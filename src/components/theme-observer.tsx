"use client";

import { useEffect, useCallback } from "react";

/**
 * ThemeObserver
 *
 * Manages the site-wide dark/light theme:
 * 1. Reads the user's stored preference from localStorage('theme')
 * 2. Defaults to light mode when no preference has been stored
 * 3. Exposes window.__setTheme('dark'|'light'|'system') for toggle buttons
 */
export default function ThemeObserver() {
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
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";

    const favicon = document.querySelector<HTMLLinkElement>("#castson-favicon");
    favicon?.setAttribute(
      "href",
      isDark ? "/favicon-dark.svg" : "/favicon-light.svg"
    );
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

  return null;
}
