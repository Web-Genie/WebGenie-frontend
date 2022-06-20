import React from "react";

import { SIZE_RADIUS_AND_BRIGHTNESS_RANGE } from "../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar1";
import SubToolbarTitle from "./SubtoolbarTitle1";

function ButtonRadiusSubToolbar() {
  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit Border Radius" />
      <SelectDetail
        detailValue={SIZE_RADIUS_AND_BRIGHTNESS_RANGE}
        className="buttonRadius"
      />
    </div>
  );
}

export default ButtonRadiusSubToolbar;
