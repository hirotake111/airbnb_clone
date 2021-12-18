import { render } from "@testing-library/react";
import MobileSearchBar from "./MoblieSearchBar";

// mock custom hooks
const mockUseWindow = jest.fn();
jest.mock("../../../hooks/windowHook", () => ({
  useWindow: () => mockUseWindow(),
}));

it("should render mobile search bar", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<MobileSearchBar />);
  expect(getByLabelText("mobile search bar").textContent).toBe(
    "Where are you going?"
  );
});

test("button should have class 'button_scrolled' when scrolled", () => {
  expect.assertions(1);
  mockUseWindow.mockReturnValue(true);
  const { getByLabelText } = render(<MobileSearchBar />);
  expect(
    getByLabelText("mobile search button").classList.contains("button_scrolled")
  ).toBeTruthy();
});
