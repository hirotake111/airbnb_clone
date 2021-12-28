import { getEventListeners } from "events";
import { useEffect, useMemo, useRef, useState } from "react";
import { changeSearchFocus, disableSearch } from "../redux/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { SearchFocusedTypes } from "../types/types";

export const useOnclickOutside = (type: SearchFocusedTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { scrolled } = useAppSelector((state) => state.window);
  const { enabled, focused } = useAppSelector((state) => state.search);

  const modalOpened = useMemo(() => focused === type, [focused]);

  /**
   * set value true and add event listener
   */
  const openSearchBar = () => {
    // update global state -> open modal
    dispatch(changeSearchFocus(type));
    console.warn(type, "mousedwon event listener added!");
    document.addEventListener("mousedown", callback);
    console.log("listeners:", document.onmousedown);
  };

  /**
   * set value false and remove event listener
   */
  const closeSearchBar = (e: MouseEvent) => {
    // check if search bar is clicked
    const barClicked = document
      .getElementById("search_form")
      ?.contains(e.target as Node);
    removeCallbackEvent();
    // if scrolled and search bar is not clicked, disable search menu
    if (scrolled && !barClicked) {
      console.log("disableSearchBar()");
      console.log("barclicked:", barClicked);
      disableSearchBar();
    }
  };

  // disable search bar and search component
  const disableSearchBar = () => {
    dispatch(disableSearch());
    // disable modal too
    dispatch(changeSearchFocus(null));
  };

  /**
   * check if clicked element is not a certain part of elements, then disable search bar
   */
  const callback = (e: MouseEvent) => {
    console.warn("callback", type);
    // if user clicked this component, do nothing
    if (!(ref && ref.current)) return;
    // if user clicked inside of div element, do nothing
    if (ref.current.contains(e.target as Node)) return;
    // else, close it and remove event listener
    closeSearchBar(e);
  };

  /**
   * this will be invoked when window is scrolled from/to the top
   */
  useEffect(() => {
    // if window is scrolled, then disable searchbar
    if (scrolled) {
      disableSearchBar();
    }
  }, [scrolled]);

  useEffect(() => {
    if (!modalOpened) {
      removeCallbackEvent();
    }
  }, [modalOpened]);

  /**
   * this removes mousedown callback from event listener
   */
  const removeCallbackEvent = () => {
    console.warn(type, "mousedown event listener disposed!");
    document.removeEventListener("mousedown", callback);
  };

  return {
    ref,
    openSearchBar,
    closeSearchBar,
    removeCallbackEvent,
    modalOpened,
    enabled,
  };
};
