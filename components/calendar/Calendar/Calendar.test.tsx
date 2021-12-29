import { render } from "@testing-library/react";
import Calendar from "./Calendar";

// // mock hooks
const mockUseCalendar = jest.fn();
jest.mock("../../../hooks/calendarHook", () => ({
  useCalendar: () => mockUseCalendar(),
}));

beforeEach(() => {
  mockUseCalendar.mockReturnValue({
    currentSchedule: [new Date("2021-12-30")],
  });
});

it("should display calendar", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Calendar />);
  expect(getByLabelText("calendar buttons").textContent).toBe(
    "CalendarI'm flexible"
  );
});
