import React from "react";
import styled from "styled-components";

function ToolbarContainer({ children }) {
  return <ToolbarContainerBody>{children}</ToolbarContainerBody>;
}

const ToolbarContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #263238;

  .category {
    font-size: 18px;
    margin-bottom: 10px;
    text-decoration: underline;
    font-weight: 600;
  }

  .choiceContainer {
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 7px;
    font-weight: 500;
    color: #263238;
    cursor: pointer;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 7px;
    font-weight: 500;
    color: #263238;
    cursor: pointer;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 7px;
    font-weight: 500;
    color: #263238;
    cursor: pointer;
  }

  h4 {
    font-size: 20px;
    margin-bottom: 7px;
    font-weight: 500;
    color: #263238;
    cursor: pointer;
  }

  h5 {
    font-size: 16px;
    margin-bottom: 7px;
    font-weight: 500;
    color: #263238;
    cursor: pointer;
  }

  h6 {
    font-size: 12px;
    font-weight: 500;
    color: #263238;
    cursor: pointer;
  }

  .textbox {
    padding: 5px 20px;
    border: 1px solid #d5d8de;
    border-radius: 5px;
    font-size: 15px;
    width: 120px;
    cursor: pointer;

    ::placeholder {
      font-size: 14px;
      font-weight: 300;
    }
  }

  .imageUploadingChoice {
    display: flex;
    justify-content: space-evenly;
  }

  .shapeChoices {
    display: flex;
    justify-content: space-evenly;
  }

  .square {
    width: 42px;
    height: 42px;
    margin-right: 10px;
    background-color: #98a2b3;
    cursor: pointer;
  }

  .circle {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #98a2b3;
    cursor: pointer;
  }

  .triangle {
    width: 0;
    height: 0;
    border-left: 27px solid transparent;
    border-right: 27px solid transparent;
    border-bottom: 42px solid #98a2b3;
    margin-left: 10px;
    cursor: pointer;
  }

  .samepleButton {
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    padding: 7px 40px;
    gap: 12px;
    background: white;
    cursor: pointer;
  }

  .colorPalette {
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border: none;
    background: white;
    cursor: default;
  }
`;

export default ToolbarContainer;