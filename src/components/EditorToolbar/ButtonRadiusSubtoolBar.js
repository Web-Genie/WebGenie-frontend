import React from "react";

import { radiusAndSizeRange } from "../../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

function ButtonRadiusSubtoolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit Border Radius"} />
      <SelectDetail detailValue={radiusAndSizeRange} />
    </div>
  );
}

export default ButtonRadiusSubtoolBar;
