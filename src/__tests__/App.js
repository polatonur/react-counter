import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("should return true if header is found in the screen", () => {
  render(<App />);
  const text = screen.getByText(/react counter/i);
  expect(text).toBeInTheDocument();
});

test("should verify whether the counter image is in the document", () => {
  render(<App />);
  expect(screen.getByAltText("counter violet")).toBeInTheDocument();
});

test("should verfy that the counters initial value is 0", () => {
  render(<App />);
  const counterValue = screen.getByTestId(/counter-value/i);
  expect(counterValue).toHaveTextContent("0");
});

test("should verify if button exist in the document", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
});

test("should test visibility of decrement button and increment button", () => {
  render(<App />);
  const incrementButton = screen.getByRole("button", { name: /\+/i });
  userEvent.click(incrementButton);
  const decrementButton = screen.getByRole("button", { name: "-" });
  expect(decrementButton).toBeVisible();
  const counterValue = screen.getByTestId(/counter-value/i);
  expect(counterValue).toHaveTextContent("1");
  userEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent("0");
  expect(decrementButton).not.toBeVisible();
  userEvent.click(incrementButton);
  userEvent.click(incrementButton);
  const resetButton = screen.getByRole("button", { name: /reset/i });
  expect(resetButton).toBeInTheDocument();
});

test('should verify  ', () => {
  
});
