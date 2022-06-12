import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

function ToolbarContainer({ children }) {
  return <ToolbarContainerBody>{children}</ToolbarContainerBody>;
}

ToolbarContainer.propTypes = {
  children: PropTypes.array,
};

const ToolbarContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #263238;
  user-select: none;

  .category {
    margin-bottom: 10px;
    font-size: 18px;
    text-decoration: underline;
    font-weight: 600;
  }

  .choiceContainer {
    display: flex;
    flex-direction: column;
    margin: 10px 15px;
    padding: 5px;
  }

  h1 {
    margin-bottom: 7px;
    color: #263238;
    font-size: 32px;
    font-weight: 500;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }

  h2 {
    margin-bottom: 7px;
    color: #263238;
    font-size: 28px;
    font-weight: 500;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }

  h3 {
    margin-bottom: 7px;
    color: #263238;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }

  h4 {
    margin-bottom: 7px;
    color: #263238;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }

  h5 {
    margin-bottom: 7px;
    color: #263238;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }

  h6 {
    color: #263238;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }

  .textbox {
    width: 120px;
    padding: 5px 20px;
    border: 1px solid #d5d8de;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }

    ::placeholder {
      font-size: 14px;
      font-weight: 300;
    }
  }

  .imageUploadingChoice {
    display: flex;
    justify-content: space-evenly;
  }

  .filebox label {
    display: flex;
    padding: 10px 18px;
    margin-right: 7px;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 6px;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    font-size: 13px;
    font-weight: 400;

    :hover {
      opacity: 0.7;
    }
  }

  .filebox input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
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

    :hover {
      opacity: 0.5;
    }
  }

  .circle {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #98a2b3;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }

  .triangle {
    width: 0;
    height: 0;
    border-left: 27px solid transparent;
    border-right: 27px solid transparent;
    border-bottom: 42px solid #98a2b3;
    margin-left: 10px;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }

  .samepleButton {
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    padding: 7px 40px;
    gap: 12px;
    background: white;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
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
    margin: 0 3px 0 3px;
    flex-direction: row;
    align-items: center;
    font-weight: 500px;
    font-size: 15px;

    .fontType {
      width: 107px;
      padding-right: 22px;
      margin: 0px;
      border: none;
    }

    .fontSize {
      width: 20px;
      border: none;
      padding-left: 0px;
    }
  }

  .clearCanvasButtonContainer {
    display: flex;
    justify-content: center;
    margin: 20px 20px;
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
      font-size: 15px;
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
