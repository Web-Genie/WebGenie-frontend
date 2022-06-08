export const handleDragEnter = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

export const handleDragLeave = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

export const handleDragOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

export const handleDrop = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const data = event.dataTransfer.getData("text");
  const node = document.getElementById(data);
  const clonedNode = node.cloneNode(true);

  clonedNode.draggable = false;
  clonedNode.style.position = "absolute";

  event.target.appendChild(clonedNode);
};

export function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
