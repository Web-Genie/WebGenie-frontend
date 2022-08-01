const generateDraggableIcons = ({ clickedNode, icon, editIcon = false }) => {
  const extraIconElement = document.createElement("p");

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
  extraIconElement.style.width = "15px";
  extraIconElement.style.height = "15px";
  extraIconElement.style.cursor = "pointer";
  extraIconElement.style.transition = "all 0.15s ease";
  extraIconElement.style.zIndex = "1000";
  extraIconElement.className = "extraIcon";

  if (editIcon) {
    extraIconElement.style.left = `${
      clickedNode.offsetLeft + clickedNode.offsetWidth / 1.6
    }px`;
    extraIconElement.style.top = `${clickedNode.offsetTop - 10}px`;
    extraIconElement.onmouseleave = extraIconMouseLeaveEffect;
    extraIconElement.onmouseover = extraIconMouseOverEffect;
  } else {
    extraIconElement.style.left = `${
      clickedNode.offsetLeft + clickedNode.offsetWidth / 2.1
    }px`;
    extraIconElement.style.top = `${clickedNode.offsetTop - 10}px`;
    extraIconElement.onmouseleave = extraIconMouseLeaveEffect;
    extraIconElement.onmouseover = extraIconMouseOverEffect;
  }

  extraIconElement.style.fontSize = "12px";

  return extraIconElement;
};

export default generateDraggableIcons;
