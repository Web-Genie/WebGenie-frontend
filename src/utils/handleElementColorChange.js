const handleElementColorChange = (currentElement, colorValue) => {
  if (currentElement.tagName === "BUTTON") {
    currentElement.style.background = colorValue;
  } else {
    currentElement.style.color = colorValue;
  }
};

export default handleElementColorChange;
