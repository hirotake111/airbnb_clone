import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../redux/store";
import Guests from "./Guests";

it("should render items", () => {
  expect.assertions(1);
  const { getByText } = render(
    <Provider store={store}>
      <Guests />
    </Provider>
  );
  expect(getByText("Adults")).toBeTruthy();
});
