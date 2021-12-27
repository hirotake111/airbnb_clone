import { useEffect, useMemo, useState } from "react";
import ReactCalendar, {
  DateCallback,
  OnChangeDateCallback,
  OnChangeDateRangeCallback,
} from "react-calendar";
import { updateSchedule, updateSelectedDate } from "../../../redux/searchSlice";
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
  const value = useMemo(
    () => (checkIn ? (checkOut ? [checkIn, checkOut] : checkIn) : null),
    [checkIn, checkOut]
  );

  useEffect(() => {
    console.log("schedule:", schedule);
  }, [schedule]);

  useEffect(() => {
    console.log("value:", value);
  }, [value]);

  const formatShortWeekday = (locale: string, date: Date): string => {
    return date.toDateString().slice(0, 2);
  };

  const handleClick: DateCallback = (value, event) => {
    if (selectedDate === "checkin") {
      // update check in
      dispatch(updateSchedule({ ...schedule, checkIn: value.toDateString() }));
    }
    if (selectedDate === "checkout") {
      // update check out
      dispatch(updateSchedule({ ...schedule, checkOut: value.toISOString() }));
    }
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
          value={value}
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
