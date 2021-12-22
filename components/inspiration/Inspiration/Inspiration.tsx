import { useCountryData } from "../../../hooks/inspirationHook";
import { InspiractionLocation, InspirationHeader } from "../../../types/types";
import styles from "./Inspiration.module.css";

export default function Inspiration() {
  const { headers, highlightedHeader, updateHighlightedHeader } =
    useCountryData();

  return (
    <div className={styles.container}>
      <span aria-label="inspiration" className={styles.title}>
        Inspiration for future getaways
      </span>
      <div className={styles.menu}>
        {/** header section */}
        <div className={styles.headerContainer}>
          {headers.map((header) => (
            <Header
              key={header.headerName}
              {...header}
              highlighted={header.headerName === highlightedHeader.headerName}
              onClick={() => updateHighlightedHeader(header.headerName)}
            />
          ))}
        </div>
        {/** location section */}
        <div aria-label="locations" className={styles.location}>
          {highlightedHeader.locations.map(({ primary, secondary }) => (
            <Location key={primary} primary={primary} secondary={secondary} />
          ))}
        </div>
      </div>
    </div>
  );
}

type HeaderProps = InspirationHeader & {
  onClick?: () => void;
  highlighted: boolean;
};

const Header = (props: HeaderProps) => {
  return (
    <>
      <div className={styles.headerContainer}>
        <button
          aria-label={props.headerName}
          className={[
            styles.header,
            props.highlighted ? styles.header_highlighted : "",
          ].join(" ")}
          onClick={props.onClick}
        >
          {props.headerName}
        </button>
      </div>
    </>
  );
};

const Location = (props: InspiractionLocation) => {
  return (
    <div className={styles.location__innerContainer}>
      <div className={styles.location__primary}>{props.primary}</div>
      <div className={styles.location__secondary}>{props.secondary}</div>
    </div>
  );
};
