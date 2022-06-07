import React from "react";
import { RiPaintFill } from "react-icons/ri";
import styled from "styled-components";

import ToolbarButton from "../Button/ToolbarButton";
import SubtoolbarTitle from "./SubtoolbarTitle";

function ColorChangeSubToolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit color" />
      <>
        <ColorBackground>
          <ToolbarButton>
            <RiPaintFill />
            <input className="colorPalette" type="color" />
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
