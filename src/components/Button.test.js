import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";

import Button from "./Button";

describe("Button component", () => {
  it("1. Should show text props children", () => {
    render(<Button />);

    expect(screen.getByText("info")).toBeInTheDocument();
  });

  it("2. Should button background-color is rgb(10, 107, 255) when mainButton true", () => {
    render(<Button mainButton={true} />);

    const button = screen.getByRole("button");

    expect(button).toHaveStyle("background-color: rgb(10, 107, 255)");
  });

  it("3. Should background-color is white and font-color is red when warinning signal true", () => {
    render(<Button warningSignal={true} />);

    const button = screen.getByRole("button");

    expect(button).toHaveStyle("background-color: white");
    expect(button).toHaveStyle("color: red");
  });
});
