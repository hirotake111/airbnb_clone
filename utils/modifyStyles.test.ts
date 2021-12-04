import { createElement } from "react";
import { changeBgAndFont } from "./modifyStyles";

describe("changeBgAndFont", () => {
  it("should change backgroundColor and font color", () => {
    expect.assertions(2);
    const elm = {
      style: {
        backgroundColor: "",
        color: "",
      },
    } as any;
    changeBgAndFont(elm, true);
    expect(elm).toEqual({ style: { backgroundColor: "#fff", color: "#000" } });
    changeBgAndFont(elm, false);
    expect(elm).toEqual({ style: { backgroundColor: "#000", color: "#fff" } });
  });
});
