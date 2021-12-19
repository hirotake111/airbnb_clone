import Image from "next/image";

import MobileImage from "../../public/hero_mobile.jpg";

import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div className={styles.hero}>
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
      {/** image for mobile device */}
      <div className={styles.imageContainer_mobile}>
        <Image aria-label="hero mobile image" src={MobileImage} priority />
      </div>
      {/** image for other device */}
      <div className={styles.imageContainer}>
        <Image
          aria-label="hero image"
          src="/hero.webp"
          width="1920"
          height="960"
          alt="Hero image"
          layout="responsive"
          priority
        />
      </div>
    </div>
  );
}
