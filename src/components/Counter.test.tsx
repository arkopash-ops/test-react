import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { describe, expect, test } from "vitest";

describe("Counter component", () => {
    // test("renders counter title and counter", () => {
    //     render(<Counter />);
    //     expect(screen.getByText("Counter")).toBeInTheDocument();
    //     expect(screen.getByText("0")).toBeInTheDocument();
    // });

    // test("increment button +", () => {
    //     render(<Counter />);
    //     const incrementBtn = screen.getByText("+");
    //     fireEvent.click(incrementBtn);

    //     expect(screen.getByText("1")).toBeInTheDocument();
    // });

    test("decrement button -", () => {
        render(<Counter />);
        const decrementBtn = screen.getByText("-");
        fireEvent.click(decrementBtn);

        expect(screen.getByText("-1")).toBeInTheDocument();
    });
})
