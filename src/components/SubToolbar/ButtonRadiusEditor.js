import React from "react";

import SubtoolbarTitle from "./SubtoolbarTitle";

function ButtonRadiusEditor() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit Border Radius"} />
      <select>
        <option>10</option>
        <option>11</option>
      </select>
    </div>
  );
}

export default ButtonRadiusEditor;
