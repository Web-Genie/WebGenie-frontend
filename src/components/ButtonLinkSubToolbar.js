import React from "react";
import { FaLink } from "react-icons/fa";
import styled from "styled-components";

import useInput from "../hooks/useInput";
import SubToolbarTitle from "./SubToolbarTitle";
import ToolbarButton from "./ToolbarButton";

function ButtonLinkSubToolbar() {
  const {
    inputValue,
    handleInputChange,
    shouldDisplayInputField,
    toggleInputField,
    addLinkToCurrentElement,
  } = useInput();

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Add Link" />
      {shouldDisplayInputField ? (
        <AddLinkContainer>
          <input
            value={inputValue}
            placeholder="https://..."
            onChange={handleInputChange}
          />
          <div>
            <ToolbarButton handleClick={addLinkToCurrentElement}>
              add
            </ToolbarButton>
            <ToolbarButton handleClick={toggleInputField}>close</ToolbarButton>
          </div>
        </AddLinkContainer>
      ) : (
        <ToolbarButton handleClick={toggleInputField} name="link">
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
