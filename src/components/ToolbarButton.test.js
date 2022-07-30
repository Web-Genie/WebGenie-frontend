import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";

import ToolbarButton from "./ToolbarButton";

it("1. should have padding value(6px 25px) when name prop is backgroundColorChoice ", () => {
  render(<ToolbarButton name="backgroundColorChoice">hello</ToolbarButton>);

  const div = screen.getByText("hello");

  expect(div).toHaveStyle(`padding: 6px 25px`);
});

it("2. should have width value(150px), margin value(0px 20px) when name prop is link ", () => {
  render(<ToolbarButton name="link">hello</ToolbarButton>);

  const div = screen.getByText("hello");

  expect(div).toHaveStyle(`width: 150px`);
  expect(div).toHaveStyle(`margin: 0px 20px`);
});
