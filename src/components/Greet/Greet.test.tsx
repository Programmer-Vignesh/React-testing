import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet Component", () => {
  test("Render component with props isLogged is true", () => {
    render(<Greet name="Vignesh" sessionCount={20} isLogged={true} />);
    const greeting = screen.getByRole("heading");
    expect(greeting).toBeInTheDocument();
  });
  test("Render component with props isLogged is false", () => {
    render(<Greet name="Vignesh" sessionCount={20} isLogged={false} />);
    const greeting = screen.getByRole("heading");
    expect(greeting).toBeInTheDocument();
  });
  test("Render text content when isLogged is true", () => {
    render(<Greet name="Vignesh" sessionCount={20} isLogged={true} />);
    const greeting = screen.getByText(
      "Welcome Vignesh !... You have 20session to complete"
    );
    expect(greeting).toBeInTheDocument();
  });
  test("Render text content when isLogged is false", () => {
    render(<Greet name="Vignesh" sessionCount={20} isLogged={false} />);
    const greeting = screen.getByText("Welcome Guest");
    expect(greeting).toBeInTheDocument();
  });
});
