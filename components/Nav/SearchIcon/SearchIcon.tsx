import styles from "./SearchIcon.module.css";

interface Props {
  size?: "sm" | "md";
}

export default function SearchIcon({ size }: Props) {
  const searchEnabled = true;

  return (
    <div
      aria-label="searchIcon"
      className={[
        styles.outlilne,
        size === "sm" ? styles.outline_sm : styles.outline_md,
        searchEnabled ? styles.outline_searchEnabled : null,
      ].join(" ")}
    >
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className={[
          styles.icon,
          size === "sm" ? styles.icon_sm : styles.icon_md,
        ].join(" ")}
      >
        <g fill="none">
          <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
        </g>
      </svg>
      {searchEnabled ? <div className={styles.buttonLabel}>Search</div> : null}
    </div>
  );
}
