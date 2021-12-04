import { render } from "@testing-library/react";

import Header from "./Header";

// mock next/head
jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

it("should add HTML header", () => {
  expect.assertions(1);
  const { container } = render(<Header />, { container: document.head });
  expect(document.title).toBe("Airbnb Clone App");
});
