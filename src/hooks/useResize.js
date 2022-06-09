import { useEffect, useRef, useState } from "react";

import { getElementValue } from "../utils";

function useResize() {
  const [isResizing, setIsResizing] = useState(false);
  const [shouldDelete, setShouldDelete] = useState(false);
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

      return;
    }

    if (targetRef.current && event.target === targetRef.current) {
      if (targetRef.current.tagName === "BUTTON") {
        targetRef.current.style.border = "1px solid #e5e5e5";
      } else {
        targetRef.current.style.border = "none";
      }

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

      setIsResizing(true);
    }
  };

  const handleDeleteKey = (event) => {
    if (event.key === "Backspace") {
      setShouldDelete(true);
    }
  };

  if (isResizing && shouldDelete) {
    targetRef.current.remove();

    setShouldDelete(false);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleDeleteKey);

    return () => {
      document.removeEventListener("keydown", handleDeleteKey);
    };
  }, [isResizing]);

  return [handleResizeTarget, isResizing, setIsResizing];
}

export default useResize;
