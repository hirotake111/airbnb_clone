import { ReactNode } from "react";

import SearchBar from "../../search/SearchBar/SearchBar";
import styles from "./CenterMenu.module.css";

export default function Centermenu() {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <div className={styles.items}>
          <ChildItem>Places to stay</ChildItem>
          <ChildItem>Experiences</ChildItem>
          <ChildItem>Online experiences</ChildItem>
        </div>
      </div>
      <div className={styles.searchbarContainer}>{<SearchBar />}</div>
    </div>
  );
}

function ChildItem({ children }: { children: ReactNode }) {
  return <div className={styles.child}>{children}</div>;
}
