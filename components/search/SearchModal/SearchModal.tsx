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
        justifyContent: "center",
        boxShadow:
          "6.7px 6.7px 5.3px rgba(0, 0, 0, 0.024),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.036),100px 100px 80px rgba(0, 0, 0, 0.06)",
      }}
    >
      {children}
    </div>
  );
}
