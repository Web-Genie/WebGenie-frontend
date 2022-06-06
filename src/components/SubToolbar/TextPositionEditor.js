import React from "react";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";

function TextPositionEditor({ title }) {
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>{title}</p>
      </div>
      <div className="detailContainer">
        <div className="detailItem">
          <span className="rightBorder">
            <FaAlignLeft />
          </span>
          <span>
            <FaAlignCenter />
          </span>
          <span className="leftBorder">
            <FaAlignRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextPositionEditor;
