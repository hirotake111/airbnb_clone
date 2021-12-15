import type { NextPage } from "next";
import Image from "next/image";

import { useSearch } from "../hooks/searchHook";
import Nav from "../components/Nav/Nav/Nav";

import styles from "../styles/Home.module.css";
import GiftCard from "../components/giftcard/GiftCard/GiftCard";

const Home: NextPage = () => {
  const { disableSearch } = useSearch();

  return (
    <>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <div className={styles.main} onClick={disableSearch}>
        <div className={styles.hero__container}>
          <div className={styles.hero}>
            <Image
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
        </div>
        <GiftCard />
        <span style={{ height: "200vh" }}>Index page</span>
      </div>
    </>
  );
};

export default Home;
