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

function RightToolbar({
  onChangeOpacity,
  onChangeBrightness,
  onChangeBlur,
  changeColor,
  changeFontSize,
}) {
  // const { subToolbarType } = useContext(SubToolbarContext);
  const subToolbarType = "";

  return (
    <EditorToolbar>
      <ToolbarContainer>
        <>
          <TextDetailEditor changeFontSize={changeFontSize} />
          <TextPositionEditor />
        </>
        {/* {TEXT_CHOICES.includes(subToolbarType) && (
         
        )} */}
        {subToolbarType === "BUTTON" && (
          <>
            <ButtonLinkEditor />
            <ButtonRadiusEditor />
          </>
        )}
        <OpacityEditor />
        {subToolbarType === "image" && (
          <>
            <OpacityEditor onChangeOpacity={onChangeOpacity} />
            <ImageBrightnessEditor onChangeBrightness={onChangeBrightness} />
            <ImageBlurEditor onChangeBlur={onChangeBlur} />
          </>
        )}
        {subToolbarType === "BUTTON" ||
        TEXT_CHOICES.includes(subToolbarType) ? (
          <></>
        ) : null}
        <ColorChangeSubToolBar changeColor={changeColor} />
        <CanvasClearButton />
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
