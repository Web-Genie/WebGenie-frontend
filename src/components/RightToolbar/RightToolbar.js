import React from "react";

import EditorToolbar from "../EditorToolbar/EditorToolbar";
import ButtonLinkEditor from "../SubToolbar/ButtonLinkEditor";
import ButtonRadiusEditor from "../SubToolbar/ButtonRadiusEditor";
import CanvasClearButton from "../SubToolbar/CanvasClearButton";
import ColorEditor from "../SubToolbar/ColorEditor";
import ImageBrightnessEditor from "../SubToolbar/ImageBrightnessEditor";
import OpacityEditor from "../SubToolbar/OpacityEditor";
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
            <ButtonLinkEditor />
            <ButtonRadiusEditor />
            <OpacityEditor />
          </>
        )}
        {name === "image" && (
          <>
            <OpacityEditor />
            <ImageBrightnessEditor />
            <ColorEditor />
            <CanvasClearButton />
          </>
        )}
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
