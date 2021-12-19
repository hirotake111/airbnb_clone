import { MouseEventHandler, ReactNode } from "react";
import styles from "./WhiteButton.module.css";

interface Props {
  onClick?: MouseEventHandler;
  children: ReactNode;
}

export default function WhiteButton({ onClick, children }: Props) {
  return (
    <button aria-label="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
