import React, { useContext } from "react";

import { TEXT_CHOICES } from "../constants/constants";
import { SubToolbarContext } from "../context/subToolbarContext";
import ButtonLinkSubtoolBar from "./ButtonLinkSubtoolBar";
import ButtonRadiusSubtoolBar from "./ButtonRadiusSubtoolBar";
import ColorChangeSubToolBar from "./ColorChangeSubToolBar";
import EditorToolbar from "./EditorToolbar";
import ImageBlurSubtoolBar from "./ImageBlurSubtoolBar";
import ImageBrightnessSubtoolBar from "./ImageBrightnessSubtoolBar";
import OpacityChangeSubtoolBar from "./OpacityChangeSubtoolBar";
import TextDetailSubtoolBar from "./TextDetailSubtoolBar";
import TextPositionSubtoolBar from "./TextPositionSubtoolBar";
import ToolbarContainer from "./ToolbarContainer";

function RightToolbar() {
  const { subToolbarType } = useContext(SubToolbarContext);

  return (
    <EditorToolbar>
      <ToolbarContainer>
        {TEXT_CHOICES.includes(subToolbarType) && (
          <>
            <TextDetailSubtoolBar />
            <TextPositionSubtoolBar />
          </>
        )}
        {subToolbarType === "BUTTON" && (
          <>
            <ButtonLinkSubtoolBar />
            <ButtonRadiusSubtoolBar />
            <OpacityChangeSubtoolBar />
          </>
        )}
        {subToolbarType === "IMG" && (
          <>
            <OpacityChangeSubtoolBar />
            <ImageBrightnessSubtoolBar />
            <ImageBlurSubtoolBar />
          </>
        )}
        {subToolbarType === "BUTTON" ||
        TEXT_CHOICES.includes(subToolbarType) ? (
          <ColorChangeSubToolBar />
        ) : null}
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
