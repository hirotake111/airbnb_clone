import type { NextPage } from "next";

import { useSearch } from "../hooks/searchHook";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { disableSearch } = useSearch();

  return (
    <div className={styles.container} onClick={disableSearch}>
      <span style={{ height: "1000px" }}>Index page</span>
    </div>
  );
};

export default Home;
