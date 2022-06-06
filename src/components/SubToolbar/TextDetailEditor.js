import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

import ToolbarButton from "../Button/ToolbarButton";

function TextDetailEditor({ title }) {
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>{title}</p>
      </div>
      <div className="textDetailChoice">
        <ToolbarButton>
          <select className="fontType">
            <option>inter</option>
            <option>고딕</option>
          </select>
        </ToolbarButton>
        <ToolbarButton>
          <select className="fontSize">
            <option>24</option>
          </select>
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
