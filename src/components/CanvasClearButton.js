import React from "react";

import ToolbarButton from "./ToolbarButton";

function CanvasClearButton() {
  const handleCanvas = () => {
    const templateDiv = document.getElementsByClassName("sc-gsnTZi iGRmMq");
    templateDiv[0].innerHTML = "";
  };

  return (
    <div className="clearCanvasButtonContainer">
      <ToolbarButton name="clearCanvas" handleClick={handleCanvas}>
        Clear Canvas
      </ToolbarButton>
    </div>
  );
}

export default CanvasClearButton;
