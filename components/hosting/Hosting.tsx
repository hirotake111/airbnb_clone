import Image from "next/image";

import PC from "../../public/hosting/hero.jpg";
import Mobile from "../../public/hosting/hero_mobile.jpg";
import WhiteButton from "../common/WhiteButton/WhiteButton";

import styles from "./Hosting.module.css";

export default function Hosting() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.titleAndButton}>
          <span aria-label="title" className={styles.title}>
            Questions
            <br />
            about
            <br />
            hosting?
          </span>
          <a href="/">
            <WhiteButton>Ask a Superhost</WhiteButton>
          </a>
        </div>
        <div className={[styles.image, styles.image_pc].join(" ")}>
          <Image src={PC} layout="responsive" />
        </div>
        {/* <div className={[styles.image, styles.image_mobile].join(" ")}>
        <Image src={Mobile} />
      </div> */}
      </div>
    </div>
  );
}
