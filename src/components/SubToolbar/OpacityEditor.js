import React from "react";

import ToolbarButton from "../Button/ToolbarButton";
import SelectDetail from "./SelectDetail";
import SubtoolbarTitle from "./SubtoolbarTitle";

function OpacityEditor() {
  const opacityRange = Array(11)
    .fill(0)
    .map((n, i) => (n + i * 0.1).toFixed(1));

  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit Opacity"} />
      <SelectDetail detailData={opacityRange} />
    </div>
  );
}

export default OpacityEditor;
