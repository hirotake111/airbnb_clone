import type { NextPage } from "next";

import { useSearch } from "../hooks/searchHook";
import Nav from "../components/Nav/Nav/Nav";

import styles from "../styles/Home.module.css";
import GiftCard from "../components/giftcard/GiftCard/GiftCard";
import Hero from "../components/hero/Hero";
import NextTrip from "../components/nextTrip/NextTrip";

const Home: NextPage = () => {
  const { disableSearch } = useSearch();

  return (
    <>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <div
        aria-label="main component"
        className={styles.main}
        onClick={disableSearch}
      >
        <div className={styles.hero__container}>
          <Hero />
        </div>
        <GiftCard />
        <div className={styles.nextTrip__container}>
          <NextTrip />
        </div>
        <span style={{ height: "200vh" }}>Index page</span>
      </div>
    </>
  );
};

export default Home;
