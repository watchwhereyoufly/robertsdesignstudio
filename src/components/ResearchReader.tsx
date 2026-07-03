"use client";

import { useEffect, useState } from "react";

type Paper = { href: string; title: string; category?: string; body?: string };

// On-site reader overlay for research papers. Opens when a research row dispatches
// "rds:open-paper", loads the hosted paper in an iframe, blurs the page behind.
// Same frosted-overlay system as the mollykpowers site's PostReader.
export default function ResearchReader() {
  const [paper, setPaper] = useState<Paper | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => setPaper((e as CustomEvent).detail as Paper);
    window.addEventListener("rds:open-paper", onOpen as EventListener);
    return () => window.removeEventListener("rds:open-paper", onOpen as EventListener);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPaper(null); };
    if (paper) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.classList.add("reader-open");
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.classList.remove("reader-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [paper]);

  if (!paper) return null;
  const real = !!paper.href && paper.href !== "#";

  return (
    <div className="reader-root">
      <div className="reader-dim" aria-hidden onClick={() => setPaper(null)} />
      <div className="reader-scroll" onClick={() => setPaper(null)}>
        <div className="reader-panel" onClick={(e) => e.stopPropagation()}>
          <div className="reader-bar">
            <span className="reader-title">{paper.title}</span>
            <button className="reader-x" onClick={() => setPaper(null)} aria-label="Close">
              ×
            </button>
          </div>
          {paper.body ? (
            <div className="reader-article-wrap">
              <div className="reader-article-inner">
                {paper.category ? <span className="reader-kicker">{paper.category}</span> : null}
                <div className="reader-article" dangerouslySetInnerHTML={{ __html: paper.body }} />
              </div>
            </div>
          ) : real ? (
            <iframe className="reader-frame" src={paper.href} title={paper.title} />
          ) : (
            <div className="reader-empty">This paper is coming soon.</div>
          )}
        </div>
      </div>
    </div>
  );
}
