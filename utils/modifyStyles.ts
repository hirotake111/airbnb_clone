/**
 * this changes element's background color and font color
 */
export const changeBgAndFont = (element: HTMLElement, isScrolled: boolean) => {
  if (isScrolled) {
    element.style.backgroundColor = "#fff";
    element.style.color = "#000";
  } else {
    element.style.backgroundColor = "#000";
    element.style.color = "#fff";
  }
};
