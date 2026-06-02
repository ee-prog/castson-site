"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ThemeObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Apply theme immediately based on route pathname
    const lightThemeRoutes: string[] = [];
    const isLight = lightThemeRoutes.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    );

    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    // 2. Scroll Animation Observer Setup (tiny delay to ensure route renders)
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
