import React, { useContext } from "react";

import { ELEMENT_NAME, ELEMENT_STYLE_OPTIONS } from "../constants";
import { Context } from "../store/Store";
import ButtonLinkSubToolbar from "./ButtonLinkSubToolbar";
import ButtonRadiusSubToolbar from "./ButtonRadiusSubToolbar";
import ColorChangeSubToolbar from "./ColorChangeSubToolbar";
import EditorToolbar from "./EditorToolbar";
import ImageBlurSubToolbar from "./ImageBlurSubToolbar";
import ImageBrightnessSubToolbar from "./ImageBrightnessSubToolbar";
import OpacityChangeSubToolbar from "./OpacityChangeSubToolbar";
import TextContentChangeSubtoolbar from "./TextContentChangeSubtoolbar";
import TextPositionSubToolbar from "./TextPositionSubToolbar";
import TextStyleSubToolbar from "./TextStyleSubToolbar";
import ToolbarContainer from "./ToolbarContainer";

function RightToolbar() {
  const { globalState } = useContext(Context);
  const { subToolbarType } = globalState;

  return (
    <EditorToolbar>
      <ToolbarContainer>
        {ELEMENT_STYLE_OPTIONS.HEADING_TAG.includes(subToolbarType) && (
          <>
            <TextStyleSubToolbar />
            <TextPositionSubToolbar />
            <TextContentChangeSubtoolbar />
          </>
        )}
        {subToolbarType === ELEMENT_NAME.BUTTON && (
          <>
            <ButtonLinkSubToolbar />
            <ButtonRadiusSubToolbar />
            <OpacityChangeSubToolbar />
          </>
        )}
        {subToolbarType === ELEMENT_NAME.IMAGE && (
          <>
            <OpacityChangeSubToolbar />
            <ImageBrightnessSubToolbar />
            <ImageBlurSubToolbar />
          </>
        )}
        {subToolbarType === ELEMENT_NAME.BUTTON ||
        ELEMENT_STYLE_OPTIONS.HEADING_TAG.includes(subToolbarType) ? (
          <ColorChangeSubToolbar />
        ) : null}
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
