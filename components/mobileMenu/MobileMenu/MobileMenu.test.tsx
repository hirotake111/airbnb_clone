import { render } from "@testing-library/react";
import MobileMenu from "./MobileMenu";

it("should display Explore, Wishilists, and Log in", () => {
  expect.assertions(3);
  const { getByText } = render(<MobileMenu />);
  expect(getByText("Explore")).toBeTruthy();
  expect(getByText("Wishlists")).toBeTruthy();
  expect(getByText("Log in")).toBeTruthy();
});
