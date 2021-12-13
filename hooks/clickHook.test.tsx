import { render, fireEvent } from "@testing-library/react";
import { useOnclickOutside } from "./clickHook";

const Component = () => {
  const { ref, open, opened } = useOnclickOutside();
  return (
    <div aria-label="outer">
      <div ref={ref}>
        <p>modal</p>
        <button aria-label="button" onClick={open}>
          button
        </button>
        <span aria-label="opened">{opened ? "true" : "false"}</span>
      </div>
    </div>
  );
};

describe("useOnclikcOutside", () => {
  test("open should be false by default", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Component />);
    expect(getByLabelText("opened").textContent).toBe("false");
  });

  test("open() should change the value of open", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Component />);
    fireEvent.click(getByLabelText("button"));
    expect(getByLabelText("opened").textContent).toBe("true");
  });

  test("clicking outer div should invoke callback", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Component />);
    fireEvent.click(getByLabelText("button"));
    fireEvent.mouseDown(getByLabelText("outer"));
    expect(getByLabelText("opened").textContent).toBe("false");
  });

  test("clicking inner div should not change the value of open", () => {
    expect.assertions(1);
    const { getByLabelText } = render(<Component />);
    fireEvent.click(getByLabelText("button"));
    fireEvent.mouseDown(getByLabelText("opened"));
    expect(getByLabelText("opened").textContent).toBe("true");
  });
});
