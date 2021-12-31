import { fireEvent, render } from "@testing-library/react";
import CountButton from "./CountButton";

const callback = jest.fn();

beforeEach(() => {
  callback.mockClear();
});

it("should display - by default", () => {
  expect.assertions(1);
  const { container } = render(<CountButton count={1} />);
  expect(container.getElementsByTagName("path")[0].getAttribute("d")).toBe(
    "m2 16h28"
  );
});

it("should display + when 'plus' is given", () => {
  expect.assertions(1);
  const { container } = render(<CountButton plus count={1} />);
  expect(container.getElementsByTagName("path")[0].getAttribute("d")).toBe(
    "m2 16h28m-14-14v28"
  );
});

test("clicking button should invoke callback", () => {
  expect.assertions(1);
  const { getByLabelText } = render(
    <CountButton onClick={callback} count={1} />
  );
  // click button
  fireEvent.click(getByLabelText("count-button"));
  expect(callback).toHaveBeenCalledTimes(1);
});

it("should be disabled when button is minus and count is 0", () => {
  expect.assertions(2);
  const { getByLabelText } = render(
    <CountButton onClick={callback} count={0} />
  );
  const button = getByLabelText("count-button");
  // should be disabled
  expect(button.classList.contains("button_disabled")).toBe(true);
  // also onClick should not work
  fireEvent.click(button);
  fireEvent.click(button);
  expect(callback).toHaveBeenCalledTimes(0);
});

it("should be disabled when button is pls and count is 16", () => {
  expect.assertions(1);
  const { getByLabelText } = render(
    <CountButton onClick={callback} count={16} plus />
  );
  expect(
    getByLabelText("count-button").classList.contains("button_disabled")
  ).toBe(true);
});
