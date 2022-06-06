import React from "react";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaItalic,
  FaUnderline,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
function TextPositionEditor() {
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Edit Position</p>
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
