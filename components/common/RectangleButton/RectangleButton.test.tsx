import { render, fireEvent, cleanup } from "@testing-library/react";
import RectangleButton from "./RectangleButton";

beforeEach(cleanup);

it("should display given label", () => {
  expect.assertions(1);
  const { getByText } = render(<RectangleButton label="btn" />);
  expect(getByText("btn")).toBeTruthy();
});

it("should invoke callback when clicked", () => {
  expect.assertions(1);
  const cb = jest.fn();
  const { getByText } = render(<RectangleButton label="btn" callback={cb} />);
  fireEvent.click(getByText("btn"));
  expect(cb).toHaveBeenCalledTimes(1);
});
