<<<<<<< HEAD
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

=======
import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

import { RADIUS_AND_BRIGHTNESS_RANGE } from "../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

const fontType = ["inter", "고딕", "굴림"];

function TextDetailSubtoolBar() {
>>>>>>> origin/main
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit text" />
      <div className="textDetailChoice">
<<<<<<< HEAD
        <SelectDetail detailValue={FONT_TYPE} className="font" />
        <SelectDetail
          detailValue={SIZE_RADIUS_AND_BRIGHTNESS_RANGE}
=======
        <SelectDetail detailValue={fontType} className="font" />
        <SelectDetail
          detailValue={RADIUS_AND_BRIGHTNESS_RANGE}
>>>>>>> origin/main
          className="font"
        />
      </div>
      <div className="detailContainer">
        <div className="detailItem">
<<<<<<< HEAD
          <span className="rightBorder" onClick={handleBold}>
            <FaBold />
          </span>
          <span onClick={handleItalic}>
            <FaItalic />
          </span>
          <span className="leftBorder" onClick={handleUnderLine}>
=======
          <span className="rightBorder">
            <FaBold />
          </span>
          <span>
            <FaItalic />
          </span>
          <span className="leftBorder">
>>>>>>> origin/main
            <FaUnderline />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextDetailSubtoolBar;
