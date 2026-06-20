'use client';

import { useEffect, useState, useMemo } from 'react';
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

/**
 * Generate a smooth organic blob path using sine-based radial offsets.
 * `seed` controls the shape variation — different seeds produce different blobs.
 */
function generateBlobPath(
  seed: number,
  points: number = 8,
  radius: number = 200,
  variance: number = 40,
): string {
  const angles: number[] = [];
  const radii: number[] = [];

  for (let i = 0; i < points; i++) {
    const angle = (Math.PI * 2 * i) / points;
    // Use sin/cos combinations with the seed for organic, deterministic variation
    const offset =
      Math.sin(angle * 2 + seed * 1.7) * variance * 0.6 +
      Math.cos(angle * 3 - seed * 2.3) * variance * 0.4;
    angles.push(angle);
    radii.push(radius + offset);
  }

  // Build smooth cubic bezier path through the points
  const cx = 250;
  const cy = 250;
  const pts = angles.map((a, i) => ({
    x: cx + Math.cos(a) * radii[i],
    y: cy + Math.sin(a) * radii[i],
  }));

  let d = `M ${pts[0].x},${pts[0].y} `;

  for (let i = 0; i < pts.length; i++) {
    const curr = pts[i];
    const next = pts[(i + 1) % pts.length];
    const prev = pts[(i - 1 + pts.length) % pts.length];
    const nextNext = pts[(i + 2) % pts.length];

    // Catmull-Rom to cubic bezier control points
    const tension = 0.3;
    const cp1x = curr.x + (next.x - prev.x) * tension;
    const cp1y = curr.y + (next.y - prev.y) * tension;
    const cp2x = next.x - (nextNext.x - curr.x) * tension;
    const cp2y = next.y - (nextNext.y - curr.y) * tension;

    d += `C ${cp1x},${cp1y} ${cp2x},${cp2y} ${next.x},${next.y} `;
  }

  d += 'Z';
  return d;
}

interface MorphBlobProps {
  /** Size of the SVG viewBox (square) */
  size?: number;
  /** Base radius of the blob */
  radius?: number;
  /** How much the radius varies */
  variance?: number;
  /** Number of control points */
  points?: number;
  /** Fill color or gradient */
  color?: string;
  /** Seconds per morph cycle */
  cycleDuration?: number;
  /** SVG filter blur (px) */
  blur?: number;
  /** Additional className on the container */
  className?: string;
}

export function MorphBlob({
  size = 500,
  radius = 180,
  variance = 50,
  points = 8,
  color = 'rgba(16, 185, 129, 0.06)',
  cycleDuration = 8,
  blur = 40,
  className,
}: MorphBlobProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [shapeIndex, setShapeIndex] = useState(0);

  // Pre-generate several blob shapes to morph between
  const shapes = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) =>
        generateBlobPath(i * 1.8 + 0.5, points, radius, variance),
      ),
    [points, radius, variance],
  );

  // Cycle through shapes
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setShapeIndex((prev) => (prev + 1) % shapes.length);
    }, cycleDuration * 1000);
    return () => clearInterval(interval);
  }, [cycleDuration, shapes.length, prefersReducedMotion]);

  const springs = useSpring({
    d: shapes[shapeIndex],
    config: {
      duration: cycleDuration * 1000,
      // Slow, smooth easing for organic feel
    },
    immediate: prefersReducedMotion,
  });

  const filterId = `morph-blob-blur-${blur}`;

  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation={blur} />
          </filter>
        </defs>
        <animated.path
          d={springs.d}
          fill={color}
          filter={`url(#${filterId})`}
        />
      </svg>
    </div>
  );
}
