"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ThemeObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Tiny delay to ensure Next.js has completed rendering the new route's DOM
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll("[data-theme]");
      if (sections.length === 0) {
        // If a page has no data-theme sections, default back to dark mode
        document.documentElement.classList.add("dark");
        return;
      }

      const observerOptions = {
        root: null,
        rootMargin: "-45% 0px -45% 0px", // Trigger when crossing middle 10% of viewport
        threshold: 0,
      };

      const observer = new IntersectionObserver((entries) => {
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

      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
