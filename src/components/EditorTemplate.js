import DOMPurify from "dompurify";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { TEXT_ALIGN, TEXT_CHOICES } from "../constants/constants";
import { SubToolbarContext } from "../context/subToolbarContext";
import { InputFieldContext } from "../context/subToolbarContext";
import { UserContext } from "../context/userContext";
import useDragAndDrop from "../hooks/useDragAndDrop";
import useResize from "../hooks/useResize";
import {
  generatedImageElement,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
} from "../utils";

function EditorTemplate({
  displayWideView,
  backgroundColorName,
  modalStatus,
  saveUserCode,
  editorInformation,
  retrieveParentRefState,
  editorVersion,
  clearCanvas,
  handleCanvas,
  handleBackgroundColor,
}) {
  const [handleResizeTarget, isResizing, setIsResizing] = useResize();
  const [currentEditor, setCurrentEditor] = useState([]);
  const [counter, setCounter] = useState(1);
  const [copyingElement, setCopyingElement] = useState(null);
  const [parentRef, targetRef] = useDragAndDrop(isResizing, setIsResizing);
  const {
    subToolbarType,
    isBold,
    isItalic,
    setIsBold,
    setIsItalic,
    isUnderLine,
    setIsUnderLine,
    textAlign,
    setTextAlign,
    colorValue,
    setColorValue,
    buttonColor,
    setButtonColor,
    localImageSrc,
    setLocalImageSrc,
    hasImageUrl,
    imageUrl,
    setImageUrl,
    setHasImageUrl,
    isCanvasClear,
    setIsCavasClear,
    imageBrightness,
    imageBlur,
  } = useContext(SubToolbarContext);
  const { imageOpacity } = useContext(InputFieldContext);
  const { setSavedBackgroundColor } = useContext(UserContext);

  useEffect(() => {
    if (targetRef.current !== null && targetRef.current.tagName !== "DIV") {
      if (TEXT_CHOICES.includes(subToolbarType)) {
        if (colorValue) {
          targetRef.current.style.color = colorValue;

          setColorValue("");
        }
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
      }
      if (targetRef.current.tagName === "BUTTON" && buttonColor) {
        targetRef.current.style.background = buttonColor;

        setButtonColor("");
      }
    }

    if (isCanvasClear) {
      parentRef.current.innerHTML = "";

      setIsCavasClear(false);
    }

    if (targetRef.current !== null && targetRef.current.tagName === "IMG") {
      targetRef.current.style.opacity = imageOpacity;
      targetRef.current.style.filter = `blur(${imageBlur}px) brightness(${imageBrightness})`;
    }

    if (localImageSrc) {
      const newImage = generatedImageElement(localImageSrc);
      parentRef.current.appendChild(newImage);

      setLocalImageSrc("");
    }

    if (hasImageUrl) {
      const newImage = generatedImageElement(imageUrl);
      parentRef.current.appendChild(newImage);

      setImageUrl("");
      setHasImageUrl(false);
    }

    if (parentRef.current !== null && backgroundColorName) {
      parentRef.current.style.backgroundColor = backgroundColorName;

      setSavedBackgroundColor(backgroundColorName);
      handleBackgroundColor("");
    }
  }, [
    colorValue,
    textAlign,
    buttonColor,
    isBold,
    isItalic,
    isUnderLine,
    localImageSrc,
    hasImageUrl,
    isCanvasClear,
    imageOpacity,
    imageBlur,
    imageBrightness,
    backgroundColorName,
  ]);

  useEffect(() => {
    if (clearCanvas && parentRef.current !== null) {
      parentRef.current.innerHTML = "";
      parentRef.current.style.backgroundColor = "white";

      handleCanvas(false);
    }
  }, [clearCanvas]);

  useEffect(() => {
    if (!modalStatus) return;
    if (!parentRef.current) return;

    saveUserCode(parentRef.current.innerHTML);
  }, [modalStatus]);

  useEffect(() => {
    if (!editorInformation.result) return;
    const savedCodeCollection = editorInformation.result.userSavedCode;
    if (editorVersion) {
      const sanitizedCode = DOMPurify.sanitize(
        savedCodeCollection[editorVersion].code
      );

      parentRef.current.innerHTML = sanitizedCode;
      parentRef.current.style.backgroundColor =
        savedCodeCollection[editorVersion].backgroundColor;
    } else {
      const sanitizedCode = DOMPurify.sanitize(savedCodeCollection[0].code);

      parentRef.current.innerHTML = sanitizedCode;
      parentRef.current.style.backgroundColor =
        savedCodeCollection[0].backgroundColor;
    }
  }, [editorInformation.result[0], editorVersion]);

  useEffect(() => {
    if (parentRef.current) {
      retrieveParentRefState(parentRef.current);
    }
  }, []);

  useEffect(() => {
    const handleKeyboardEvent = (event) => {
      if (event.metaKey && event.key === "z") {
        if (currentEditor.length >= 2) {
          currentEditor.pop();
          parentRef.current.innerHTML = currentEditor[currentEditor.length - 1];
        }
      }

      if (event.metaKey && event.key === "c") {
        if (targetRef.current.tagName !== "DIV") {
          setCopyingElement(targetRef.current);
        }
      }
      if (event.metaKey && event.key === "v") {
        const copyingElementLeft = Number(
          copyingElement.style.left.replace("%", "")
        );
        const copyingElementTop = Number(
          copyingElement.style.top.replace("%", "")
        );
        const clonedNode = copyingElement.cloneNode();

        clonedNode.innerHTML = copyingElement.innerHTML;
        clonedNode.style.left = `${copyingElementLeft + counter}%`;
        clonedNode.style.top = `${copyingElementTop + counter}%`;

        parentRef.current.appendChild(clonedNode);
        setCurrentEditor((state) => [...state, parentRef.current.innerHTML]);
        setCounter((counter) => counter + 1);
      }
    };

    document.addEventListener("keydown", handleKeyboardEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyboardEvent);
    };
  }, [currentEditor, copyingElement, counter]);

  return (
    <EditorTemplateBody
      ref={parentRef}
      onDrop={handleDrop(setCurrentEditor)}
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
  margin: ${(props) => (props.wideView ? "0px" : "20px")};
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
    margin: 0px 2px;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    font-weight: 500px;
    font-size: 15px;

    .fontType {
      width: 60px;
      padding-right: 7px;
      margin: 0px;
      border: none;
    }

    .fontSize {
      width: 25px;
      border: none;
      padding-right: 10px;
    }
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
