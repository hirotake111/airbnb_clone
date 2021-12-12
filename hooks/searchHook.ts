import { useAppDispatch, useAppSelector } from "../redux/store";
import { enableSearch, disableSearch } from "../redux/searchSlice";
import { makeBgBlack, makeBgWhite } from "../redux/windowSlice";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const { enabled } = useAppSelector((state) => state.search);
  const { scrolled } = useAppSelector((state) => state.window);

  const enable = () => {
    if (!enabled) dispatch(enableSearch());
  };
  const disable = () => {
    if (enabled && scrolled) dispatch(disableSearch());
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
