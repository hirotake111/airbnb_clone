import { ReactNode } from "react";
import styles from "./OvalButton.module.css";

interface Props {
  label: ReactNode;
  width?: number;
}

export default function OvalButton({ label, width }: Props) {
  return (
    <div
      className={styles.container}
      style={{ width: width ? `${width}px` : "auto" }}
    >
      {label}
    </div>
  );
}
