import styles from "./MiniFooter.module.css";

// Compact footer for the viewport pages (home, info): a thin dark description
// bar over the orange bottom bar.
export default function MiniFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.thinBar}>
        <span>Roberts Design Studio is an American design company specializing in brand, package, digital, and web design.</span>
        <span>Make It Real</span>
      </div>
      <div className={styles.orange}>
        <div className={styles.bar}>
          <div className={styles.bottom}>
            <span>UNITED STATES</span>
            <span>&copy; 2026 Roberts Design Studio</span>
            <span>
              <a href="#">PRIVACY POLICY</a> &middot; <a href="#">TERMS OF SERVICE</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
