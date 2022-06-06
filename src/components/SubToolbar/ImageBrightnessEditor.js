import React from "react";

import SubtoolbarTitle from "./SubtoolbarTitle";

function ImageBrightnessEditor() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit Brightness"} />
      <div>
        <input type="range" min="0" max="100" />
      </div>
    </div>
  );
}

export default ImageBrightnessEditor;
