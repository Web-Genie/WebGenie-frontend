import React, { useContext } from "react";
import styled from "styled-components";

import { SubToolbarContext } from "../context/subToolbarContext";
import SubtoolbarTitle from "./SubtoolbarTitle";

function ImageBlurSubtoolBar() {
  const { imageBlur, setImageBlur } = useContext(SubToolbarContext);

  const handleImageBlur = (event) => {
    setImageBlur(event.target.value);
  };

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
          value={imageBlur}
          onChange={handleImageBlur}
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
