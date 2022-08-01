import { ELEMENT_NAME } from "../constants";

const handleDrop = (trackChange) => (event) => {
  const data = event.dataTransfer.getData("text");
  const node = document.getElementById(data);
  const clonedNode = node.cloneNode(true);
  const parentNode = event.target;
  const parentNodeRect = parentNode.getBoundingClientRect();
  const parentNodeWidth = parentNodeRect.width;
  const parentNodeHeight = parentNodeRect.height;
  const droppedLocationLeft = event.clientX - parentNodeRect.left;
  const droppedLocationTop = event.clientY - parentNodeRect.top;

  clonedNode.draggable = false;
  clonedNode.style.position = "absolute";
  clonedNode.style.left = `${(droppedLocationLeft / parentNodeWidth) * 95}%`;
  clonedNode.style.top = `${(droppedLocationTop / parentNodeHeight) * 95}%`;
  clonedNode.style.zIndex = 100;

  if (clonedNode.tagName === ELEMENT_NAME.BUTTON) {
    clonedNode.style.width = "120px";
    clonedNode.style.height = "35px";
  }

  trackChange((state) => [...state, event.target.innerHTML]);

  event.target.appendChild(clonedNode);
};

export default handleDrop;
