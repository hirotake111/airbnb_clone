import { render } from "@testing-library/react";
import Location from "./Location";

it("should rener location modal", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Location />);
  expect(getByLabelText("location label").textContent).toBe(
    "GO ANYWHERE, ANYTIME"
  );
});
