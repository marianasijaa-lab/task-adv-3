import { useState, useEffect } from "react";

interface BreakpointConfig {
  sm?: number;  // <= 640px
  md?: number;  // < 1024px
  lg?: number;  // >= 1024px
}

function getVisibleCount(breakpoints: Required<BreakpointConfig>): number {
  if (typeof window === "undefined") return breakpoints.lg;
  const w = window.innerWidth;
  if (w <= 640) return breakpoints.sm;
  if (w < 1024) return breakpoints.md;
  return breakpoints.lg;
}

export function useResponsiveSlider(
  totalItems: number,
  breakpoints: BreakpointConfig = {}
) {
  const bp: Required<BreakpointConfig> = {
    sm: breakpoints.sm ?? 1,
    md: breakpoints.md ?? 2,
    lg: breakpoints.lg ?? 3,
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(() => getVisibleCount(bp));

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount(bp));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Clamp currentIndex when visibleCount changes
  useEffect(() => {
    setCurrentIndex((i) =>
      Math.min(i, Math.max(0, totalItems - visibleCount))
    );
  }, [visibleCount, totalItems]);

  const maxIndex = Math.max(0, totalItems - visibleCount);
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < maxIndex;

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return {
    currentIndex,
    visibleCount,
    canPrev,
    canNext,
    prev,
    next,
  };
}
