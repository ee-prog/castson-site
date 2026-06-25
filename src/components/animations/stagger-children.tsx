'use client';

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useTrail, animated } from '@react-spring/web';

type Direction = 'up' | 'down' | 'left' | 'right';

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  direction?: Direction;
  distance?: number;
  duration?: number;
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

export function StaggerChildren({
  children,
  staggerDelay = 0.08,
  direction = 'up',
  distance = 30,
  duration = 0.6,
  once = true,
  className,
}: StaggerChildrenProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const offset = getOffset(direction, distance);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.01 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const childArray = React.Children.toArray(children);

  const trail = useTrail(childArray.length, {
    opacity: inView ? 1 : 0,
    x: inView ? 0 : offset.x,
    y: inView ? 0 : offset.y,
    config: prefersReducedMotion
      ? { duration: 300 }
      : { tension: 200, friction: 26, duration: duration * 1000 },
    delay: inView ? staggerDelay * 1000 : 0,
    immediate: prefersReducedMotion,
  });

  return (
    <div ref={ref} className={className}>
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          {childArray[index]}
        </animated.div>
      ))}
    </div>
  );
}
