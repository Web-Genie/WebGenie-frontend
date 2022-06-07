import React from "react";
import styled from "styled-components";

function EditorToolbar({ children }) {
  return <Toolbar>{children}</Toolbar>;
}

const Toolbar = styled.div`
  height: 84vh;
  width: 16%;
  background-color: rgb(249, 250, 251);
`;

export default EditorToolbar;
