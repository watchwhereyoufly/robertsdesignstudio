"use client";

import { useEffect, useRef } from "react";
import styles from "./home.module.css";
import Header from "@/components/Header";
import MiniFooter from "@/components/MiniFooter";
import GlitchLink from "@/components/GlitchLink";
import { RDS_PATHS, RDS_STAR_POLYGON, STAR_PATH } from "@/components/logoPaths";

const MOUNTAIN_POINTS =
  "0,100 60,95 120,85 180,70 240,90 300,60 360,75 420,45 480,65 540,35 580,50 620,25 660,40 700,15 730,30 760,10 790,25 820,18 860,35 900,50 940,65 980,55 1020,70 1060,80 1100,75 1140,85 1200,90";

export default function Home() {
  const dotsRef = useRef<SVGGElement>(null);
  const mtnRef = useRef<SVGPolylineElement>(null);
  const mMtnRef = useRef<SVGPolylineElement>(null);

  useEffect(() => {
    // twinkling dots inside the star
    const g = dotsRef.current;
    if (g && g.childNodes.length === 0) {
      for (let x = 5; x < 457; x += 14) {
        for (let y = 5; y < 435; y += 14) {
          const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          c.setAttribute("cx", String(x));
          c.setAttribute("cy", String(y));
          c.setAttribute("r", "1");
          const isDark = Math.random() < 0.2;
          c.setAttribute("fill", isDark ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.25)");
          const dur = (2 + Math.random() * 5).toFixed(1);
          const delay = (Math.random() * 5).toFixed(1);
          c.style.animation = `twinkle ${dur}s ${delay}s ease-in-out infinite`;
          g.appendChild(c);
        }
      }
    }

    // desktop mountain draw on scroll into view
    if (mtnRef.current) {
      const line = mtnRef.current;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) line.style.strokeDashoffset = "0"; },
        { threshold: 0.1 }
      );
      obs.observe(line);
    }
    // mobile mountain draw on load
    requestAnimationFrame(() => {
      if (mMtnRef.current) mMtnRef.current.style.strokeDashoffset = "0";
    });
  }, []);

  return (
    <>
      <Header hidePills />

      <div className={styles.viewport}>
      {/* DESKTOP HERO */}
      <div className={styles.hero} id="heroSection">
        <div className={styles.navCol}>
          <GlitchLink href="/casestudies/" className={styles.heroLink}>Case Studies</GlitchLink>
          <GlitchLink href="/research/" className={styles.heroLink}>Research</GlitchLink>
          <GlitchLink href="/about/" className={styles.heroLink}>Info</GlitchLink>
        </div>

        <svg className={styles.rdsLogo} viewBox="470 700 1210 800" aria-label="Roberts Design Studio">
          {RDS_PATHS.map((d, i) => (<path key={i} d={d} fill="#FFFFFF" />))}
          <polygon points={RDS_STAR_POLYGON} fill="#FFFFFF" />
        </svg>

        <div className={styles.mountainWrap}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: 100, display: "block" }}>
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

        <svg
          className={styles.star}
          viewBox="0 0 456.73 434.8"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="starClip"><path d={STAR_PATH} /></clipPath>
          </defs>
          <rect width="456.73" height="434.8" fill="#FFFFFF" clipPath="url(#starClip)" />
          <g clipPath="url(#starClip)" ref={dotsRef} />
          <path
            d={STAR_PATH}
            fill="none"
            stroke="rgba(0,0,0,0.6)"
            strokeWidth={1.5}
            strokeLinejoin="round"
            style={{ strokeDasharray: "600 1400", animation: "starSnake 30s linear infinite" }}
          />
        </svg>
      </div>

      {/* MOBILE POSTER */}
      <section className={styles.mHero}>
        <svg className={styles.mStar} viewBox="0 0 456.73 434.8" aria-hidden="true">
          <path d={STAR_PATH} />
        </svg>
        <h1 className={styles.mWordmark}>Roberts<br />Design<br />Studio</h1>
        <div className={styles.mTagline}>Make It Real</div>
        <nav className={styles.mNav}>
          <a href="/casestudies/">Case Studies</a>
          <a href="/research/">Research</a>
          <a href="/about/">Info</a>
        </nav>
        <svg className={styles.mMountains} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <polyline
            ref={mMtnRef}
            fill="none"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            points={MOUNTAIN_POINTS}
            style={{ strokeDasharray: 2000, strokeDashoffset: 2000, transition: "stroke-dashoffset 3s ease 0.4s" }}
          />
        </svg>
      </section>

      <MiniFooter />
      </div>
    </>
  );
}
