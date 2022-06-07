import React from "react";

import SelectDetail from "./SelectDetail";
import SubtoolbarTitle from "./SubtoolbarTitle";

function ButtonRadiusEditor() {
  const buttonRadiusRange = Array(100)
    .fill(1)
    .map((n, i) => n + i);

  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit Border Radius"} />
      <SelectDetail detailData={buttonRadiusRange} />
    </div>
  );
}

export default ButtonRadiusEditor;
