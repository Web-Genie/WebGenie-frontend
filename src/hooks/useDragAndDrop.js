import { useContext, useEffect, useRef, useState } from "react";

import { DISPATCH_TYPE, ELEMENT_NAME } from "../constants";
import { Context } from "../store/Store";
import {
  applyDraggableElementStyle,
  removeDraggableElementStyle,
} from "../utils";

function useDragAndDrop() {
  const targetRef = useRef(null);
  const parentRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizingDirection, setResizingDirection] = useState("");
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
    leftPercentage: 0,
    topPercentage: 0,
  });
  const [draggingElementCoordinates, setDraggingElementCoordinates] = useState({
    width: 0,
    height: 0,
    origianlMouseX: 0,
    origianlMouseY: 0,
    originalX: 0,
    originalY: 0,
  });
  const { dispatch } = useContext(Context);

  function onMouseMove(event) {
    if (!isDragging) return;
    if (isResizing) return;

    event.stopPropagation();
    event.preventDefault();

    const rect = parentRef.current.getBoundingClientRect();

    if (event.clientX > rect.x && event.clientY > rect.y) {
      setCoordinates({
        x: event.clientX - targetRef.current.offsetWidth / 2 - rect.x,
        y: event.clientY - targetRef.current.offsetHeight / 2 - rect.y,
      });
    }
  }

  function onMouseUp(event) {
    if (isResizing || !isDragging) return;

    event.stopPropagation();
    event.preventDefault();

    applyDraggableElementStyle(targetRef.current, parentRef.current);

    setIsResizing(false);
    setIsDragging(false);
  }

  function onMouseDown(event) {
    const rect = parentRef.current.getBoundingClientRect();

    if (event.target.classList[0] === ELEMENT_NAME.MOUSE_RESIZER) {
      setDraggingElementCoordinates({
        width: Number(targetRef.current.style.width.replace("px", "")),
        height: Number(targetRef.current.style.height.replace("px", "")),
        origianlMouseX: event.pageX,
        origianlMouseY: event.pageY,
        originalX: event.x - rect.x,
        originalY: event.y - rect.y,
      });
      setResizingDirection(event.target.classList[1]);
      setIsResizing(true);

      return;
    }

    event.stopPropagation();
    event.preventDefault();

    removeDraggableElementStyle({
      previousElement: targetRef.current,
      clickedElement: event.target,
      parentElement: parentRef.current,
    });

    targetRef.current = event.target;

    dispatch({
      type: DISPATCH_TYPE.SET_SUB_TOOLBAR_TYPE,
      payload: targetRef.current.nodeName,
    });

    dispatch({
      type: DISPATCH_TYPE.CHANGE_LOCATION_ELEMENT,
      payload: targetRef.current,
    });

    setIsDragging(true);

    if (event.button !== 0) return;

    setCoordinates({
      x: event.clientX - targetRef.current.offsetWidth / 2 - rect.x,
      y: event.clientY - targetRef.current.offsetHeight / 2 - rect.y,
    });
  }

  if (
    targetRef.current &&
    targetRef.current !== parentRef.current &&
    isDragging
  ) {
    const parentContainerWidth =
      parentRef.current.getBoundingClientRect().width;
    const parentContainerHeight =
      parentRef.current.getBoundingClientRect().height;

    targetRef.current.style.left = `${
      (coordinates.x / parentContainerWidth) * 100
    }%`;
    targetRef.current.style.top = `${
      (coordinates.y / parentContainerHeight) * 100
    }%`;
  }

  useEffect(() => {
    if (parentRef.current) {
      parentRef.current.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      if (parentRef.current) {
        parentRef.current.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, [parentRef.current, isDragging, isResizing]);

  return {
    parentRef,
    targetRef,
    isDragging,
    isResizing,
    setIsResizing,
    resizingDirection,
    draggingElementCoordinates,
  };
}

export default useDragAndDrop;
