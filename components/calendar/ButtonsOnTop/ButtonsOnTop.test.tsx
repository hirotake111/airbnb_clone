import { fireEvent, render } from "@testing-library/react";
import ButtonsOnTop from "./ButtonsOnTop";

test("clicking buttons should change which button is highlighted", () => {
  expect.assertions(6);
  const { getByText } = render(<ButtonsOnTop />);
  const button1 = getByText("Calendar");
  const button2 = getByText("I'm flexible");
  // validate default state
  expect(button1.classList.contains("button_highlighted")).toBe(true);
  expect(button2.classList.contains("button_highlighted")).toBe(false);
  // click button2
  fireEvent.click(button2);
  // validate
  expect(button1.classList.contains("button_highlighted")).toBe(false);
  expect(button2.classList.contains("button_highlighted")).toBe(true);
  // click button1
  fireEvent.click(button1);
  // validate
  expect(button1.classList.contains("button_highlighted")).toBe(true);
  expect(button2.classList.contains("button_highlighted")).toBe(false);
});
