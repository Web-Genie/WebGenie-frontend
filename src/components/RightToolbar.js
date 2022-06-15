import React, { useContext } from "react";

import { TEXT_CHOICES } from "../constants/constants";
import { SubToolbarContext } from "../context/subToolbarContext";
import ButtonLinkEditor from "./ButtonLinkSubtoolBar";
import ButtonRadiusEditor from "./ButtonRadiusSubtoolBar";
import CanvasClearButton from "./CanvasClearButton";
import ColorChangeSubToolBar from "./ColorChangeSubToolBar";
import EditorToolbar from "./EditorToolbar";
import ImageBlurEditor from "./ImageBlurSubtoolBar";
import ImageBrightnessEditor from "./ImageBrightnessSubtoolBar";
import OpacityEditor from "./OpacityChangeSubtoolBar";
import TextDetailEditor from "./TextDetailSubtoolBar";
import TextPositionEditor from "./TextPositionSubtoolBar";
import ToolbarContainer from "./ToolbarContainer";

function RightToolbar() {
  const { subToolbarType } = useContext(SubToolbarContext);

  return (
    <EditorToolbar>
      <ToolbarContainer>
        {TEXT_CHOICES.includes(subToolbarType) && (
          <>
            <TextDetailEditor />
            <TextPositionEditor />
          </>
        )}
        {subToolbarType === "BUTTON" && (
          <>
            <ButtonLinkEditor />
            <ButtonRadiusEditor />
            <OpacityEditor />
          </>
        )}
        {subToolbarType === "IMG" && (
          <>
            <OpacityEditor />
            <ImageBrightnessEditor />
            <ImageBlurEditor />
          </>
        )}
        {subToolbarType === "BUTTON" ||
        TEXT_CHOICES.includes(subToolbarType) ? (
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
