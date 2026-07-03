"use client";

import { useEffect, useRef } from "react";
import styles from "./AsciiStream.module.css";

const PHRASES = [
  "Roberts Design Studio",
  "Brand, packaging, digital, web",
  "Art direction & identity",
  "Northern Harvest",
  "Molly Powers",
  "Humboldt County, California",
  "Brooklyn, New York",
  "Established 2025",
  "Evan Roberts",
  "Selected work",
  "Design and build",
  "Independent studio",
  "Case studies",
  "Make it real",
  "United States",
  "Identity systems",
];

export default function AsciiStream() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const glitchChars = "!@#$%&*<?>/\\|[]{}=+~^:;0123456789abcdefghijklmnopqrstuvwxyz";
    const rows = 16;
    const fragments: {
      el: HTMLDivElement;
      speed: number;
      x: number;
      row: number;
      text: string;
      decoding: boolean;
      nextDecode: number;
    }[] = [];
    const rowYs = [3, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93];
    let phraseDeck: string[] = [];
    const timers: ReturnType<typeof setTimeout>[] = [];
    let raf = 0;
    let alive = true;

    function shuffleDeck() {
      phraseDeck = PHRASES.slice();
      for (let i = phraseDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [phraseDeck[i], phraseDeck[j]] = [phraseDeck[j], phraseDeck[i]];
      }
    }
    shuffleDeck();

    function randomPhrase(exclude?: string) {
      if (phraseDeck.length === 0) shuffleDeck();
      let p = phraseDeck.pop()!;
      if (p === exclude && phraseDeck.length > 0) {
        phraseDeck.unshift(p);
        p = phraseDeck.pop()!;
      }
      return p;
    }

    function wouldOverlap(rowIndex: number, startX: number) {
      const minGap = 200;
      for (const f of fragments) {
        if (f.row === rowIndex) {
          const fRight = f.x + (f.el.offsetWidth || 300);
          if (startX < fRight + minGap && startX > f.x - minGap) return true;
        }
      }
      return false;
    }

    function spawnFragment(rowIndex: number) {
      const activeInRow = fragments.filter((f) => f.row === rowIndex).length;
      if (activeInRow >= 2) return null;
      const startX = -(300 + Math.random() * 200);
      if (wouldOverlap(rowIndex, startX)) return null;
      const el = document.createElement("div");
      el.className = styles.line;
      el.style.top = rowYs[rowIndex] + "%";
      const phrase = randomPhrase();
      el.textContent = phrase;
      container!.appendChild(el);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => el.classList.add(styles.visible));
      });
      const rowSpeeds = [8, 18, 6, 22, 10, 15, 24, 7, 20, 12, 16, 9, 25, 11, 19, 14];
      const speed = rowSpeeds[rowIndex] + Math.random() * 3;
      const frag = { el, speed, x: startX, row: rowIndex, text: phrase, decoding: false, nextDecode: performance.now() + 2000 + Math.random() * 4000 };
      fragments.push(frag);
      return frag;
    }

    const startTimer = setTimeout(() => {
      if (!alive) return;
      for (let r = 0; r < rows; r++) {
        const f = spawnFragment(r);
        if (f) f.x = -200 + Math.random() * (container!.offsetWidth - 100);
      }

      function decodeTo(frag: (typeof fragments)[number]) {
        if (frag.decoding) return;
        frag.decoding = true;
        const oldText = frag.text;
        const newText = randomPhrase(oldText);
        const maxLen = Math.max(oldText.length, newText.length);
        const current = oldText.padEnd(maxLen).split("");
        const target = newText.padEnd(maxLen).split("");
        const resolved = new Array(maxLen).fill(false);

        const scramble = setInterval(() => {
          for (let i = 0; i < current.length; i++) {
            if (!resolved[i] && current[i] !== " ")
              current[i] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          frag.el.innerHTML = current
            .map((ch, i) => {
              if (resolved[i]) return ch === " " ? " " : ch;
              return ch === " " ? " " : '<span class="' + styles.glitch + '">' + ch + "</span>";
            })
            .join("");
        }, 50);

        timers.push(setTimeout(() => {
          const resolve = setInterval(() => {
            const count = Math.random() > 0.5 ? 2 : 1;
            for (let c = 0; c < count; c++) {
              let idx = -1;
              for (let i = 0; i < maxLen; i++) {
                if (!resolved[i]) { idx = i; break; }
              }
              if (idx === -1) {
                clearInterval(scramble);
                clearInterval(resolve);
                frag.text = newText.trim();
                frag.el.textContent = frag.text;
                frag.decoding = false;
                frag.nextDecode = performance.now() + 4000 + Math.random() * 2000;
                return;
              }
              resolved[idx] = true;
              current[idx] = target[idx];
            }
          }, 60);
        }, 300 + Math.random() * 200));
      }

      let last = performance.now();
      function tick(now: number) {
        if (!alive) return;
        const dt = (now - last) / 1000;
        last = now;
        for (let i = fragments.length - 1; i >= 0; i--) {
          const f = fragments[i];
          f.x += f.speed * dt;
          f.el.style.transform = "translateX(" + f.x + "px)";
          if (!f.decoding && now >= f.nextDecode) decodeTo(f);
          if (f.x > container!.offsetWidth + 50) {
            f.el.remove();
            fragments.splice(i, 1);
          }
        }
        raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);

      function scheduleSpawn(rowIndex: number) {
        timers.push(setTimeout(() => {
          spawnFragment(rowIndex);
          scheduleSpawn(rowIndex);
        }, 2000 + Math.random() * 3000));
      }
      for (let r = 0; r < rows; r++) scheduleSpawn(r);
    }, 200);
    timers.push(startTimer);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      fragments.forEach((f) => f.el.remove());
    };
  }, []);

  return <div className={styles.stream} ref={ref} />;
}
