import React from "react";

import ToolbarButton from "../Button/ToolbarButton";
import EditorToolbar from "../EditorToolbar/EditorToolbar";
import ButtonEditor from "../SubToolbar/ButtonEditor";
import ButtonOpacityEditor from "../SubToolbar/ButtonOpacityEditor";
import ButtonRadiusEditor from "../SubToolbar/ButtonRadiusEditor";
import CanvasClearButton from "../SubToolbar/CanvasClearButton";
import ColorEditor from "../SubToolbar/ColorEditor";
import TextDetailEditor from "../SubToolbar/TextDetailEditor";
import TextPositionEditor from "../SubToolbar/TextPositionEditor";
import ToolbarContainer from "../ToolbarContainer/ToolbarContainer";

function RightToolbar({ name }) {
  return (
    <EditorToolbar>
      <ToolbarContainer>
        {name === "text" && (
          <>
            <TextDetailEditor title={"Edit text"} />
            <TextPositionEditor title={"Edit positon"} />
          </>
        )}
        {name === "button" && (
          <>
            <ButtonEditor />
            <ButtonRadiusEditor />
            <ButtonOpacityEditor />
          </>
        )}
        <ColorEditor />
        <CanvasClearButton />
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
