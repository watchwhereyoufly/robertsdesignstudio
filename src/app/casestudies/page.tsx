import type { Metadata } from "next";
import styles from "./index.module.css";
import Header from "@/components/Header";
import MountainDraw from "@/components/MountainDraw";
import Footer from "@/components/Footer";
import Grid from "./Grid";

export const metadata: Metadata = {
  title: "Case Studies | Roberts Design Studio",
  description:
    "Case studies from Roberts Design Studio. Brand, package, digital, and web design for products that demand craft.",
  openGraph: { images: ["/og-image.jpg"] },
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

        <Grid />
      </div>
      <Footer />
    </>
  );
}
