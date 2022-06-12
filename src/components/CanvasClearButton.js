import React, { useContext } from "react";

import { SubToolbarContext } from "../context/subToolbarContext";
import ToolbarButton from "./ToolbarButton";

function CanvasClearButton() {
  const { setHasClearCanvas } = useContext(SubToolbarContext);

  const handleCanvas = () => {
    setHasClearCanvas(true);
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
