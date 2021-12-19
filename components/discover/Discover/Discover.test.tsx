import { render } from "@testing-library/react";
import { MockImage, MockLink } from "../../../utils/testHelper";
import Discover from "./Discover";

// mock Image component
jest.mock("next/image", () => MockImage);
jest.mock("next/link", () => MockLink);

it("should render title", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Discover />);
  expect(getByLabelText("title").textContent).toBe(
    "Discover Airbnb Experiences"
  );
});
