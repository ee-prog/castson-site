'use client';

import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

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

export function ScrollProgressBar({
  color = 'var(--primary)',
  height = 2,
}: {
  color?: string;
  height?: number;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const springs = useSpring({
    scaleX: progress,
    config: { tension: 300, friction: 30 },
    immediate: prefersReducedMotion,
  });

  return (
    <animated.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height,
        backgroundColor: color,
        transformOrigin: '0% 50%',
        scaleX: springs.scaleX,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}
