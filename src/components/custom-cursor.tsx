"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const trailRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if device supports touch to disable custom cursor on mobile
    const checkDevice = () => {
      const mobile = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsMobile(mobile);
      if (!mobile) setIsVisible(true);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible && !isMobile) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Listeners for hover scale
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.classList.contains("interactive") ||
          target.getAttribute("role") === "button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    // Smooth lerp trail animation using requestAnimationFrame
    const animateTrail = () => {
      const lerpFactor = 0.15; // Speed of outer ring following inner dot
      
      const dx = targetRef.current.x - trailRef.current.x;
      const dy = targetRef.current.y - trailRef.current.y;

      trailRef.current.x += dx * lerpFactor;
      trailRef.current.y += dy * lerpFactor;

      setTrail({ x: trailRef.current.x, y: trailRef.current.y });
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    if (!isMobile) {
      requestRef.current = requestAnimationFrame(animateTrail);
    }

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Small Core Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-emerald-400 pointer-events-none z-9999 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Outer Floating Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-emerald-400/40 pointer-events-none z-9999 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          isHovered 
            ? "w-14 h-14 bg-emerald-500/10 border-emerald-400/80 scale-110" 
            : "w-8 h-8 bg-transparent"
        }`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
        }}
      />
    </>
  );
}
