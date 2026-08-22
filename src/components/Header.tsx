"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { STAR_PATH } from "./logoPaths";

const TABS = [
  { label: "Case Studies", href: "/casestudies/" },
  { label: "Research", href: "/research/" },
  { label: "Info", href: "/about/" },
] as const;

const DARK_VARS: React.CSSProperties = {
  ["--rule" as string]: "rgba(255,255,255,0.10)",
  ["--ink" as string]: "#FFFFFF",
  ["--ink-2" as string]: "#8B8B93",
  ["--ink-3" as string]: "#55555C",
  ["--pill" as string]: "rgba(255,255,255,0.06)",
  ["--pill-hover" as string]: "rgba(255,255,255,0.11)",
  ["--pill-active" as string]: "rgba(255,255,255,0.16)",
  ["--hdr-accent" as string]: "#F04E42",
};
const LIGHT_VARS: React.CSSProperties = {
  ["--rule" as string]: "rgba(17,17,19,0.08)",
  ["--ink" as string]: "#15151A",
  ["--ink-2" as string]: "#585862",
  ["--ink-3" as string]: "#9D9DA8",
  ["--pill" as string]: "rgba(17,17,19,0.05)",
  ["--pill-hover" as string]: "rgba(17,17,19,0.09)",
  ["--pill-active" as string]: "rgba(17,17,19,0.13)",
  ["--hdr-accent" as string]: "#F04E42",
};

const GLASS: React.CSSProperties = {
  backdropFilter: "blur(14px) saturate(1.4)",
  WebkitBackdropFilter: "blur(14px) saturate(1.4)",
  border: "1px solid var(--rule)",
};

export default function Header({ theme = "light", hidePills = false }: { theme?: "dark" | "light"; hidePills?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
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
    : pathname.startsWith("/about")
    ? "/about/"
    : null;

  const renderTab = (label: string, href: string, i: number) => {
    const active = href === activeHref;
    const num = String(i + 1).padStart(2, "0");
    const isMail = href.startsWith("mailto:");
    const inner = (
      <>
        <span
          className="mono-num nav-num"
          style={{
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "0.04em",
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
          {num}
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: active ? 600 : 500,
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
      className="rds-header"
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
            <svg width="30" height="29" viewBox="0 0 456.73 434.8" aria-hidden="true" style={{ display: "block" }}>
              <path d={STAR_PATH} fill="var(--ink)" />
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
