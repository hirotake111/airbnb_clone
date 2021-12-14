import { render } from "@testing-library/react";

import SearchBar from "./SearchBar";

jest.mock("../SearchItem/SearchItem");

// mock hooks
const mockEnableSearch = jest.fn();
jest.mock("../../../hooks/searchHook", () => ({
  useSearch: () => ({
    enabled: true,
    enableSearch: () => mockEnableSearch(),
  }),
}));
const mockUseOnclickOutside = jest.fn();
mockUseOnclickOutside.mockReturnValue({ open: jest.fn() });
jest.mock("../../../hooks/clickHook", () => ({
  useOnclickOutside: () => mockUseOnclickOutside(),
}));

it("should render search bar", () => {
  expect.assertions(1);
  const { container } = render(<SearchBar />);
  expect(container.firstChild).toBeTruthy();
});
