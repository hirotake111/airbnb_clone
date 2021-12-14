import { ReactNode } from "react";
import styles from "./SearchItem.module.css";

interface Props {
  label: string;
  placeholder: string;
  isTextForm?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function SearchItem({
  label,
  placeholder,
  isTextForm,
  icon,
  onClick,
}: Props) {
  return (
    <>
      <div className={styles.container} onClick={onClick}>
        <div className={styles.hContainer}>
          <div className={styles.vContainer}>
            <span className={styles.label}>{label}</span>
            {isTextForm ? (
              <input
                aria-label="search input"
                type="text"
                className={styles.placeholder}
                placeholder={placeholder}
              />
            ) : (
              <span aria-label="search text" className={styles.placeholder}>
                {placeholder}
              </span>
            )}
          </div>
          {icon ? (
            <div aria-label="search icon" className={styles.iconContainer}>
              {icon}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
