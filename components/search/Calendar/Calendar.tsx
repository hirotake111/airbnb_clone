import C from "react-calendar";
// import "./Calendar.css";

export default function Calendar() {
  const formatShortWeekday = (locale: string, date: Date): string => {
    return date.toDateString().slice(0, 2);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ paddingBottom: "32px" }}>Calendar / I am flexible</span>
      <div style={{ display: "flex" }}>
        <C calendarType="US" formatShortWeekday={formatShortWeekday} />
        <C calendarType="US" formatShortWeekday={formatShortWeekday} />
      </div>
    </div>
  );
}

// react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend react-calendar__month-view__days__day--neighboringMonth

// react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend
