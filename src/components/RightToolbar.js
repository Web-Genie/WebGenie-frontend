import React, { useContext } from "react";

import { TEXT_CHOICES } from "../constants/constants";
import { SubToolbarContext } from "../context/subToolbarContext";
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

<<<<<<< HEAD
function RightToolbar({ onChangeOpacity, onChangeBrightness, onChangeBlur }) {
  const { subToolbarType } = useContext(SubToolbarContext);

=======
function RightToolbar({
  onChangeOpacity,
  onChangeBrightness,
  onChangeBlur,
  changeColor,
  propertyName,
}) {
>>>>>>> cc236400154341e73c71acbc30671023e727ae24
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
        {subToolbarType === "image" && (
          <>
            <OpacityEditor onChangeOpacity={onChangeOpacity} />
            <ImageBrightnessEditor onChangeBrightness={onChangeBrightness} />
            <ImageBlurEditor onChangeBlur={onChangeBlur} />
          </>
        )}
        {subToolbarType !== "image" || subToolbarType === undefined ? (
          <>
            <ColorChangeSubToolBar changeColor={changeColor} />
          </>
        ) : null}
        <CanvasClearButton />
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
