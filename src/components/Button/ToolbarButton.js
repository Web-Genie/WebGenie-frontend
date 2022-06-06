import React from "react";
import styled from "styled-components";

function ToolbarButton({ children }) {
  return <ToolbarButtonBody>{children}</ToolbarButtonBody>;
}

const ToolbarButtonBody = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  color: #344054;
  background: #ffffff;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;

  .text {
    margin-left: 4px;
  }

  :hover {
    opacity: 0.7;
  }
`;

export default ToolbarButton;
