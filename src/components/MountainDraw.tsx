"use client";

import { useEffect, useRef } from "react";

export const MOUNTAIN_POINTS =
  "0,100 60,95 120,85 180,70 240,90 300,60 360,75 420,45 480,65 540,35 580,50 620,25 660,40 700,15 730,30 760,10 790,25 820,18 860,35 900,50 940,65 980,55 1020,70 1060,80 1100,75 1140,85 1200,90";

export default function MountainDraw({
  stroke = "rgba(0,0,0,0.2)",
  duration = 6,
  height = 100,
}: {
  stroke?: string;
  duration?: number;
  height?: number;
}) {
  const ref = useRef<SVGPolylineElement>(null);
  useEffect(() => {
    const line = ref.current;
    if (!line) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) line.style.strokeDashoffset = "0"; },
      { threshold: 0.1 }
    );
    obs.observe(line);
    return () => obs.disconnect();
  }, []);
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height, display: "block" }} aria-hidden="true">
      <polyline
        ref={ref}
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        points={MOUNTAIN_POINTS}
        style={{ strokeDasharray: 2000, strokeDashoffset: 2000, transition: `stroke-dashoffset ${duration}s ease` }}
      />
    </svg>
  );
}
