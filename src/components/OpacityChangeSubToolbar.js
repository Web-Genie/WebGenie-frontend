import React from "react";

import { ELEMENT_STYLE_OPTIONS } from "../constants";
import useNonTextElementStyle from "../hooks/useNonTextElementStyle";
import SelectDetail from "./SelectDetailSubToolbar";
import SubToolbarTitle from "./SubToolbarTitle";

function OpacityChangeSubToolbar() {
  const { elementStyle, handleElementStyleValueChange } =
    useNonTextElementStyle();

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit Opacity" />
      <SelectDetail
        title="opacity"
        className="opacity"
        detailValue={ELEMENT_STYLE_OPTIONS.OPACITY_RANGE}
        currentValue={elementStyle.opacity}
        handleSelectOptionChange={(event) =>
          handleElementStyleValueChange("opacity", event.target.value)
        }
      />
    </div>
  );
}

export default OpacityChangeSubToolbar;
