import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import ThemeToggle from "./ThemeToggle";

describe("ThemeToggle", () => {
    test("toggles theme on button click", async () => {
        const user = userEvent.setup();
        render(<ThemeToggle />);

        expect(screen.getByText("Current theme: light")).toBeInTheDocument();

        await user.click(screen.getByRole("button", { name: /toggle theme/i }));
        expect(screen.getByText("Current theme: dark")).toBeInTheDocument();
    });
});
