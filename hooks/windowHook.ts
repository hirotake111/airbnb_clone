import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { makeBgWhite, makeBgBlack } from "../redux/windowSlice";
import { enableSearch, disableSearch } from "../redux/searchSlice";

export const useWindow = () => {
  const dispatch = useAppDispatch();
  const { scrolled } = useAppSelector((state) => state.window);

  useEffect(() => {
    const target = document.querySelector("#target");
    if (target) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].boundingClientRect.y < 0) {
          // window is not on top, scrolled
          dispatch(makeBgWhite());
          dispatch(disableSearch());
        } else {
          // window is on top, not scrolled
          dispatch(makeBgBlack());
          dispatch(enableSearch());
        }
      });
      observer.observe(target);
    } else {
      console.log(
        "IntersectionObserver was not instantiate as #target is not rendered"
      );
    }
  }, []);

  return scrolled;
};
