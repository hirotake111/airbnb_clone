import ReactCalendar from "react-calendar";

import { useCalendar } from "../../../hooks/calendarHook";
import ButtonsOnTop from "../ButtonsOnTop/ButtonsOnTop";

import styles from "./Calendar.module.css";

export default function Calendar() {
  const { currentSchedule, updateSchedule } = useCalendar();
  console.log("currentSchedle:", currentSchedule);

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
          value={currentSchedule}
          onClickDay={updateSchedule}
          calendarType="US"
          formatShortWeekday={formatShortWeekday}
          showDoubleView
          showNavigation={false}
        />
      </div>
    </div>
  );
}
