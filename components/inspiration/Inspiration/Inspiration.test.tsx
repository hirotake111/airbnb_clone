import { render, fireEvent } from "@testing-library/react";
import Inspiration from "./Inspiration";

it("should redner title", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Inspiration />);
  expect(getByLabelText("inspiration").textContent).toBe(
    "Inspiration for future getaways"
  );
});

test("clicking header should update location section", () => {
  expect.assertions(4);
  const header1 = "Destinations for arts & culture";
  const header2 = "Mountain cabins";
  const { getByLabelText } = render(<Inspiration />);
  const button1 = getByLabelText(header1);
  const button2 = getByLabelText(header2);
  expect(button1.classList.contains("header_highlighted")).toBeTruthy();
  expect(button2.classList.contains("header_highlighted")).toBeFalsy();
  fireEvent.click(button2);
  expect(button2.classList.contains("header_highlighted")).toBeTruthy();
  expect(button1.classList.contains("header_highlighted")).toBeFalsy();
});
