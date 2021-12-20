import styles from "./Background.module.css";

export default function Background() {
  return (
    <div className={styles.background}>
      <div className={styles.black}></div>
      <div className={styles.white}></div>
    </div>
  );
}
