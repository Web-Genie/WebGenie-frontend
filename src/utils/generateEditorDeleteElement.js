const generateEditorDeleteElement = (clickedNode, icon, editIcon = false) => {
  const extraIconElement = document.createElement("p");

  const deleteCurrentElement = (event) => {
    event.stopPropagation();

    if (
      event.target.nextSibling.tagName === "BUTTON" ||
      event.target.nextSibling.tagName !== "IMG"
    ) {
      event.target.nextElementSibling.remove();
      event.target.nextSibling.remove();
    } else {
      event.target.nextElementSibling.remove();
    }

    event.target.remove();
  };

  const extraIconMouseOverEffect = (event) => {
    event.target.style.transform = "scale(1.1)";
  };

  const extraIconMouseLeaveEffect = (event) => {
    event.target.style.transform = "scale(1)";
  };

  extraIconElement.style.display = "flex";
  extraIconElement.style.justifyContent = "center";
  extraIconElement.style.alignItems = "center";
  extraIconElement.style.position = "absolute";
  extraIconElement.innerHTML = icon;
  extraIconElement.style.background = "rgba(0,0,0,0.7)";
  extraIconElement.style.color = "white";
  extraIconElement.style.borderRadius = "50%";
  extraIconElement.style.width = "30px";
  extraIconElement.style.height = "30px";
  extraIconElement.style.cursor = "pointer";
  extraIconElement.style.transition = "all 0.15s ease";
  extraIconElement.style.zIndex = "1000";

  if (editIcon) {
    extraIconElement.style.left = `${clickedNode.offsetLeft + 25}px`;
    extraIconElement.style.top = `${clickedNode.offsetTop - 20}px`;
    extraIconElement.onmouseleave = extraIconMouseLeaveEffect;
    extraIconElement.onmouseover = extraIconMouseOverEffect;
  } else {
    extraIconElement.style.left = `${clickedNode.offsetLeft - 15}px`;
    extraIconElement.style.top = `${clickedNode.offsetTop - 20}px`;
    extraIconElement.onmouseleave = extraIconMouseLeaveEffect;
    extraIconElement.onmouseover = extraIconMouseOverEffect;
    extraIconElement.onclick = deleteCurrentElement;
  }

  extraIconElement.style.fontSize = "23px";

  return extraIconElement;
};

export default generateEditorDeleteElement;
