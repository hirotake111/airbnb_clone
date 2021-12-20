import { render } from "@testing-library/react";
import Container from "./Container";

it("should render child component", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Container>hey</Container>);
  expect(getByLabelText("container").textContent).toBe("hey");
});
