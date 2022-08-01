import { ELEMENT_NAME, ELEMENT_STYLE_OPTIONS } from "../constants";

const removeDraggableElementStyle = ({
  previousElement,
  clickedElement,
  parentElement,
  isResizing,
}) => {
  const parentElementChildNodesLength = parentElement.childNodes.length;

  if (isResizing) {
    parentElement.childNodes.forEach((node) => {
      if (node.classList[0] === ELEMENT_NAME.EXTRA_ICON) {
        node.remove();
      }
    });

    return;
  }

  for (let i = parentElementChildNodesLength - 1; i >= 0; i--) {
    if (parentElement.childNodes[i].tagName === ELEMENT_NAME.P) {
      parentElement.childNodes[i].remove();
    }
  }

  if (previousElement?.tagName === ELEMENT_NAME.P) return;

  if (clickedElement.tagName === ELEMENT_NAME.P) {
    previousElement.remove();
  }

  if (previousElement) {
    previousElement.style.padding = "0";

    if (previousElement.tagName !== ELEMENT_NAME.BUTTON) {
      previousElement.style.border = ELEMENT_STYLE_OPTIONS.NONE;
    }
  }
};

export default removeDraggableElementStyle;
