import type { Metadata } from "next";
import styles from "./index.module.css";
import Header from "@/components/Header";
import MountainDraw from "@/components/MountainDraw";
import Footer from "@/components/Footer";
import Grid from "./Grid";
import FitText from "@/components/FitText";

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
        <MountainDraw stroke="rgba(0,0,0,0.18)" />
      </div>

      <div className={styles.page}>
        <FitText className={styles.title}>Case Studies</FitText>

        <Grid />
      </div>
      <Footer />
    </>
  );
}
