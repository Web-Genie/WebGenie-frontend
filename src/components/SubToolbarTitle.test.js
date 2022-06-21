import { render, screen } from "@testing-library/react";
import React from "react";

import SubToolbarTitle from "./SubToolbarTitle";

describe("SubToolbarTitle", () => {
  it("should contain `First element` text", () => {
    render(<SubToolbarTitle title="Button" />);

    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  it("should contain `Second element` text", () => {
    render(<SubToolbarTitle title="Header" />);

    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  it("should contain `Second element` text", () => {
    render(<SubToolbarTitle title="Image" />);

    expect(screen.getByText("Image")).toBeInTheDocument();
  });
});
