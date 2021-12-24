import { useMemo } from "react";

import { useSearch } from "../../../hooks/searchHook";
import { useOnclickOutside } from "../../../hooks/clickHook";

import SearchModal from "../SearchModal/SearchModal";
import SearchIcon from "../SearchIcon/SearchIcon";
import SearchItem from "../SearchItem/SearchItem";
import Location from "../Location.tsx/Location";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const { enabled, enableSearch } = useSearch();
  const location = useOnclickOutside();
  const checkIn = useOnclickOutside();
  const checkOut = useOnclickOutside();
  const guests = useOnclickOutside();

  const searchFocused = useMemo(() => {
    return (
      location.opened || checkIn.opened || checkOut.opened || guests.opened
    );
  }, [location.opened, checkIn.opened, checkOut.opened, guests.opened]);

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
                onClick={location.open}
              />
            </div>
            <Divider />
            <div className={styles.search__date}>
              <SearchItem
                label="Check in"
                placeholder="Add dates"
                onClick={checkIn.open}
              />
              <Divider />
              <SearchItem
                label="Check Out"
                placeholder="Add dates"
                onClick={checkOut.open}
              />
              <Divider />
            </div>
            <div
              aria-label="guests item container"
              className={[
                styles.search__guests,
                searchFocused ? styles.search__guests_searchFocused : "",
              ].join(" ")}
            >
              <SearchItem
                label="Guests"
                placeholder="Add guests"
                onClick={guests.open}
                icon={<SearchIcon size="md" searchFocused={searchFocused} />}
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
      {/** location menu modal */}
      <div style={{ marginTop: "12px" }}>
        <SearchModal
          opened={location.opened}
          reference={location.ref}
          width={500}
        >
          <Location />
        </SearchModal>
        <SearchModal opened={checkIn.opened} reference={checkIn.ref}>
          <div>check in</div>
        </SearchModal>
        <SearchModal opened={checkOut.opened} reference={checkOut.ref}>
          <div>check out</div>
        </SearchModal>
        <SearchModal opened={guests.opened} reference={guests.ref} width={500}>
          <div>guests</div>
        </SearchModal>
      </div>
    </div>
  );
}

const Divider = () => <div className={styles.search__divider}></div>;
