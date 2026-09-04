"use client";

import Link from "next/link";
import { useRef } from "react";

const CHARS = "!@#$%&*<?>/\\|[]{}=+~^:;0123456789";

export default function GlitchLink({
  href,
  children,
  className,
}: {
  href: string;
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const animating = useRef(false);

  function onEnter() {
    const link = ref.current;
    if (!link || animating.current) return;
    animating.current = true;
    const original = children;
    const len = original.length;
    const resolved = new Array(len).fill(false);
    const duration = 300;
    const start = performance.now();
    function frame() {
      const progress = Math.min((performance.now() - start) / duration, 1);
      const resolveCount = Math.floor(progress * len);
      for (let i = 0; i < resolveCount; i++) resolved[i] = true;
      let result = "";
      for (let i = 0; i < len; i++) {
        if (resolved[i]) result += original[i];
        else if (original[i] === " ") result += " ";
        else result += '<span style="color:#ED2777">' + CHARS[Math.floor(Math.random() * CHARS.length)] + "</span>";
      }
      link!.innerHTML = result;
      if (progress < 1) requestAnimationFrame(frame);
      else {
        link!.textContent = original;
        animating.current = false;
      }
    }
    requestAnimationFrame(frame);
  }

  // next/link, not a bare anchor: a plain <a> reloads the document, which throws
  // away every bit of client state the site keeps between routes -- including the
  // flag that stops the header replaying its entrance on a bar that never left.
  return (
    <Link href={href} className={className} ref={ref} onMouseEnter={onEnter}>
      {children}
    </Link>
  );
}
