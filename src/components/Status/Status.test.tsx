import { render, screen } from "@testing-library/react";
import Status from "./Status";

describe("Status component", () => {
  test("Render text content without props", () => {
    render(<Status />);
    const content = screen.getByText("status - nothing is happening");
    expect(content).toBeInTheDocument();
  });
  test("Render text content with status props is loading", () => {
    render(<Status status="loading" />);
    const content = screen.getByText("status - loading in process");
    expect(content).toBeInTheDocument();
  });
  test("Render text content with status props is success", () => {
    render(<Status status="success" />);
    const content = screen.getByText("status - successfully loaded");
    expect(content).toBeInTheDocument();
  });
  test("Render text content with status props is failed", () => {
    render(<Status status="failed" />);
    const content = screen.getByText("status - loading is failed");
    expect(content).toBeInTheDocument();
  });
});
