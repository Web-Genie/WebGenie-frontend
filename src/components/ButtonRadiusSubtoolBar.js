import React from "react";

import { SIZE_RADIUS_AND_BRIGHTNESS_RANGE } from "../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

function ButtonRadiusSubtoolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit Border Radius" />
      <SelectDetail
        detailValue={SIZE_RADIUS_AND_BRIGHTNESS_RANGE}
        className="buttonRadius"
      />
    </div>
  );
}

export default ButtonRadiusSubtoolBar;
