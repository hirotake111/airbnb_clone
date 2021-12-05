import { createSlice } from "@reduxjs/toolkit";
import { RootState, WindowState } from "../types/types";

// Define the initial state using that type
const initialState: WindowState = {
  scrolled: false,
};

export const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    scroll: (state) => {
      state.scrolled = true;
    },
    unscroll: (state) => {
      state.scrolled = false;
    },
  },
});

export const { scroll, unscroll } = windowSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectWindow = (state: RootState) => state.window;
