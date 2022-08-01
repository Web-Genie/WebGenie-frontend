const removeDraggableElementStyle = ({
  previousElement,
  clickedElement,
  parentElement,
  isResizing,
}) => {
  const parentElementChildNodesLength = parentElement.childNodes.length;

  if (isResizing) {
    parentElement.childNodes.forEach((node) => {
      if (node.classList[0] === "extraIcon") {
        node.remove();
      }
    });

    return;
  }

  for (let i = parentElementChildNodesLength - 1; i >= 0; i--) {
    if (parentElement.childNodes[i].tagName === "P") {
      parentElement.childNodes[i].remove();
    }
  }

  if (previousElement?.tagName === "P") return;

  if (clickedElement.tagName === "P") {
    previousElement.remove();
  }

  if (previousElement) {
    previousElement.style.padding = "0";

    if (previousElement.tagName !== "BUTTON") {
      previousElement.style.border = "none";
    }
  }
};

export default removeDraggableElementStyle;
