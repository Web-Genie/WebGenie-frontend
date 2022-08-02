import { ELEMENT_NAME } from "../constants";

const removeDraggableElementStyle = ({ parentElement, isResizing }) => {
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
};

export default removeDraggableElementStyle;
