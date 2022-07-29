import { render, screen } from "@testing-library/react";
import React from "react";

import ButtonChoice from "./ButtonChoice";

it("1. Displays button choice header and button correctly", () => {
  render(<ButtonChoice />);

  expect(screen.getByText("Add Button")).toBeInTheDocument();
  expect(screen.getByText("Button")).toBeInTheDocument();
});
