import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";

import Button from "./Button";

it("should show text props children", () => {
  render(<Button children="info" />);

  expect(screen.getByText("info")).toBeInTheDocument();
});

it("should button background-color is rgb(10, 107, 255) when mainButton true", () => {
  render(<Button children="info" mainButton={true} />);

  const button = screen.getByRole("button");

  expect(button).toHaveStyle("background-color: rgb(10, 107, 255)");
});

it("should background-color is white and font-color is red when warinning signal true", () => {
  render(<Button children="info" warningSignal={true} />);

  const button = screen.getByRole("button");

  expect(button).toHaveStyle("background-color: white");
  expect(button).toHaveStyle("color: red");
});
