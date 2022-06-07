import React from "react";
import { FaLink } from "react-icons/fa";

import SubtoolbarTitle from "./SubtoolbarTitle";
import ToolbarButton from "./ToolbarButton";

function ButtonLinkSubtoolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Add Link" />
      <ToolbarButton name="link">
        <FaLink />
      </ToolbarButton>
    </div>
  );
}

export default ButtonLinkSubtoolBar;
