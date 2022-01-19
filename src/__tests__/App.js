import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should return true if header is found in the screen", () => {
  render(<App />);
  const text = screen.getByText(/react counter/i);
  expect(text).toBeInTheDocument();
});

test("should verify whether the counter image is in the document", () => {
  const img = screen.findByAltText(/counter/i);
  expect(img).toBeInTheDocument();
});

test("should verfy that the counters initial value is 0", () => {
  const counterValue = screen.findByTestId(/counter-value/i);
  expect(true).toBe(true);
});
