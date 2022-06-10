import React from "react";
import { RiPaintFill } from "react-icons/ri";
import styled from "styled-components";

import SubtoolbarTitle from "./SubtoolbarTitle";
import ToolbarButton from "./ToolbarButton";

function ColorChangeSubToolBar({ changeColor }) {
  const handleColorChange = (event) => {
    changeColor(event.target.value);
  };

  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit color" />
      <>
        <ColorBackground>
          <ToolbarButton>
            <RiPaintFill />
            <input
              className="colorPalette"
              type="color"
              onChange={handleColorChange}
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

export default ColorChangeSubToolBar;
