import { render } from "@testing-library/react";
import SearchItem from "./SearchItem";

it("should render text", () => {
  expect.assertions(1);
  const { getByLabelText } = render(<SearchItem label="a" placeholder="b" />);
  expect(getByLabelText("search text").textContent).toBe("b");
});

it("should render input element if isTextForm is true", () => {
  expect.assertions(1);
  const { getByLabelText } = render(
    <SearchItem label="a" placeholder="b" isTextForm />
  );
  expect(getByLabelText("search input").tagName).toBe("INPUT");
});

it("should render icon if given", () => {
  expect.assertions(1);
  const Icon = () => <span>ICON</span>;
  const { getByLabelText } = render(
    <SearchItem label="a" placeholder="b" icon={<Icon />} />
  );
  expect(getByLabelText("search icon").textContent).toBe("ICON");
});
