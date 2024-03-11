import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("Heading Component", () => {
  test("render component successfully", () => {
    render(
      <Heading>
        <h1>Welcome to codePractice site</h1>
      </Heading>
    );
    const header = screen.getByText("Welcome to codePractice site");
    expect(header).toBeInTheDocument();
  });
});
