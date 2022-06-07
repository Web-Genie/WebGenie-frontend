import React from "react";

import { RADIUS_AND_BRIGHTNESS_RANGE } from "../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

function ButtonRadiusSubtoolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit Border Radius" />
      <SelectDetail
        detailValue={RADIUS_AND_BRIGHTNESS_RANGE}
        className="buttonRadius"
      />
    </div>
  );
}

export default ButtonRadiusSubtoolBar;
