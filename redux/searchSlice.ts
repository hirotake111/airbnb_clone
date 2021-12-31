import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Guest,
  Schedule,
  SearchFocusedTypes,
  SearchState,
  SelectedDate,
} from "../types/types";

const initialState: SearchState = {
  enabled: true,
  focused: null,
  location: "",
  selectedDate: "checkin",
  schedule: {
    checkIn: null,
    checkOut: null,
  },
  guests: [
    { id: 1, label: "Adults", description: "Ages 13 or above", count: 0 },
    { id: 5, label: "Children", description: "Ages 2–12", count: 0 },
    { id: 10, label: "Infants", description: "Under 2", count: 0 },
    {
      id: 15,
      label: "Pets",
      description: "Bringing an assistance animal?",
      count: 0,
      link: "xxx",
    },
  ],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    enableSearch: (state) => {
      state.enabled = true;
    },
    disableSearch: (state) => {
      state.enabled = false;
    },
    changeSearchFocus: (state, action: PayloadAction<SearchFocusedTypes>) => {
      state.focused = action.payload;
    },
    updateLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    updateSelectedDate: (state, action: PayloadAction<SelectedDate>) => {
      state.selectedDate = action.payload;
    },
    updateSchedule: (state, action: PayloadAction<Schedule>) => {
      state.schedule = action.payload;
    },
    updateGuests: (state, { payload }: PayloadAction<Guest>) => {
      const guests = state.guests.filter((guest) => guest.id !== payload.id);
      state.guests = [...guests, payload].sort((a, b) => a.id - b.id);
    },
  },
});

export const {
  enableSearch,
  disableSearch,
  changeSearchFocus,
  updateLocation,
  updateSelectedDate,
  updateSchedule,
  updateGuests,
} = searchSlice.actions;
