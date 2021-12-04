import { render } from "@testing-library/react";
import Nav from "./Nav";

const mockObserve = jest.fn();

beforeEach(() => {
  // mock InterscrtionObserver
  const mockIntersectionObserver = jest.fn().mockReturnValue({
    observe: (element: HTMLElement) => mockObserve(element),
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

it("should render navbar", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Nav />);
  expect(getByLabelText("navigation")).toBeTruthy();
});
