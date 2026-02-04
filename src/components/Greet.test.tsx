import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Greet from "./Greet";

describe("Greet component", () => {
  test("shows default greeting message", () => {
    render(<Greet name="ARK" />);

    expect(screen.getByText("Hello, ARK")).toBeInTheDocument();
  });

  test("shows custom greeting message", () => {
    render(<Greet name="ARK" message="Welcome back" />);

    expect(screen.getByText("Welcome back, ARK")).toBeInTheDocument();
  });
});
