import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";
import ImageChoice from "./ImageChoice";

test("1. 사용자가 생성한 사이트가 아무것도 없을 때 '생성된 웹 사이트가 없습니다'라고 나타나야한다.", async () => {
  render(
    <MemoryRouter>
      <SubToolbarTypeProvider>
        <UserContextTypeProvider>
          <ImageChoice />
        </UserContextTypeProvider>
      </SubToolbarTypeProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("Add Image")).toBeInTheDocument();
  expect(screen.getByText("Upload")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});
