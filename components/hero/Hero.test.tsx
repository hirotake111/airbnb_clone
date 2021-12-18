import { render } from "@testing-library/react";
import Hero from "./Hero";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    }
);

it("should display hero component", () => {
  expect.assertions(2);
  const { getByLabelText, container } = render(<Hero />);
  expect(getByLabelText("hero title").textContent).toBe(
    "Not sure where to go? Perfect."
  );
  expect(container.getElementsByTagName("img").length).toBe(2);
});
