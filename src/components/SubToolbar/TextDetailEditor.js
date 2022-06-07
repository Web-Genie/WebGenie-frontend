import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

import ToolbarButton from "../Button/ToolbarButton";
import SelectDetail from "./SelectDetail";
import SubtoolbarTitle from "./SubtoolbarTitle";

function TextDetailEditor() {
  const fontType = ["inter", "고딕", "굴림"];
  const fontSize = Array(50)
    .fill(1)
    .map((n, i) => n + i);

  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit text"} />
      <div className="textDetailChoice">
        <ToolbarButton>
          <SelectDetail detailData={fontType} className={"fontType"} />
        </ToolbarButton>
        <ToolbarButton>
          <SelectDetail detailData={fontSize} className={"fontSize"} />
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
