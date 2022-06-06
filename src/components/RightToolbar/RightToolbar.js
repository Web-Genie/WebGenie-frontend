import React from "react";

import EditorToolbar from "../EditorToolbar/EditorToolbar";
import TextColorEditor from "../SubToolbar/TextColorEditor";
import TextDetailEditor from "../SubToolbar/TextDetailEditor";
import TextPositionEditor from "../SubToolbar/TextPositionEditor";
import ToolbarContainer from "../ToolbarContainer/ToolbarContainer";

function RightToolbar() {
  return (
    <EditorToolbar>
      <ToolbarContainer>
        <TextDetailEditor />
        <TextPositionEditor />
        <TextColorEditor />
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
