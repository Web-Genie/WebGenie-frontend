import React from "react";

import ButtonLinkEditor from "./ButtonLinkSubtoolBar";
import ButtonRadiusEditor from "./ButtonRadiusSubtoolBar.js";
import CanvasClearButton from "./CanvasClearButton";
import ColorChangeSubToolBar from "./ColorChangeSubToolBar";
import EditorToolbar from "./EditorToolbar";
import ImageBlurEditor from "./ImageBlurSubtoolBar";
import ImageBrightnessEditor from "./ImageBrightnessSubtoolBar";
import OpacityEditor from "./OpacityChangeSubtoolBar";
import TextDetailEditor from "./TextDetailSubtoolBar";
import TextPositionEditor from "./TextPositionSubtoolBar";
import ToolbarContainer from "./ToolbarContainer";

function RightToolbar({
  handleImgOpacity,
  handleImgBrightness,
  handleImgBlur,
}) {
  const propertyName = "button";
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
            <OpacityEditor handleImgOpacity={handleImgOpacity} />
            <ImageBrightnessEditor handleImgBrightness={handleImgBrightness} />
            <ImageBlurEditor handleImgBlur={handleImgBlur} />
          </>
        )}
        {propertyName !== "image" || propertyName === undefined ? (
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
