import React from "react";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";

import SubtoolbarTitle from "./SubtoolbarTitle";

function TextPositionSubtoolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit Position" />
      <div className="detailContainer">
        <div className="detailItem">
          <span className="rightBorder">
            <FaAlignLeft />
          </span>
          <span>
            <FaAlignCenter />
          </span>
          <span className="leftBorder">
            <FaAlignRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextPositionSubtoolBar;
