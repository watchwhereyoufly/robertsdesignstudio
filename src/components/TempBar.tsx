"use client";

import { useEffect, useRef } from "react";

// Fixed bottom description bar that parks above the footer when it scrolls into view.
export default function TempBar({
  variant = "light",
}: {
  variant?: "dark" | "light" | "scroll";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = ref.current;
    const footer = document.getElementById("siteFooter");
    if (!bar || !footer) return;
    const h = bar.offsetHeight;
    const position = () => {
      const rect = footer.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        bar.style.position = "absolute";
        bar.style.bottom = "auto";
        bar.style.top = footer.offsetTop - h + "px";
      } else {
        bar.style.position = "fixed";
        bar.style.bottom = "0";
        bar.style.top = "auto";
      }
    };
    window.addEventListener("scroll", position, { passive: true });
    window.addEventListener("resize", position);
    position();
    return () => {
      window.removeEventListener("scroll", position);
      window.removeEventListener("resize", position);
    };
  }, []);

  const dark = variant === "dark";
  return (
    <div
      id="tempBar"
      ref={ref}
      className={variant === "scroll" ? "temp-bar-scroll" : undefined}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "8px var(--page-pad)",
        background: dark ? "#111111" : "#FFFFFF",
        borderTop: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        color: dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.25)",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 200,
        transition: "background 0.4s ease, color 0.4s ease, border-color 0.4s ease",
      }}
    >
      <span>Roberts Design Studio is an American design company specializing in brand, package, digital, and web design.</span>
      <span>Make It Real</span>
    </div>
  );
}
