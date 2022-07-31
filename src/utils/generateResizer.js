const generateResizer = (parentElement, currentElement) => {
  const currentElementRect = currentElement.getBoundingClientRect();

  const leftCoordinatesArr = [
    `${currentElement.offsetLeft - 4}px`,
    `${currentElement.offsetLeft + currentElementRect.width - 7}px`,
    `${currentElement.offsetLeft - 4}px`,
    `${currentElement.offsetLeft + currentElementRect.width - 7}px`,
  ];
  const topCoordinatesArr = [
    `${currentElement.offsetTop - 5}px`,
    `${currentElement.offsetTop - 5}px`,
    `${currentElement.offsetTop + currentElementRect.height - 8}px`,
    `${currentElement.offsetTop + currentElementRect.height - 8}px`,
  ];
  const mouserCursor = [
    "nwse-resize",
    "nesw-resize",
    "nesw-resize",
    "nwse-resize",
  ];

  const resizerClassNames = [
    "resizer topLeft",
    "resizer topRight",
    "resizer bottomLeft",
    "resizer bottomRight",
  ];

  for (let i = 0; i < 4; i++) {
    const resizer = document.createElement("p");

    resizer.style.position = "sticky";
    resizer.style.width = "8px";
    resizer.style.height = "8px";
    resizer.style.left = leftCoordinatesArr[i];
    resizer.style.top = topCoordinatesArr[i];
    resizer.style.borderRadius = "50%";
    resizer.style.border = "1.5px solid rgb(201 201 227)";

    resizer.style.backgroundColor = "#e5e9eb";
    resizer.style.zIndex = "1000";
    resizer.style.cursor = mouserCursor[i];
    resizer.className = resizerClassNames[i];

    parentElement.append(resizer);
  }
};

export default generateResizer;
