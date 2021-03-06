import { render } from "@testing-library/react";

import Nav from "./Nav";

// mock custom hook
const mockWindowHook = jest.fn();
jest.mock("../../../hooks/windowHook", () => ({
  useWindow: () => mockWindowHook(),
}));
const mockSearchHook = jest.fn();
jest.mock("../../../hooks/searchHook", () => ({
  useSearch: () => mockSearchHook(),
}));

jest.mock("../CenterMenu/CenterMenu");
const WrappedComponent = () => <Nav />;

let log = console.log;
let group = console.group;

beforeAll(() => {
  console.log = jest.fn();
  console.group = jest.fn();
});

afterAll(() => {
  console.log = log;
  console.group = group;
});

it("should render navbar", () => {
  expect.assertions(1);
  mockWindowHook.mockReturnValue(false);
  mockSearchHook.mockReturnValue({
    enabled: true,
  });
  const { getByLabelText } = render(<WrappedComponent />);
  expect(getByLabelText("navigation")).toBeTruthy();
});

it("should add extra class if search hook returns true", () => {
  expect.assertions(1);
  mockWindowHook.mockReturnValue(false);
  mockSearchHook.mockReturnValue({
    enabled: true,
  });
  const { container } = render(<WrappedComponent />);
  expect(container.getElementsByClassName("nav_searchEnabled").length).toBe(1);
});

it("should add extra class if window hook returns true", () => {
  expect.assertions(1);
  mockWindowHook.mockReturnValue(true);
  mockSearchHook.mockReturnValue({
    enabled: false,
  });
  const { container } = render(<WrappedComponent />);
  expect(container.getElementsByClassName("nav_scrolled").length).toBe(1);
});
