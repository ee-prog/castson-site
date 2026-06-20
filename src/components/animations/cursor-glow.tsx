'use client';

import { useEffect, useRef, useState } from 'react';
import { useSpring, animated, to } from '@react-spring/web';

interface CursorGlowProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
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

export function CursorGlow({
  children,
  size = 600,
  color = 'rgba(197, 168, 128, 0.07)',
  className,
}: CursorGlowProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const [springs, api] = useSpring(() => ({
    x: -size,
    y: -size,
    config: { tension: 150, friction: 25, mass: 0.5 },
  }));

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    function handleMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      api.start({
        x: e.clientX - rect.left - size / 2,
        y: e.clientY - rect.top - size / 2,
      });
    }

    function handleMouseLeave() {
      api.start({ x: -size, y: -size });
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [api, size, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {!prefersReducedMotion && (
        <animated.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: size,
            height: size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            transform: to(
              [springs.x, springs.y],
              (xVal, yVal) => `translate3d(${xVal}px, ${yVal}px, 0)`,
            ),
            pointerEvents: 'none' as const,
            zIndex: 0,
          }}
        />
      )}
      {/* Content sits above the glow */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
