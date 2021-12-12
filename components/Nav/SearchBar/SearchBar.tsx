import { useSearch } from "../../../hooks/searchHook";
import SearchIcon from "../SearchIcon/SearchIcon";
// import SearchIcon from "../SearchIcon/SearchIcon";
import SearchItem from "../SearchItem/SearchItem";

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
      {enabled ? (
        <div className={styles.search__form}>
          <SearchItem
            label="Location"
            placeholder="Where are you going?"
            isTextForm
          />
          <div className={styles.search__divider}></div>
          <div className={styles.search__date}>
            <SearchItem label="Check in" placeholder="Add dates" />
            <div className={styles.search__divider}></div>
            <SearchItem label="Check Out" placeholder="Add dates" />
            <div className={styles.search__divider}></div>
          </div>
          <SearchItem
            label="Guests"
            placeholder="Add guests"
            icon={<SearchIcon size="md" />}
          />
        </div>
      ) : (
        <>
          {" "}
          <div aria-label="searchLabel" className={styles.label}>
            Start your search
          </div>
          <div className={styles.iconContainer}>
            <SearchIcon size="sm" />
          </div>
        </>
      )}
    </div>
  );
}
