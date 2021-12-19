import { render, fireEvent, cleanup } from "@testing-library/react";
import WhiteButton from "./WhiteButton";

beforeEach(cleanup);

it("should render button", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<WhiteButton>click me</WhiteButton>);
  expect(getByLabelText("button").textContent).toBe("click me");
});

it("should invoke onClick function", () => {
  expect.assertions(1);
  const callback = jest.fn();
  const { getByLabelText } = render(
    <WhiteButton onClick={callback}>click me</WhiteButton>
  );
  fireEvent.click(getByLabelText("button"));
  expect(callback).toHaveBeenCalledTimes(1);
});
