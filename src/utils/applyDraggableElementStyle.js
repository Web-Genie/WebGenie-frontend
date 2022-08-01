import { ELEMENT_NAME, ELEMENT_STYLE_OPTIONS } from "../constants/";
import generateDraggableIcons from "./generateDraggableIcons";
import generateResizer from "./generateResizer";

const applyDraggableElementStyle = (currentElement, parentElement) => {
  const deleteButton = generateDraggableIcons({
    clickedNode: currentElement,
    icon: "&#x2715;",
  });
  const editTextButton = generateDraggableIcons({
    clickedNode: currentElement,
    icon: "&#x270E;",
    editIcon: true,
  });

  if (
    currentElement?.tagName !== ELEMENT_NAME.DIV &&
    currentElement.tagName !== ELEMENT_NAME.P
  ) {
    if (!ELEMENT_STYLE_OPTIONS.HEADING_TAG.includes(currentElement.tagName)) {
      generateResizer(parentElement, currentElement);
      parentElement.append(deleteButton);
    } else {
      parentElement.append(deleteButton);
      parentElement.append(editTextButton);
    }
  }
};

export default applyDraggableElementStyle;
