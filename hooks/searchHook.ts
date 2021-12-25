import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  enableSearch,
  disableSearch,
  changeSearchFocus,
} from "../redux/searchSlice";
import { makeBgBlack, makeBgWhite } from "../redux/windowSlice";
import { useDispatch } from "react-redux";
import { SearchFocusedTypes } from "../types/types";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const { enabled } = useAppSelector((state) => state.search);
  const { scrolled } = useAppSelector((state) => state.window);

  const enable = () => {
    if (!enabled) {
      dispatch(enableSearch());
    }
  };
  const disable = () => {
    if (enabled && scrolled) {
      dispatch(disableSearch());
    }
  };

  const toggleScrolled = () => {
    if (!scrolled) return dispatch(makeBgWhite());
    return dispatch(makeBgBlack());
  };

  return {
    enabled,
    scrolled,
    enableSearch: enable,
    disableSearch: disable,
    toggleScrolled,
  };
};

export const useSearchFocus = () => {
  const dispatch = useDispatch();
  const { focused } = useAppSelector((state) => state.search);

  const change = (item: SearchFocusedTypes) => {
    dispatch(changeSearchFocus(item));
  };

  return { changeSearchFocus: change, focused };
};
