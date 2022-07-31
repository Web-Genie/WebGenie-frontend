import React, { useContext } from "react";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";

import { Context } from "../store/Store";
import { handleFontFormat } from "../utils/";
import SubToolbarTitle from "./SubToolbarTitle";

function TextPositionSubToolbar() {
  const { globalState } = useContext(Context);
  const { currentElement } = globalState;

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit Position" />
      <div className="detailContainer" data-testid="detailContainer">
        <div className="detailItem">
          <span
            className="rightBorder"
            onClick={handleFontFormat(currentElement, "left")}
          >
            <FaAlignLeft />
          </span>
          <span onClick={handleFontFormat(currentElement, "center")}>
            <FaAlignCenter />
          </span>
          <span
            className="leftBorder"
            onClick={handleFontFormat(currentElement, "right")}
          >
            <FaAlignRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextPositionSubToolbar;
