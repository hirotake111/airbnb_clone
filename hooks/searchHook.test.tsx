import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import { useSearch, useSearchFocus } from "./searchHook";

describe("useSearch", () => {
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

  // fake component
  const Component = () => {
    const { enabled, scrolled, enableSearch, disableSearch, toggleScrolled } =
      useSearch();

    return (
      <>
        <div aria-label="enabled">{enabled ? "true" : "false"}</div>
        <div aria-label="scrolled">{scrolled ? "true" : "false"}</div>
        <button aria-label="enable" onClick={enableSearch}>
          enable
        </button>
        <button aria-label="disable" onClick={disableSearch}>
          disable
        </button>
        <button aria-label="scroll" onClick={toggleScrolled}>
          scroll
        </button>
      </>
    );
  };

  const WrappedComponent = () => (
    <Provider store={store}>
      <Component />
    </Provider>
  );

  describe("useSearch", () => {
    test("value enabled should be true by default", () => {
      expect.assertions(1);
      const { getByLabelText } = render(<WrappedComponent />);
      expect(getByLabelText("enabled").textContent).toBe("true");
    });

    test("toggleScrolled should work", () => {
      expect.assertions(2);
      const { getByLabelText } = render(<WrappedComponent />);
      fireEvent.click(getByLabelText("scroll"));
      expect(getByLabelText("scrolled").textContent).toBe("true");
      fireEvent.click(getByLabelText("scroll"));
      expect(getByLabelText("scrolled").textContent).toBe("false");
    });

    test("disableSearch() and enableSearch() should change the value", () => {
      expect.assertions(4);
      const { getByLabelText } = render(<WrappedComponent />);
      fireEvent.click(getByLabelText("scroll"));
      fireEvent.click(getByLabelText("disable"));
      expect(getByLabelText("enabled").textContent).toBe("false");
      fireEvent.click(getByLabelText("disable"));
      expect(getByLabelText("enabled").textContent).toBe("false");
      fireEvent.click(getByLabelText("enable"));
      expect(getByLabelText("enabled").textContent).toBe("true");
      fireEvent.click(getByLabelText("enable"));
      expect(getByLabelText("enabled").textContent).toBe("true");
    });
  });
});

describe("useSearchFocus", () => {
  const Component = () => {
    const { changeSearchFocus, focused } = useSearchFocus();

    return (
      <div>
        <button
          aria-label="location"
          onClick={() => changeSearchFocus("location")}
        ></button>
        <button
          aria-label="checkIn"
          onClick={() => changeSearchFocus("checkIn")}
        ></button>
        <button
          aria-label="checkOut"
          onClick={() => changeSearchFocus("checkOut")}
        ></button>
        <button
          aria-label="guests"
          onClick={() => changeSearchFocus("guests")}
        ></button>
        <p aria-label="result">{focused ? focused : ""}</p>
      </div>
    );
  };

  const Wrapped = () => (
    <Provider store={store}>
      <Component />
    </Provider>
  );

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

  it("should update state.focused", () => {
    expect.assertions(5);
    const { getByLabelText } = render(<Wrapped />);
    expect(getByLabelText("result").textContent).toBe("");
    fireEvent.click(getByLabelText("location"));
    expect(getByLabelText("result").textContent).toBe("location");
    fireEvent.click(getByLabelText("checkIn"));
    expect(getByLabelText("result").textContent).toBe("checkIn");
    fireEvent.click(getByLabelText("checkOut"));
    expect(getByLabelText("result").textContent).toBe("checkOut");
    fireEvent.click(getByLabelText("guests"));
    expect(getByLabelText("result").textContent).toBe("guests");
  });
});
