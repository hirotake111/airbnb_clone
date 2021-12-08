import { useAppDispatch, useAppSelector } from "../redux/store";
import { enableSearch, disableSearch } from "../redux/searchSlice";

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

  return { enabled, enableSearch: enable, disableSearch: disable };
};
