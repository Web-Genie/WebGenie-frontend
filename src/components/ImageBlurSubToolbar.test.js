import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import ImageBlurSubToolbar from "./ImageBlurSubToolbar";

test("1. ImageBlurSubToolbar에 Edit blur 라는 글이 있어야 하고, test id가 blur인 input이 있어야 한다.", () => {
  render(
    <MemoryRouter>
      <SubToolbarTypeProvider>
        <ImageBlurSubToolbar />
      </SubToolbarTypeProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("Edit Blur")).toBeInTheDocument();
  expect(screen.getByTestId("blur")).toBeInTheDocument();
});

test("2. ImageBlurSubToolbar에 test id가 blur인 input창을 클릭하면 보여야 한다", () => {
  render(
    <MemoryRouter>
      <SubToolbarTypeProvider>
        <ImageBlurSubToolbar />
      </SubToolbarTypeProvider>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByTestId("blur"));

  expect(screen.getByTestId("blur")).toBeVisible;
});
