import React from "react";

import BackgroundChoice from "../EditorToolbar/BackgroundChoice";
import ButtonChoice from "../EditorToolbar/ButtonChoice";
import EditorToolbar from "../EditorToolbar/EditorToolbar";
import ImageChoice from "../EditorToolbar/ImageChoice";
import ShapeChoice from "../EditorToolbar/ShapeChoice";
import TextBoxChoice from "../EditorToolbar/TextBoxChoice";
import TextChoice from "../EditorToolbar/TextChoice";
import ToolbarContainer from "../ToolbarContainer/ToolbarContainer";

function LeftToolbar() {
  return (
    <EditorToolbar>
      <ToolbarContainer>
        <TextChoice />
        <TextBoxChoice />
        <ImageChoice />
        <ShapeChoice />
        <ButtonChoice />
        <BackgroundChoice />
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default LeftToolbar;
