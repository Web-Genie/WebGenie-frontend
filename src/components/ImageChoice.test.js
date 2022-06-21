import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";
import ImageChoice from "./ImageChoice";

test("1. Add Image라는 글자가 나타나야 하고 Upload라는 글씨와 버튼이 존재해야한다.", async () => {
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
