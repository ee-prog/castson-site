"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ThemeObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Tiny delay to ensure Next.js has completed rendering the new route's DOM
    const timeoutId = setTimeout(() => {
      // 1. Theme Observer Setup
      const sections = document.querySelectorAll("[data-theme]");
      let themeObserver: IntersectionObserver | null = null;

      if (sections.length > 0) {
        const observerOptions = {
          root: null,
          rootMargin: "-45% 0px -45% 0px", // Trigger when crossing middle 10% of viewport
          threshold: 0,
        };

        themeObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const theme = entry.target.getAttribute("data-theme");
              if (theme === "light") {
                document.documentElement.classList.remove("dark");
              } else {
                document.documentElement.classList.add("dark");
              }
            }
          });
        }, observerOptions);

        sections.forEach((section) => themeObserver?.observe(section));
      } else {
        // If a page has no data-theme sections, default back to dark mode
        document.documentElement.classList.add("dark");
      }

      // 2. Scroll Animation Observer Setup
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
              // Unobserve once animated for performance & clean visual behavior
              animationObserver?.unobserve(entry.target);
            }
          });
        }, animationOptions);

        fadeUpElements.forEach((el) => animationObserver?.observe(el));
      }

      return () => {
        if (themeObserver) {
          sections.forEach((section) => themeObserver?.unobserve(section));
        }
        if (animationObserver) {
          fadeUpElements.forEach((el) => animationObserver?.unobserve(el));
        }
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
