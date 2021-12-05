import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { scroll, unscroll } from "../redux/windowSlice";

export const useWindow = () => {
  const dispatch = useAppDispatch();
  const { scrolled } = useAppSelector((state) => state.window);

  useEffect(() => {
    const target = document.querySelector("#target");
    if (target) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].boundingClientRect.y < 0) {
          dispatch(scroll());
        } else {
          dispatch(unscroll());
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
