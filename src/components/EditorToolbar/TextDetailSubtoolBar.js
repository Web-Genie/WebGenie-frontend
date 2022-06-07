import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

import { radiusAndSizeRange } from "../../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

function TextDetailSubtoolBar() {
  const fontType = ["inter", "고딕", "굴림"];

  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit text"} />
      <div className="textDetailChoice">
        <SelectDetail detailValue={fontType} className={"fontType"} />
        <SelectDetail detailValue={radiusAndSizeRange} className={"fontSize"} />
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

export default TextDetailSubtoolBar;
