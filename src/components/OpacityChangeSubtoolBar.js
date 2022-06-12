import PropTypes from "prop-types";
import React from "react";

import { OPACITY_RANGE } from "../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

function OpacityEditorSubtoolBar({ onChangeOpacity }) {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title="Edit Opacity" />
      <SelectDetail
        title="opacity"
        detailValue={OPACITY_RANGE}
        onChange={onChangeOpacity}
      />
    </div>
  );
}

OpacityEditorSubtoolBar.propTypes = {
  onChangeOpacity: PropTypes.func,
};

export default OpacityEditorSubtoolBar;
