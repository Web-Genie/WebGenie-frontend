import React from "react";

import { OPACITY_RANGE } from "../constants/constants";
import useImageStyle from "../hooks/useImageStyle";
import SelectDetail from "./SelectDetailSubToolbar";
import SubToolbarTitle from "./SubToolbarTitle";

function OpacityChangeSubToolbar() {
  const { imageStyle, handleElementStyleValueChange } = useImageStyle();

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit Opacity" />
      <SelectDetail
        title="opacity"
        className="opacity"
        detailValue={OPACITY_RANGE}
        currentValue={imageStyle.opacity}
        handleSelectOptionChange={(event) =>
          handleElementStyleValueChange("opacity", event.target.value)
        }
      />
    </div>
  );
}

export default OpacityChangeSubToolbar;
