import { render } from "@testing-library/react";
import Guests from "./Guests";

it("should render items", () => {
  expect.assertions(1);
  const { getByText } = render(<Guests />);
  expect(getByText("Adults")).toBeTruthy();
});
