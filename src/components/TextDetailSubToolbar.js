import React, { useContext } from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

import { ELEMENT_STYLE_OPTIONS } from "../constants";
import useText from "../hooks/useText";
import { Context } from "../store/Store";
import { handleFontFormat } from "../utils";
import SelectDetail from "./SelectDetailSubToolbar";
import SubToolbarTitle from "./SubToolbarTitle";

function TextDetailSubToolbar() {
  const { globalState } = useContext(Context);
  const { currentElement } = globalState;
  const { fontStyle, handleFontStyleValueChange } = useText();

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit text" />
      <div className="textDetailChoice">
        <SelectDetail
          type="font"
          className="fontType"
          detailValue={ELEMENT_STYLE_OPTIONS.FONT_TYPE}
          currentValue={fontStyle.family}
          handleSelectOptionChange={(event) =>
            handleFontStyleValueChange("family", event.target.value)
          }
        />
        <SelectDetail
          type="font"
          className="fontSize"
          detailValue={ELEMENT_STYLE_OPTIONS.BUTTON_RADIUS_AND_FONT_SIZE}
          currentValue={fontStyle.size}
          handleSelectOptionChange={(event) =>
            handleFontStyleValueChange("size", event.target.value)
          }
        />
      </div>
      <div className="detailContainer">
        <div className="detailItem">
          <span
            className="rightBorder"
            onClick={handleFontFormat(
              currentElement,
              ELEMENT_STYLE_OPTIONS.FONT_DETAIL.BOLD
            )}
          >
            <FaBold />
          </span>
          <span
            onClick={handleFontFormat(
              currentElement,
              ELEMENT_STYLE_OPTIONS.FONT_DETAIL.ITALIC
            )}
          >
            <FaItalic />
          </span>
          <span
            className="leftBorder"
            onClick={handleFontFormat(
              currentElement,
              ELEMENT_STYLE_OPTIONS.FONT_DETAIL.UNDERLINE
            )}
          >
            <FaUnderline />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextDetailSubToolbar;
