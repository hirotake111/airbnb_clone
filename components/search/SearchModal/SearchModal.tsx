import { ReactNode } from "react";
import styles from "./SearchModal.module.css";

interface Props {
  width?: number;
  children: ReactNode;
}

export default function SearchModal({ children, width }: Props) {
  return (
    <div
      aria-label="search modal"
      className={styles.container}
      style={{ width: width ? `${width}px` : "auto" }}
    >
      {children}
    </div>
  );
}
