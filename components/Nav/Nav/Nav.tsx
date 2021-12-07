import { useWindow } from "../../../hooks/windowHook";
import RightMenu from "../RIghtMenu/RightMenu";
import Centermenu from "../CenterMenu/CenterMenu";

import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import { useAppSelector } from "../../../redux/store";

export default function Nav() {
  const scrolled = useWindow();
  const { enabled } = useAppSelector((state) => state.search);

  return (
    <>
      <div id="target" aria-label={scrolled ? "scrolled" : "unscrolled"}></div>
      <div
        id="nav"
        className={`${styles.nav} ${scrolled ? styles.nav_scrolled : ""}`}
        aria-label="navigation"
      >
        <div
          className={`${styles.nav__center} ${
            enabled ? "" : styles.nav__center_searchDisabled
          }`}
        >
          <Centermenu />
        </div>
      </div>
      <Logo scrolled={scrolled} />
      <RightMenu scrolled={scrolled} />
    </>
  );
}
