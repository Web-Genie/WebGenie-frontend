import { useEffect } from "react";

import { MOUSE_DIRECTION } from "../constants";
import {
  adjustResizerLocation,
  applyDraggableElementStyle,
  generateDraggableIcons,
  removeDraggableElementStyle,
} from "../utils";

const useResize = (
  currentElement,
  parentElement,
  isDragging,
  isResizing,
  setIsResizing,
  resizingDirection,
  { width, height, origianlMouseX, origianlMouseY, originalX, originalY }
) => {
  const MINIMUM_WIDTH = 15;
  const MINIMUM_HEIGHT = 20;

  const onMouseMove = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (resizingDirection === MOUSE_DIRECTION.TOP_LEFT) {
      const newWidth = width - (event.pageX - origianlMouseX);
      const newHeight = height - (event.pageY - origianlMouseY);
      const newX = originalX + (event.pageX - origianlMouseX);
      const newY = originalY + (event.pageY - origianlMouseY);

      if (newWidth > MINIMUM_WIDTH) {
        currentElement.style.width = `${newWidth}px`;
        currentElement.style.left = `${newX}px`;
      }

      if (newHeight > MINIMUM_HEIGHT) {
        currentElement.style.height = `${newHeight}px`;
        currentElement.style.top = `${newY}px`;
      }
    } else if (resizingDirection === MOUSE_DIRECTION.TOP_RIGHT) {
      const newWidth = width + (event.pageX - origianlMouseX);
      const newHeight = height - (event.pageY - origianlMouseY);
      const newY = originalY + (event.pageY - origianlMouseY);

      if (newWidth > MINIMUM_WIDTH) {
        currentElement.style.width = `${newWidth}px`;
      }

      if (newHeight > MINIMUM_HEIGHT) {
        currentElement.style.height = `${newHeight}px`;
        currentElement.style.top = `${newY}px`;
      }
    } else if (resizingDirection === MOUSE_DIRECTION.BOTTOM_RIGHT) {
      const newWidth = width + (event.pageX - origianlMouseX);
      const newHeight = height + (event.pageY - origianlMouseY);

      if (newWidth > MINIMUM_WIDTH) {
        currentElement.style.width = `${newWidth}px`;
      }

      if (newHeight > MINIMUM_HEIGHT) {
        currentElement.style.height = `${newHeight}px`;
      }
    } else if (resizingDirection === MOUSE_DIRECTION.BOTTOM_LEFT) {
      const newWidth = width - (event.pageX - origianlMouseX);
      const newHeight = height + (event.pageY - origianlMouseY);
      const newX = originalX + (event.pageX - origianlMouseX);

      if (newWidth > MINIMUM_WIDTH) {
        currentElement.style.width = `${newWidth}px`;
        currentElement.style.left = `${newX}px`;
      }

      if (newHeight > MINIMUM_HEIGHT) {
        currentElement.style.height = `${newHeight}px`;
      }
    }

    adjustResizerLocation(parentElement, currentElement);
    removeDraggableElementStyle({
      parentElement,
      currentElement,
      isResizing,
    });
  };

  const onMouseUp = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const extraIcon = generateDraggableIcons({
      clickedNode: currentElement,
      icon: "&#x2715",
    });

    parentElement.append(extraIcon);

    setIsResizing(false);
  };

  useEffect(() => {
    if (isDragging) return;
    if (!currentElement) return;

    applyDraggableElementStyle(currentElement, parentElement);
  }, [isDragging]);

  useEffect(() => {
    if (!parentElement) return;
    if (isDragging) return;
    if (!isResizing) return;

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [parentElement, isDragging, isResizing]);
};

export default useResize;
