"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // Try to unmute on the first interaction anywhere on the page.
  // Browsers block audible autoplay until the user interacts, so the
  // video starts muted and gains sound the instant Evan touches anything.
  useEffect(() => {
    const enableSound = () => {
      const v = videoRef.current;
      if (v) {
        v.muted = false;
        v.volume = 1;
        setMuted(false);
        v.play().catch(() => {});
      }
      remove();
    };
    const remove = () => {
      window.removeEventListener("pointerdown", enableSound);
      window.removeEventListener("keydown", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("scroll", enableSound);
    };
    window.addEventListener("pointerdown", enableSound, { once: true });
    window.addEventListener("keydown", enableSound, { once: true });
    window.addEventListener("touchstart", enableSound, { once: true });
    window.addEventListener("scroll", enableSound, { once: true });
    return remove;
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    if (!next) v.volume = 1;
    setMuted(next);
    v.play().catch(() => {});
  };

  return (
    <>
      <Header hidePills />

      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100dvh",
          background: "#111111",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/prds-poster.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        >
          <source src="/prds-hero.mp4" type="video/mp4" />
        </video>

        {/* Mute / unmute toggle */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          style={{
            position: "absolute",
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 20px)",
            right: 20,
            width: 44,
            height: 44,
            borderRadius: 999,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            color: "#FFFFFF",
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(14px) saturate(1.4)",
            WebkitBackdropFilter: "blur(14px) saturate(1.4)",
          }}
        >
          {muted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M11 5 6 9H3v6h3l5 4V5Z" fill="currentColor" />
              <path d="m17 9 4 6M21 9l-4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M11 5 6 9H3v6h3l5 4V5Z" fill="currentColor" />
              <path d="M16 8.5a4.5 4.5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
