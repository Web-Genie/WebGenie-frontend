import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { UserContext } from "../context/userContext";
import ErrorSection from "./ErrorSection";

describe("ErrorSection component", () => {
  beforeEach(() => {
    const contextValue = {
      isLoggedIn: true,
    };

    render(
      <MemoryRouter>
        <UserContext.Provider value={contextValue}>
          <ErrorSection />
        </UserContext.Provider>
      </MemoryRouter>
    );
  });

  it("1. Should show description", () => {
    expect(screen.getByText("Page not found")).toBeInTheDocument();
    expect(
      screen.getByText(
        "The page you are looking for doesn't exist or another error occurred, go back to home page."
      )
    ).toBeInTheDocument();
  });

  it("2. Should show user image", () => {
    expect(screen.getByAltText("User Image")).toBeInTheDocument();
  });

  it("3. Should show logout button", () => {
    const logoutButton = screen.getByRole("button", { name: /logout/i });

    expect(logoutButton).toBeVisible();
  });
});
