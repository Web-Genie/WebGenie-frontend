import PropTypes from "prop-types";
import React from "react";

import { OPACITY_RANGE } from "../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

function OpacityChangeSubtoolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit Opacity" />
      <SelectDetail
        title="opacity"
        className="opacity"
        detailValue={OPACITY_RANGE}
      />
    </div>
  );
}

export default OpacityChangeSubtoolBar;
