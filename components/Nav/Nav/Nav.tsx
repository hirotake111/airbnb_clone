import { useWindow } from "../../../hooks/windowHook";
import RightMenu from "../RIghtMenu/RightMenu";
import Centermenu from "../CenterMenu/CenterMenu";

import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import { useSearch } from "../../../hooks/searchHook";

export default function Nav() {
  const scrolled = useWindow();
  const { enabled } = useSearch();

  return (
    <>
      <div id="target" aria-label={scrolled ? "scrolled" : "unscrolled"}></div>
      <div
        id="nav"
        className={[
          styles.nav,
          scrolled ? styles.nav_scrolled : "",
          enabled ? styles.nav_searchEnabled : "",
        ].join(" ")}
        aria-label="navigation"
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
      <Logo scrolled={scrolled} />
      <RightMenu scrolled={scrolled} />
    </>
  );
}
