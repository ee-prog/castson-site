'use client';

import { useState, useEffect } from 'react';
import { useInView, animated } from '@react-spring/web';

type Direction = 'up' | 'down' | 'left' | 'right';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

function getOffset(direction: Direction, distance: number) {
  switch (direction) {
    case 'up':
      return { x: 0, y: distance };
    case 'down':
      return { x: 0, y: -distance };
    case 'left':
      return { x: distance, y: 0 };
    case 'right':
      return { x: -distance, y: 0 };
  }
}

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

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  once = true,
  className,
}: ScrollRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const offset = getOffset(direction, distance);

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: prefersReducedMotion ? 0 : offset.x,
        y: prefersReducedMotion ? 0 : offset.y,
      },
      to: {
        opacity: 1,
        x: 0,
        y: 0,
      },
      delay: delay * 1000,
      config: prefersReducedMotion
        ? { duration: 400 }
        : { tension: 120, friction: 14, duration: duration * 1000 },
      immediate: prefersReducedMotion,
    }),
    {
      once,
      rootMargin: '0px 0px -80px 0px',
    },
  );

  return (
    <animated.div ref={ref} className={className} style={springs}>
      {children}
    </animated.div>
  );
}
