<<<<<<< HEAD
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

=======
import React from "react";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";

import SubtoolbarTitle from "./SubtoolbarTitle";

function TextPositionSubtoolBar() {
>>>>>>> origin/main
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit Position" />
      <div className="detailContainer">
        <div className="detailItem">
<<<<<<< HEAD
          <span className="rightBorder" onClick={handleLeftTextAlign}>
            <FaAlignLeft />
          </span>
          <span onClick={handleCenterTextAlign}>
            <FaAlignCenter />
          </span>
          <span className="leftBorder" onClick={handleRightTextAlign}>
=======
          <span className="rightBorder">
            <FaAlignLeft />
          </span>
          <span>
            <FaAlignCenter />
          </span>
          <span className="leftBorder">
>>>>>>> origin/main
            <FaAlignRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextPositionSubtoolBar;
