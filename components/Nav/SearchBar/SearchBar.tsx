import { useState } from "react";

import { useSearch } from "../../../hooks/searchHook";
import SearchIcon from "../SearchIcon/SearchIcon";
import SearchItem from "../SearchItem/SearchItem";

import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const { enabled, enableSearch } = useSearch();
  const [searchFocued, setSearchFocued] = useState(false);

  const handleClick = () => {
    setSearchFocued((current) => !current);
  };

  return (
    <div
      className={`${styles.outline} ${
        enabled ? styles.outline_searchEnabled : ""
      }`}
      onClick={enableSearch}
    >
      {enabled ? (
        <div className={styles.search__form}>
          <div className={styles.search__location}>
            <SearchItem
              label="Location"
              placeholder="Where are you going?"
              isTextForm
            />
          </div>
          <div className={styles.search__divider}></div>
          <div className={styles.search__date}>
            <SearchItem label="Check in" placeholder="Add dates" />
            <div className={styles.search__divider}></div>
            <SearchItem label="Check Out" placeholder="Add dates" />
            <div className={styles.search__divider}></div>
          </div>
          <div
            className={[
              styles.search__guests,
              searchFocued ? styles.search__guests_searchFocued : "",
            ].join(" ")}
          >
            <SearchItem
              label="Guests"
              placeholder="Add guests"
              icon={
                <SearchIcon
                  size="md"
                  searchFocued={searchFocued}
                  onClick={handleClick}
                />
              }
            />
          </div>
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
