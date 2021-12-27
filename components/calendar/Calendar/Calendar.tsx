import { useEffect, useMemo, useState } from "react";
import ReactCalendar, {
  DateCallback,
  OnChangeDateCallback,
  OnChangeDateRangeCallback,
} from "react-calendar";
import {
  changeSearchFocus,
  updateSchedule,
  updateSelectedDate,
} from "../../../redux/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

import ButtonsOnTop from "../ButtonsOnTop/ButtonsOnTop";

import styles from "./Calendar.module.css";

export default function Calendar() {
  // const tomorrow = new Date();
  // tomorrow.setDate(tomorrow.getDate() + 1);

  // const [startDate, setStartDate] = useState<Date | null>(new Date());
  // const [endDate, setEndDate] = useState<Date | null>(null);

  const dispatch = useAppDispatch();
  const { selectedDate, schedule } = useAppSelector((state) => state.search);

  const checkIn = useMemo(() => {
    const result = new Date(schedule.checkIn);
    return result.getTime() ? result : null;
  }, [schedule.checkIn]);
  const checkOut = useMemo(() => {
    const result = new Date(schedule.checkOut);
    return result.getTime() ? result : null;
  }, [schedule.checkOut]);
  /**
   * this depends on the value of checkIn and checkOut
   */
  const currentSchedule = useMemo(
    () => (checkIn ? (checkOut ? [checkIn, checkOut] : checkIn) : null),
    [checkIn, checkOut]
  );

  useEffect(() => {
    console.log("schedule:", schedule);
  }, [schedule]);

  useEffect(() => {
    console.log("currentSchedule:", currentSchedule);
  }, [currentSchedule]);

  const formatShortWeekday = (locale: string, date: Date): string => {
    return date.toDateString().slice(0, 2);
  };

  const handleClick: DateCallback = (value, event) => {
    const result = value.toDateString();
    if (selectedDate === "checkout") {
      // if checkIn is not provided, then just update checkOut
      if (!checkIn)
        return dispatch(updateSchedule({ checkIn: "", checkOut: result }));
      // if value is earlier than the current checkIn, then update checkIn and remove checkOut
      if (value < checkIn) {
        return dispatch(updateSchedule({ checkIn: result, checkOut: "" }));
      }

      // update check out
      return dispatch(updateSchedule({ ...schedule, checkOut: result }));
    }
    // selectedDate is checkIn
    // if value is later than checkOut, then update checkIn and remove checkOut
    if (checkOut && value > checkOut) {
      dispatch(updateSchedule({ checkIn: result, checkOut: "" }));
    } else {
      // -> update check in
      dispatch(updateSchedule({ ...schedule, checkIn: result }));
    }
    // also go to checkOut modal
    dispatch(updateSelectedDate("checkout"));
    return dispatch(changeSearchFocus("checkOut"));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={styles.buttons}>
        <ButtonsOnTop />
      </div>
      <div style={{ display: "flex" }}>
        <ReactCalendar
          // value={
          //   startDate ? (endDate ? [startDate, endDate] : startDate) : null
          // }
          value={currentSchedule}
          onClickDay={handleClick}
          // onClickDay={handleClick}
          calendarType="US"
          formatShortWeekday={formatShortWeekday}
          showDoubleView
          showNavigation={false}
        />
        {/* <C calendarType="US" formatShortWeekday={formatShortWeekday} /> */}
      </div>
    </div>
  );
}

// react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend react-calendar__month-view__days__day--neighboringMonth

// react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend
