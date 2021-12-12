import { render } from "@testing-library/react";
import SearchModal from "./SearchModal";

it("should render location modal", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<SearchModal>child</SearchModal>);
  expect(getByLabelText("search modal")).toBeTruthy();
});
