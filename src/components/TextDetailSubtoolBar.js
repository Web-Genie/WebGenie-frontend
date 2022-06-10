import React, { useContext } from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

import {
  FONT_TYPE,
  SIZE_RADIUS_AND_BRIGHTNESS_RANGE,
} from "../constants/constants";
import { SubToolbarContext } from "../context/subToolbarContext";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

function TextDetailSubtoolBar() {
  const { setIsBold, setIsItalic, setIsUnderLine } =
    useContext(SubToolbarContext);

  const handleBold = () => {
    setIsBold(true);
  };

  const handleItalic = () => {
    setIsItalic(true);
  };

  const handleUnderLine = () => {
    setIsUnderLine(true);
  };

  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit text" />
      <div className="textDetailChoice">
        <SelectDetail detailValue={FONT_TYPE} className="font" />
        <SelectDetail
          detailValue={SIZE_RADIUS_AND_BRIGHTNESS_RANGE}
          className="font"
        />
      </div>
      <div className="detailContainer">
        <div className="detailItem">
          <span className="rightBorder" onClick={handleBold}>
            <FaBold />
          </span>
          <span onClick={handleItalic}>
            <FaItalic />
          </span>
          <span className="leftBorder" onClick={handleUnderLine}>
            <FaUnderline />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextDetailSubtoolBar;
