import React from "react";
import styled from "styled-components";

import SubtoolbarTitle from "./SubtoolbarTitle";

function ImageBrightnessSubtoolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit Brightness" />
      <BrightnessBar>
        <input
          className="brightness"
          type="range"
          min="0"
          max="100"
          list="tickmarks"
        />
      </BrightnessBar>
    </div>
  );
}

const BrightnessBar = styled.div`
  .brightness {
    width: 100%;
  }
`;

export default ImageBrightnessSubtoolBar;
