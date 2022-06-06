import React from "react";
import { RiPaintFill } from "react-icons/ri";

import ToolbarButton from "../Button/ToolbarButton";

function TextColorEditor() {
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Edit Color</p>
      </div>
      <div className="backgroundColorChoice">
        <ToolbarButton>
          <RiPaintFill />
          <input className="colorPalette" type="color" />
        </ToolbarButton>
      </div>
    </div>
  );
}

export default TextColorEditor;
