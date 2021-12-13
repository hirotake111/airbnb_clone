import { ReactNode, RefObject } from "react";
import styles from "./SearchModal.module.css";

interface Props {
  width?: number;
  reference: RefObject<HTMLDivElement>;
  opened: boolean;
  children: ReactNode;
}

export default function SearchModal({
  width,
  reference,
  opened,
  children,
}: Props) {
  return (
    <div
      ref={reference}
      aria-label="search modal"
      className={styles.container}
      style={{
        width: width ? `${width}px` : "auto",
        display: opened ? "flex" : "none",
      }}
    >
      {children}
    </div>
  );
}
