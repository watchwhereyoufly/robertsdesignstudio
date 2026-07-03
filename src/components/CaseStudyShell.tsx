"use client";

import { useEffect } from "react";
import "@/app/casestudies/caseStudy.css";
import Header from "./Header";
import TempBar from "./TempBar";
import Footer from "./Footer";

export default function CaseStudyShell({ body }: { body: string }) {
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
