import type { NextPage } from "next";
import { useDisableSearchOnIndex } from "../hooks/searchHook";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const disableSearchbar = useDisableSearchOnIndex();

  return (
    <>
      <div className={styles.container} onClick={disableSearchbar}>
        <span style={{ height: "1000px" }}>Index page</span>
      </div>
    </>
  );
};

export default Home;
