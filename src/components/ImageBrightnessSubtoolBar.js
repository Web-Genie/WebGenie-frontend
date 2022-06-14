import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import SubtoolbarTitle from "./SubtoolbarTitle";

function ImageBrightnessSubtoolBar({ onChangeBrightness }) {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit Brightness" />
      <BrightnessBar>
        <input
          className="brightness"
          type="range"
          min="0"
          max="1"
          step="0.01"
          list="tickmarks"
          onChange={onChangeBrightness}
        />
      </BrightnessBar>
    </div>
  );
}

ImageBrightnessSubtoolBar.propTypes = {
  onChangeBrightness: PropTypes.func.isRequired,
};

const BrightnessBar = styled.div`
  .brightness {
    width: 100%;
    cursor: pointer;
  }
`;

export default ImageBrightnessSubtoolBar;
