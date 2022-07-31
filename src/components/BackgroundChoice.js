import React from "react";
import { FaPaintRoller } from "react-icons/fa";

import useColor from "../hooks/useColor";
import ToolbarButton from "./ToolbarButton";

function BackgroundChoice() {
  const { handleColorChange } = useColor();

  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Background</p>
      </div>
      <div className="backgroundColorChoice">
        <ToolbarButton name="backgroundColorChoice">
          <FaPaintRoller />
          <input
            className="colorPalette"
            type="color"
            onChange={(event) =>
              handleColorChange(event.target.value, "editorBackground")
            }
          />
        </ToolbarButton>
      </div>
    </div>
  );
}

export default BackgroundChoice;
