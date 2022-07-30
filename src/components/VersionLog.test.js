import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";

import VersionLog from "./VersionLog";

describe("VersionLog component", () => {
  beforeEach(() => {
    const information = {
      result: {
        userSavedCode: [
          {
            code: ["<div>hello</div>"],
            time: "2022-06-20T10:52:52.050Z",
          },
        ],
      },
    };

    render(<VersionLog information={information} />);
  });

  it("1. should show `Version Log` text", () => {
    expect(screen.findByText("Version Log"));
    expect(screen.findByText("Last saved at"));
  });

  it("2. should show last saved at time to local time and index", () => {
    expect(screen.findByText("2022. 6. 20. 오후 7:52:52"));
    expect(screen.findByText("1"));
  });
});
