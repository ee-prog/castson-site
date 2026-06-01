"use client";

import { useEffect } from "react";

export default function ThemeObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-theme]");
    if (sections.length === 0) {
      // If no sections with data-theme are found, default to dark theme
      document.documentElement.classList.add("dark");
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Triggers near the vertical center of screen
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
  }, []);

  return null;
}
