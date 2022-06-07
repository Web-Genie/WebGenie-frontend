import React from "react";

import { opacityRange } from "../../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

function OpacityEditorSubtoolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit Opacity"} />
      <SelectDetail detailValue={opacityRange} />
    </div>
  );
}

export default OpacityEditorSubtoolBar;
