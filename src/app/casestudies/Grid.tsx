"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { caseStudies } from "@/data/caseStudies";

// Client island so the unpublished cards can answer a tap. The page itself stays
// a server component and keeps its metadata export.
export default function Grid() {
  const [revealed, setRevealed] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const reveal = (slug: string) => {
    setRevealed(slug);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setRevealed(null), 2000);
  };

  return (
    <div className={styles.grid}>
      {caseStudies.map((c) => {
        const on = revealed === c.slug;
        const inner = (
          <>
            <div className={styles.cardHeader}>
              <span className={styles.cardId}>{c.no}</span>
              <span className={styles.cardDate}>{c.date}</span>
            </div>
            <div className={styles.imgWrap}>
              {c.preview ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  className={`${styles.img} ${on ? styles.imgDimmed : ""}`}
                  src={c.preview}
                  alt={`${c.title} case study preview`}
                  style={{
                    objectFit: c.previewFit,
                    objectPosition: c.previewPos,
                    background: c.previewBg,
                  }}
                />
              ) : null}
              {/* Drawn over the cover rather than baked into it, so the mark stays
                  sharp even when the photograph behind it is low resolution. */}
              {c.logo ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img className={styles.cardLogo} src={c.logo} alt="" style={{ width: c.logoWidth }} />
              ) : null}
              {c.comingSoon ? (
                <span className={`${styles.soon} ${on ? styles.soonOn : ""}`} aria-hidden={!on}>
                  Coming soon
                </span>
              ) : null}
            </div>
            <div className={styles.metaRow}>
              <span className={styles.cardTitle}>{c.title}</span>
            </div>
            <p className={styles.headline}>{c.headline}</p>
            <div className={styles.pills}>
              {c.services.map((s) => (
                <span key={s} className={styles.pill}>{s}</span>
              ))}
              <span className={`${styles.pill} ${styles.pillType}`}>{c.tag}</span>
            </div>
            <div className={styles.divider} />
          </>
        );

        // Unpublished work is still a button, not a link: it answers the tap
        // rather than navigating to a page that does not exist.
        return c.comingSoon ? (
          <button
            key={c.slug}
            type="button"
            className={`${styles.card} ${styles.cardSoon}`}
            onClick={() => reveal(c.slug)}
            aria-label={`${c.title} — case study coming soon`}
          >
            {inner}
          </button>
        ) : (
          <a key={c.slug} href={`/casestudies/${c.slug}/`} className={styles.card}>
            {inner}
          </a>
        );
      })}
    </div>
  );
}
