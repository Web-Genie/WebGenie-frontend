import React from "react";

function ImageBrightnessEditor() {
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Edit Brightness</p>
      </div>
      <div>
        <input type="range" min="0" max="100" />
      </div>
    </div>
  );
}

export default ImageBrightnessEditor;
