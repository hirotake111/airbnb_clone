import { render } from "@testing-library/react";
import OvalButton from "./OvalButton";

it("should display an oval button with label", () => {
  expect.assertions(1);
  const { container } = render(<OvalButton label={<span>click me</span>} />);
  expect(container.textContent).toBe("click me");
});

it("should change width of itself if value width is given", () => {
  expect.assertions(1);
  const { container } = render(
    <OvalButton label={<span>click me</span>} width={10} />
  );
  if (!container.firstElementChild) return;
  const styles = getComputedStyle(container.firstElementChild);
  expect(styles.width).toBe("10px");
});
