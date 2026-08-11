"use client";

import { useEffect, useState } from "react";
import { research } from "@/data/research";

type Paper = { href: string; title: string; category?: string; body?: string };

// On-site reader overlay for research papers. Opens when a research row dispatches
// "rds:open-paper", loads the hosted paper in an iframe, blurs the page behind.
// Same frosted-overlay system as the mollykpowers site's PostReader.
export default function ResearchReader() {
  const [paper, setPaper] = useState<Paper | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => setPaper((e as CustomEvent).detail as Paper);
    window.addEventListener("rds:open-paper", onOpen as EventListener);

    // Second, independent path to the same overlay. The research page's own
    // onClick only fires once that page's chunk has hydrated; if it hasn't (or
    // it failed), the row is still a live <a> and the browser just navigates to
    // the source — which is what mobile Safari was doing. This listener lives in
    // the root layout, is native rather than synthetic, and runs in the capture
    // phase, so it intercepts the tap before the default follows the href.
    const onDocClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return;
      const target = e.target as Element | null;
      const row = target?.closest?.("a[data-paper]") as HTMLAnchorElement | null;
      if (!row) return;
      const found = research.find((r) => r.href === row.dataset.paper);
      if (!found) return; // unknown row: let it navigate rather than dead-end
      e.preventDefault();
      setPaper(found as Paper);
    };
    document.addEventListener("click", onDocClick, true);

    return () => {
      window.removeEventListener("rds:open-paper", onOpen as EventListener);
      document.removeEventListener("click", onDocClick, true);
    };
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
            {/* SVG rather than a "×" glyph: the character centers on its own
                baseline, which left it sitting high in the circle. */}
            <button className="reader-x" onClick={() => setPaper(null)} aria-label="Close">
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d="M1 1L11 11M11 1L1 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
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
