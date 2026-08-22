"use client";

import { useState } from "react";
import styles from "./research.module.css";
import Header from "@/components/Header";
import FitText from "@/components/FitText";
import Footer from "@/components/Footer";
import { research, RESEARCH_CATEGORIES } from "@/data/research";
import { STAR_PATH } from "@/components/logoPaths";

function Marker() {
  return (
    <svg width="14" height="14" viewBox="0 0 456.73 434.8" aria-hidden="true">
      <path d={STAR_PATH} fill="currentColor" />
    </svg>
  );
}

export default function Research() {
  const [active, setActive] = useState<string>("All");
  const filters = ["All", ...RESEARCH_CATEGORIES];
  const shown = active === "All" ? research : research.filter((r) => r.category === active);

  const openPaper = (e: React.MouseEvent, r: (typeof research)[number]) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; // allow new tab
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent("rds:open-paper", {
        detail: { href: r.href, title: r.title, category: r.category, body: r.body },
      })
    );
  };

  return (
    <>
      <Header />

      <div className={styles.page}>
        <FitText as="h1" className={styles.title}>Research</FitText>

        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f}
              className={`${styles.filter} ${active === f ? styles.active : ""}`}
              onClick={() => setActive(f)}
              type="button"
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.list}>
          <div className={styles.headerRow}>
            <div>Title</div>
            <div>Summary</div>
            <div>Source</div>
            <div>Type</div>
            <div />
          </div>
          {shown.map((r) => (
            <a
              key={r.title}
              href={r.href}
              data-paper={r.href}
              className={styles.row}
              onClick={(e) => openPaper(e, r)}
            >
              <div className={styles.rowTitle}>{r.title}</div>
              <div className={styles.rowExcerpt}>{r.excerpt}</div>
              <div className={styles.rowByline}>{r.byline ?? "Evan Roberts"}</div>
              <div className={styles.rowCat}>{r.category}</div>
              <div className={styles.rowMarker}><Marker /></div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
