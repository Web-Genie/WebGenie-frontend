import React, { useContext, useState } from "react";
import { RiPaintFill } from "react-icons/ri";
import styled from "styled-components";

import { TEXT_CHOICES } from "../constants/constants";
import { SubToolbarContext } from "../context/subToolbarContext";
import SubtoolbarTitle from "./SubtoolbarTitle";
import ToolbarButton from "./ToolbarButton";

function ColorChangeSubtoolBar() {
  const { setColorValue, setButtonColor, subToolbarType } =
    useContext(SubToolbarContext);

  const handleColorChange = (event) => {
    if (TEXT_CHOICES.includes(subToolbarType)) {
      setColorValue(event.target.value);
    } else {
      setButtonColor(event.target.value);
    }
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

export default ColorChangeSubtoolBar;
