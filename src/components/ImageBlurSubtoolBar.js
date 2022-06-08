import React from "react";
import styled from "styled-components";

import SubtoolbarTitle from "./SubtoolbarTitle";

function ImageBlurSubtoolBar({ onChangeBlur }) {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit Blur" />
      <BlurBar>
        <input
          className="blur"
          type="range"
          min="0"
          max="10"
          step="0.05"
          list="tickmarks"
          onChange={onChangeBlur}
        />
      </BlurBar>
    </div>
  );
}

const BlurBar = styled.div`
  .blur {
    width: 100%;
    cursor: pointer;
  }
`;

export default ImageBlurSubtoolBar;
