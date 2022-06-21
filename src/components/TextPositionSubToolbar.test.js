import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import TextPositionSubToolbar from "./TextPositionSubToolbar";

test("1. TextPositionSubToolbar에 Edit Text라는 글자가 나와야 하며 detailContainer안에 span 태그가 존재해야 한다.", () => {
  render(
    <MemoryRouter>
      <SubToolbarTypeProvider>
        <TextPositionSubToolbar />
      </SubToolbarTypeProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("Edit Position")).toBeInTheDocument();
  expect(screen.getByTestId("detailContainer")).toContainHTML("span");
});
