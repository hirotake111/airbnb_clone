import { ReactNode } from "react";

import styles from "./Container.module.css";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div aria-label="container" className={styles.container}>
      {children}
    </div>
  );
}
