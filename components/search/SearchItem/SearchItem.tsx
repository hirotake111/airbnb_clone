import { ReactNode } from "react";
import styles from "./SearchItem.module.css";

interface Props {
  label: string;
  placeholder: string;
  value?: string;
  isTextForm?: boolean;
  icon?: ReactNode;
  focused?: boolean;
  onClick?: () => void;
}

export default function SearchItem({
  label,
  placeholder,
  value,
  isTextForm,
  icon,
  focused,
  onClick,
}: Props) {
  return (
    <>
      <div className={styles.container} onClick={onClick}>
        <div
          aria-label="search item horizontal container"
          className={[
            styles.hContainer,
            focused ? styles.hContainer_focused : "",
          ].join(" ")}
        >
          <div className={styles.vContainer}>
            <span className={styles.label}>{label}</span>
            {isTextForm ? (
              <input
                aria-label="search input"
                type="text"
                value={value}
                className={styles.placeholder}
                placeholder={placeholder}
              />
            ) : (
              <span aria-label="search text" className={styles.placeholder}>
                {value ? value : placeholder}
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
