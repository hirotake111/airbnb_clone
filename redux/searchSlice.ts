import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchFocusedTypes, SearchState } from "../types/types";

const initialState: SearchState = {
  enabled: true,
  focused: null,
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
  },
});

export const { enableSearch, disableSearch, changeSearchFocus } =
  searchSlice.actions;
