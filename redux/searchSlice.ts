import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Guests,
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
    checkIn: "",
    checkOut: "",
  },
  guests: {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  },
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
    updateGuests: (state, action: PayloadAction<Guests>) => {
      state.guests = action.payload;
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
