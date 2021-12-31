import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { changeSearchFocus, disableSearch } from "../redux/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { SearchFocusedTypes } from "../types/types";

export const useSearchModal = (type: SearchFocusedTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const [eventListenerRegistered, setRegistered] = useState(false);
  const dispatch = useAppDispatch();
  const { scrolled } = useAppSelector((state) => state.window);
  const { focused } = useAppSelector((state) => state.search);

  const modalOpened = useMemo(() => focused === type, [focused]);

  /**
   * set value true and add event listener
   */
  const openSearchModal = () => {
    // update global state -> open modal
    dispatch(changeSearchFocus(type));
    // set event listener
    if (!eventListenerRegistered) {
      addMouseDownEventListener();
    }
  };

  // disable search bar and search component
  const hideSearchBar = () => {
    dispatch(disableSearch());
  };

  const hideSearchModal = () => {
    dispatch(changeSearchFocus(null));
  };

  /**
   * check if clicked element is not a certain part of elements, then disable search bar
   */
  const callback = useCallback(
    (e: MouseEvent) => {
      const node = e.target as Node;
      const bar = document.getElementById("search_bar");
      const modal = document.getElementById("search_modal");
      console.log("callback invoked - type:", type);
      // if this component was clicked, do nothing
      if (ref.current?.contains(node)) return;
      // if modal was clicked, do nothing
      if (modal?.contains(node)) return;
      // hide modal and bar
      hideSearchModal();
      // if bar was clicked, skip hiding it
      if (bar?.contains(node) || !scrolled) return;
      hideSearchBar();
    },
    [ref, scrolled]
  );

  /**
   * this will be invoked when window is scrolled from/to the top
   */
  useEffect(() => {
    if (scrolled) {
      hideSearchBar();
      hideSearchModal();
    }
  }, [scrolled]);

  useEffect(() => {
    // remove event listener
    if (eventListenerRegistered && focused !== type) {
      return removeMouseDownEventListener();
    }
    // add event listener
    if (!eventListenerRegistered && focused === type) {
      return addMouseDownEventListener();
    }
  }, [eventListenerRegistered, focused]);

  /**
   * this adds mosedown event listener
   */
  const addMouseDownEventListener = () => {
    console.log(type, "mousedwon event listener added");
    document.addEventListener("mousedown", callback);
    setRegistered(true);
  };

  /**
   * this removes mousedown event listener
   */
  const removeMouseDownEventListener = () => {
    console.log(type, "mousedwon event listener removed");
    document.removeEventListener("mousedown", callback);
    setRegistered(false);
  };

  return {
    ref,
    openSearchModal,
    modalOpened,
  };
};
