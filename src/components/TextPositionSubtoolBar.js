import React, { useContext } from "react";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";

import { SubToolbarContext } from "../context/subToolbarContext";
import SubtoolbarTitle from "./SubtoolbarTitle";

function TextPositionSubtoolBar() {
  const { setTextAlign } = useContext(SubToolbarContext);

  const handleLeftTextAlign = () => {
    setTextAlign("left");
  };

  const handleRightTextAlign = () => {
    setTextAlign("right");
  };

  const handleCenterTextAlign = () => {
    setTextAlign("center");
  };

  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit Position" />
      <div className="detailContainer">
        <div className="detailItem">
          <span className="rightBorder" onClick={handleLeftTextAlign}>
            <FaAlignLeft />
          </span>
          <span onClick={handleCenterTextAlign}>
            <FaAlignCenter />
          </span>
          <span className="leftBorder" onClick={handleRightTextAlign}>
            <FaAlignRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextPositionSubtoolBar;
