import { render } from "@testing-library/react";
import MobileSearchBar from "./MoblieSearchBar";

it("should render mobile search bar", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<MobileSearchBar />);
  expect(getByLabelText("mobile search bar").textContent).toBe(
    "Where are you going?"
  );
});
