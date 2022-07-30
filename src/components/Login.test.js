import { render, screen } from "@testing-library/react";
import React from "react";

import { UserContextTypeProvider } from "../context/userContext";
import Login from "./Login";

describe("Login component", () => {
  beforeEach(() => {
    render(
      <UserContextTypeProvider>
        <Login />
      </UserContextTypeProvider>
    );
  });

  it("1. should display logo and text and social login button", () => {
    expect(screen.getByAltText("WebGenie logo"));
    expect(
      screen.getByText("당신의 웹사이트를 만들어보세요!")
    ).toBeInTheDocument();
    expect(screen.getByText("Google로 시작하기")).toBeInTheDocument();
  });
});
