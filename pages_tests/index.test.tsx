import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import Home from "../pages";
import { store } from "../redux/store";

it("should render Home", () => {
  expect.assertions(1);
  const { container } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(container.textContent).toBe("Index page");
});
