import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { reducer } from "../redux/reducer";
import { updateSelectedDate } from "../redux/searchSlice";

import { useAppDispatch, useAppSelector } from "../redux/store";
import { useCalendar } from "./calendarHook";

// fake custom hook
const mockHook = jest.fn();

// mock component
const Component = () => {
  const { currentSchedule, updateSchedule } = useCalendar();
  const dispatch = useAppDispatch();
  const { selectedDate } = useAppSelector((state) => state.search);

  const value = mockHook();

  const handleSwitch = () => {
    dispatch(
      updateSelectedDate(selectedDate === "checkin" ? "checkout" : "checkin")
    );
  };

  return (
    <div>
      <span aria-label="current schedule">
        {currentSchedule
          ? Array.isArray(currentSchedule)
            ? `${currentSchedule[0].toDateString()} - ${currentSchedule[1].toDateString()}`
            : currentSchedule.toDateString()
          : "null"}
      </span>
      <button
        aria-label="update schedule"
        onClick={(e) => updateSchedule(value, e)}
      >
        update schedule
      </button>
      <button onClick={handleSwitch}>switch</button>
    </div>
  );
};

let Wrapped: () => JSX.Element;

beforeEach(() => {
  const store = configureStore({ reducer });
  Wrapped = () => {
    return (
      <Provider store={store}>
        <Component />
      </Provider>
    );
  };
  mockHook.mockReturnValue(null);
});

it("should return currentSchedule", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Wrapped />);
  expect(getByLabelText("current schedule").textContent).toBe("null");
});

test("updateSchedule should update currentSchedule", () => {
  expect.assertions(2);
  // this value will be used when "update schedule button gets clicked"
  const checkInDate = "Sat Jan 01 2022";
  const checkOutDate = "Sat Jan 08 2022";
  mockHook.mockReturnValueOnce(new Date(checkInDate));
  mockHook.mockReturnValueOnce(new Date(checkOutDate));
  //render
  const { getByLabelText } = render(<Wrapped />);
  // click and update schedule
  fireEvent.click(getByLabelText("update schedule"));
  // validate
  expect(getByLabelText("current schedule").textContent).toBe(checkInDate);
  // click and update schedule
  fireEvent.click(getByLabelText("update schedule"));
  // validate
  expect(getByLabelText("current schedule").textContent).toBe(
    `${checkInDate} - ${checkOutDate}`
  );
});

it("should update checkOutDate if checkInDate is null and selectedDate is checkout", () => {
  expect.assertions(1);
  // this value will be used when "update schedule button gets clicked"
  const date = "Sat Jan 08 2022";
  mockHook.mockReturnValue(new Date(date));
  //render
  const { getByLabelText, getByText } = render(<Wrapped />);
  // switch selectedDate
  fireEvent.click(getByText("switch"));
  // click and update schedule
  fireEvent.click(getByLabelText("update schedule"));
  // validate
  expect(getByLabelText("current schedule").textContent).toBe(date);
});

it("should update onlycheckInDate if new checkOutDate is earlier", () => {
  expect.assertions(2);
  // this value will be used when "update schedule button gets clicked"
  const date1 = "Mon Jan 10 2022";
  const date2 = "Sat Jan 08 2022";
  mockHook.mockReturnValueOnce(new Date(date1));
  mockHook.mockReturnValueOnce(new Date(date2));
  //render
  const { getByLabelText } = render(<Wrapped />);
  // click and update schedule
  fireEvent.click(getByLabelText("update schedule"));
  // validate
  expect(getByLabelText("current schedule").textContent).toBe(date1);
  // click and update schedule
  fireEvent.click(getByLabelText("update schedule"));
  // validate
  expect(getByLabelText("current schedule").textContent).toBe(date2);
});

it("should remove checkOutDate and update checkInDate if new checkInDate is later than checkOut", () => {
  expect.assertions(2);
  // this value will be used when "update schedule button gets clicked"
  const date1 = "Sat Jan 08 2022";
  const date2 = "Mon Jan 10 2022";
  const date3 = "Mon Jan 17 2022";
  mockHook.mockReturnValueOnce(new Date(date1));
  mockHook.mockReturnValueOnce(new Date(date2));
  mockHook.mockReturnValueOnce(new Date(date3));
  mockHook.mockReturnValueOnce(new Date(date3));
  //render
  const { getByLabelText, getByText } = render(<Wrapped />);
  // click and update schedule
  fireEvent.click(getByLabelText("update schedule"));
  // validate
  expect(getByLabelText("current schedule").textContent).toBe(date1);
  // click and update schedule
  fireEvent.click(getByLabelText("update schedule"));
  // switch selectedDate
  fireEvent.click(getByText("switch"));
  // click and update schedule
  fireEvent.click(getByLabelText("update schedule"));
  // validate
  expect(getByLabelText("current schedule").textContent).toBe(date3);
});
