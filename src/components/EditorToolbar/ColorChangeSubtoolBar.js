import React from "react";
import { RiPaintFill } from "react-icons/ri";

import ToolbarButton from "../Button/ToolbarButton";
import SubtoolbarTitle from "./SubtoolbarTitle";

function ColorChangeSubToolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit color" />
      <div className="backgroundColorChoice">
        <ToolbarButton>
          <RiPaintFill />
          <input className="colorPalette" type="color" />
        </ToolbarButton>
      </div>
    </div>
  );
}

export default ColorChangeSubToolBar;
