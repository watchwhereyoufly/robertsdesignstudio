import styles from "./MiniFooter.module.css";

// Compact footer for the viewport pages (home, info): a thin dark description
// bar over the orange bottom bar. `hideThinBar` drops the description strip and
// leaves the orange bar alone.
export default function MiniFooter({ hideThinBar = false }: { hideThinBar?: boolean }) {
  return (
    <div className={styles.footer}>
      {!hideThinBar && (
        <div className={styles.thinBar}>
          <span>Roberts Design Studio is an American design company specializing in brand, package, digital, and web design.</span>
          <span>Make It Real</span>
        </div>
      )}
      <div className={styles.orange}>
        <div className={styles.bar}>
          <div className={styles.bottom}>
            <span>&copy; 2026 Roberts Design Studio</span>
            <span>United States</span>
          </div>
        </div>
      </div>
    </div>
  );
}
