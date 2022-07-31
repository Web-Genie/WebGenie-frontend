import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";
import LeftToolbar from "./LeftToolbar";

describe("LeftToolbar component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <UserContextTypeProvider>
          <SubToolbarTypeProvider>
            <LeftToolbar changeBackground={() => null} />
          </SubToolbarTypeProvider>
        </UserContextTypeProvider>
      </MemoryRouter>
    );
  });

  it("1. should display text, image, button, background-color toolbar", () => {
    expect(screen.getByText("Add Text")).toBeInTheDocument();
    expect(screen.getByText("Add Image")).toBeInTheDocument();
    expect(screen.getByText("Add Button")).toBeInTheDocument();
    expect(screen.getByText("Add Background")).toBeInTheDocument();
  });
});
