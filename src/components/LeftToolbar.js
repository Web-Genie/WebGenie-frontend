import React from "react";

import BackgroundChoice from "./BackgroundChoice";
import ButtonChoice from "./ButtonChoice";
import EditorToolbar from "./EditorToolbar";
import ImageChoice from "./ImageChoice";
import TextChoice from "./TextChoice";
import ToolbarContainer from "./ToolbarContainer";

function LeftToolbar() {
  return (
    <EditorToolbar>
      <ToolbarContainer>
        <TextChoice />
        <ImageChoice />
        <ButtonChoice />
        <BackgroundChoice />
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default LeftToolbar;
