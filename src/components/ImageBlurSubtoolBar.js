import React from "react";
import styled from "styled-components";

import SubtoolbarTitle from "./SubtoolbarTitle";

function ImageBlurSubtoolBar({ handleImgBlur }) {
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
          onChange={handleImgBlur}
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
