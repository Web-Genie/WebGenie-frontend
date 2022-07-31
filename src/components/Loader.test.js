import React from "react";
import renderer from "react-test-renderer";

import Loader from "./Loader";

describe("Loader component", () => {
  it("1. renders correctly", () => {
    const loadingAnimation = renderer.create(<Loader />);

    expect(loadingAnimation).toMatchSnapshot();
  });
});
