import React from "react";

import { radiusAndSizeRange } from "../../constants/constants";
import SelectDetail from "./SelectDetailSubtoolBar";
import SubtoolbarTitle from "./SubtoolbarTitle";
import TextDetailCollection from "./TextDetailCollection";

function TextDetailSubtoolBar() {
  const fontType = ["inter", "고딕", "굴림"];

  return (
    <div className="choiceContainer">
      <SubtoolbarTitle title={"Edit text"} />
      <div className="textDetailChoice">
        <SelectDetail detailValue={fontType} className={"fontType"} />
        <SelectDetail detailValue={radiusAndSizeRange} className={"fontSize"} />
      </div>
      <TextDetailCollection />
    </div>
  );
}

export default TextDetailSubtoolBar;
