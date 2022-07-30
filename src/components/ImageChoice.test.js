import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";
import ImageChoice from "./ImageChoice";

describe("ImageChoice component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SubToolbarTypeProvider>
          <UserContextTypeProvider>
            <ImageChoice />
          </UserContextTypeProvider>
        </SubToolbarTypeProvider>
      </MemoryRouter>
    );
  });

  it("1. should display Add Image and Upload and button", () => {
    expect(screen.getByText("Add Image")).toBeInTheDocument();
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
