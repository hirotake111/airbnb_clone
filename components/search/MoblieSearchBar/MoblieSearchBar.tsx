import { useWindow } from "../../../hooks/windowHook";

import styles from "./MobileSearchBar.module.css";

export default function MobileSearchBar() {
  const scrolled = useWindow();

  return (
    <div aria-label="mobile search bar" className={styles.outline}>
      <button
        aria-label="mobile search button"
        className={[styles.button, scrolled ? styles.button_scrolled : ""].join(
          " "
        )}
      >
        <div className={styles.inline}>
          <div className={styles.iconContainer}>
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
          Where are you going?
        </div>
      </button>
    </div>
  );
}
