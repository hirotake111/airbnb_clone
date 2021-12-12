import { ReactNode } from "react";
import styles from "./SearchItem.module.css";

interface Props {
  label: string;
  placeholder: string;
  isTextForm?: boolean;
  icon?: ReactNode;
}

export default function SearchItem({
  label,
  placeholder,
  isTextForm,
  icon,
}: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hContainer}>
          <div className={styles.vContainer}>
            <span className={styles.label}>{label}</span>
            {isTextForm ? (
              <input
                type="text"
                className={styles.placeholder}
                placeholder={placeholder}
              />
            ) : (
              <span className={styles.placeholder}>{placeholder}</span>
            )}
          </div>
          {icon ? <div className={styles.iconContainer}>{icon}</div> : null}
        </div>
      </div>
    </>
  );
}
