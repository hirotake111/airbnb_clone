import { useSearch } from "../../../hooks/searchHook";

import SearchModal from "../SearchModal/SearchModal";
import SearchIcon from "../SearchIcon/SearchIcon";
import SearchItem from "../SearchItem/SearchItem";
import Location from "../Location.tsx/Location";
import Calendar from "../../calendar/Calendar/Calendar";

import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { updateSelectedDate } from "../../../redux/searchSlice";
import { useAppSelector } from "../../../redux/store";
import { useSchedule } from "../../../hooks/scheduleHook";
import { useSearchModal } from "../../../hooks/searchModalHook";
import Guests from "../Guests/Guests";

export default function SearchBar() {
  const { enabled, enableSearch } = useSearch();
  const location = useSearchModal("location");
  const checkIn = useSearchModal("checkIn");
  const checkOut = useSearchModal("checkOut");
  const guests = useSearchModal("guests");

  const dispatch = useDispatch();
  const { checkInDate, checkOutDate } = useSchedule();
  const { focused: searchFocused } = useAppSelector((state) => state.search);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.outline} ${
          enabled ? styles.outline_searchEnabled : ""
        }`}
        onClick={enableSearch}
      >
        {enabled ? (
          <div id="search_bar" className={styles.search__form}>
            <div className={styles.search__location}>
              <SearchItem
                label="Location"
                placeholder="Where are you going?"
                isTextForm
                onClick={location.openSearchModal}
                focused={location.modalOpened}
              />
            </div>
            <Divider />
            <div className={styles.search__date}>
              <SearchItem
                label="Check in"
                placeholder="Add dates"
                onClick={() => {
                  checkIn.openSearchModal();
                  dispatch(updateSelectedDate("checkin"));
                }}
                value={checkInDate}
                focused={checkIn.modalOpened}
              />
              <Divider />
              <SearchItem
                label="Check out"
                placeholder="Add dates"
                onClick={() => {
                  checkOut.openSearchModal();
                  dispatch(updateSelectedDate("checkout"));
                }}
                value={checkOutDate}
                focused={checkOut.modalOpened}
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
                onClick={guests.openSearchModal}
                icon={
                  <SearchIcon
                    size="md"
                    searchFocused={!!searchFocused}
                    onClick={() => {
                      console.warn("check");
                      window.alert(
                        "Sorry! Search feature is still in development."
                      );
                    }}
                  />
                }
                focused={guests.modalOpened}
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
      <div style={{ marginTop: "12px" }} id="search_modal">
        <SearchModal
          opened={location.modalOpened}
          reference={location.ref}
          width={500}
        >
          <Location />
        </SearchModal>
        {/** checkin modal */}
        <SearchModal
          opened={searchFocused === "checkIn"}
          reference={checkIn.ref}
        >
          <Calendar />
        </SearchModal>
        {/** checkout modal */}
        <SearchModal opened={checkOut.modalOpened} reference={checkOut.ref}>
          {/* <div>check out</div> */}
          <Calendar />
        </SearchModal>
        {/** guests modal */}
        <div style={{ display: "flex", justifyContent: "end" }}>
          <SearchModal
            opened={guests.modalOpened}
            reference={guests.ref}
            width={330 + 32 * 2}
          >
            <Guests />
          </SearchModal>
        </div>
      </div>
    </div>
  );
}

const Divider = () => <div className={styles.search__divider}></div>;
