import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";

import LoginButton from "./LoginButton";

describe("LoginButton Component", () => {
  beforeEach(() =>
    render(
      <LoginButton>
        <div>login</div>
      </LoginButton>
    )
  );

  it("1. Should show if the loginButton has props", () => {
    expect(screen.getByText("login")).toBeInTheDocument();
  });

  it("2. Should have button style property", () => {
    const button = screen.getByRole("button");

    expect(button).toHaveStyle(`display: flex`);
    expect(button).toHaveStyle(`color: rgb(117, 117, 117)`);
  });
});
