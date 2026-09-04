"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MARK_VIEWBOX, MARK_ASTERISK } from "./logoPaths";

const TABS = [
  { label: "Case Studies", href: "/casestudies/" },
  { label: "Research", href: "/research/" },
] as const;

const DARK_VARS: React.CSSProperties = {
  ["--rule" as string]: "rgba(255,255,255,0.10)",
  ["--ink" as string]: "#FFFFFF",
  ["--ink-2" as string]: "#8B8B93",
  ["--ink-3" as string]: "#55555C",
  ["--pill" as string]: "rgba(255,255,255,0.06)",
  ["--pill-hover" as string]: "rgba(255,255,255,0.11)",
  ["--pill-active" as string]: "rgba(255,255,255,0.16)",
  ["--hdr-accent" as string]: "#ED2777",
};
const LIGHT_VARS: React.CSSProperties = {
  ["--rule" as string]: "rgba(17,17,19,0.08)",
  ["--ink" as string]: "#15151A",
  ["--ink-2" as string]: "#585862",
  ["--ink-3" as string]: "#9D9DA8",
  ["--pill" as string]: "rgba(17,17,19,0.05)",
  ["--pill-hover" as string]: "rgba(17,17,19,0.09)",
  ["--pill-active" as string]: "rgba(17,17,19,0.13)",
  ["--hdr-accent" as string]: "#ED2777",
};

const GLASS: React.CSSProperties = {
  backdropFilter: "blur(14px) saturate(1.4)",
  WebkitBackdropFilter: "blur(14px) saturate(1.4)",
  border: "1px solid var(--rule)",
};

// Every page renders its own Header, so a client navigation unmounts and
// remounts this component and the CSS entrance animation runs again -- the mark
// re-drops on a bar that never actually left the screen. Module scope outlives
// the remount and only resets on a full page load, which is exactly when the
// entrance is honest.
let hasEntered = false;

export default function Header({ theme = "light", hidePills = false }: { theme?: "dark" | "light"; hidePills?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  // Read in the initialiser, not in render: the effect below flips the flag, and
  // reading it during render would make the first paint disagree with itself.
  const [skipEntrance] = useState(() => hasEntered);
  useEffect(() => {
    hasEntered = true;
    setMounted(true);
    const update = () => setIsMobile(window.innerWidth < 760);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pathname = usePathname() ?? "/";
  const activeHref = pathname.startsWith("/casestudies")
    ? "/casestudies/"
    : pathname.startsWith("/research")
    ? "/research/"
    : null;

  const renderTab = (label: string, href: string, i: number) => {
    const active = href === activeHref;
    const num = String(i + 1).padStart(2, "0");
    const isMail = href.startsWith("mailto:");
    const inner = (
      <>
        <span
          className="nav-num"
          style={{
            // Manrope, matching the label. Tabular figures so 01/02/03 hold the
            // same width and the badges never jitter between routes.
            fontFamily: "var(--font-display)",
            fontVariantNumeric: "tabular-nums",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: 0,
            lineHeight: 1,
            width: 20,
            height: 20,
            borderRadius: "50%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: active ? "var(--hdr-accent)" : "var(--pill-hover)",
            color: active ? "#FFFFFF" : "var(--ink-3)",
            transition: "background 0.15s ease, color 0.15s ease",
          }}
        >
          {/* The nudge rides an inner span, never the disc: flex centres the
              line box, not the ink, and Manrope's figures sit low inside it.
              Put the transform on the disc and the whole circle moves. */}
          <span style={{ display: "block", transform: "translate(-0.031em, -0.091em)" }}>{num}</span>
        </span>
        {/* Manrope, against the body's mono default. The badge beside it stays
            mono because a number is data; the label is a word. */}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 12,
            fontWeight: active ? 600 : 500,
            letterSpacing: 0,
            color: active ? "var(--ink)" : "var(--ink-2)",
            transition: "color 0.15s ease",
          }}
        >
          {label}
        </span>
      </>
    );
    const style: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 14px 7px 7px",
      borderRadius: 999,
      textDecoration: "none",
      whiteSpace: "nowrap",
      ...GLASS,
      background: active ? "var(--pill-active)" : "var(--pill)",
    };
    if (isMail) {
      return (
        <a key={href} href={href} className="rds-nav-pill" style={style} onClick={() => setExpanded(false)}>
          {inner}
        </a>
      );
    }
    return (
      <Link key={href} href={href} className="rds-nav-pill" style={style} onClick={() => setExpanded(false)} aria-current={active ? "page" : undefined}>
        {inner}
      </Link>
    );
  };

  return (
    <div
      className={skipEntrance ? "rds-header rds-header-settled" : "rds-header"}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "14px var(--page-pad) 0",
        pointerEvents: "none",
        ...(theme === "dark" ? DARK_VARS : LIGHT_VARS),
      }}
    >
      <div style={{ pointerEvents: "auto", display: "flex", flexDirection: "column", gap: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          {/* Left: star logo */}
          <Link href="/" aria-label="Roberts Design Studio — home" className="rds-star-link" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
            <svg width="42" height="42" viewBox={MARK_VIEWBOX} aria-hidden="true" style={{ display: "block" }}>
              <circle cx="289.47" cy="289.47" r="289.47" fill="var(--hdr-accent)" />
              <polygon points={MARK_ASTERISK} fill="#FFFFFF" />
            </svg>
          </Link>

          {/* Right: pills (desktop) or toggle (mobile) */}
          {!hidePills && (
          <nav style={{ display: "flex", alignItems: "center", gap: 6, minHeight: 38 }}>
            {!mounted ? null : isMobile ? (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-label={expanded ? "Close menu" : "Open menu"}
                aria-expanded={expanded}
                className="rds-nav-pill"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  color: "var(--ink-2)",
                  ...GLASS,
                  background: "var(--pill)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.22s ease" }}>
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : (
              TABS.map((t, i) => renderTab(t.label, t.href, i))
            )}
          </nav>
          )}
        </div>

        {/* Mobile dropdown */}
        {mounted && isMobile && !hidePills && (
          <div style={{ overflow: "hidden", maxHeight: expanded ? 260 : 0, pointerEvents: expanded ? "auto" : "none", transition: "max-height 0.42s cubic-bezier(0.22, 1, 0.36, 1)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, paddingTop: 8 }}>
              {TABS.map((t, i) => renderTab(t.label, t.href, i))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
