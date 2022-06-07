import React from "react";
import { FaLink } from "react-icons/fa";

import ToolbarButton from "../Button/ToolbarButton";
import SubtoolbarTitle from "./SubtoolbarTitle";

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
