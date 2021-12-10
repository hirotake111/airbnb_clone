import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import Home from "../pages";
import { store } from "../redux/store";

// mock hook
const mockDisableSearch = jest.fn();
jest.mock("../hooks/searchHook", () => ({
  useSearch: () => ({
    disableSearch: () => mockDisableSearch(),
  }),
}));

// mock components
jest.mock("../components/Nav/Nav/Nav");

it("should render Home", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Home />);
  expect(getByLabelText("hero title").textContent).toBe(
    "Not sure where to go? Perfect."
  );
});
