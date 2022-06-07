import React from "react";

import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";

function ButtonRadiusSubtoolBar() {
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

export default ButtonRadiusSubtoolBar;
