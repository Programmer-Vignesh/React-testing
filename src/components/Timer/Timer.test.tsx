import { render, fireEvent, act, screen } from "@testing-library/react";
import Timer from "./Timer";

describe("Timer Component", () => {
  test("starts the timer when rendered and stops when button is clicked", async () => {
    jest.useFakeTimers();
    render(<Timer />);

    // Assert the initial state
    expect(screen.getByText("Timer : 0")).toBeInTheDocument();
    expect(screen.queryByText("Timer : 1")).not.toBeInTheDocument();

    // Advance time by 1000ms to trigger the interval
    await act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Assert that the timer increased by 1
    expect(screen.getByText("Timer : 1")).toBeInTheDocument();
    expect(screen.queryByText("Timer : 0")).not.toBeInTheDocument();

    // Click the Stop button
    fireEvent.click(screen.getByRole("button", { name: "Stop" }));

    // Advance time by 1000ms to verify the timer is stopped
    await act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Assert that the timer did not change
    expect(screen.getByText("Timer : 1")).toBeInTheDocument();
    expect(screen.queryByText("Timer : 2")).not.toBeInTheDocument();
  });
});
