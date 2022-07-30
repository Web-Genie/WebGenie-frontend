const saveLocalStorage = (location) => {
  if (localStorage.getItem("localImgSrc") === null) {
    localStorage.setItem("localImgSrc", "[]");
  }

  const preData = JSON.parse(localStorage.getItem("localImgSrc"));
  preData.push(location);

  localStorage.setItem("localImgSrc", JSON.stringify(preData));
};

export default saveLocalStorage;
