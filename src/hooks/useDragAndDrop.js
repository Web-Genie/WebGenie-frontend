import { useEffect, useRef, useState } from "react";

function useDragAndDrop(resizingState, setResizingState) {
  const targetRef = useRef(null);
  const parentRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
    leftPercentage: 0,
    topPercentage: 0,
  });

  function onMouseMove(event) {
    event.stopPropagation();
    event.preventDefault();

    if (resizingState) return;

    const rect = parentRef.current.getBoundingClientRect();

    if (!isDragging) return;

    if (event.clientX > rect.x && event.clientY > rect.y) {
      setCoordinates({
        x: event.clientX - targetRef.current.offsetWidth / 2 - rect.x,
        y: event.clientY - targetRef.current.offsetHeight / 2 - rect.y,
      });
    } else {
      setIsDragging(false);
    }
  }

  function onMouseUp(event) {
    setIsDragging(false);

    event.stopPropagation();
    event.preventDefault();
  }

  function onMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();

    const rect = parentRef.current.getBoundingClientRect();

    targetRef.current = event.target;

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
    isDragging &&
    !resizingState
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
    parentRef.current.addEventListener("mousedown", onMouseDown);

    return () => {
      parentRef.current.removeEventListener("mousedown", onMouseDown);
    };
  }, [parentRef.current]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
    } else {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }

    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDragging]);

  return [parentRef, targetRef];
}

export default useDragAndDrop;
