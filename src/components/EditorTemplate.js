import React, { useContext } from "react";
import styled from "styled-components";

import { FONT_TYPE, TEXT_ALIGN, TEXT_CHOICES } from "../constants/constants";
import { SubToolbarContext } from "../context/subToolbarContext";
import useDragAndDrop from "../hooks/useDragAndDrop";
import useMouseClick from "../hooks/useMouseClick";
import useResize from "../hooks/useResize";
import {
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
} from "../utils";

function EditorTemplate({ displayWideView, backgroundColorName }) {
  const [handleResizeTarget, isResizing, setIsResizing] = useResize();
  const [parentRef, targetRef] = useDragAndDrop(isResizing, setIsResizing);
  const {
    subToolbarType,
    subToolbarValue,
    isBold,
    isItalic,
    setIsBold,
    setIsItalic,
    isUnderLine,
    setIsUnderLine,
    textAlign,
    setTextAlign,
    fontType,
    setFontType,
  } = useContext(SubToolbarContext);
  const ref = useMouseClick();

  if (targetRef.current !== null && targetRef.current.tagName !== "DIV") {
    if (TEXT_CHOICES.includes(subToolbarType)) {
      targetRef.current.style.color = subToolbarValue;

      if (isBold) {
        targetRef.current.style.fontWeight = "Bold";
        setIsBold(false);
      }

      if (isItalic) {
        targetRef.current.style.fontStyle = "italic";
        setIsItalic(false);
      }

      if (isUnderLine) {
        targetRef.current.style.textDecoration = "underline";
        setIsUnderLine(false);
      }

      if (TEXT_ALIGN.includes(textAlign)) {
        targetRef.current.style.textAlign = textAlign;
        setTextAlign("");
      }

      if (FONT_TYPE.includes(fontType)) {
        targetRef.current.style.fontFamily = fontType;
        setFontType("");
      }

      targetRef.current.style.fontSize = `${subToolbarValue}px`;
    } else if (subToolbarType === "BUTTON" && ref.current) {
      targetRef.current.style.background = subToolbarValue;
    }
  }

  if (parentRef.current !== null && parentRef.current.tagName === "DIV") {
    parentRef.current.style.background = backgroundColorName;
  }

  return (
    <EditorTemplateBody
      ref={parentRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onClick={handleResizeTarget}
      wideView={displayWideView}
    />
  );
}

const EditorTemplateBody = styled.div`
  position: relative;
  height: 78vh;
  width: 100%;
  margin: 20px;
  overflow-y: scroll;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.05);
  background-color: white;
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
    margin: 10px 20px;
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
    margin: 0px 3px;
    justify-content: space-evenly;
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
    position: flex;
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

export default EditorTemplate;
