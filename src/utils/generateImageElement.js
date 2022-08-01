const generateImageElement = (localImage) => {
  const newImage = document.createElement("img");

  newImage.style.position = "absolute";
  newImage.style.height = "300px";
  newImage.style.width = "300px";
  newImage.style.cursor = "pointer";
  newImage.style.left = "30px";
  newImage.style.top = "50px";

  newImage.setAttribute("id", "img");
  newImage.setAttribute("alt", `${localImage}`);
  newImage.setAttribute("draggable", "false");
  newImage.setAttribute("src", `${localImage}`);

  return newImage;
};

export default generateImageElement;
