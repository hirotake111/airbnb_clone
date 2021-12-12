import { store } from "../redux/store";

export interface WindowState {
  scrolled: boolean;
}

export interface SearchState {
  enabled: boolean;
  focused: SearchFocusedTypes;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type SearchFocusedTypes =
  | "location"
  | "checkIn"
  | "checkOut"
  | "guests"
  | null;
