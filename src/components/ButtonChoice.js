import React, { useRef } from "react";

import { drag } from "../utils";

function ButtonChoice() {
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Button</p>
      </div>
      <div className="buttonChoice">
        <button
          draggable
          id="button"
          className="samepleButton"
          onDragStart={drag}
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default ButtonChoice;
