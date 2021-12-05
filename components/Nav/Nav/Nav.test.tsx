import { render } from "@testing-library/react";
import Nav from "./Nav";

// mock custom hook
const mockWindowHook = jest.fn();
jest.mock("../../hooks/windowHook", () => ({
  useWindow: () => mockWindowHook(),
}));

it("should render navbar", () => {
  expect.assertions(1);
  mockWindowHook.mockReturnValue(false);
  const { getByLabelText } = render(<Nav />);
  expect(getByLabelText("navigation")).toBeTruthy();
});

it("should add extra class if hook returns true", () => {
  expect.assertions(1);
  mockWindowHook.mockReturnValue(true);
  const { container } = render(<Nav />);
  expect(container.getElementsByClassName("nav_scrolled").length).toBe(1);
});
