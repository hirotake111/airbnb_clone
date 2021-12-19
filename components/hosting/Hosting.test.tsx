import { render } from "@testing-library/react";
import { MockImage, MockLink } from "../../utils/testHelper";
import Hosting from "./Hosting";

// mock Image
jest.mock("next/image", () => MockImage);
jest.mock("next/link", () => MockLink);

it("should render title", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Hosting />);
  expect(getByLabelText("title").textContent).toBe("Questionsabouthosting?");
});
