import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store, useAppDispatch } from "../redux/store";
import { useOnclickOutside } from "./clickHook";
import { makeBgWhite } from "../redux/windowSlice";

const Component = () => {
  const { ref, open, opened } = useOnclickOutside();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(makeBgWhite());
  };
  return (
    <div aria-label="outer">
      <div ref={ref}>
        <p>modal</p>
        <span aria-label="opened">{opened ? "true" : "false"}</span>
        <button aria-label="button" onClick={open}>
          button
        </button>
        <button aria-label="scroll" onClick={handleClick}>
          scroll
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
  test("open should be false by default", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    expect(getByLabelText("opened").textContent).toBe("false");
  });

  test("open() should change the value of open", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    fireEvent.click(getByLabelText("button"));
    expect(getByLabelText("opened").textContent).toBe("true");
  });

  test("clicking outer div should invoke callback", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    fireEvent.click(getByLabelText("button"));
    fireEvent.mouseDown(getByLabelText("outer"));
    expect(getByLabelText("opened").textContent).toBe("false");
  });

  test("clicking inner div should not change the value of open", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Wrapped />);
    fireEvent.click(getByLabelText("button"));
    fireEvent.mouseDown(getByLabelText("opened"));
    expect(getByLabelText("opened").textContent).toBe("true");
  });

  test("open should be false if scrolled is true", () => {
    expect.assertions(2);
    const { getByLabelText } = render(<Wrapped />);
    // click button and change value true
    fireEvent.click(getByLabelText("button"));
    expect(getByLabelText("opened").textContent).toBe("true");
    fireEvent.click(getByLabelText("scroll"));
    expect(getByLabelText("opened").textContent).toBe("false");
  });
});
