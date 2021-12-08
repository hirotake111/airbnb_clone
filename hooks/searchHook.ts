import { useAppDispatch, useAppSelector } from "../redux/store";
import { enableSearch, disableSearch } from "../redux/searchSlice";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const { enabled } = useAppSelector((state) => state.search);

  const enable = () => {
    dispatch(enableSearch());
  };
  const disable = () => {
    dispatch(disableSearch());
  };

  return { enabled, enableSearch: enable, disableSearch: disable };
};

/**
 * custom hook that disables search bar (index page)
 */
export const useDisableSearchOnIndex = () => {
  const { enabled } = useAppSelector((state) => state.search);
  const { scrolled } = useAppSelector((state) => state.window);
  const dispatch = useAppDispatch();

  return () => {
    if (enabled && scrolled) dispatch(disableSearch());
  };
};
