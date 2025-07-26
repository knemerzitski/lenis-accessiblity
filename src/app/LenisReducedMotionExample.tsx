'use client';

import ReactLenis from 'lenis/react';
import { useMediaQuery } from 'react-responsive';

export function LenisReducedMotionExample() {
  const prefersReducedMotion = useMediaQuery({
    query: '(prefers-reduced-motion: reduce)',
  });

  return !prefersReducedMotion && <ReactLenis root />;
}
