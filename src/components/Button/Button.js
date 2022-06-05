import React from "react";

import styled from "styled-components";

function Button({ children, mainButton }) {
  return <ButtonBody primaryButton={mainButton}>{children}</ButtonBody>;
}

const ButtonBody = styled.button`
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.primaryButton ? "#fff" : "#0a6bff")};
  background-color: ${(props) => (props.primaryButton ? "#0a6bff" : "white")};
  border: ${(props) => (props.primaryButton ? "0" : "2px solid #0a6bff ")};
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.primaryButton
      ? "rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,rgba(0, 44, 97, 0.1) 0 3px 6px 0; : 2px solid #0a6bff "
      : "none"};
  box-sizing: border-box;
  padding: 8px 15px;
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
  cursor: pointer;

  :hover {
    background-color: ${(props) => (props.primaryButton ? "#065dd8" : "none")};
    transform: translateY(-3px);
  }

  :active {
    transform: translateY(3px);
  }
`;

export default Button;
