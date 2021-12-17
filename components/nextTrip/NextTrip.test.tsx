import { render } from "@testing-library/react";
import NextTrip from "./NextTrip";

it("should render 4 items", () => {
  expect.assertions(1);
  const { container } = render(<NextTrip />);
  expect(container.getElementsByClassName("item__outline").length).toBe(4);
});
