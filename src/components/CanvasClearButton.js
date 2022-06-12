import React, { useContext } from "react";

import { SubToolbarContext } from "../context/subToolbarContext";
import ToolbarButton from "./ToolbarButton";

function CanvasClearButton() {
  const { setClearCanavasBackgroundColor, setIsCavasClear } =
    useContext(SubToolbarContext);

  const handleCanvas = () => {
    setClearCanavasBackgroundColor("white");
    setIsCavasClear(true);
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
