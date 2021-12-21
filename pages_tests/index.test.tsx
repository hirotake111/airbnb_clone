import { render, fireEvent, cleanup } from "@testing-library/react";

import Home from "../pages";

// mock hook
const mockUseSearch = jest.fn();
jest.mock("../hooks/searchHook", () => ({
  useSearch: () => mockUseSearch(),
}));

// mock components
jest.mock("../components/Nav/Nav/Nav");
jest.mock("../components/hero/Hero");
jest.mock("../components/giftcard/GiftCard/GiftCard");
jest.mock("../components/discover/Discover/Discover");
jest.mock("../components/hosting/Hosting");
jest.mock("../components/inspiration/Inspiration/Inspiration");
jest.mock("../components/footer/Footer");

beforeEach(cleanup);

it("should render Home", () => {
  expect.assertions(2);
  mockUseSearch.mockReturnValue({
    disableSearch: jest.fn(),
    scrolled: false,
  });
  const { getByLabelText } = render(<Home />);
  expect(getByLabelText("main component")).toBeTruthy();
  expect(getByLabelText("unscrolled")).toBeTruthy();
});

test("target should have label 'scrolled' when scrolled", () => {
  expect.assertions(1);
  mockUseSearch.mockReturnValue({
    disableSearch: jest.fn(),
    scrolled: true,
  });
  const { getByLabelText } = render(<Home />);
  expect(getByLabelText("scrolled")).toBeTruthy();
});

test("clicking main component should perform disableSeach function", () => {
  expect.assertions(1);
  const mockDisableSearch = jest.fn();
  mockUseSearch.mockReturnValue({
    disableSearch: mockDisableSearch,
    scrolled: true,
  });
  const { getByLabelText } = render(<Home />);
  // click main component
  fireEvent.click(getByLabelText("main component"));
  expect(mockDisableSearch).toHaveBeenCalledTimes(1);
});
