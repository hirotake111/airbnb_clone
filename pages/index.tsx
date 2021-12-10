import type { NextPage } from "next";
import Image from "next/image";

import { useSearch } from "../hooks/searchHook";
import Nav from "../components/Nav/Nav/Nav";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { disableSearch } = useSearch();

  return (
    <>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <div className={styles.container} onClick={disableSearch}>
        <div className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/hero.jpg"
              width="1200"
              height="600"
              // layout="responsive"
              alt="Hero image"
              className={styles.heroImage}
            />
            {/* <img
              src="/hero.jpg"
              style={{
                objectFit: "contain",
                width: "100%",
                position: "absolute",
              }}
            /> */}
          </div>
          <h1 className={styles.hero__title}>Not sure where to go? Perfect.</h1>
          <div className={styles.hero__buttonContainer}>
            <button className={styles.hero__button}>
              <span className={styles.hero__buttonInnerText}>I'm flexible</span>
            </button>
          </div>
        </div>
        <span style={{ height: "200vh" }}>Index page</span>
      </div>
    </>
  );
};

export default Home;
