import { render } from "@testing-library/react";
import Hero from "./Hero";

it("should display hero component", () => {
  expect.assertions(2);
  const { getByLabelText } = render(<Hero />);
  expect(getByLabelText("hero title").textContent).toBe(
    "Not sure where to go? Perfect."
  );
  expect(getByLabelText("hero image").tagName).toBe("IMG");
});
