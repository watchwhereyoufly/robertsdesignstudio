"use client";

import { useLayoutEffect, useRef } from "react";

// Fraction of the measure the ink fills. 1 is edge to edge; below that the type
// pulls in off the right margin and gets quieter. One number governs every
// display line on the site -- the home nav stack imports it too, so the four
// pages can never drift apart.
export const TITLE_FILL = 0.55;

// A single line of display type scaled to fill its measure by TITLE_FILL.
//
// A vw value cannot do this: the right size depends on the string's own advance
// widths, so "About" and "Case Studies" need very different sizes to span the
// same width. This probes at a known size, reads the rendered width, and scales
// by the ratio -- linear, because letter-spacing is in em and tracks the size.
export default function FitText({
  children,
  className,
  as: Tag = "div",
  fill = TITLE_FILL,
}: {
  children: string;
  className?: string;
  as?: "div" | "h1";
  fill?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const PROBE = 100;
    const range = document.createRange();
    const canvas = document.createElement("canvas");

    const fit = () => {
      // Reset first. A negative margin-left widens a block's used width, so
      // measuring without clearing the previous pass's offset returns a measure
      // inflated by it and the type grows every run.
      el.style.marginLeft = "0px";
      el.style.marginTop = "0px";
      // The element's own content box, not the parent's: clientWidth on a
      // padded parent includes its padding and would fit the type too wide.
      const measure = el.clientWidth;
      if (!measure) return;
      el.style.fontSize = `${PROBE}px`;
      range.selectNodeContents(el);
      // Range, not the element: a block-level element always reports the
      // container's width whatever its text actually measures.
      const w = range.getBoundingClientRect().width;
      if (!w) return;

      // Side bearings. A glyph carries blank space inside its advance width, so
      // the ink starts right of the box edge and stops short of it -- at display
      // sizes that reads as the type not touching the margin. Measure the first
      // and last glyph's bearings, fit so the INK spans the measure, then pull
      // the box left by the leading bearing.
      const cs = getComputedStyle(el);
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        el.style.fontSize = `${(PROBE * measure * fill) / w}px`;
        return;
      }
      ctx.font = `${cs.fontWeight} ${PROBE}px ${cs.fontFamily}`;
      const first = ctx.measureText(children[0]);
      const last = ctx.measureText(children[children.length - 1]);
      const hasInk = first.actualBoundingBoxLeft != null;
      // Positive when the ink starts right of the origin.
      const lead = hasInk ? -first.actualBoundingBoxLeft : 0;
      const trail = hasInk ? last.width - last.actualBoundingBoxRight : 0;

      const size = (PROBE * measure * fill) / (w - lead - trail);
      const scale = size / PROBE;
      el.style.fontSize = `${size}px`;
      el.style.marginLeft = `${-lead * scale}px`;

      // Optical top. The cap line sits below the element's box top by the line
      // box's half-leading plus the gap between the font's ascent and its cap
      // height, and both scale with the size -- so a fixed px offset can never
      // hold across viewports. Measure it and cancel it, which lands the caps on
      // the margin the container actually sets.
      ctx.font = `${cs.fontWeight} ${size}px ${cs.fontFamily}`;
      const m = ctx.measureText(children);
      if (m.actualBoundingBoxAscent == null) return;
      const lh = parseFloat(cs.lineHeight) || size;
      const baseline =
        (lh - (m.fontBoundingBoxAscent + m.fontBoundingBoxDescent)) / 2 + m.fontBoundingBoxAscent;
      el.style.marginTop = `${-(baseline - m.actualBoundingBoxAscent)}px`;
    };

    fit();
    // Measuring before the webfont lands would fit the fallback face's metrics.
    document.fonts?.ready.then(fit).catch(() => {});
    // Observe the parent, never the element itself: fit() changes el's margins,
    // which changes el's size, which would re-trigger fit() forever.
    const ro = new ResizeObserver(fit);
    ro.observe(el.parentElement ?? el);
    return () => ro.disconnect();
  }, [children, fill]);

  return (
    <Tag ref={ref as never} className={className} style={{ whiteSpace: "nowrap" }}>
      {children}
    </Tag>
  );
}
