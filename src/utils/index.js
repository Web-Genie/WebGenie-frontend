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

  event.target.appendChild(clonedNode);
};

export function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

export function getElementValue(
  targetRef,
  targetProperty = null,
  target = null
) {
  const currentElementWidth = targetRef.getBoundingClientRect().width;
  const currentElementHeight = targetRef.getBoundingClientRect().height;

  if (!target) {
    return [currentElementWidth, currentElementHeight];
  }

  const currentElementValue = Number(
    window
      .getComputedStyle(targetRef, null)
      .getPropertyValue(targetProperty)
      .split("")
      .filter((item) => !isNaN(Number(item)))
      .join("")
  );

  return currentElementValue;
}

export const retrieveURL = () => {
  const currentEditorId = window.location.pathname
    .split("/")
    .filter((item) => item !== "editor")
    .join("");

  return currentEditorId;
};

export const sendUserToHomepage = () => {
  window.location.replace("/");
};

export const deleteCurrentElement = (event) => {
  event.stopPropagation();
  event.target.nextSibling.remove();
  event.target.nextElementSibling.remove();
};

export const generateEditorDeleteElement = (
  clickedNode,
  icon,
  editIcon = false
) => {
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
  extraIconElement.style.zIndex = "100";

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

export const generatedImageElement = (localImage) => {
  const newImage = document.createElement("img");

  newImage.setAttribute("id", "img");
  newImage.setAttribute("alt", `${localImage}`);
  newImage.setAttribute("draggable", "false");
  newImage.setAttribute("src", `${localImage}`);
  newImage.style.position = "absolute";
  newImage.style.maxHeight = "500px";
  newImage.style.maxWidth = "500px";

  return newImage;
};

export const saveLocalStorage = (location) => {
  if (localStorage.getItem("localImgSrc") === null) {
    localStorage.setItem("localImgSrc", "[]");
  }

  const preData = JSON.parse(localStorage.getItem("localImgSrc"));
  preData.push(location);

  localStorage.setItem("localImgSrc", JSON.stringify(preData));
};
