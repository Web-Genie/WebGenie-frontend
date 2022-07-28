import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

function EditorToolbar({ children }) {
  return <Toolbar>{children}</Toolbar>;
}

EditorToolbar.propTypes = {
  children: PropTypes.object,
};

const Toolbar = styled.div`
  height: 84vh;
  width: 21%;
  overflow-y: scroll;
  background-color: rgb(249, 250, 251);
`;

export default EditorToolbar;
