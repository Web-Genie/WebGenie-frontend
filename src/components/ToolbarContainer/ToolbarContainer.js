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
    margin-bottom: 10px;
    font-size: 18px;
    text-decoration: underline;
    font-weight: 600;
  }

  .choiceContainer {
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    padding: 5px;
  }

  h1 {
    margin-bottom: 7px;
    color: #263238;
    font-size: 32px;
    font-weight: 500;
    cursor: pointer;
  }

  h2 {
    margin-bottom: 7px;
    color: #263238;
    font-size: 28px;
    font-weight: 500;
    cursor: pointer;
  }

  h3 {
    margin-bottom: 7px;
    color: #263238;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
  }

  h4 {
    margin-bottom: 7px;
    color: #263238;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }

  h5 {
    margin-bottom: 7px;
    color: #263238;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }

  h6 {
    color: #263238;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
  }

  .textbox {
    width: 120px;
    padding: 5px 20px;
    border: 1px solid #d5d8de;
    border-radius: 5px;
    font-size: 15px;
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
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border: none;
    background: white;
    cursor: default;
  }

  .textDetailChoice {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    padding: 0px 8px;
    .fontType {
      width: 140px;
      margin-right: 15px;
      font-size: 13px;
      font-weight: 500px;
    }
    .fontSize {
      width: 60px;
    }
  }

  .clearCanvasButtonContainer {
    position: fixed;
    left: 92%;
    transform: translate(-50%, 400px);
  }

  .sampleColor {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    border-radius: 4px;
    background-color: #63cc63;
  }

  .detailContainer {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .detailItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border-radius: 6px;
    border: 1px solid #e5e5e5;

    span {
      font-size: 20px;
      height: 20px;
      padding: 7px 25px;
      cursor: pointer;
      :hover {
        opacity: 0.5;
      }
    }

    .rightBorder {
      border-right: 1px solid #e5e5e5;
    }

    .leftBorder {
      border-left: 1px solid #e5e5e5;
    }
  }
`;

export default ToolbarContainer;
