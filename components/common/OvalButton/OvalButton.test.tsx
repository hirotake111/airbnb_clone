import { render } from "@testing-library/react";
import OvalButton from "./OvalButton";

it("should display an oval button with label", () => {
  expect.assertions(1);
  const { container } = render(
    <OvalButton
      label={
        <div>
          <span>click me</span>
        </div>
      }
    />
  );
  expect(container.textContent).toBe("click me");
});
