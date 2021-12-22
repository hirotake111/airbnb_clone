import { act, renderHook } from "@testing-library/react-hooks";
import { useCountryData } from "./inspirationHook";

describe("useCounryData", () => {
  it("should return headers, highlightedHeader, and update()", () => {
    expect.assertions(3);
    const { result } = renderHook(() => useCountryData());
    const { headers, highlightedHeader, updateHighlightedHeader } =
      result.current;
    expect(headers.length).toBe(6);
    expect(highlightedHeader.headerName).toBe(
      "Destinations for arts & culture"
    );
    expect(typeof updateHighlightedHeader).toBe("function");
  });

  test("updateHighlightedHeader should update highlitedHeader", (done) => {
    expect.assertions(2);
    const { result } = renderHook(() => useCountryData());
    expect(result.current.highlightedHeader.headerName).toBe(
      "Destinations for arts & culture"
    );
    // update
    const header = "Destinations for arts & culture";
    act(() => {
      result.current.updateHighlightedHeader(header);
      const highlighted = result.current.highlightedHeader;
      expect(highlighted.headerName).toBe(header);
      done();
    });
  });

  test("updateHighlightedHeader should be the first element when updated with invalid key", (done) => {
    expect.assertions(2);
    const { result } = renderHook(() => useCountryData());
    expect(result.current.highlightedHeader.headerName).toBe(
      "Destinations for arts & culture"
    );
    // update
    const header = "x";
    act(() => {
      result.current.updateHighlightedHeader(header as any);
      const highlighted = result.current.highlightedHeader;
      expect(highlighted.headerName).toBe("Destinations for arts & culture");
      done();
    });
  });
});
