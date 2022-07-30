import React from "react";
import styled from "styled-components";

import useNonTextElementStyle from "../hooks/useNonTextElementStyle";
import SubToolbarTitle from "./SubToolbarTitle";

function ImageBlurSubToolbar() {
  const { elementStyle, handleElementStyleValueChange } =
    useNonTextElementStyle();

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit Blur" />
      <BlurBar>
        <input
          type="range"
          className="blur"
          data-testid="blur"
          min="0"
          max="10"
          step="1"
          list="tickmarks"
          value={elementStyle.blur}
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
