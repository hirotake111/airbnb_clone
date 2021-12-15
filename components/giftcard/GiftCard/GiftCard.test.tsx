import { render } from "@testing-library/react";
import GiftCard from "./GiftCard";

it("should render image of gift card", () => {
  expect.assertions(1);
  const { getByAltText } = render(<GiftCard />);
  expect(getByAltText("gift card")).toBeTruthy();
});
