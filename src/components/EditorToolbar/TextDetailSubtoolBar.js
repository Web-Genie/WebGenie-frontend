import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

import { RADIUS_AND_BRIGHTNESS_RANGE } from "../../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

const fontType = ["inter", "고딕", "굴림"];

function TextDetailSubtoolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit text" />
      <div className="textDetailChoice">
        <SelectDetail detailValue={fontType} className="font" />
        <SelectDetail
          detailValue={RADIUS_AND_BRIGHTNESS_RANGE}
          className="font"
        />
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
