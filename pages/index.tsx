import type { NextPage } from "next";

import { disableSearch } from "../redux/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { enabled } = useAppSelector((state) => state.search);
  const { scrolled } = useAppSelector((state) => state.window);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    console.log("index clicked");
    if (enabled && scrolled) dispatch(disableSearch());
  };

  return (
    <>
      <div className={styles.container} onClick={handleClick}>
        <span style={{ height: "1000px" }}>Index page</span>
      </div>
    </>
  );
};

export default Home;
