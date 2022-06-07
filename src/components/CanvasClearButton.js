import React from "react";

import ToolbarButton from "./ToolbarButton";

function CanvasClearButton() {
  return (
    <div className="clearCanvasButtonContainer">
      <ToolbarButton name="clearCanvas">Clear Canvas</ToolbarButton>
    </div>
  );
}

export default CanvasClearButton;
