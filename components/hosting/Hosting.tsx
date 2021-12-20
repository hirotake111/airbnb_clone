import Image from "next/image";
import Link from "next/link";

import PC from "../../public/hosting/hero.jpg";
import Mobile from "../../public/hosting/hero_mobile.jpg";
import WhiteButton from "../common/WhiteButton/WhiteButton";

import styles from "./Hosting.module.css";

export default function Hosting() {
  return (
    <div className={styles.container}>
      <div className={styles.titleAndImage}>
        <div className={styles.innerContainer}>
          <div className={styles.titleAndButton}>
            <span aria-label="title" className={styles.title}>
              Questions
              <br />
              about
              <br />
              hosting?
            </span>
            <Link href="/" passHref>
              <a>
                <WhiteButton>Ask a Superhost</WhiteButton>
              </a>
            </Link>
          </div>
        </div>
        <div className={[styles.image, styles.image_pc].join(" ")}>
          <Image src={PC} layout="responsive" alt="superhost" />
        </div>

        <div className={[styles.image, styles.image_mobile].join(" ")}>
          <Image src={Mobile} alt="superhost" />
        </div>
      </div>
    </div>
  );
}
