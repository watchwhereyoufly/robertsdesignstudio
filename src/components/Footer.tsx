import styles from "./Footer.module.css";
import { RDS_PATHS, RDS_STAR_POLYGON, FOOTER_STAGGER } from "./logoPaths";

export default function Footer() {
  return (
    <div className={styles.footer} id="siteFooter">
      <div className={styles.hero}>
        <div className={styles.logo}>
          <svg viewBox="470 760 1210 680" aria-hidden="true">
            <polygon
              className={styles.shape}
              points={RDS_STAR_POLYGON}
              style={{ ["--dash" as string]: FOOTER_STAGGER[0][0], ["--delay" as string]: `${FOOTER_STAGGER[0][1]}s` }}
            />
            {RDS_PATHS.map((d, i) => (
              <path
                key={i}
                className={styles.shape}
                d={d}
                style={{ ["--dash" as string]: FOOTER_STAGGER[i + 1][0], ["--delay" as string]: `${FOOTER_STAGGER[i + 1][1]}s` }}
              />
            ))}
          </svg>
        </div>
        <div className={styles.tagline}>
          <span className={styles.taglineName}>Roberts Design Studio</span>
          <br />
          <span className={styles.taglineSub}>
            is an American design company
            <br />
            specializing in brand, package,
            <br />
            digital, and web design.
          </span>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={styles.barBottom}>
          <span>&copy; 2026 Roberts Design Studio</span>
          <span>United States</span>
        </div>
      </div>
    </div>
  );
}
