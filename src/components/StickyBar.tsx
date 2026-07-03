"use client";

import { useEffect, useState } from "react";
import styles from "./StickyBar.module.css";

type NavLink = { label: string; href: string };

export default function StickyBar({
  variant = "solid",
  leftLabel = "Roberts Design Studio",
  leftHref,
  centerLabel,
  rightLinks,
  rightNode,
}: {
  variant?: "solid" | "scroll";
  leftLabel?: string;
  leftHref?: string;
  centerLabel?: string;
  rightLinks?: NavLink[];
  rightNode?: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (variant !== "scroll") return;
    const hero = document.getElementById("heroSection");
    const tempBar = document.getElementById("tempBar");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        const s = e.intersectionRatio < 0.5;
        setScrolled(s);
        if (tempBar) tempBar.classList.toggle("scrolled", s);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, [variant]);

  const cls = `${styles.bar} ${styles[variant]} ${scrolled ? styles.scrolled : ""}`;

  return (
    <div className={cls} id="stickyBar">
      <div className={styles.left}>
        {leftHref ? <a href={leftHref}>{leftLabel}</a> : leftLabel}
      </div>
      {centerLabel && <div className={styles.center}>{centerLabel}</div>}
      <div className={styles.right}>
        {rightNode}
        {rightLinks?.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
