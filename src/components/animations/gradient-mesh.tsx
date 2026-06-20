'use client';

import { useEffect, useState, useCallback } from 'react';
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

interface GradientPoint {
  color: string;
  /** Size of the radial gradient in px */
  size: number;
}

interface GradientMeshProps {
  /** Array of gradient color points */
  points?: GradientPoint[];
  /** Seconds per drift cycle */
  cycleDuration?: number;
  /** Additional className */
  className?: string;
}

// Default: emerald + teal tones at very low opacity, fitting the site's palette
const defaultPoints: GradientPoint[] = [
  { color: 'rgba(16, 185, 129, 0.06)', size: 600 },   // emerald
  { color: 'rgba(20, 184, 166, 0.04)', size: 500 },    // teal
  { color: 'rgba(197, 168, 128, 0.03)', size: 450 },   // sand-gold
  { color: 'rgba(16, 185, 129, 0.035)', size: 550 },   // emerald secondary
];

/**
 * Generate a random position within bounds (as percentage)
 */
function randomPos() {
  return {
    x: 15 + Math.random() * 70,  // 15% - 85% range
    y: 10 + Math.random() * 80,  // 10% - 90% range
  };
}

function DriftingGradient({
  point,
  cycleDuration,
  index,
  reduced,
}: {
  point: GradientPoint;
  cycleDuration: number;
  index: number;
  reduced: boolean;
}) {
  const [target, setTarget] = useState(() => randomPos());

  const drift = useCallback(() => {
    setTarget(randomPos());
  }, []);

  // Start drifting on mount and repeat
  useEffect(() => {
    if (reduced) return;
    // Stagger start so they don't all move in sync
    const initialDelay = index * 2000;
    const startTimeout = setTimeout(() => {
      drift();
      const interval = setInterval(drift, cycleDuration * 1000);
      return () => clearInterval(interval);
    }, initialDelay);
    return () => clearTimeout(startTimeout);
  }, [cycleDuration, drift, index, reduced]);

  const springs = useSpring({
    left: `${target.x}%`,
    top: `${target.y}%`,
    config: {
      duration: cycleDuration * 1000,
    },
    immediate: reduced,
  });

  return (
    <animated.div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: point.size,
        height: point.size,
        left: springs.left,
        top: springs.top,
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle, ${point.color} 0%, transparent 70%)`,
        pointerEvents: 'none',
        willChange: 'left, top',
      }}
    />
  );
}

export function GradientMesh({
  points = defaultPoints,
  cycleDuration = 12,
  className,
}: GradientMeshProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {points.map((point, i) => (
        <DriftingGradient
          key={i}
          point={point}
          cycleDuration={cycleDuration}
          index={i}
          reduced={prefersReducedMotion}
        />
      ))}
    </div>
  );
}
