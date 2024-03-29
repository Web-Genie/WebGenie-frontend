import React from "react";

import { ELEMENT_STYLE_OPTIONS } from "../constants";
import useNonTextElementStyle from "../hooks/useNonTextElementStyle";
import SelectDetail from "./SelectDetailSubToolbar";
import SubToolbarTitle from "./SubToolbarTitle";

function ButtonRadiusSubToolbar() {
  const { elementStyle, handleElementStyleValueChange } =
    useNonTextElementStyle();

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit Border Radius" />
      <SelectDetail
        className="buttonRadius"
        detailValue={ELEMENT_STYLE_OPTIONS.BUTTON_RADIUS_AND_FONT_SIZE}
        currentValue={elementStyle.radius}
        handleSelectOptionChange={(event) =>
          handleElementStyleValueChange("radius", event.target.value)
        }
      />
    </div>
  );
}

export default ButtonRadiusSubToolbar;
