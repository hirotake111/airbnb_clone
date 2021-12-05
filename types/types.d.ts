import { store } from "../redux/store";

export interface WindowState {
  scrolled: boolean;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
