'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false,
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

interface AccordionItemProps {
  /** Trigger/header element — always visible */
  trigger: React.ReactNode;
  /** Expandable body content */
  children: React.ReactNode;
  /** Controlled open state (optional — uncontrolled by default) */
  isOpen?: boolean;
  /** Callback when toggled */
  onToggle?: () => void;
  /** Additional class on the wrapper */
  className?: string;
}

export function AccordionItem({
  trigger,
  children,
  isOpen: controlledOpen,
  onToggle,
  className,
}: AccordionItemProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const prefersReducedMotion = usePrefersReducedMotion();

  const contentRef = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState(0);

  // Measure the content height whenever it changes
  const measure = useCallback(() => {
    if (contentRef.current) {
      setMeasuredHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measure();
    // Re-measure on window resize
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure, children]);

  const springs = useSpring({
    height: isOpen ? measuredHeight : 0,
    opacity: isOpen ? 1 : 0,
    config: { tension: 250, friction: 30 },
    immediate: prefersReducedMotion,
  });

  function handleToggle() {
    // Re-measure right before opening to catch any layout shifts
    measure();
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen((prev) => !prev);
    }
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={handleToggle}
        className="w-full text-left cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        {trigger}
      </button>
      <animated.div
        style={{
          height: springs.height,
          opacity: springs.opacity,
          overflow: 'hidden',
        }}
      >
        <div ref={contentRef}>{children}</div>
      </animated.div>
    </div>
  );
}
