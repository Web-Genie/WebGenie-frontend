import React, { useContext } from "react";
import { FaLink } from "react-icons/fa";
import styled from "styled-components";

import { InputFieldContext } from "../context/subToolbarContext";
import SubToolbarTitle from "./SubToolbarTitle";
import ToolbarButton from "./ToolbarButton";

function ButtonLinkSubToolbar() {
  const {
    inputValue,
    shouldEditValue,
    handleInputChange,
    toggleInputChange,
    toggleAddLink,
  } = useContext(InputFieldContext);

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Add Link" />
      {shouldEditValue ? (
        <AddLinkContainer>
          <input value={inputValue} onChange={handleInputChange} />
          <div>
            <ToolbarButton handleClick={toggleAddLink}>add</ToolbarButton>
            <ToolbarButton handleClick={toggleInputChange}>close</ToolbarButton>
          </div>
        </AddLinkContainer>
      ) : (
        <ToolbarButton handleClick={toggleInputChange} name="link">
          <FaLink />
        </ToolbarButton>
      )}
    </div>
  );
}

const AddLinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
  }

  input {
    padding: 5px 5px;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
  }
`;

export default ButtonLinkSubToolbar;
