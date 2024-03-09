import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet Component", () => {
    test("render component without error", () => {
        render(<Greet/>);
        const greetText = screen.getByText(/hello/i);
        expect(greetText).toBeInTheDocument();
    });

    test("render greet message with name", () => {
        render(<Greet name="Vicky"/>);
        const greetText = screen.getByText(/Vicky/i);
        expect(greetText).toBeInTheDocument();
    })
});