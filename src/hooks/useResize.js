import { useContext, useEffect, useRef, useState } from "react";

import { FONT_TYPE } from "../constants/constants";
import {
  InputFieldContext,
  SubToolbarContext,
} from "../context/subToolbarContext";
import { getElementValue } from "../utils";
import { generateEditorDeleteElement } from "../utils/index";

function useResize() {
  const parentRef = useRef(null);
  const targetRef = useRef(null);
  const [shouldEditText, setShouldEditText] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const { setSubToolbarType } = useContext(SubToolbarContext);
  const {
    inputValue,
    shouldAddLink,
    setShouldAddLink,
    buttonRadius,
    buttonOpacity,
    fontSize,
    fontType,
  } = useContext(InputFieldContext);

  let leftOrRightDirection = "";
  let oldPageX = 0;
  let startX = null;
  let startY = null;

  const handleMouseMove = (event) => {
    if (shouldEditText) return;

    let [currentElementWidth, currentElementHeight] = getElementValue(
      targetRef.current
    );

    let currentElementFontSize = Number(
      getElementValue(targetRef.current, "font-size", "font")
    );

    (function (mouseEvent) {
      if (mouseEvent.pageX < oldPageX) {
        leftOrRightDirection = "left";
      } else if (mouseEvent.pageX > oldPageX) {
        leftOrRightDirection = "right";
      }

      oldPageX = mouseEvent.pageX;
    })(event);

    if (
      targetRef.current.tagName !== "BUTTON" &&
      targetRef.current.tagName !== "IMG"
    ) {
      if (leftOrRightDirection === "right") {
        targetRef.current.style.fontSize = `${(currentElementFontSize += 1)}px`;
      } else if (leftOrRightDirection === "left") {
        targetRef.current.style.fontSize = `${(currentElementFontSize -= 1)}px`;
      }
    } else if (targetRef.current.tagName === "BUTTON") {
      let amountOfWidthToIncrease = event.clientX - startX;
      let amountOfHeightToIncrease = event.clientY - startY;

      targetRef.current.style.width = `${(currentElementWidth +=
        amountOfWidthToIncrease / 90)}px`;
      targetRef.current.style.height = `${(currentElementHeight +=
        amountOfHeightToIncrease / 90)}px`;
    } else if (targetRef.current.tagName === "IMG") {
      if (leftOrRightDirection === "right") {
        targetRef.current.style.width = `${(currentElementWidth += 1)}px`;
      } else if (leftOrRightDirection === "left") {
        targetRef.current.style.width = `${(currentElementWidth -= 1)}px`;
      }
      targetRef.current.style.width = `${(currentElementWidth += 0.000001)}px`;
    }
  };

  const handleMouseDown = () => {
    if (targetRef.current) {
      targetRef.current.onmousemove = handleMouseMove;
    }
  };

  const handleMouseUp = () => {
    if (targetRef.current) {
      targetRef.current.onmousemove = null;
    }
  };

  const editText = (event) => {
    if (!shouldEditText) {
      event.target.previousSibling.contentEditable = true;
      event.target.previousSibling.focus();
    } else {
      event.target.previousSibling.contentEditable = false;
    }

    setShouldEditText((state) => !state);
  };

  const handleResizeTarget = (event) => {
    startX = event.clientX;
    startY = event.clientY;

    if (targetRef.current && event.target.tagName === "DIV") {
      targetRef.current.onmousemove = null;
    }

    if (parentRef.current === null && event.target.tagName === "DIV") {
      parentRef.current = event.target;

      if (targetRef.current) {
        setSubToolbarType(targetRef.current.tagName);
      }

      return;
    }

    if (targetRef.current && event.target === targetRef.current) {
      if (targetRef.current.tagName === "BUTTON") {
        targetRef.current.style.border = "1px solid #e5e5e5";
        targetRef.current.previousSibling.remove();
      } else {
        targetRef.current.style.border = "none";
        targetRef.current.previousSibling.remove();
        targetRef.current.nextSibling.remove();
      }
      setSubToolbarType(targetRef.current.tagName);

      targetRef.current = null;

      setIsResizing(false);

      return;
    }
    if (!targetRef.current && event.target.tagName !== "DIV") {
      targetRef.current = event.target;

      const deleteButton = generateEditorDeleteElement(
        targetRef.current,
        "&#x2715;"
      );
      const editTextButton = generateEditorDeleteElement(
        targetRef.current,
        "&#x270E;",
        true
      );
      editTextButton.onclick = editText;
      targetRef.current.style.border = "2px dashed black";

      targetRef.current.insertAdjacentElement("beforebegin", deleteButton);

      if (targetRef.current.tagName !== "BUTTON") {
        targetRef.current.style.padding = "7px 10px";
        targetRef.current.insertAdjacentElement("afterend", editTextButton);
      }

      targetRef.current.onmousedown = handleMouseDown;
      targetRef.current.onmouseup = handleMouseUp;

      if (targetRef.current) {
        setSubToolbarType(targetRef.current.tagName);
      }

      setIsResizing(true);

      return;
    }

    if (
      targetRef.current &&
      event.target !== targetRef.current &&
      event.target.tagName !== "DIV"
    ) {
      if (targetRef.current.tagName === "BUTTON") {
        targetRef.current.style.border = "1px solid #e5e5e5";

        if (targetRef.current.previousSibling) {
          targetRef.current.previousSibling.remove();
        }
      } else {
        targetRef.current.style.border = "none";

        if (targetRef.current.previousSibling) {
          targetRef.current.previousSibling.remove();
          targetRef.current.nextSibling.remove();
        }
      }

      targetRef.current = event.target;

      const deleteButton = generateEditorDeleteElement(
        targetRef.current,
        "&#x2715;"
      );
      const editTextButton = generateEditorDeleteElement(
        targetRef.current,
        "&#x270E;",
        true
      );

      editTextButton.onclick = editText;
      targetRef.current.style.border = "2px dashed black";
      targetRef.current.insertAdjacentElement("beforebegin", deleteButton);

      if (targetRef.current.tagName !== "BUTTON") {
        targetRef.current.style.padding = "7px 10px";
        targetRef.current.insertAdjacentElement("afterend", editTextButton);
      }

      targetRef.current.onmousedown = handleMouseDown;
      targetRef.current.onmouseup = handleMouseUp;

      if (targetRef.current) {
        setSubToolbarType(targetRef.current.tagName);
      }

      setIsResizing(true);
    }
  };

  useEffect(() => {
    if (!shouldAddLink) return;

    const linkElement = document.createElement("a");

    linkElement.href = inputValue;
    linkElement.innerText = targetRef.current.innerText;
    targetRef.current.innerText = "";
    targetRef.current.appendChild(linkElement);

    setShouldAddLink(false);
  }, [shouldAddLink]);

  useEffect(() => {
    if (!targetRef.current) return;

    if (targetRef.current.tagName === "BUTTON") {
      targetRef.current.style.borderRadius = `${buttonRadius}px`;
      targetRef.current.style.opacity = buttonOpacity;
    }
  }, [buttonRadius, buttonOpacity]);

  useEffect(() => {
    if (!targetRef.current) return;

    if (FONT_TYPE.includes(fontType)) {
      targetRef.current.style.fontFamily = fontType;
    }

    if (fontSize) {
      targetRef.current.style.fontSize = `${fontSize}px`;
    }
  }, [fontSize, fontType]);

  return [handleResizeTarget, isResizing, setIsResizing];
}

export default useResize;
