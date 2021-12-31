import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { reducer } from "../redux/reducer";
import useGuests from "./guestsHook";

let Wrapped: () => JSX.Element;
const mockHook = jest.fn();

const Component = () => {
  const { guests, updateGuestCount } = useGuests();
  const key = mockHook();
  return (
    <>
      <span aria-label="result">guests: {guests.length}</span>
      {guests.map((guest) => (
        <div key={guest.id} aria-label={guest.label}>
          {guest.count}
        </div>
      ))}
      <button onClick={() => updateGuestCount(key, 3)}>update children</button>
    </>
  );
};

beforeEach(() => {
  const store = configureStore({ reducer });
  Wrapped = () => {
    return (
      <Provider store={store}>
        <Component />
      </Provider>
    );
  };
});

it("should return guests", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Wrapped />);
  expect(getByLabelText("result").textContent).toBe("guests: 4");
});

test("updateGuestCount should update count", () => {
  expect.assertions(1);
  mockHook.mockReturnValue("Children");
  const { getByLabelText, getByText } = render(<Wrapped />);
  // click button
  fireEvent.click(getByText("update children"));
  expect(getByLabelText("Children").textContent).toBe("3");
});

test("updateGuestCount with invalid key should not update count", () => {
  expect.assertions(1);
  const tmp = console.error;
  console.error = jest.fn();
  mockHook.mockReturnValue("invalid key");
  const { getByLabelText, getByText } = render(<Wrapped />);
  // click button
  fireEvent.click(getByText("update children"));
  expect(getByLabelText("Children" as any).textContent).toBe("0");
  console.error = tmp;
});
