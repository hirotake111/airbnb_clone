import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store, useAppDispatch } from "../redux/store";
import { useOnclickOutside } from "./clickHook";
import { makeBgWhite } from "../redux/windowSlice";

const Component = () => {
  const { ref, openSearchBar, closeSearchBar, opened, enabled } =
    useOnclickOutside();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(makeBgWhite());
  };
  return (
    <div aria-label="outer">
      <div ref={ref}>
        <p>modal</p>
        <span aria-label="opened">{opened ? "true" : "false"}</span>
        <span aria-label="search enabled">{enabled ? "true" : "false"}</span>
        <button aria-label="open search bar" onClick={openSearchBar}>
          open
        </button>
        <button aria-label="scroll" onClick={handleClick}>
          scroll
        </button>
        <button aria-label="close" onClick={(e) => closeSearchBar(e as any)}>
          close
        </button>
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
    console.log = jest.fn();
    console.group = jest.fn();
  });

  afterAll(() => {
    console.log = log;
    console.group = group;
  });

  test(" vlaue 'open' should be false by default", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    expect(getByLabelText("opened").textContent).toBe("false");
  });

  test("open() should change the value of open", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    fireEvent.click(getByLabelText("open search bar"));
    expect(getByLabelText("opened").textContent).toBe("true");
  });

  test("clicking outer div should invoke callback", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    fireEvent.click(getByLabelText("open search bar"));
    fireEvent.mouseDown(getByLabelText("outer"));
    expect(getByLabelText("opened").textContent).toBe("false");
  });

  test("clicking inner div should not change the value of open", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    fireEvent.click(getByLabelText("open search bar"));
    fireEvent.mouseDown(getByLabelText("opened"));
    expect(getByLabelText("opened").textContent).toBe("true");
  });

  test("value 'open' should be false if scrolled is true", () => {
    expect.assertions(2);
    const { getByLabelText } = render(<Wrapped />);
    // click button and open search bar
    fireEvent.click(getByLabelText("open search bar"));
    expect(getByLabelText("opened").textContent).toBe("true");
    // click button and scroll down
    fireEvent.click(getByLabelText("scroll"));
    expect(getByLabelText("opened").textContent).toBe("false");
  });

  test("close() should dispatch disableSearch() if value 'scrolled is true", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    // click button and scroll window
    fireEvent.click(getByLabelText("scroll"));
    // then click close button
    fireEvent.click(getByLabelText("close"));
    expect(getByLabelText("search enabled").textContent).toBe("false");
  });
});
