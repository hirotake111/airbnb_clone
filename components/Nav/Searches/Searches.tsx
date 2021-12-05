import { ReactNode } from "react";
import styles from "./Searches.module.css";

export default function Searches() {
  return (
    <div className={styles.container}>
      <ChildItem>Places to stay</ChildItem>
      <ChildItem>Experiences</ChildItem>
      <ChildItem>Online experiences</ChildItem>
    </div>
  );
}

function ChildItem({ children }: { children: ReactNode }) {
  return <div className={styles.child}>{children}</div>;
}
