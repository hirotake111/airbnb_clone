import { render } from "@testing-library/react";
import Inspiration from "./Inspiration";

it("should redner title", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Inspiration />);
  expect(getByLabelText("inspiration").textContent).toBe(
    "Inspiration for future getaways"
  );
});
