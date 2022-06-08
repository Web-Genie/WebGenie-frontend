import React, { useState } from "react";
import styled from "styled-components";

import testImg from "../assets/test.jpg";

function EditorTemplate({ imageOpacity, imageBrightness }) {

  return (
    <EditorTemplateBody>
      <img src={testImg} width={500} style={{opacity:imageOpacity, filter: `brightness(${imageBrightness})`}}/>
    </EditorTemplateBody>
  );
}

const EditorTemplateBody = styled.div`
  height: 78vh;
  width: 65%;
  overflow-y: scroll;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.05);
  background-color: white;
`;

export default EditorTemplate;
