import { render } from "@testing-library/react";

import Home from "../pages";

// mock hook
const mockDisableSearch = jest.fn();
jest.mock("../hooks/searchHook", () => ({
  useSearch: () => ({
    disableSearch: () => mockDisableSearch(),
  }),
}));

// mock components
jest.mock("../components/Nav/Nav/Nav");
jest.mock("../components/hero/Hero");
jest.mock("../components/giftcard/GiftCard/GiftCard");
it("should render Home", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Home />);
  expect(getByLabelText("main component")).toBeTruthy();
});
