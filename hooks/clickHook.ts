import { useEffect, useRef, useState } from "react";
import { disableSearch } from "../redux/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

export const useOnclickOutside = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { scrolled } = useAppSelector((state) => state.window);
  const { enabled } = useAppSelector((state) => state.search);

  const [opened, setEnabled] = useState(false);

  /**
   * set value true and add event listener
   */
  const open = () => {
    setEnabled(true);
    document.addEventListener("mousedown", callback);
  };

  /**
   * set value false and remove event listener
   */
  const close = () => {
    setEnabled(false);
    document.removeEventListener("mousedown", callback);
    // if scrolled, disable search menu
    if (scrolled) dispatch(disableSearch());
  };

  const callback = (e: MouseEvent) => {
    if (!(ref && ref.current)) return;
    // if user clicked inside of div element, do nothing
    if (ref.current.contains(e.target as Node)) return;
    // else, close it and remove event listener
    close();
  };

  useEffect(() => {
    if (scrolled) close();
  }, [scrolled]);

  return { ref, open, close, opened, enabled };
};
