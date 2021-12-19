import { render } from "@testing-library/react";
import Discover from "./Discover";

// mock Image component
jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    }
);

it("should render title", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Discover />);
  expect(getByLabelText("title").textContent).toBe(
    "Discover Airbnb Experiences"
  );
});
