import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import BackgroundChoice from "./BackgroundChoice";

it("1. Displays button choice header and button correctly", () => {
  render(<BackgroundChoice />);

  expect(screen.getByText("Add Background")).toBeInTheDocument();
});

it("2. Displays input color in BackgroundChoice component", () => {
  const { container } = render(<BackgroundChoice />);

  expect(container.getElementsByClassName("colorPalette")).toBeVisible;
});
