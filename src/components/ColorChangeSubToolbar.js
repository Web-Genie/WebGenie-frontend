import React from "react";
import { RiPaintFill } from "react-icons/ri";
import styled from "styled-components";

import useColor from "../hooks/useColor";
import SubToolbarTitle from "./SubToolbarTitle";
import ToolbarButton from "./ToolbarButton";

function ColorChangeSubToolbar() {
  const { elementColor, handleColorChange } = useColor();

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit color" />
      <>
        <ColorBackground>
          <ToolbarButton>
            <RiPaintFill />
            <input
              type="color"
              className="colorPalette"
              value={elementColor}
              onChange={(event) => handleColorChange(event.target.value)}
            />
          </ToolbarButton>
        </ColorBackground>
      </>
    </div>
  );
}

const ColorBackground = styled.div`
  margin-left: 20px;
`;

export default ColorChangeSubToolbar;
