import React from "react";

import ButtonLinkEditor from "../EditorToolbar/ButtonLinkSubtoolBar";
import ButtonRadiusEditor from "../EditorToolbar/ButtonRadiusSubtoolBar.js";
import CanvasClearButton from "../EditorToolbar/CanvasClearButton";
import ColorChangeSubToolBar from "../EditorToolbar/ColorChangeSubToolBar";
import EditorToolbar from "../EditorToolbar/EditorToolbar";
import ImageBrightnessEditor from "../EditorToolbar/ImageBrightnessSubtoolBar";
import OpacityEditor from "../EditorToolbar/OpacityChangeSubtoolBar";
import TextDetailEditor from "../EditorToolbar/TextDetailSubtoolBar";
import TextPositionEditor from "../EditorToolbar/TextPositionSubtoolBar";
import ToolbarContainer from "../ToolbarContainer/ToolbarContainer";

function RightToolbar({}) {
  const propertyName = "text";
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
        {propertyName !== "" && propertyName !== "image" ? (
          <>
            <ColorChangeSubToolBar />
          </>
        ) : null}
        <CanvasClearButton />
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
