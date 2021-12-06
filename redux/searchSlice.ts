import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../types/types";

const initialState: SearchState = {
  enabled: true,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    enableSearch: (state) => {
      console.log("enableSearch()");
      state.enabled = true;
    },
    disableSearch: (state) => {
      state.enabled = false;
    },
  },
});

export const { enableSearch, disableSearch } = searchSlice.actions;
