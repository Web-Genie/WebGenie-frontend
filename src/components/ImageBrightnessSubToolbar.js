import React, { useContext } from "react";
import styled from "styled-components";

import { SubToolbarContext } from "../context/subToolbarContext";
import SubToolbarTitle from "./SubToolbarTitle";

function ImageBrightnessSubToolbar() {
  const { setImageBrightness } = useContext(SubToolbarContext);

  const handleImageBrightness = (event) => {
    setImageBrightness(event.target.value);
  };

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
          step="0.01"
          list="tickmarks"
          onChange={handleImageBrightness}
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
