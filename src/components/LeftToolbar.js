import PropTypes from "prop-types";
import React from "react";

import BackgroundChoice from "./BackgroundChoice";
import ButtonChoice from "./ButtonChoice";
import EditorToolbar from "./EditorToolbar";
import ImageChoice from "./ImageChoice";
import TextChoice from "./TextChoice";
import ToolbarContainer from "./ToolbarContainer";

function LeftToolbar({ changeBackground }) {
  return (
    <EditorToolbar>
      <ToolbarContainer>
        <TextChoice />
        <ImageChoice />
        <ButtonChoice />
        <BackgroundChoice changeBackground={changeBackground} />
      </ToolbarContainer>
    </EditorToolbar>
  );
}

LeftToolbar.propTypes = {
  changeBackground: PropTypes.func.isRequired,
};

export default LeftToolbar;
