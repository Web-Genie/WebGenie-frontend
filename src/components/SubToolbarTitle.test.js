import { render, screen } from "@testing-library/react";
import React from "react";

import SubToolbarTitle from "./SubToolbarTitle";

describe("SubToolbarTitle component", () => {
  it("1. should contain `First element` text", () => {
    render(<SubToolbarTitle title="Button" />);

    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  it("2. should contain `Second element` text", () => {
    render(<SubToolbarTitle title="Header" />);

    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  it("3. should contain `Second element` text", () => {
    render(<SubToolbarTitle title="Image" />);

    expect(screen.getByText("Image")).toBeInTheDocument();
  });
});
