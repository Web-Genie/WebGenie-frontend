import React from "react";

import SubtoolbarTitle from "./SubtoolbarTitle";
import TextDetailCollection from "./TextDetailCollection";

function TextPositionSubtoolBar() {
  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit Position"} />
      <TextDetailCollection propertyName={"textPosition"} />
    </div>
  );
}

export default TextPositionSubtoolBar;
