import { render } from "@testing-library/react";
import Calendar from "./Calendar";

// mock dispatch and selector
const mockDispatch = jest.fn();
const mockSelector = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector(),
}));

// // mock hooks
// const mockUseSearch = jest.fn();
// jest.mock("../../../hooks/searchHook", () => ({
//   useSearch: () => mockUseSearch(),
// }));
// const mockUseOnclickOutside = jest.fn();
// mockUseOnclickOutside.mockReturnValue({
//   openSearchBar: jest.fn(),
//   // closeSearchBar: jest.fn(),
// });
// jest.mock("../../../hooks/clickHook", () => ({
//   useOnclickOutside: () => mockUseOnclickOutside(),
// }));
// const mockUseSchedule = jest.fn();
// jest.mock("../../../hooks/scheduleHook", () => ({
//   useSchedule: () => mockUseSchedule(),
// }));

beforeEach(() => {
  mockSelector.mockReturnValue({
    selectedDate: "checkin",
    schedule: {
      checkIn: "Dec 1",
      checkOut: "Dec 13",
    },
  });
});

it("should display calendar", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Calendar />);
  expect(getByLabelText("calendar buttons").textContent).toBe(
    "CalendarI'm flexible"
  );
});
