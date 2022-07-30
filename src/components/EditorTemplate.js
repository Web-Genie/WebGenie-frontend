import DOMPurify from "dompurify";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import useDragAndDrop from "../hooks/useDragAndDrop";
import useResize from "../hooks/useResize";
import { Context } from "../store/Store";
import {
  generateImageElement,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
} from "../utils";

function EditorTemplate({ editorVersion, userSavedCode }) {
  const [handleResizeTarget, isResizing, setIsResizing] = useResize();
  const [currentEditor, setCurrentEditor] = useState([]);
  const [counter, setCounter] = useState(1);
  const [copyingElement, setCopyingElement] = useState(null);
  const [parentRef, targetRef] = useDragAndDrop(isResizing, setIsResizing);
  const { globalState, dispatch } = useContext(Context);
  const { imageData } = globalState;

  useEffect(() => {
    if (imageData.localImageSrc) {
      const newImage = generateImageElement(imageData.localImageSrc);
      parentRef.current.appendChild(newImage);

      dispatch({ type: "SET_LOCAL_IMAGE_SRC", payload: "" });
    }

    if (imageData.isImageUrlAvailable) {
      const newImage = generateImageElement(imageData.imageUrl);

      parentRef.current.appendChild(newImage);

      dispatch({ type: "SET_IMAGE_URL", payload: "" });
      dispatch({ type: "SET_IMAGE_URL_AVAILABILITY", payload: false });
    }
  }, [imageData.localImageSrc, imageData.isImageUrlAvailable]);

  useEffect(() => {
    if (!userSavedCode) return;

    if (editorVersion) {
      const sanitizedCode = DOMPurify.sanitize(
        userSavedCode[editorVersion].code
      );

      parentRef.current.innerHTML = sanitizedCode;
      parentRef.current.style.backgroundColor =
        userSavedCode[editorVersion].backgroundColor;
    } else {
      const sanitizedCode = DOMPurify.sanitize(userSavedCode[0].code);

      parentRef.current.innerHTML = sanitizedCode;
      parentRef.current.style.backgroundColor =
        userSavedCode[0].backgroundColor;
    }
  }, [userSavedCode[0], editorVersion]);

  useEffect(() => {
    if (parentRef.current) {
      parentRef.current.style.backgroundColor = "rgb(255,255,255)";

      dispatch({ type: "SET_EDITOR", payload: parentRef.current });
      // retrieveParentRefState(parentRef.current);
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
    />
  );
}

EditorTemplate.propTypes = {
  modalStatus: PropTypes.bool,
  editorVersion: PropTypes.object,
  userSavedCode: PropTypes.array,
};

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
