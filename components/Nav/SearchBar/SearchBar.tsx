import { useState } from "react";

import { useSearch } from "../../../hooks/searchHook";
import SearchModal from "../../search/SearchModal/SearchModal";
import SearchIcon from "../SearchIcon/SearchIcon";
import SearchItem from "../SearchItem/SearchItem";
import Location from "../../search/Location.tsx/Location";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const { enabled, enableSearch } = useSearch();
  const [searchFocused, setSearchFocued] = useState(false);

  const handleClick = () => {
    setSearchFocued((current) => !current);
  };

  return (
    <div className={styles.container}>
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
            <Divider />
            <div className={styles.search__date}>
              <SearchItem label="Check in" placeholder="Add dates" />
              <Divider />
              <SearchItem label="Check Out" placeholder="Add dates" />
              <Divider />
            </div>
            <div
              className={[
                styles.search__guests,
                searchFocused ? styles.search__guests_searchFocued : "",
              ].join(" ")}
            >
              <SearchItem
                label="Guests"
                placeholder="Add guests"
                icon={
                  <SearchIcon
                    size="md"
                    searchFocused={searchFocused}
                    onClick={handleClick}
                  />
                }
              />
            </div>
          </div>
        ) : (
          <>
            {/** shrinked search button */}{" "}
            <div aria-label="searchLabel" className={styles.label}>
              Start your search
            </div>
            <div className={styles.iconContainer}>
              <SearchIcon size="sm" />
            </div>
          </>
        )}
      </div>
      {/** search menu modal */}
      <div style={{ marginTop: "12px" }}>
        <SearchModal width={500}>
          <Location />
        </SearchModal>
      </div>
    </div>
  );
}

const Divider = () => <div className={styles.search__divider}></div>;
