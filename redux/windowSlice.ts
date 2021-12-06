import { createSlice } from "@reduxjs/toolkit";
import { WindowState } from "../types/types";

// Define the initial state using that type
const initialState: WindowState = {
  scrolled: false,
};

export const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    makeBgWhite: (state) => {
      state.scrolled = true;
    },
    makeBgBlack: (state) => {
      state.scrolled = false;
    },
  },
});

export const { makeBgWhite, makeBgBlack } = windowSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectWindow = (state: RootState) => state.window;
