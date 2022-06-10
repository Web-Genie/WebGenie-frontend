import { useContext, useEffect, useRef, useState } from "react";

import {
  InputFieldContext,
  SubToolbarContext,
} from "../context/subToolbarContext";
import { getElementValue } from "../utils";

function useResize() {
  const [isResizing, setIsResizing] = useState(false);
  const { setSubToolbarType } = useContext(SubToolbarContext);
  const { inputValue, shouldAddLink, setShouldAddLink } =
    useContext(InputFieldContext);

  const parentRef = useRef(null);
  const targetRef = useRef(null);
  let leftOrRightDirection = "";
  let oldPageX = 0;
  let startX = null;
  let startY = null;

  const handleMouseMove = (event) => {
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

    if (targetRef.current.tagName !== "BUTTON") {
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

  const handleResizeTarget = (event) => {
    startX = event.clientX;
    startY = event.clientY;

    if (targetRef.current && event.target.tagName === "DIV") {
      targetRef.current.onmousemove = null;
    }

    if (parentRef.current === null && event.target.tagName === "DIV") {
      parentRef.current = event.target;
      setSubToolbarType(targetRef.current.tagName);
      return;
    }

    if (targetRef.current && event.target === targetRef.current) {
      if (targetRef.current.tagName === "BUTTON") {
        targetRef.current.style.border = "1px solid #e5e5e5";
      } else {
        targetRef.current.style.border = "none";
      }
      setSubToolbarType(targetRef.current.tagName);

      targetRef.current = null;

      setIsResizing(false);

      return;
    }

    if (!targetRef.current && event.target.tagName !== "DIV") {
      targetRef.current = event.target;
      targetRef.current.style.border = "2px dashed black";

      if (targetRef.current.tagName !== "BUTTON") {
        targetRef.current.style.padding = "7px 10px";
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
      } else {
        targetRef.current.style.border = "none";
      }

      targetRef.current = event.target;

      targetRef.current.style.border = "2px dashed black";

      if (targetRef.current.tagName !== "BUTTON") {
        targetRef.current.style.padding = "7px 10px";
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

  return [handleResizeTarget, isResizing, setIsResizing];
}

export default useResize;
