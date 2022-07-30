import { render, screen } from "@testing-library/react";
import React from "react";

import ErrorSectionContainer from "./ErrorSectionContainer";

it("1. Displays 404 page message correctly", () => {
  render(<ErrorSectionContainer />);

  expect(screen.getByText("Ooops...")).toBeInTheDocument();
  expect(screen.getByText("Page not found")).toBeInTheDocument();
  expect(
    screen.getByText(
      "The page you are looking for doesn't exist or another error occurred, go back to home page."
    )
  ).toBeInTheDocument();
});
