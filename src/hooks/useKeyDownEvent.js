import { useEffect } from "react";

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
      if (event.metaKey && event.key === "x") {
        if (currentEditor.length >= 2) {
          //ctrl+x면
          //   currentEditor.pop();
          //   parentRef.current.innerHTML = currentEditor[currentEditor.length - 1];
        }
      }

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
    }

    document.addEventListener("keydown", handleKeyboardEvent);

    return () => {
      document.removeEventListener("keydown", handleKeyboardEvent);
    };
  }, [currentEditor, copyingElement, counter]);
}

export default useKeyDownEvent;
