import { renderHook } from "@testing-library/react-hooks";

import { RootState } from "../types/types";
import { useWindow } from "./windowHook";

// mock dispatch and selector
const mockDispatch = jest.fn();
const mockSelector = jest.fn();
jest.mock("../redux/store", () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (state: RootState) => mockSelector(),
}));

// mock querySelector
const mockQuerySelector = jest.fn();
document.querySelector = mockQuerySelector;

// mock IntersectionObserver
const mockObserver = jest.fn().mockImplementation((callback) => {
  callback([{ boundingClientRect: { y: -1 } }]);
  return { observe: () => true };
});
window.IntersectionObserver = mockObserver;

describe("useWindow", () => {
  beforeEach(() => {
    mockObserver.mockClear();
    mockQuerySelector.mockClear();
    mockQuerySelector.mockReturnValue(true);
    mockDispatch.mockClear();
    mockSelector.mockClear();
    mockDispatch.mockReset();
  });

  it("should return boolean", () => {
    expect.assertions(1);
    mockSelector.mockReturnValue({ scrolled: false });
    const {
      result: { current },
    } = renderHook(useWindow);
    expect(current).toBe(false);
  });

  it("should dispatch scroll", async () => {
    expect.assertions(1);
    mockSelector.mockReturnValue({ scrolled: false });
    mockObserver.mockImplementation((callback) => {
      callback([{ boundingClientRect: { y: -1 } }]);
      return { observe: () => true };
    });
    renderHook(useWindow);
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: undefined,
      type: "window/makeBgWhite",
    });
  });

  it("should dispatch unscroll", async () => {
    expect.assertions(1);
    mockSelector.mockReturnValue({ scrolled: false });
    mockObserver.mockImplementation((callback) => {
      callback([{ boundingClientRect: { y: 1 } }]);
      return { observe: () => true };
    });
    renderHook(useWindow);
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: undefined,
      type: "window/makeBgBlack",
    });
  });

  it("should console a message if target element is not rendered", async () => {
    expect.assertions(1);
    const tmp = console.log;
    const mockLog = jest.fn();
    console.log = mockLog;
    mockQuerySelector.mockReturnValue(false);
    renderHook(useWindow);
    expect(mockLog).toHaveBeenCalledWith(
      "IntersectionObserver was not instantiate as #target is not rendered"
    );
    console.log = tmp;
  });
});
