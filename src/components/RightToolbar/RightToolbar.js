import React from "react";

import EditorToolbar from "../EditorToolbar/EditorToolbar";
import CanvasClearButton from "../SubToolbar/CanvasClearButton";
import TextColorEditor from "../SubToolbar/TextColorEditor";
import TextDetailEditor from "../SubToolbar/TextDetailEditor";
import TextPositionEditor from "../SubToolbar/TextPositionEditor";
import ToolbarContainer from "../ToolbarContainer/ToolbarContainer";

function RightToolbar() {
  return (
    <EditorToolbar>
      <ToolbarContainer>
        <TextDetailEditor />
        <TextPositionEditor title={"edit positon"} />
        <TextColorEditor />
        <CanvasClearButton />
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
