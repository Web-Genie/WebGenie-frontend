import React from "react";

import { ELEMENT_STYLE_OPTIONS } from "../constants/constants";
import SelectDetail from "./SelectDetailSubToolbar";
import SubToolbarTitle from "./SubToolbarTitle";

function ButtonRadiusSubToolbar() {
  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit Border Radius" />
      <SelectDetail
        detailValue={ELEMENT_STYLE_OPTIONS}
        className="buttonRadius"
      />
    </div>
  );
}

export default ButtonRadiusSubToolbar;
