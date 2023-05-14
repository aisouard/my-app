// src/App.test.tsx

import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.tsx";

test("displays initial counter and increments upon click", async () => {
  render(<App />);

  await userEvent.click(screen.getByText("count is 0"));
  expect(screen.getByRole("button").textContent).toEqual("count is 1");
});
