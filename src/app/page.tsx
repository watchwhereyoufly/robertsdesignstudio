"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./home.module.css";
import Header from "@/components/Header";
import MiniFooter from "@/components/MiniFooter";
import GlitchLink from "@/components/GlitchLink";
import RdsLockup from "@/components/RdsLockup";

const MOUNTAIN_POINTS =
  "0,100 60,95 120,85 180,70 240,90 300,60 360,75 420,45 480,65 540,35 580,50 620,25 660,40 700,15 730,30 760,10 790,25 820,18 860,35 900,50 940,65 980,55 1020,70 1060,80 1100,75 1140,85 1200,90";

export default function Studio() {
  const mtnRef = useRef<SVGPolylineElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // The nav IS the page: three words set to the full measure, so the longest
  // line lands exactly on the right margin. A vw value can only ever approximate
  // that -- the correct size depends on Manrope's own advance widths -- so the
  // type is measured and scaled instead of guessed. Probe at a known size, read
  // the widest line, scale by the ratio. Linear, because letter-spacing is in em
  // and tracks the size.
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const PROBE = 100;

    const canvas = document.createElement("canvas");

    const fit = () => {
      // Reset first: the lead offset is a negative margin, which widens the used
      // width, so measuring without clearing it inflates the measure each pass.
      nav.style.setProperty("--nav-lead", "0px");
      const links = Array.from(nav.querySelectorAll("a"));
      const measure = nav.clientWidth;
      if (!links.length || !measure) return;
      nav.style.setProperty("--nav-size", `${PROBE}px`);
      const widest = Math.max(...links.map((l) => l.getBoundingClientRect().width));
      if (!widest) return;
      // Side bearings. A glyph carries blank space inside its advance width, so
      // the ink starts right of the box edge and stops short of it. Fit so the
      // INK spans the measure, then pull the stack left by the leading bearing.
      const cs0 = getComputedStyle(links[0]);
      const ctx0 = canvas.getContext("2d");
      let lead = 0;
      let trail = 0;
      if (ctx0) {
        ctx0.font = `${cs0.fontWeight} ${PROBE}px ${cs0.fontFamily}`;
        const widestEl = links.reduce((a, b) =>
          a.getBoundingClientRect().width >= b.getBoundingClientRect().width ? a : b
        );
        const t = (widestEl.textContent || "").trim();
        if (t) {
          const f = ctx0.measureText(t[0]);
          const l = ctx0.measureText(t[t.length - 1]);
          if (f.actualBoundingBoxLeft != null) {
            lead = -f.actualBoundingBoxLeft;
            trail = l.width - l.actualBoundingBoxRight;
          }
        }
      }

      const size = (PROBE * measure) / (widest - lead - trail);
      nav.style.setProperty("--nav-size", `${size}px`);
      nav.style.setProperty("--nav-lead", `${(-lead * size) / PROBE}px`);

      // Optical top. The cap line sits below the element's box top by the line
      // box's half-leading plus the gap between the font's ascent and its cap
      // height, and both scale with the size -- so a fixed px `top` can never
      // hold across viewports. Measure the real offset and cancel it, which
      // lands the caps on the same margin the left and right edges use.
      const cs = getComputedStyle(links[0]);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.font = `${cs.fontWeight} ${size}px ${cs.fontFamily}`;
      const m = ctx.measureText(links[0].textContent || "C");
      if (m.actualBoundingBoxAscent == null) return; // leave the trim at 0
      const lh = parseFloat(cs.lineHeight) || size;
      const baseline = (lh - (m.fontBoundingBoxAscent + m.fontBoundingBoxDescent)) / 2 + m.fontBoundingBoxAscent;
      nav.style.setProperty("--nav-trim", `${-(baseline - m.actualBoundingBoxAscent)}px`);
    };

    fit();
    // Manrope arrives after first paint; the fallback face has different
    // metrics, so a fit measured before it loads would be wrong.
    document.fonts?.ready.then(fit).catch(() => {});
    // Observe the parent, never the nav itself: fit() changes the nav's margins,
    // which changes its size, which would re-trigger fit() forever.
    const ro = new ResizeObserver(fit);
    ro.observe(nav.parentElement ?? nav);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    // mountain draws itself in once it is on screen
    if (mtnRef.current) {
      const line = mtnRef.current;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) line.style.strokeDashoffset = "0"; },
        { threshold: 0.1 }
      );
      obs.observe(line);
    }
  }, []);

  return (
    <>
      <Header theme="light" hidePills />

      <div className={styles.viewport}>
      {/* DESKTOP HERO */}
      <div className={styles.hero} id="heroSection">
        <div className={styles.navCol} ref={navRef}>
          <GlitchLink href="/casestudies/" className={styles.heroLink}>Case Studies</GlitchLink>
          <GlitchLink href="/research/" className={styles.heroLink}>Research</GlitchLink>
          <GlitchLink href="/about/" className={styles.heroLink}>Info</GlitchLink>
        </div>

        <div className={styles.mountainWrap}>
          <svg className={styles.mountainSvg} viewBox="0 0 1200 120" preserveAspectRatio="none">
            <polyline
              ref={mtnRef}
              className={styles.mountainLine}
              fill="none"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              points={MOUNTAIN_POINTS}
              style={{ strokeDasharray: 2000, strokeDashoffset: 2000, transition: "stroke-dashoffset 6s ease" }}
            />
          </svg>
        </div>

        {/* Hovering fans the other two colourways out to the right, like
            pulling cards off a deck. Pink stays put as the face card. */}
        <div className={styles.lockupDeck}>
          <RdsLockup tone="grey" className={`${styles.lockup} ${styles.lockupBack}`} />
          <RdsLockup tone="blue" className={`${styles.lockup} ${styles.lockupMid}`} />
          <RdsLockup tone="pink" className={`${styles.lockup} ${styles.lockupFront}`} />
        </div>

        <div className={styles.tag}>make it real.</div>
      </div>

      <MiniFooter hideThinBar />
      </div>
    </>
  );
}
