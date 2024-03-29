import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";

import EditorToolbar from "./EditorToolbar";

describe("EditorToolbar component", () => {
  it("1. Should show props in EditorToolbar ", () => {
    render(
      <EditorToolbar>
        <div>hello</div>
      </EditorToolbar>
    );

    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
