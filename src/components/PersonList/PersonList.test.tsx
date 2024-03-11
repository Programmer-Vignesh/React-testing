import { render, screen } from "@testing-library/react";
import PersonList from "./PersonList";

describe("PersonList Component", () => {
  const nameList = [
    {
      first: "Bruce",
      last: "Banner",
    },
    {
      first: "Tony",
      last: "Stark",
    },
    {
      first: "Steve",
      last: "Rogger",
    },
  ];
  test("Render PersonList items", () => {
    render(<PersonList name={nameList} />);
    const list = screen.getAllByRole("bold");
    expect(list).toHaveLength(3);
  });
});
