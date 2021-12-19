import type { NextPage } from "next";

import { useSearch } from "../hooks/searchHook";
import Nav from "../components/Nav/Nav/Nav";
import GiftCard from "../components/giftcard/GiftCard/GiftCard";
import Hero from "../components/hero/Hero";
import NextTrip from "../components/nextTrip/NextTrip";
import MobileMenu from "../components/mobileMenu/MobileMenu/MobileMenu";
import Discover from "../components/discover/Discover/Discover";
import Hosting from "../components/hosting/Hosting";

import styles from "../styles/Home.module.css";

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
        <NextTrip />
        <Discover />
        <Hosting />
        <div className={styles.mobileMenu}>
          <MobileMenu />
        </div>
      </div>
    </>
  );
};

export default Home;
