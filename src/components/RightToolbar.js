import React, { useContext } from "react";

import { ELEMENT_STYLE_OPTIONS } from "../constants";
import { Context } from "../store/Store";
import ButtonLinkSubToolbar from "./ButtonLinkSubToolbar";
import ButtonRadiusSubToolbar from "./ButtonRadiusSubToolbar";
import ColorChangeSubToolbar from "./ColorChangeSubToolbar";
import EditorToolbar from "./EditorToolbar";
import ImageBlurSubToolbar from "./ImageBlurSubToolbar";
import ImageBrightnessSubToolbar from "./ImageBrightnessSubToolbar";
import OpacityChangeSubToolbar from "./OpacityChangeSubToolbar";
import TextDetailSubToolbar from "./TextDetailSubToolbar";
import TextPositionSubToolbar from "./TextPositionSubToolbar";
import ToolbarContainer from "./ToolbarContainer";

function RightToolbar() {
  const { globalState } = useContext(Context);
  const { subToolbarType } = globalState;

  return (
    <EditorToolbar>
      <ToolbarContainer>
        {ELEMENT_STYLE_OPTIONS.HEADING_TAG.includes(subToolbarType) && (
          <>
            <TextDetailSubToolbar />
            <TextPositionSubToolbar />
          </>
        )}
        {subToolbarType === "BUTTON" && (
          <>
            <ButtonLinkSubToolbar />
            <ButtonRadiusSubToolbar />
            <OpacityChangeSubToolbar />
          </>
        )}
        {subToolbarType === "IMG" && (
          <>
            <OpacityChangeSubToolbar />
            <ImageBrightnessSubToolbar />
            <ImageBlurSubToolbar />
          </>
        )}
        {subToolbarType === "BUTTON" ||
        ELEMENT_STYLE_OPTIONS.HEADING_TAG.includes(subToolbarType) ? (
          <ColorChangeSubToolbar />
        ) : null}
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
