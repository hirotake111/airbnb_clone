import { store } from "../redux/store";

export interface WindowState {
  scrolled: boolean;
}

export type SelectedDate = "checkin" | "checkout";
export type Schedule = {
  checkIn: string;
  checkOut: string;
};
export type Guests = {
  adults: number;
  children: number;
  infants: number;
  pets: number;
};
export interface SearchState {
  enabled: boolean;
  focused: SearchFocusedTypes;
  selectedDate: SelectedDate;
  location: string;
  schedule: Schedule;
  guests: Guests;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type SearchFocusedTypes =
  | "location"
  | "checkIn"
  | "checkOut"
  | "guests"
  | null;

export type InspirationHeaderName =
  | "Destinations for arts & culture"
  | "Destinations for outdoor adventure"
  | "Mountain cabins"
  | "Beach destinations"
  | "Popular destinations"
  | "Unique Stays";

export interface InspirationHeader {
  headerName: InspirationHeaderName;
  locations: LocationProps[];
}

export interface InspiractionLocation {
  primary: string;
  secondary: string;
}
