import type { Metadata } from "next";
import styles from "./about.module.css";
import Header from "@/components/Header";
import MountainDraw from "@/components/MountainDraw";
import MiniFooter from "@/components/MiniFooter";
import { RDS_PATHS, RDS_STAR_POLYGON, FOOTER_STAGGER } from "@/components/logoPaths";

export const metadata: Metadata = {
  title: "About | Roberts Design Studio",
  description:
    "Roberts Design Studio is an American design company specializing in brand, package, digital, and web design for products that demand craft.",
  openGraph: { images: ["/og-image.jpg"] },
};

export default function About() {
  return (
    <>
      <Header />

      <div className={styles.mountainTop}>
        <MountainDraw stroke="rgba(255,255,255,0.15)" />
      </div>

      <div className={styles.viewport}>
        <div className={styles.page}>
          <svg className={styles.fixedLogo} viewBox="470 700 1250 800" aria-hidden="true">
            {RDS_PATHS.map((d, i) => (
              <path
                key={i}
                className={styles.shape}
                d={d}
                style={{ ["--dash" as string]: FOOTER_STAGGER[i + 1][0], ["--delay" as string]: `${FOOTER_STAGGER[i + 1][1]}s` }}
              />
            ))}
            <polygon
              className={styles.shape}
              points={RDS_STAR_POLYGON}
              style={{ ["--dash" as string]: FOOTER_STAGGER[0][0], ["--delay" as string]: `${FOOTER_STAGGER[0][1]}s` }}
            />
          </svg>

          <div className={styles.title}>About</div>

          <p className={styles.body}>
            <strong>Roberts Design Studio</strong> is an American design company specializing in{" "}
            <strong>brand</strong>, <strong>package</strong>, <strong>digital</strong>, and{" "}
            <strong>web design</strong>. Founded by <strong>Evan Roberts</strong> in 2025, RDS builds brand
            systems directly in code.
          </p>

          <div className={styles.sectionLabel}>Contact</div>
          <div className={styles.contact}>
            <a href="mailto:evan@robertsdesignstudio.com">evan@robertsdesignstudio.com</a>
          </div>
        </div>

        <MiniFooter hideThinBar />
      </div>
    </>
  );
}
