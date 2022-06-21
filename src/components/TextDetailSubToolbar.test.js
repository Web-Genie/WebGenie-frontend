import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";
import TextDetailSubToolbar from "./TextDetailSubtoolBar";

test("1. TextDetailSubToolbar에 Edit Text라는 글자가 나와야한다.", () => {
  render(
    <MemoryRouter>
      <UserContextTypeProvider>
        <SubToolbarTypeProvider>
          <TextDetailSubToolbar />
        </SubToolbarTypeProvider>
      </UserContextTypeProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("Edit text")).toBeInTheDocument();
});

test("2. TextDetailSubToolbar에 select option 중 글꼴과 글씨크기를 선택할 수 있어야 한다.", () => {
  render(
    <MemoryRouter>
      <UserContextTypeProvider>
        <SubToolbarTypeProvider>
          <TextDetailSubToolbar />
        </SubToolbarTypeProvider>
      </UserContextTypeProvider>
    </MemoryRouter>
  );

  expect(screen.findByRole("option", { name: "AppleGothic" }).ariaSelected);
  expect(screen.findByRole("option", { name: "0" }).ariaSelected);
});
