import { render, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { store, useAppDispatch } from "../redux/store";
import { useOnclickOutside } from "./clickHook";
import { makeBgBlack, makeBgWhite } from "../redux/windowSlice";

const Component = () => {
  const { ref, openSearchBar, closeSearchBar, modalOpened, enabled } =
    useOnclickOutside("location");
  const dispatch = useAppDispatch();

  return (
    <div aria-label="outer">
      <div ref={ref}>
        <p>modal</p>
        <div id="search_form">
          <span aria-label="modal opened" onClick={() => {}}>
            {modalOpened ? "true" : "false"}
          </span>
          <span aria-label="search bar enabled">
            {enabled ? "true" : "false"}
          </span>
          <button aria-label="open search bar" onClick={openSearchBar}>
            open search bar
          </button>
          <button
            aria-label="scroll down"
            onClick={() => dispatch(makeBgWhite())}
          >
            scroll down
          </button>
          <button
            aria-label="scroll up"
            onClick={() => dispatch(makeBgBlack())}
          >
            scroll up
          </button>
          <button
            aria-label="close search bar"
            onClick={(e) => closeSearchBar(e as any)}
          >
            close
          </button>
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

describe("useOnclikcOutside", () => {
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

  test("openSearchBar() should change the value of open", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    fireEvent.click(getByLabelText("open search bar"));
    expect(getByLabelText("modal opened").textContent).toBe("true");
  });

  test("when windows is scrolled down, clicking outer div should close modal", () => {
    expect.assertions(2);
    const { getByLabelText } = render(<Wrapped />);
    // virtuall scroll window
    fireEvent.click(getByLabelText("scroll down"));
    // click and open search bar
    fireEvent.click(getByLabelText("open search bar"));
    expect(getByLabelText("modal opened").textContent).toBe("true");
    // click outer element
    fireEvent.mouseDown(getByLabelText("outer"));
    expect(getByLabelText("modal opened").textContent).toBe("false");
  });

  test("clicking inner div should not change the value of open", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    fireEvent.click(getByLabelText("open search bar"));
    fireEvent.mouseDown(getByLabelText("modal opened"));
    expect(getByLabelText("modal opened").textContent).toBe("true");
  });

  test("modal should be closed if window is scrolled down", () => {
    expect.assertions(2);
    const { getByLabelText } = render(<Wrapped />);
    // scroll up window
    fireEvent.click(getByLabelText("scroll up"));
    // click button and open search bar
    fireEvent.click(getByLabelText("open search bar"));
    expect(getByLabelText("modal opened").textContent).toBe("true");
    // click button and scroll down window
    fireEvent.click(getByLabelText("scroll down"));
    expect(getByLabelText("modal opened").textContent).toBe("false");
  });

  test("close() should dispatch disableSearch() if value 'scrolled is true", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    // click button and scroll window
    fireEvent.click(getByLabelText("scroll down"));
    // then click close button
    fireEvent.click(getByLabelText("close search bar"));
    expect(getByLabelText("search bar enabled").textContent).toBe("false");
  });
});
