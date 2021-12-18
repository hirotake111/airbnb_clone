import { render } from "@testing-library/react";
import GiftCard from "./GiftCard";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      return <img src={src} alt={alt} />;
    }
);

it("should render image of gift card", () => {
  expect.assertions(1);
  const { getByAltText } = render(<GiftCard />);
  expect(getByAltText("gift card")).toBeTruthy();
});
