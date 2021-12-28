import { useMemo } from "react";
import { useAppSelector } from "../redux/store";

/**
 * returns day and month (ex: Dec 29)
 */
const getDate = (date: string | null): string | undefined => {
  // if date is invalid date, return undefined
  if (!date) return;
  try {
    const arr = date.split(" ");
    return `${arr[1]} ${arr[2]}`;
  } catch {
    // return undefined if failed to generate string
    return;
  }
};

/**
 * returns checkin/checkout month and day (eg: Dec 29)
 */
export const useSchedule = () => {
  const {
    schedule: { checkIn, checkOut },
  } = useAppSelector((state) => state.search);

  const checkInDate = useMemo(() => getDate(checkIn), [checkIn]);
  const checkOutDate = useMemo(() => getDate(checkOut), [checkOut]);

  return { checkInDate, checkOutDate };
};
