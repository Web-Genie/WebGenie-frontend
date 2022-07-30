import { render, screen } from "@testing-library/react";
import React from "react";

import TextChoice from "./TextChoice";

describe("TextChoice component", () => {
  beforeEach(() => {
    render(<TextChoice />);
  });

  it("1. Displays text choices correctly", () => {
    expect(screen.getByText("H1 HEAD")).toBeInTheDocument();
    expect(screen.getByText("H2 HEAD")).toBeInTheDocument();
    expect(screen.getByText("H3 HEAD")).toBeInTheDocument();
    expect(screen.getByText("H4 HEAD")).toBeInTheDocument();
    expect(screen.getByText("H5 HEAD")).toBeInTheDocument();
    expect(screen.getByText("H6 HEAD")).toBeInTheDocument();
  });
});
