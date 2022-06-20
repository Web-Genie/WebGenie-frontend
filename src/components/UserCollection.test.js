import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import UserCollection from "../components/UserCollection";
import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";

test("1. 사용자가 생성한 사이트가 아무것도 없을 때 '생성된 웹 사이트가 없습니다'라고 나타나야한다.", () => {
  render(
    <MemoryRouter>
      <SubToolbarTypeProvider>
        <UserContextTypeProvider>
          <UserCollection />
        </UserContextTypeProvider>
      </SubToolbarTypeProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("생성된 웹사이트가 없습니다.")).toBeInTheDocument();
});
