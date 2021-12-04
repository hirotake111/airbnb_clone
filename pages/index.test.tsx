import { render } from "@testing-library/react";
import Home from ".";

it("should render Home", () => {
  expect.assertions(1);
  const { container } = render(<Home />);
  expect(container.textContent).toBe("Index page");
});
