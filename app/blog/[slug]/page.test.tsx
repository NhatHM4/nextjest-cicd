/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: ");
});

it("Hole text should be in the document", () => {
  render(<Page />);
  expect(screen.getByText("HoleText")).toBeInTheDocument();
});
it("Dynamic segments are useful for creating pages that depend on the URL", () => {
  render(<Page />);
  expect(screen.getByText("This is a dynamic route segment.")).toBeInTheDocument();
});