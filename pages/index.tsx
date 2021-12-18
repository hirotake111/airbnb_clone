import type { NextPage } from "next";

import { useSearch } from "../hooks/searchHook";
import Nav from "../components/Nav/Nav/Nav";

import styles from "../styles/Home.module.css";
import GiftCard from "../components/giftcard/GiftCard/GiftCard";
import Hero from "../components/hero/Hero";
import NextTrip from "../components/nextTrip/NextTrip";
import MobileMenu from "../components/mobileMenu/MobileMenu/MobileMenu";

const Home: NextPage = () => {
  const { disableSearch, scrolled } = useSearch();

  return (
    <>
      <div id="target" aria-label={scrolled ? "scrolled" : "unscrolled"}></div>
      <div
        className={[
          styles.navContainer,
          scrolled ? styles.navContainer_scrolled : "",
        ].join(" ")}
      >
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
        {/* <div className={styles.nextTrip__container}>
          <NextTrip />
        </div>
        <span style={{ height: "200vh" }}>Index page</span> */}
        <div className={styles.mobileMenu}>
          <MobileMenu />
        </div>
      </div>
    </>
  );
};

export default Home;
