import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

import ToolbarButton from "../Button/ToolbarButton";
import SubtoolbarTitle from "./SubtoolbarTitle";

function TextDetailEditor() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit text"} />
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
