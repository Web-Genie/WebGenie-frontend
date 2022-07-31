const generateImageElement = (localImage) => {
  const newImage = document.createElement("img");

  newImage.style.position = "absolute";
  newImage.style.height = "500px";
  newImage.style.width = "500px";
  newImage.style.cursor = "pointer";

  newImage.setAttribute("id", "img");
  newImage.setAttribute("alt", `${localImage}`);
  newImage.setAttribute("draggable", "false");
  newImage.setAttribute("src", `${localImage}`);

  return newImage;
};

export default generateImageElement;
