const adjustResizerLocation = (parentElement, currentElement) => {
  const currentElementRect = currentElement.getBoundingClientRect();

  parentElement.childNodes.forEach((node) => {
    if (node.classList[1] === "topLeft") {
      node.style.left = `${currentElement.offsetLeft - 4}px`;
      node.style.top = `${currentElement.offsetTop - 5}px`;
    }

    if (node.classList[1] === "topRight") {
      node.style.left = `${
        currentElement.offsetLeft + currentElementRect.width - 7
      }px`;
      node.style.top = `${currentElement.offsetTop - 5}px`;
    }

    if (node.classList[1] === "bottomRight") {
      node.style.left = `${
        currentElement.offsetLeft + currentElementRect.width - 7
      }px`;
      node.style.top = `${
        currentElement.offsetTop + currentElementRect.height - 8
      }px`;
    }

    if (node.classList[1] === "bottomLeft") {
      node.style.left = `${currentElement.offsetLeft - 4}px`;
      node.style.top = `${
        currentElement.offsetTop + currentElementRect.height - 8
      }px`;
    }
  });
};

export default adjustResizerLocation;
