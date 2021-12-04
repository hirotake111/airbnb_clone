import { render } from "@testing-library/react";
import Nav from "./Nav";

it("should render navbar", () => {
  expect.assertions(1);
  const { container } = render(<Nav />);
  expect(container.getElementsByTagName("svg").length).toBe(1);
});
