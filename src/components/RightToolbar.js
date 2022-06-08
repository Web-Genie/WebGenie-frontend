import React from "react";

import ButtonLinkEditor from "./ButtonLinkSubtoolBar";
import ButtonRadiusEditor from "./ButtonRadiusSubtoolBar.js";
import CanvasClearButton from "./CanvasClearButton";
import ColorChangeSubToolBar from "./ColorChangeSubToolBar";
import EditorToolbar from "./EditorToolbar";
import ImageBrightnessEditor from "./ImageBrightnessSubtoolBar";
import OpacityEditor from "./OpacityChangeSubtoolBar";
import TextDetailEditor from "./TextDetailSubtoolBar";
import TextPositionEditor from "./TextPositionSubtoolBar";
import ToolbarContainer from "./ToolbarContainer";

function RightToolbar({ propertyName, handleImgOpacity, handleImgBrightness }) {
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
        {"image" === "image" && (
          <>
            <OpacityEditor handleImgOpacity={handleImgOpacity}/>
            <ImageBrightnessEditor handleImgBrightness={handleImgBrightness}/>
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
