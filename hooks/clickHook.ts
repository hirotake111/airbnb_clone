import { useEffect, useRef, useState } from "react";
import { disableSearch } from "../redux/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

export const useOnclickOutside = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { scrolled } = useAppSelector((state) => state.window);
  const { enabled } = useAppSelector((state) => state.search);

  const [opened, setOpened] = useState(false);

  /**
   * set value true and add event listener
   */
  const openSearchBar = () => {
    setOpened(true);
    document.addEventListener("mousedown", callback);
  };

  /**
   * set value false and remove event listener
   */
  const closeSearchBar = (e: MouseEvent) => {
    // close search component (not search bar)
    setOpened(false);
    // check if search bar is clicked
    const isSearchBarClicked = document
      .getElementById("search_form")
      ?.contains(e.target as Node);
    document.removeEventListener("mousedown", callback);
    // if scrolled and search bar is not clicked, disable search menu
    if (scrolled && !isSearchBarClicked) {
      disableSearchBar();
    }
  };

  // disable search bar and search component
  const disableSearchBar = () => {
    setOpened(false);
    dispatch(disableSearch());
  };

  /**
   * check if clicked element is not a certain part of elements, then disable search bar
   */
  const callback = (e: MouseEvent) => {
    if (!(ref && ref.current)) return;
    // if user clicked inside of div element, do nothing
    if (ref.current.contains(e.target as Node)) return;
    // else, close it and remove event listener
    closeSearchBar(e);
  };

  useEffect(() => {
    // if window is scrolled, then disable searchbar
    if (scrolled) {
      disableSearchBar();
    }
  }, [scrolled]);

  return { ref, openSearchBar, closeSearchBar, opened, enabled };
};
