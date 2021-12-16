import Image from "next/image";

import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        aria-label="hero image"
        src="/hero.webp"
        width="1920"
        height="960"
        alt="Hero image"
        layout="responsive"
        priority={true}
      />
      <div className={styles.hero__titleButtonContainer}>
        <h1 aria-label="hero title" className={styles.hero__title}>
          Not sure where to go? Perfect.
        </h1>
        <button className={styles.hero__button}>
          <span className={styles.hero__buttonInnerText}>
            I&apos;m flexible
          </span>
        </button>
      </div>
    </div>
  );
}
