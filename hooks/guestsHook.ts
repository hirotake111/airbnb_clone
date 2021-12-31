import { updateGuests } from "../redux/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { Guest, GuestKeys } from "../types/types";

export default function useGuests() {
  const { guests } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const updateGuestCount = (key: GuestKeys, count: number) => {
    const target = guests.find((guest) => guest.label === key);
    if (!target) {
      console.error("guest not found: invalid key:", key);
      return;
    }
    dispatch(updateGuests({ ...target, count: target.count + count }));
  };
  return { guests, updateGuestCount };
}
