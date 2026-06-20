'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

export function ParallaxLayer({
  children,
  speed = 0.3,
  className,
}: ParallaxLayerProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const [springs, api] = useSpring(() => ({
    y: 0,
    config: { tension: 170, friction: 26 },
  }));

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // Replicate Framer Motion's useScroll with offset: ['start end', 'end start']
    // scrollYProgress goes from 0 (element top at viewport bottom) to 1 (element bottom at viewport top)
    const progress = Math.min(
      1,
      Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height)),
    );
    // Map progress [0,1] to [speed*100, speed*-100] to match original behavior
    const y = speed * 100 - progress * speed * 200;
    api.start({ y });
  }, [speed, api]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on mount to set initial position
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll, prefersReducedMotion]);

  // For reduced motion: no parallax, render static
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <animated.div
      ref={ref}
      className={className}
      style={{ transform: springs.y.to((v) => `translateY(${v}px)`) }}
    >
      {children}
    </animated.div>
  );
}
