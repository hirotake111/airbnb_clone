import { fireEvent, render } from "@testing-library/react";
import { cleanup } from "@testing-library/react-hooks";

import SearchBar from "./SearchBar";

// mock components
jest.mock("../SearchItem/SearchItem");
jest.mock("../../calendar/Calendar/Calendar");
jest.mock("../Guests/Guests");

// mock hooks
const mockUseSearch = jest.fn();
jest.mock("../../../hooks/searchHook", () => ({
  useSearch: () => mockUseSearch(),
}));
const mockUseSearchModal = jest.fn();
mockUseSearchModal.mockReturnValue({
  openSearchBar: jest.fn(),
  // closeSearchBar: jest.fn(),
});
jest.mock("../../../hooks/searchModalHook", () => ({
  useSearchModal: () => mockUseSearchModal(),
}));
const mockUseSchedule = jest.fn();
jest.mock("../../../hooks/scheduleHook", () => ({
  useSchedule: () => mockUseSchedule(),
}));

// mock dispatch and selector
const mockDispatch = jest.fn();
const mockSelector = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector(),
}));

let log = console.log;
let group = console.group;

beforeEach(() => {
  cleanup();
  mockUseSchedule.mockReturnValue({
    checkInDate: "Dec 29",
    checkOutDate: "Dec 31",
  });
  mockSelector.mockReturnValue({ searchFocused: "location" });
});

beforeAll(() => {
  console.log = jest.fn();
  console.group = jest.fn();
});

afterAll(() => {
  console.log = log;
  console.group = group;
});

it("should render search bar", () => {
  expect.assertions(1);
  mockUseSearch.mockReturnValue({
    enabled: true,
    enableSearch: () => {},
  });
  const { getByLabelText } = render(<SearchBar />);
  expect(getByLabelText("location label").textContent).toBe(
    "GO ANYWHERE, ANYTIME"
  );
});

it("should render shrinked search button if enabled is false", () => {
  expect.assertions(1);
  mockUseSearch.mockReturnValue({
    enabled: false,
    enableSearch: () => {},
  });
  const { getByLabelText } = render(<SearchBar />);
  expect(getByLabelText("searchLabel").textContent).toBe("Start your search");
});

test("search item 'guests' should have a class search__guests_searchFocused", () => {
  expect.assertions(1);
  mockUseSearch.mockReturnValue({ enabled: true });
  mockSelector.mockReturnValue({ focused: "Location" });
  const className = "search__guests_searchFocused";
  const label = "guests item container";
  mockSelector.mockReturnValue({ focused: "Location" });
  const { getByLabelText } = render(<SearchBar />);
  expect(getByLabelText(label).classList.contains(className)).toBe(true);
});

test("search item 'guests' should not have a class search__guests_searchFocused when searchFocused is null", () => {
  expect.assertions(1);
  const className = "search__guests_searchFocused";
  const label = "guests item container";
  mockSelector.mockReturnValue({ focused: null });
  const { getByLabelText } = render(<SearchBar />);
  expect(getByLabelText(label).classList.contains(className)).toBe(false);
});

test("clicking search item should perform openSearchModal()", () => {
  expect.assertions(4);
  const openSearchModal = jest.fn();
  mockUseSearchModal.mockReturnValue({
    opened: true,
    openSearchModal,
  });
  const { getByLabelText } = render(<SearchBar />);
  // click search item
  fireEvent.click(getByLabelText("Location"));
  expect(openSearchModal).toHaveBeenCalledTimes(1);
  fireEvent.click(getByLabelText("Check in"));
  expect(openSearchModal).toHaveBeenCalledTimes(2);
  fireEvent.click(getByLabelText("Check out"));
  expect(openSearchModal).toHaveBeenCalledTimes(3);
  fireEvent.click(getByLabelText("Guests"));
  expect(openSearchModal).toHaveBeenCalledTimes(4);
});
