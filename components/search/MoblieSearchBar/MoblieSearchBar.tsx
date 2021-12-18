import { useWindow } from "../../../hooks/windowHook";
import ExploreIcon from "../../common/ExploreIcon/ExploreIcon";

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
            <ExploreIcon />
          </div>
          Where are you going?
        </div>
      </button>
    </div>
  );
}
