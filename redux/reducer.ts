import { combineReducers } from "@reduxjs/toolkit";
import { searchSlice } from "./searchSlice";
import { windowSlice } from "./windowSlice";

export const reducer = combineReducers({
  window: windowSlice.reducer,
  search: searchSlice.reducer,
});
