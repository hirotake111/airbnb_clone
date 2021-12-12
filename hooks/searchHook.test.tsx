import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, fireEvent } from "@testing-library/react";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// import { searchSlice } from "../redux/searchSlice";

import { useSearch } from "./searchHook";

// // mock slice
// const windowSlice = createSlice({
//   name: "window",
//   initialState: { scrolled: true },
//   reducers: {},
// });

// // mock store
// const store = configureStore({
//   reducer: {
//     window: windowSlice.reducer,
//     search: searchSlice.reducer,
//   },
// });

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
