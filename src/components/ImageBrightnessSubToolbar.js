import React from "react";
import styled from "styled-components";

import useNonTextElementStyle from "../hooks/useNonTextElementStyle";
import SubToolbarTitle from "./SubToolbarTitle";

function ImageBrightnessSubToolbar() {
  const { elementStyle, handleElementStyleValueChange } =
    useNonTextElementStyle();

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit Brightness" />
      <BrightnessBar>
        <input
          data-testid="brightness"
          className="brightness"
          type="range"
          min="0"
          max="1"
          step="0.1"
          list="tickmarks"
          value={elementStyle.brightness}
          onChange={(event) =>
            handleElementStyleValueChange("brightness", event.target.value)
          }
        />
      </BrightnessBar>
    </div>
  );
}

const BrightnessBar = styled.div`
  .brightness {
    width: 100%;
    cursor: pointer;
  }
`;

export default ImageBrightnessSubToolbar;
