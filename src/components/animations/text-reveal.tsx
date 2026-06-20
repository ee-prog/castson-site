'use client';

import { useRef, useState, useEffect, type ElementType } from 'react';

type TextElement = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface TextRevealProps {
  text: string;
  as?: TextElement;
  className?: string;
  /** Seconds between each word reveal (default 0.04) */
  wordDelay?: number;
  /** Duration of each word's transition in seconds (default 0.6) */
  duration?: number;
  /** Only trigger once (default true) */
  once?: boolean;
  /** Initial blur radius in px (default 10) */
  blurRadius?: number;
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

export function TextReveal({
  text,
  as: Tag = 'h1',
  className,
  wordDelay = 0.04,
  duration = 0.6,
  once = true,
  blurRadius = 10,
}: TextRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setRevealed(false);
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.01 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  // Reduced motion — plain text, no animation
  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(' ');
  const Component = Tag as ElementType;

  return (
    <Component
      className={className}
      ref={ref}
      style={{
        '--blur-duration': `${duration}s`,
        '--blur-radius': `${blurRadius}px`,
        '--word-delay': `${wordDelay * 1000}ms`,
      } as React.CSSProperties}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="blur-reveal-word"
          style={{
            display: 'inline-block',
            marginRight: i < words.length - 1 ? '0.25em' : 0,
            opacity: revealed ? 1 : 0.08,
            filter: revealed ? 'blur(0px)' : `blur(var(--blur-radius, ${blurRadius}px))`,
            transition: `opacity var(--blur-duration, ${duration}s) cubic-bezier(.25, 1, .5, 1), filter var(--blur-duration, ${duration}s) cubic-bezier(.25, 1, .5, 1)`,
            transitionDelay: revealed
              ? `${i * wordDelay * 1000}ms`
              : '0ms',
            willChange: 'opacity, filter',
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
}
