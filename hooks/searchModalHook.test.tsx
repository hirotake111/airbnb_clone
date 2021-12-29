import { render, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { store, useAppDispatch } from "../redux/store";
import { useOnclickOutside } from "./searchModalHook";
import { makeBgBlack, makeBgWhite } from "../redux/windowSlice";

const Component = () => {
  const location = useOnclickOutside("location");
  const guests = useOnclickOutside("location");
  const dispatch = useAppDispatch();
  const scrollDown = () => dispatch(makeBgWhite());
  const scrollUp = () => dispatch(makeBgBlack());

  return (
    <div id="container">
      <button onClick={scrollDown}>scroll down</button>
      <button onClick={scrollUp}>scroll up</button>

      <div id="search_bar">
        <button onClick={location.openSearchModal}>open location modal</button>
        <button onClick={guests.openSearchModal}>open guests modal</button>
      </div>

      <div id="search_modal">
        <div id="location" ref={location.ref}>
          <p id="modal_text">location modal</p>
          <span aria-label="modal opened">
            {location.modalOpened ? "true" : "false"}
          </span>
          <span aria-label="search bar enabled">
            {location.enabled ? "true" : "false"}
          </span>
        </div>
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

let log = console.log;
let group = console.group;

beforeAll(() => {
  cleanup();
  console.log = jest.fn();
  console.group = jest.fn();
});

afterAll(() => {
  console.log = log;
  console.group = group;
});

test("modal should be closed by default", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<Wrapped />);
  expect(getByLabelText("modal opened").textContent).toBe("false");
});

test("openSearchModal() should change the value of modalOpened", () => {
  expect.assertions(1);
  const { getByLabelText, getByText } = render(<Wrapped />);
  // click button
  fireEvent.click(getByText("open modal"));
  expect(getByLabelText("modal opened").textContent).toBe("true");
});

// test("when windows is scrolled down, clicking outer div should close modal", () => {
//   expect.assertions(2);
//   const { getByLabelText } = render(<Wrapped />);
//   // virtuall scroll window
//   fireEvent.click(getByLabelText("scroll down"));
//   // click and open search bar
//   fireEvent.click(getByLabelText("open search bar"));
//   expect(getByLabelText("modal opened").textContent).toBe("true");
//   // click outer element
//   fireEvent.mouseDown(getByLabelText("outer"));
//   expect(getByLabelText("modal opened").textContent).toBe("false");
// });

// test("clicking inner div should not change the value of open", () => {
//   expect.assertions(1);
//   const { getByLabelText } = render(<Wrapped />);
//   fireEvent.click(getByLabelText("open search bar"));
//   fireEvent.mouseDown(getByLabelText("modal opened"));
//   expect(getByLabelText("modal opened").textContent).toBe("true");
// });

// test("modal should be closed if window is scrolled down", () => {
//   expect.assertions(2);
//   const { getByLabelText } = render(<Wrapped />);
//   // scroll up window
//   fireEvent.click(getByLabelText("scroll up"));
//   // click button and open search bar
//   fireEvent.click(getByLabelText("open search bar"));
//   expect(getByLabelText("modal opened").textContent).toBe("true");
//   // click button and scroll down window
//   fireEvent.click(getByLabelText("scroll down"));
//   expect(getByLabelText("modal opened").textContent).toBe("false");
// });

// test("close() should dispatch disableSearch() if value 'scrolled is true", () => {
//   expect.assertions(1);
//   const { getByLabelText } = render(<Wrapped />);
//   // click button and scroll window
//   fireEvent.click(getByLabelText("scroll down"));
//   // then click close button
//   fireEvent.click(getByLabelText("close search bar"));
//   expect(getByLabelText("search bar enabled").textContent).toBe("false");
// });
