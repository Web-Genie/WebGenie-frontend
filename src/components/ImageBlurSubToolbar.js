import React from "react";
import styled from "styled-components";

import useImageStyle from "../hooks/useImageStyle";
import SubToolbarTitle from "./SubToolbarTitle";

function ImageBlurSubToolbar() {
  const { imageStyle, handleElementStyleValueChange } = useImageStyle();

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit Blur" />
      <BlurBar>
        <input
          data-testid="blur"
          className="blur"
          type="range"
          min="0"
          max="10"
          step="1"
          list="tickmarks"
          value={imageStyle.blur}
          onChange={(event) =>
            handleElementStyleValueChange("blur", event.target.value)
          }
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

export default ImageBlurSubToolbar;
