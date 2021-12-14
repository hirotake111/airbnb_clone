import { render } from "@testing-library/react";
import Centermenu from "./CenterMenu";

jest.mock("../SearchBar/SearchBar");
it("should render", () => {
  expect.assertions(1);
  const { getByText } = render(<Centermenu />);
  expect(getByText("Online experiences")).toBeTruthy();
});
