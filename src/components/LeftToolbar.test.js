import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import { UserContextTypeProvider } from "../context/userContext";
import LeftToolbar from "./LeftToolbar";

test("1. LeftToolbar에 텍스트, 이미지, 버튼, 배경화면과 관련된 부분이 있어야한다", () => {
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
});
