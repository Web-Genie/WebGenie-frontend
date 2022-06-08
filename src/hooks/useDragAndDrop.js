import { useEffect, useRef, useState } from "react";

function useDragAndDrop() {
  const [isDragging, setIsDragging] = useState(false);
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
    leftPercentage: 0,
    topPercentage: 0,
  });
  const ref = useRef(null);
  const parentRef = useRef(null);

  function onMouseMove(event) {
    const rect = parentRef.current.getBoundingClientRect();

    if (!isDragging) return;

    setCoordinates({
      x: event.clientX - ref.current.offsetWidth / 2 - rect.x,
      y: event.clientY - ref.current.offsetHeight / 2 - rect.y,
    });

    event.stopPropagation();
    event.preventDefault();
  }

  function onMouseUp(event) {
    setIsDragging(false);

    event.stopPropagation();
    event.preventDefault();
  }

  function onMouseDown(event) {
    const rect = parentRef.current.getBoundingClientRect();

    ref.current = event.target;

    setIsDragging(true);
    if (event.button !== 0) return;

    setCoordinates({
      x: event.clientX - ref.current.offsetWidth / 2 - rect.x,
      y: event.clientY - ref.current.offsetHeight / 2 - rect.y,
    });

    event.stopPropagation();
    event.preventDefault();
  }

  if (ref.current && ref.current !== parentRef.current && isDragging) {
    const parentContainerWidth =
      parentRef.current.getBoundingClientRect().width;
    const parentContainerHeight =
      parentRef.current.getBoundingClientRect().height;
    ref.current.style.left = `${(coordinates.x / parentContainerWidth) * 100}%`;
    ref.current.style.top = `${(coordinates.y / parentContainerHeight) * 100}%`;
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

  return [parentRef];
}

export default useDragAndDrop;
