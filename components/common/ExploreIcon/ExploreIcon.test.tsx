import { render } from "@testing-library/react";
import ExploreIcon from "./ExploreIcon";

it("should display Explore icon", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<ExploreIcon />);
  expect(getByLabelText("explore icon")).toBeTruthy();
});

test("size parameter should change the size of the icon", () => {
  expect.assertions(2);
  const { container } = render(<ExploreIcon size={32} />);
  if (!container.firstElementChild) return;
  const styles = getComputedStyle(container.firstElementChild);
  expect(styles.width).toBe("32px");
  expect(styles.height).toBe("32px");
});
