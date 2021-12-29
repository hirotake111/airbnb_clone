import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import { useCalendar } from "./calendarHook";

// fake custom hook
const mockHook = jest.fn();

const Component = () => {
  const { currentSchedule, updateSchedule } = useCalendar();

  const value = mockHook();
  return (
    <div>
      <span aria-label="current schedule">
        {currentSchedule ? currentSchedule : "null"}
      </span>
      <button
        aria-label="update schedule"
        onClick={(e) => updateSchedule(value, e)}
      >
        update schedule
      </button>
    </div>
  );
};

const WrappedComponent = () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

const l = console.log;
const g = console.group;
beforeAll(() => {
  console.log = jest.fn();
  console.group = jest.fn();
});
afterAll(() => {
  console.log = l;
  console.group = g;
});

beforeEach(() => {
  mockHook.mockReturnValue(null);
});

it("should return currentSchedule", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<WrappedComponent />);
  expect(getByLabelText("current schedule").textContent).toBe("null");
});

test("updateSchedule should update currentSchedule", () => {
  expect.assertions(1);
  // set value
  mockHook.mockReturnValue(new Date("2022-01-01"));
  //render
  const { getByLabelText } = render(<WrappedComponent />);
  // click and update schedule
  fireEvent.click(getByLabelText("update schedule"));
  // validate
  expect(getByLabelText("current schedule").textContent).toBe("");
});
