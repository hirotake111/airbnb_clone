import { useEffect, useState } from "react";
import ReactCalendar, {
  OnChangeDateCallback,
  OnChangeDateRangeCallback,
} from "react-calendar";

import ButtonsOnTop from "../ButtonsOnTop/ButtonsOnTop";

import styles from "./Calendar.module.css";

export default function Calendar() {
  // const tomorrow = new Date();
  // tomorrow.setDate(tomorrow.getDate() + 1);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    console.log("start:", startDate);
    console.log("end:", endDate);
  }, [startDate]);

  const formatShortWeekday = (locale: string, date: Date): string => {
    return date.toDateString().slice(0, 2);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={styles.buttons}>
        <ButtonsOnTop />
      </div>
      <div style={{ display: "flex" }}>
        <ReactCalendar
          value={
            startDate ? (endDate ? [startDate, endDate] : startDate) : null
          }
          onChange={setStartDate}
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
