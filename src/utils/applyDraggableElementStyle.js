import { TEXT_CHOICES } from "../constants/constants";
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

  if (currentElement?.tagName !== "DIV" && currentElement.tagName !== "P") {
    if (!TEXT_CHOICES.includes(currentElement.tagName)) {
      generateResizer(parentElement, currentElement);
      parentElement.append(deleteButton);
    } else {
      parentElement.append(deleteButton);
      parentElement.append(editTextButton);
    }
  }
};

export default applyDraggableElementStyle;
