import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import Button from "../components/Button";
import Navigation from "../components/Navigation";
import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";

describe("Navigation component", () => {
  it("1. should display text placeholder in input", () => {
    render(
      <MemoryRouter>
        <SubToolbarTypeProvider>
          <UserContextTypeProvider>
            <Navigation>
              <div key="1">
                <h2>My Collection</h2>
                <form>
                  <input
                    onChange={() => null}
                    placeholder="Search your websites"
                  />
                </form>
                <Button handleClick={() => null} mainButton={true}>
                  Create New Site
                </Button>
              </div>
            </Navigation>
          </UserContextTypeProvider>
        </SubToolbarTypeProvider>
      </MemoryRouter>
    );

    expect(screen.findAllByPlaceholderText("Search your websites"));
  });
});
