import React from "react";

import { drag } from "../utils";

function TextChoice() {
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Text</p>
      </div>
      <div className="textChoices">
        <h1 draggable id="h1" onDragStart={drag}>
          H1 HEAD
        </h1>
        <h2 draggable id="h2" onDragStart={drag}>
          H2 HEAD
        </h2>
        <h3 draggable id="h3" onDragStart={drag}>
          H3 HEAD
        </h3>
        <h4 draggable id="h4" onDragStart={drag}>
          H4 HEAD
        </h4>
        <h5 draggable id="h5" onDragStart={drag}>
          H5 HEAD
        </h5>
        <h6 draggable id="h6" onDragStart={drag}>
          H6 HEAD
        </h6>
      </div>
    </div>
  );
}

export default TextChoice;
