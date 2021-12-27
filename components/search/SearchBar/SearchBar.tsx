import { useMemo } from "react";

import { useSearch } from "../../../hooks/searchHook";
import { useOnclickOutside } from "../../../hooks/clickHook";

import SearchModal from "../SearchModal/SearchModal";
import SearchIcon from "../SearchIcon/SearchIcon";
import SearchItem from "../SearchItem/SearchItem";
import Location from "../Location.tsx/Location";
import Calendar from "../../calendar/Calendar/Calendar";

import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { updateSelectedDate } from "../../../redux/searchSlice";
import { useAppSelector } from "../../../redux/store";

export default function SearchBar() {
  const { enabled, enableSearch } = useSearch();
  const location = useOnclickOutside();
  const checkIn = useOnclickOutside();
  const checkOut = useOnclickOutside();
  const guests = useOnclickOutside();

  const dispatch = useDispatch();
  const { schedule } = useAppSelector((state) => state.search);

  const searchFocused = useMemo(() => {
    return (
      location.opened || checkIn.opened || checkOut.opened || guests.opened
    );
  }, [location.opened, checkIn.opened, checkOut.opened, guests.opened]);

  const checkInDate = useMemo<string | undefined>(() => {
    // if date is invalid date, return empty string
    if (!new Date(schedule.checkIn).getTime()) return "";
    const arr = schedule.checkIn.split(" ");
    return `${arr[1]} ${arr[2]}`;
  }, [schedule.checkIn]);

  const checkOutDate = useMemo<string | undefined>(() => {
    // if date is invalid date, return empty string
    if (!new Date(schedule.checkOut).getTime()) return "";
    const arr = schedule.checkOut.split(" ");
    console.log("arr", arr);
    return `${arr[1]} ${arr[2]}`;
  }, [schedule.checkOut]);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.outline} ${
          enabled ? styles.outline_searchEnabled : ""
        }`}
        onClick={enableSearch}
      >
        {enabled ? (
          <div id="search_form" className={styles.search__form}>
            <div className={styles.search__location}>
              <SearchItem
                label="Location"
                placeholder="Where are you going?"
                isTextForm
                onClick={location.openSearchBar}
              />
            </div>
            <Divider />
            <div className={styles.search__date}>
              <SearchItem
                label="Check in"
                placeholder="Add dates"
                onClick={() => {
                  checkIn.openSearchBar();
                  dispatch(updateSelectedDate("checkin"));
                }}
                value={checkInDate}
              />
              <Divider />
              <SearchItem
                label="Check Out"
                placeholder="Add dates"
                onClick={() => {
                  checkOut.openSearchBar();
                  dispatch(updateSelectedDate("checkout"));
                }}
                value={checkOutDate}
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
                onClick={guests.openSearchBar}
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
          <Calendar />
        </SearchModal>
        <SearchModal opened={checkOut.opened} reference={checkOut.ref}>
          {/* <div>check out</div> */}
          <Calendar />
        </SearchModal>
        <SearchModal opened={guests.opened} reference={guests.ref} width={500}>
          <div>guests</div>
        </SearchModal>
      </div>
    </div>
  );
}

const Divider = () => <div className={styles.search__divider}></div>;
