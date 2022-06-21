import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SubToolbarTypeProvider } from "../context/subToolbarContext";
import ImageBrightnessSubToolbar from "./ImageBrightnessSubToolbar";

test("1. ImageBrightnessSubToolbar에 Edit Brightness라는 글자가 있고, test id가 brightness인 input창이 보여져야 한다", () => {
  render(
    <MemoryRouter>
      <SubToolbarTypeProvider>
        <ImageBrightnessSubToolbar />
      </SubToolbarTypeProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("Edit Brightness")).toBeInTheDocument();

  expect(screen.getByTestId("brightness")).toBeVisible;
});
