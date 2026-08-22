"use client";

import { useEffect } from "react";
import "@/app/casestudies/caseStudy.css";
import Header from "./Header";
import TempBar from "./TempBar";
import Footer from "./Footer";

export default function CaseStudyShell({ body }: { body: string }) {
  // The studio line fades off as the hero leaves. Driven from a scroll listener
  // rather than animation-timeline: Safari still does not ship scroll-driven
  // animations, and this runs on every browser the site targets.
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".cs-page .hero-tag");
    if (!el) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const fade = Math.min(window.innerHeight * 0.45, 420);
      const t = Math.min(Math.max(window.scrollY, 0) / fade, 1);
      el.style.opacity = String(1 - t);
      el.style.transform = `translateY(${t * -14}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    // draw the mountain divider when it scrolls into view
    const line = document.querySelector<SVGPolylineElement>(".cs-page .mountain-line");
    if (line) {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) line.style.strokeDashoffset = "0"; },
        { threshold: 0.1 }
      );
      obs.observe(line);
      return () => obs.disconnect();
    }
  }, []);


  return (
    <>
      <Header theme="light" />
      <div className="cs-page" dangerouslySetInnerHTML={{ __html: body }} />
      <TempBar variant="scroll" />
      <Footer />
    </>
  );
}
