import { render, fireEvent, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import { store, useAppDispatch, useAppSelector } from "./store";
import { makeBgWhite, makeBgBlack } from "./windowSlice";

const Component = () => {
  const { scrolled } = useAppSelector((state) => state.window);
  const dispatch = useAppDispatch();

  return (
    <>
      <span aria-label="state">{scrolled ? "scrolled" : "not scrolled"}</span>
      <button
        onClick={() => dispatch(scrolled ? makeBgBlack() : makeBgWhite())}
      ></button>
    </>
  );
};

let result: RenderResult;
beforeEach(() => {
  result = render(
    <Provider store={store}>
      <Component />
    </Provider>
  );
});

describe("integration test", () => {
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

  it("should render value scrolled false", () => {
    expect.assertions(1);
    expect(result.getByLabelText("state").textContent).toBe("not scrolled");
  });

  test("dispatching scroll and unscroll work", async () => {
    expect.assertions(2);
    fireEvent.click(result.getByRole("button"));
    expect(result.getByLabelText("state").textContent).toBe("scrolled");
    fireEvent.click(result.getByRole("button"));
    expect(result.getByLabelText("state").textContent).toBe("not scrolled");
  });
});
