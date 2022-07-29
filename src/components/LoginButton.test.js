import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";

import LoginButton from "./LoginButton";

it("1. Should show props ", () => {
  render(<LoginButton>login</LoginButton>);

  expect(screen.getByText("login")).toBeInTheDocument();
});

it("2. Should have style property", () => {
  render(<LoginButton>login</LoginButton>);

  const button = screen.getByRole("button");

  expect(button).toHaveStyle(`display: flex`);
  expect(button).toHaveStyle(`color:  rgb(117, 117, 117)`);
});
