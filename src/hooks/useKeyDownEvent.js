import { useEffect } from "react";

import { ELEMENT_NAME, KEY_DOWN } from "../constants";

function useKeyDownEvent(
  currentEditor,
  parentRef,
  targetRef,
  counter,
  copyingElement,
  setCopyingElement,
  setCurrentEditor,
  setCounter
) {
  useEffect(() => {
    function handleKeyboardEvent(event) {
      if (event.metaKey && event.key === KEY_DOWN.X) {
        if (currentEditor.length >= 2) {
          setCopyingElement(targetRef.current);

          currentEditor.pop();
          parentRef.current.innerHTML = currentEditor[currentEditor.length - 1];
        } else if (currentEditor.length === 1) {
          setCopyingElement(targetRef.current);

          parentRef.current.innerHTML = [];
        }
      }

      if (event.metaKey && event.key === KEY_DOWN.Z) {
        if (currentEditor.length >= 2) {
          currentEditor.pop();
          parentRef.current.innerHTML = currentEditor[currentEditor.length - 1];
        }
      }

      if (event.metaKey && event.key === KEY_DOWN.C) {
        if (targetRef.current.tagName !== ELEMENT_NAME.DIV) {
          setCopyingElement(targetRef.current);
        }
      }

      if (event.metaKey && event.key === KEY_DOWN.V) {
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
    }

    document.addEventListener("keydown", handleKeyboardEvent);

    return () => {
      document.removeEventListener("keydown", handleKeyboardEvent);
    };
  }, [currentEditor, copyingElement, counter]);
}

export default useKeyDownEvent;
