import React from "react";

import SubtoolbarTitle from "./SubtoolbarTitle";

function OpacityEditor() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit Opacity"} />
      <select>
        <option>1</option>
        <option>2</option>
      </select>
    </div>
  );
}

export default OpacityEditor;
