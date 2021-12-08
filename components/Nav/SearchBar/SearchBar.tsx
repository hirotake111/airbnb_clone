import { useSearch } from "../../../hooks/searchHook";

import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const { enabled, enableSearch } = useSearch();

  return (
    <div
      className={`${styles.outline} ${
        enabled ? styles.outline_searchEnabled : null
      }`}
      onClick={enableSearch}
    >
      <div aria-label="searchLabel" className={styles.label}>
        Start your search
      </div>
      <div aria-label="searchIcon" className={styles.icon__outlilne}>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className={styles.icon}
        >
          <g fill="none">
            <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
