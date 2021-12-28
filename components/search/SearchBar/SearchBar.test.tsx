import { render } from "@testing-library/react";

import SearchBar from "./SearchBar";

// mock components
jest.mock("../SearchItem/SearchItem");
jest.mock("../../calendar/Calendar/Calendar");

// mock hooks
const mockUseSearch = jest.fn();
jest.mock("../../../hooks/searchHook", () => ({
  useSearch: () => mockUseSearch(),
}));
const mockUseOnclickOutside = jest.fn();
mockUseOnclickOutside.mockReturnValue({
  openSearchBar: jest.fn(),
  // closeSearchBar: jest.fn(),
});
jest.mock("../../../hooks/clickHook", () => ({
  useOnclickOutside: () => mockUseOnclickOutside(),
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
  mockUseSchedule.mockReturnValue({
    checkInDate: "Dec 29",
    checkOutDate: "Dec 31",
  });
  mockSelector.mockReturnValue({ focused: "location" });
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

test("search item 'guests' has a class search__guests_searchFocused", () => {
  expect.assertions(1);
  mockUseSearch.mockReturnValue({
    enabled: true,
    enableSearch: () => {},
  });
  mockUseOnclickOutside.mockReturnValue({
    opened: true,
  });
  const { container } = render(<SearchBar />);
  expect(
    container.getElementsByClassName("search__guests_searchFocused").length
  ).toBe(1);
});
