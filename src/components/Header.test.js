import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";

import favicon from "../../public/favicon.png";
import Header from "./Header";

describe("Header component", () => {
  beforeEach(() => {
    render(
      <Header>
        <h1>hello</h1>
        <img src={favicon} alt={favicon} />
      </Header>
    );
  });

  it("1. show text and color rgba(2, 62, 138, 0.96) when h1 entered", () => {
    expect(screen.getByText("hello")).toBeInTheDocument();
    expect(screen.getByText("hello")).toHaveStyle(
      `color: rgba(2, 62, 138, 0.96)`
    );
  });

  it("2. show image and width 50px and border radius 50%", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveStyle(`width: 50px`);
    expect(screen.getByRole("img")).toHaveStyle(`border-radius: 50%`);
  });
});
