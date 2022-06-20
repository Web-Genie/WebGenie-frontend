import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Button from "../components/Button";
import Navigation from "../components/Navigation";
import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";

test("", () => {
  render(
    <MemoryRouter>
      <SubToolbarTypeProvider>
        <UserContextTypeProvider>
          <Navigation
            children={[
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
              </div>,
            ]}
          />
        </UserContextTypeProvider>
      </SubToolbarTypeProvider>
    </MemoryRouter>
  );

  expect(screen.findAllByPlaceholderText("Search your websites"));

  screen.debug();
});
