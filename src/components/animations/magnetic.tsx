'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
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

interface MagneticProps {
  children: React.ReactNode;
  /** How strongly the element pulls toward the cursor (0-1). Default 0.3 */
  strength?: number;
  /** Activation radius in px — how close the cursor must be to start pulling. Default 100 */
  radius?: number;
  /** Additional className on the wrapper */
  className?: string;
  /** Render as inline element (span) instead of block (div) */
  inline?: boolean;
}

export function Magnetic({
  children,
  strength = 0.3,
  radius = 100,
  className,
  inline = false,
}: MagneticProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const [springs, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { tension: 350, friction: 15, mass: 0.5 },
  }));

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (prefersReducedMotion || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < radius) {
        // Inside activation radius — pull toward cursor
        const pull = 1 - distance / radius; // 1 at center, 0 at edge
        api.start({
          x: distX * strength * pull,
          y: distY * strength * pull,
        });
      } else {
        // Outside radius — snap back
        api.start({ x: 0, y: 0 });
      }
    },
    [api, strength, radius, prefersReducedMotion],
  );

  const handleMouseLeave = useCallback(() => {
    api.start({ x: 0, y: 0 });
  }, [api]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Listen on window so we detect approach from any direction
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, prefersReducedMotion]);

  // Also reset on direct mouse leave of the element
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => el.removeEventListener('mouseleave', handleMouseLeave);
  }, [handleMouseLeave, prefersReducedMotion]);

  const Tag = inline ? animated.span : animated.div;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        x: springs.x,
        y: springs.y,
        display: inline ? 'inline-block' : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
