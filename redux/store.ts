import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types/types";
import { searchSlice } from "./searchSlice";
import { windowSlice } from "./windowSlice";

export const store = configureStore({
  reducer: {
    window: windowSlice.reducer,
    search: searchSlice.reducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
