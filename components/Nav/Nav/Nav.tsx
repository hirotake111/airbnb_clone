import { useWindow } from "../../../hooks/windowHook";
import { useSearch } from "../../../hooks/searchHook";
import RightMenu from "../RIghtMenu/RightMenu";
import Centermenu from "../CenterMenu/CenterMenu";
import MobileSearchBar from "../../search/MoblieSearchBar/MoblieSearchBar";
import Logo from "../Logo/Logo";

import styles from "./Nav.module.css";

export default function Nav() {
  const scrolled = useWindow();
  const { enabled } = useSearch();

  return (
    <>
      <div id="target" aria-label={scrolled ? "scrolled" : "unscrolled"}></div>
      <Logo scrolled={scrolled} />
      <RightMenu scrolled={scrolled} />
      {/** mobile navbar */}
      <div className={styles.nav__mobile}>
        <MobileSearchBar />
      </div>
      {/** normal vanbar */}
      <div
        id="nav"
        aria-label="navigation"
        className={[
          styles.nav,
          scrolled ? styles.nav_scrolled : "",
          enabled ? styles.nav_searchEnabled : "",
        ].join(" ")}
      >
        <div
          className={[
            styles.nav__center,
            enabled ? "" : styles.nav__center_searchDisabled,
            scrolled ? styles.nav__center_scrolled : "",
          ].join(" ")}
        >
          <Centermenu />
        </div>
      </div>
    </>
  );
}
