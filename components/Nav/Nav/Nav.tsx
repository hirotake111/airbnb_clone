import { useWindow } from "../../../hooks/windowHook";
import RightMenu from "../RIghtMenu/RightMenu";
import Centermenu from "../CenterMenu/CenterMenu";

import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";

export default function Nav() {
  const scrolled = useWindow();

  return (
    <>
      <div id="target" aria-label={scrolled ? "scrolled" : "unscrolled"}></div>
      <div className={styles.nav__side}>
        <Logo scrolled={scrolled} />
        <RightMenu />
      </div>
      <div
        id="nav"
        className={`${styles.nav} ${scrolled ? styles.nav_scrolled : ""}`}
        aria-label="navigation"
      >
        <Centermenu />
      </div>
    </>
  );
}
