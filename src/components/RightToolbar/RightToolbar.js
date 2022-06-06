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

function RightToolbar({ propertyName }) {
  return (
    <EditorToolbar>
      <ToolbarContainer>
        {propertyName === "text" && (
          <>
            <TextDetailEditor />
            <TextPositionEditor />
          </>
        )}
        {propertyName === "button" && (
          <>
            <ButtonLinkEditor />
            <ButtonRadiusEditor />
            <OpacityEditor />
          </>
        )}
        {propertyName === "image" && (
          <>
            <OpacityEditor />
            <ImageBrightnessEditor />
          </>
        )}
        {propertyName !== "button" && (
          <>
            <ColorEditor />
          </>
        )}
        <CanvasClearButton />
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
