import styles from "./Inspiration.module.css";

export default function Inspiration() {
  return (
    <div className={styles.container}>
      <span aria-label="inspiration" className={styles.title}>
        Inspiration for future getaways
      </span>
      <div className={styles.menu}>
        <div className={styles.headerContainer}>headers</div>
        <div className={styles.contryContainer}>countries</div>
      </div>
    </div>
  );
}
