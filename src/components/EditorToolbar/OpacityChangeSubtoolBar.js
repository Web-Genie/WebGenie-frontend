import React from "react";

import { OPACITY_RANGE } from "../../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

function OpacityEditorSubtoolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit Opacity" />
      <SelectDetail detailValue={OPACITY_RANGE} />
    </div>
  );
}

export default OpacityEditorSubtoolBar;
