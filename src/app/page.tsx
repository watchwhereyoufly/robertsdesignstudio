"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "./home.module.css";
import Header from "@/components/Header";
import GlitchLink from "@/components/GlitchLink";
import RdsLockup from "@/components/RdsLockup";
import { TITLE_FILL } from "@/components/FitText";

export default function Studio() {
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

      const size = (PROBE * measure * TITLE_FILL) / (widest - lead - trail);
      nav.style.setProperty("--nav-size", `${size}px`);
      nav.style.setProperty("--nav-lead", `${(-lead * size) / PROBE}px`);

      // Optical centring. The stack is centred with top:50% and a -50% shift,
      // but that centres the BOX, and the box is not the type: half-leading sits
      // above the cap line, and the descent below the last baseline is empty on
      // words with no descenders. Centring the box therefore parks the ink low.
      // Measure where the ink actually starts and ends inside the stack, and
      // cancel the difference between the ink's centre and the box's.
      const cs = getComputedStyle(links[0]);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.font = `${cs.fontWeight} ${size}px ${cs.fontFamily}`;
      const first = ctx.measureText(links[0].textContent || "C");
      const last = ctx.measureText(links[links.length - 1].textContent || "C");
      if (first.actualBoundingBoxAscent == null) return; // leave the trim at 0
      const lh = parseFloat(cs.lineHeight) || size;
      // Where the baseline falls inside any one line box.
      const baseline = (lh - (first.fontBoundingBoxAscent + first.fontBoundingBoxDescent)) / 2 + first.fontBoundingBoxAscent;
      const inkTop = baseline - first.actualBoundingBoxAscent;
      const inkBottom = (links.length - 1) * lh + baseline + last.actualBoundingBoxDescent;
      const boxHeight = links.length * lh;
      nav.style.setProperty("--nav-trim", `${-((inkTop + inkBottom) / 2 - boxHeight / 2)}px`);
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

  return (
    <>
      <Header theme="light" hidePills />

      <div className={styles.viewport}>
      {/* DESKTOP HERO */}
      <div className={styles.hero} id="heroSection">
        <div className={styles.navCol} ref={navRef}>
          <GlitchLink href="/casestudies/" className={styles.heroLink}>Case Studies</GlitchLink>
          <GlitchLink href="/research/" className={styles.heroLink}>Research</GlitchLink>
        </div>

        {/* Hovering fans the other two colourways out to the right, like
            pulling cards off a deck. Pink stays put as the face card. */}
        <div className={styles.lockupDeck}>
          <RdsLockup tone="grey" className={`${styles.lockup} ${styles.lockupBack}`} />
          <RdsLockup tone="black" className={`${styles.lockup} ${styles.lockupMid}`} />
          <RdsLockup tone="pink" className={`${styles.lockup} ${styles.lockupFront}`} />
        </div>

        {/* The studio line, opposite the deck. It carried its own page until the
            sentence turned out to be the whole page. */}
        <p className={styles.studioLine}>
          <strong>Roberts Design Studio</strong> is an American design company specializing in{" "}
          <strong>brand identity</strong>, <strong>art direction</strong>, and{" "}
          <strong>web design</strong>.
        </p>
      </div>
      </div>
    </>
  );
}
