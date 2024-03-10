import React from 'react';
import { render, screen } from "@testing-library/react";
import Login from './Login';

describe("Login Component", () => {
    test("render component successfully", () => {
        render(<Login/>);
        const userNameBox = screen.getByLabelText("userName");
        expect(userNameBox).toBeInTheDocument();

        const passwordBox = screen.getByLabelText("Password");
        expect(passwordBox).toBeInTheDocument();

        const checkBox = screen.getByRole("checkbox");
        expect(checkBox).toBeInTheDocument();

        const submit = screen.getByRole("button");
        expect(submit).toBeInTheDocument();
    });
})