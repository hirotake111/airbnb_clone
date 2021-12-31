import { useMemo } from "react";
import { DateCallback } from "react-calendar";
import {
  changeSearchFocus,
  updateSchedule,
  updateSelectedDate,
} from "../redux/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

export const useCalendar = () => {
  const dispatch = useAppDispatch();
  const {
    selectedDate,
    schedule: { checkIn, checkOut },
  } = useAppSelector((state) => state.search);

  const checkInDate = useMemo(
    () => (checkIn ? new Date(checkIn) : null),
    [checkIn]
  );
  const checkOutDate = useMemo(
    () => (checkOut ? new Date(checkOut) : null),
    [checkOut]
  );

  /**
   * this depends on the value of checkIn and checkOut
   */
  const currentSchedule = useMemo(() => {
    if (!checkInDate && !checkOutDate) return null;
    if (checkInDate && checkOutDate) return [checkInDate, checkOutDate];
    if (checkInDate) return checkInDate;
    return checkOutDate;
  }, [checkInDate, checkOutDate]);

  const updateScheduleFunc: DateCallback = (value, event) => {
    const result = value.toDateString();
    // console.log("result:", result);
    if (selectedDate === "checkout") {
      // if checkIn is not provided, then just update checkOut
      if (!checkInDate)
        return dispatch(updateSchedule({ checkIn: null, checkOut: result }));
      // if value is earlier than the current checkIn, then update checkIn and remove checkOut
      if (value < checkInDate) {
        return dispatch(updateSchedule({ checkIn: result, checkOut: null }));
      }
      // update check out
      dispatch(updateSchedule({ checkIn, checkOut: result }));
      // also go to guests
      return dispatch(changeSearchFocus("guests"));
    }
    // selectedDate is checkIn
    // if value is later than checkOut, then update checkIn and remove checkOut
    if (checkOutDate && value > checkOutDate) {
      dispatch(updateSchedule({ checkIn: result, checkOut: null }));
    } else {
      // -> update check in
      dispatch(updateSchedule({ checkIn: result, checkOut }));
    }
    // also go to checkOut modal
    dispatch(updateSelectedDate("checkout"));
    return dispatch(changeSearchFocus("checkOut"));
  };

  return {
    currentSchedule,
    updateSchedule: updateScheduleFunc,
  };
};
