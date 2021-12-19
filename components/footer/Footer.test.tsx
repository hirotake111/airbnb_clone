import { render } from "@testing-library/react";
import Footer from "./Footer";

it("should render 4 list items", () => {
  expect.assertions(1);
  const { container } = render(<Footer />);
  expect(container.getElementsByClassName("menu").length).toBe(4);
});
