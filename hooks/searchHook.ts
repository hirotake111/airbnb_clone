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

  return { enabled, enable: enableSearch, disable: disableSearch };
};
