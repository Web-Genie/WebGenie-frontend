import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Button from "../components/Button";
import Navigation from "../components/Navigation";
import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";

test("1. Navigation에 input 창이 존재해야 하며, placeholder도 나타나야 한다.", () => {
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
});
