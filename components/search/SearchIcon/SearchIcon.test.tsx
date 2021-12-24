import { render, fireEvent } from "@testing-library/react";
import SearchIcon from "./SearchIcon";

// mock callback
const mockCallback = jest.fn();

beforeEach(() => {
  mockCallback.mockClear();
});

it("should invoke callback", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<SearchIcon onClick={mockCallback} />);
  fireEvent.click(getByLabelText("searchIcon"));
  expect(mockCallback).toHaveBeenCalledTimes(1);
});

test("default size should be md", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<SearchIcon />);
  expect(getByLabelText("searchIcon").classList[1]).toBe("outline_md");
});

it("should accept size as sm", () => {
  expect.assertions(1);
  // default
  const { getByLabelText } = render(<SearchIcon size="sm" />);
  expect(getByLabelText("searchIcon").classList[1]).toBe("outline_sm");
});

it("should accept size as md", () => {
  expect.assertions(1);
  // default
  const { getByLabelText } = render(<SearchIcon size="md" />);
  expect(getByLabelText("searchIcon").classList[1]).toBe("outline_md");
});

it("should display 'Search' if searchFocused is true", () => {
  expect.assertions(1);
  const { getByText } = render(<SearchIcon searchFocused />);
  expect(getByText("Search")).toBeTruthy();
});
