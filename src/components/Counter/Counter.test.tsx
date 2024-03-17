import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component ", () => {
  test("renders counter component's element on page load", () => {
    render(<Counter />);
    const countValue = screen.getByText("Count : 0❤️");
    expect(countValue).toBeInTheDocument();
    const likeButton = screen.getByRole("button", { name: "like button" });
    expect(likeButton).toBeInTheDocument();
    const disLikeButton = screen.getByRole("button", {
      name: "dislike button",
    });
    expect(disLikeButton).toBeInTheDocument();
    const resetButton = screen.getByRole("button", { name: "reset button" });
    expect(resetButton).toBeInTheDocument();
  });

  test("Increment the Like value to 1 by clicking Like button", async () => {
    render(<Counter />);
    const countValue = screen.getByText("Count : 0❤️");
    expect(countValue).toBeInTheDocument();
    const likeButton = screen.getByRole("button", { name: "like button" });
    expect(likeButton).toBeInTheDocument();
    await user.click(likeButton);
    const newCountValue = screen.getByText("Count : 1❤️");
    expect(newCountValue).toBeInTheDocument();
  });

  test("Increment the Like value to 2 by clicking Like button", async () => {
    render(<Counter />);
    const countValue = screen.getByText("Count : 0❤️");
    expect(countValue).toBeInTheDocument();
    const likeButton = screen.getByRole("button", { name: "like button" });
    expect(likeButton).toBeInTheDocument();
    await user.dblClick(likeButton);
    const newCountValue = screen.getByText("Count : 2❤️");
    expect(newCountValue).toBeInTheDocument();
  });

  test("Decrement the Like value to -1 by clicking Dislike button", async () => {
    render(<Counter />);
    const countValue = screen.getByText("Count : 0❤️");
    expect(countValue).toBeInTheDocument();
    const disLikeButton = screen.getByRole("button", {
      name: "dislike button",
    });
    expect(disLikeButton).toBeInTheDocument();
    await user.click(disLikeButton);
    const newCountValue = screen.getByText("Count : 1💔");
    expect(newCountValue).toBeInTheDocument();
  });

  test("Reset the Like value from -1 to 0 by clicking reset button", async () => {
    render(<Counter />);
    const countValue = screen.getByText("Count : 0❤️");
    expect(countValue).toBeInTheDocument();
    const disLikeButton = screen.getByRole("button", {
      name: "dislike button",
    });
    expect(disLikeButton).toBeInTheDocument();
    await user.click(disLikeButton);
    const newCountValue = screen.getByText("Count : 1💔");
    expect(newCountValue).toBeInTheDocument();
    const resetButton = screen.getByRole("button", { name: "reset button" });
    expect(resetButton).toBeInTheDocument();
    await user.click(resetButton);
    expect(screen.getByText("Count : 0❤️")).toBeInTheDocument();
  });
});
