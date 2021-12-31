import { render, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";

import { useAppDispatch, useAppSelector } from "../redux/store";
import { useSearchModal } from "./searchModalHook";
import { makeBgBlack, makeBgWhite } from "../redux/windowSlice";
import SearchModal from "../components/search/SearchModal/SearchModal";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { reducer } from "../redux/reducer";

let store: EnhancedStore;

beforeEach(() => {
  cleanup();
  store = configureStore({ reducer });
});

const Component = () => {
  const location = useSearchModal("location");
  const guests = useSearchModal("guests");
  const dispatch = useAppDispatch();
  const scrollDown = () => dispatch(makeBgWhite());
  const scrollUp = () => dispatch(makeBgBlack());
  const { enabled } = useAppSelector((state) => state.search);

  return (
    <div id="container">
      <p aria-label="container">container</p>

      {/** scroll up/dwon button */}
      <button onClick={scrollUp}>scroll up</button>
      <button onClick={scrollDown}>scroll down</button>

      {/** search bar */}
      <div id="search_bar">
        <span aria-label="search_bar">{enabled ? "open" : "closed"}</span>
        <button onClick={location.openSearchModal}>open location modal</button>
        <button onClick={guests.openSearchModal}>open guests modal</button>
      </div>

      {/** search modal */}
      <div id="search_modal">
        <SearchModal reference={location.ref} opened={location.modalOpened}>
          <span aria-label="location">
            {location.modalOpened ? "open" : "closed"}
          </span>
          {/* location modal */}
        </SearchModal>
        <SearchModal reference={guests.ref} opened={guests.modalOpened}>
          <span aria-label="guests">
            {guests.modalOpened ? "open" : "closed"}
          </span>
          {/* guests modal */}
        </SearchModal>
      </div>
    </div>
  );
};

const Wrapped = () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

test("clicking outside of modal sould close modal, but not search bar", () => {
  expect.assertions(9);
  const { getByLabelText, getByText } = render(<Wrapped />);
  // by default all modals should be closed
  expect(getByLabelText("location").textContent).toBe("closed");
  expect(getByLabelText("guests").textContent).toBe("closed");
  expect(getByLabelText("search_bar").textContent).toBe("open");
  // click button
  fireEvent.click(getByText("open location modal"));
  // only "location" should be open now
  expect(getByLabelText("location").textContent).toBe("open");
  expect(getByLabelText("guests").textContent).toBe("closed");
  expect(getByLabelText("search_bar").textContent).toBe("open");
  // click outside of modal container
  fireEvent.mouseDown(getByLabelText("container"));
  // "location" should be closed now
  expect(getByLabelText("location").textContent).toBe("closed");
  expect(getByLabelText("guests").textContent).toBe("closed");
  expect(getByLabelText("search_bar").textContent).toBe("open");
});

test("clicking search bar should not close search bar", () => {
  expect.assertions(9);
  const { getByLabelText, getByText } = render(<Wrapped />);
  // by default all modals should be closed
  expect(getByLabelText("location").textContent).toBe("closed");
  expect(getByLabelText("guests").textContent).toBe("closed");
  expect(getByLabelText("search_bar").textContent).toBe("open");
  // click button
  fireEvent.click(getByText("open location modal"));
  // only "location" should be open now
  expect(getByLabelText("location").textContent).toBe("open");
  expect(getByLabelText("guests").textContent).toBe("closed");
  expect(getByLabelText("search_bar").textContent).toBe("open");
  // click outside of modal container
  fireEvent.mouseDown(getByLabelText("search_bar"));
  // "location" should be closed now
  expect(getByLabelText("location").textContent).toBe("closed");
  expect(getByLabelText("guests").textContent).toBe("closed");
  expect(getByLabelText("search_bar").textContent).toBe("open");
});

test("clicking modal should not close search bar and modal", () => {
  expect.assertions(9);
  const { getByLabelText, getByText } = render(<Wrapped />);
  // by default all modals should be closed
  expect(getByLabelText("location").textContent).toBe("closed");
  expect(getByLabelText("guests").textContent).toBe("closed");
  expect(getByLabelText("search_bar").textContent).toBe("open");
  // click button
  fireEvent.click(getByText("open location modal"));
  // only "location" should be open now
  expect(getByLabelText("location").textContent).toBe("open");
  expect(getByLabelText("guests").textContent).toBe("closed");
  expect(getByLabelText("search_bar").textContent).toBe("open");
  // click outside of modal container
  fireEvent.mouseDown(getByLabelText("location"));
  // "location" should be closed now
  expect(getByLabelText("location").textContent).toBe("open");
  expect(getByLabelText("guests").textContent).toBe("closed");
  expect(getByLabelText("search_bar").textContent).toBe("open");
});

test("scrolling down the window should close search bar and modal", () => {
  expect.assertions(6);
  const { getByLabelText, getByText } = render(<Wrapped />);
  // by default all modals should be closed
  expect(getByLabelText("location").textContent).toBe("closed");
  expect(getByLabelText("guests").textContent).toBe("closed");
  expect(getByLabelText("search_bar").textContent).toBe("open");
  // scroll down
  fireEvent.click(getByText("scroll down"));
  // location modal and search bar should be closed now
  expect(getByLabelText("location").textContent).toBe("closed");
  expect(getByLabelText("guests").textContent).toBe("closed");
  expect(getByLabelText("search_bar").textContent).toBe("closed");
});
