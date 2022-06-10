import React, { useContext } from "react";
import { RiPaintFill } from "react-icons/ri";
import styled from "styled-components";

import { SubToolbarContext } from "../context/subToolbarContext";
import SubtoolbarTitle from "./SubtoolbarTitle";
import ToolbarButton from "./ToolbarButton";

function ColorChangeSubToolBar() {
  const { setSubToolbarValue } = useContext(SubToolbarContext);

  const handleColorChange = (event) => {
    setSubToolbarValue(event.target.value);
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
              defaultValue="##ffffff"
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
