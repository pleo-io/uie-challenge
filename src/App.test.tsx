import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the challenge title", () => {
  const { getByText } = render(<App />);
  const header = getByText(/UI Engineer/i);
  expect(header).toBeInTheDocument();
});
