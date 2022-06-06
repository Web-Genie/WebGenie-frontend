import React from "react";
import { FaLink } from "react-icons/fa";

import ToolbarButton from "../Button/ToolbarButton";
import SubtoolbarTitle from "./SubtoolbarTitle";

function ButtonLinkEditor() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Add Link"} />
      <ToolbarButton>
        <FaLink />
      </ToolbarButton>
    </div>
  );
}

export default ButtonLinkEditor;
