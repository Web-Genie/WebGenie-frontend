import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import ToolbarButton from "../Button/ToolbarButton";

function TextDetailEditor() {
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Edit Text</p>
      </div>
      <div className="textDetailChoice">
        <ToolbarButton>
          <div className="fontType">inter</div>
          <FiChevronDown />
        </ToolbarButton>
        <ToolbarButton>
          <div className="fontSize">24</div>
          <FiChevronDown />
        </ToolbarButton>
      </div>
      <div className="detailContainer">
        <div className="detailItem">
          <span className="rightBorder">
            <FaBold />
          </span>
          <span>
            <FaItalic />
          </span>
          <span className="leftBorder">
            <FaUnderline />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextDetailEditor;
