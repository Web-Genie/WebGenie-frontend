import { render, screen } from "@testing-library/react";
import React from "react";

import BackgroundChoice from "./BackgroundChoice";

it("Displays button choice header and button correctly", () => {
  render(<BackgroundChoice />);

  expect(screen.getByText("Add Background")).toBeInTheDocument();
});
