import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { searchSlice } from "../redux/searchSlice";

import { useSearch } from "./searchHook";

// mock slice
const windowSlice = createSlice({
  name: "window",
  initialState: { scrolled: true },
  reducers: {},
});

// mock store
const store = configureStore({
  reducer: {
    window: windowSlice.reducer,
    search: searchSlice.reducer,
  },
});

// fake component
const Component = () => {
  const { enabled, enableSearch, disableSearch } = useSearch();
  return (
    <>
      <div aria-label="enabled">{enabled ? "true" : "false"}</div>
      <button aria-label="enable" onClick={enableSearch}>
        enable
      </button>
      <button aria-label="disable" onClick={disableSearch}>
        disable
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

  test("disableSearch() and enableSearch() should change the value", () => {
    expect.assertions(2);
    const { getByLabelText } = render(<WrappedComponent />);
    fireEvent.click(getByLabelText("disable"));
    expect(getByLabelText("enabled").textContent).toBe("false");
    fireEvent.click(getByLabelText("enable"));
    expect(getByLabelText("enabled").textContent).toBe("true");
  });
});
