import type { NextPage } from "next";
import Image from "next/image";

import { useSearch } from "../hooks/searchHook";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { disableSearch } = useSearch();

  return (
    <div className={styles.container} onClick={disableSearch}>
      <div className={styles.hero}>
        <Image
          src="/hero.jpg"
          width="1200"
          height="600"
          layout="responsive"
          alt="Hero image"
        />
        <h1 className={styles.hero__title}>Not sure where to go? Perfect.</h1>
        <div className={styles.hero__buttonContainer}>
          <button className={styles.hero__button}>
            <span className={styles.hero__buttonInnerText}>I'm flexible</span>
          </button>
        </div>
      </div>
      <span style={{ height: "200vh" }}>Index page</span>
    </div>
  );
};

export default Home;
