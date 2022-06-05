import React from "react";
import styled from "styled-components";

function Editor() {
  return <EditorBody></EditorBody>;
}

const EditorBody = styled.div`
  height: 78vh;
  width: 65%;
  overflow-y: scroll;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.05);
  background-color: white;
`;

export default Editor;
