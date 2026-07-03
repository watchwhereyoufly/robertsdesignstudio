import type { Metadata } from "next";
import styles from "./index.module.css";
import Header from "@/components/Header";
import MountainDraw from "@/components/MountainDraw";
import TempBar from "@/components/TempBar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | Roberts Design Studio",
  description:
    "Case studies from Roberts Design Studio. Brand, package, digital, and web design for products that demand craft.",
  openGraph: { images: ["/og-image-dark.jpg"] },
};

export default function CaseStudies() {
  return (
    <>
      <Header />

      <div className={styles.mountainTop}>
        <MountainDraw stroke="rgba(255,255,255,0.15)" />
      </div>

      <div className={styles.page}>
        <div className={styles.title}>Case Studies</div>

        <div className={styles.grid}>
          {caseStudies.map((c) => (
            <a key={c.slug} href={`/casestudies/${c.slug}/`} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardId}>{c.no}</span>
                <span className={styles.cardDate}>{c.date}</span>
              </div>
              <div className={styles.imgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.img}
                  src={c.preview}
                  alt={`${c.title} case study preview`}
                  style={{
                    objectFit: c.previewFit,
                    objectPosition: c.previewPos,
                    background: c.previewBg,
                  }}
                />
              </div>
              <div className={styles.metaRow}>
                <span className={styles.cardTitle}>{c.title}</span>
                <span className={styles.cardTag}>{c.tag}</span>
              </div>
              <p className={styles.caption}>{c.caption}</p>
              <div className={styles.divider} />
            </a>
          ))}
        </div>
      </div>

      <TempBar variant="dark" />
      <Footer />
    </>
  );
}
