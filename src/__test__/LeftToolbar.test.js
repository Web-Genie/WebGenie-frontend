import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import LeftToolbar from "../components/LeftToolbar";
import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";

test("1.", () => {
  render(
    <MemoryRouter>
      <UserContextTypeProvider>
        <SubToolbarTypeProvider>
          <LeftToolbar changeBackground={() => null} />
        </SubToolbarTypeProvider>
      </UserContextTypeProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("Add Text")).toBeInTheDocument();
  expect(screen.getByText("Add Image")).toBeInTheDocument();
  expect(screen.getByText("Add Button")).toBeInTheDocument();
  expect(screen.getByText("Add Background")).toBeInTheDocument();

  screen.debug();
});
