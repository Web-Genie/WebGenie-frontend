<<<<<<< HEAD
import PropTypes from "prop-types";
=======
>>>>>>> origin/main
import React from "react";
import styled from "styled-components";

function ToolbarButton({ children, name, handleClick }) {
  return (
<<<<<<< HEAD
    <ToolbarButtonBody name={name} onClick={handleClick}>
=======
    <ToolbarButtonBody onClick={handleClick} name={name}>
>>>>>>> origin/main
      {children}
    </ToolbarButtonBody>
  );
}

<<<<<<< HEAD
ToolbarButton.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

=======
>>>>>>> origin/main
const ToolbarButtonBody = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.name === "clearCanvas" ? "12px 14px" : "8px")};
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  width: ${(props) => (props.name === "link" ? "150px" : null)};
  margin: ${(props) => (props.name === "link" ? "0px 20px" : null)};
  margin-left: ${(props) => (props.name === "clearCanvas" ? "15px" : null)};
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
