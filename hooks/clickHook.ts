import { useRef, useState } from "react";

export const useOnclickOutside = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [opened, setEnabled] = useState(false);
  const open = () => {
    // set value to true
    setEnabled(true);
    // add event listener
    document.addEventListener("mousedown", callback);
  };

  const callback = (e: MouseEvent) => {
    if (!(ref && ref.current)) return;
    // if user clicked inside of div element, do nothing
    if (ref.current.contains(e.target as Node)) return;
    // else, close it and remove event listener
    setEnabled(false);
    document.removeEventListener("mousedown", callback);
  };

  return { ref, open, opened };
};
