import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App component", () => {
  test("render header component successfully", () => {
    render(<App/>);
    const heading = screen.getByRole("heading", {name: "Learn Jest with React"});
    expect(heading).toBeInTheDocument();
  });
})
