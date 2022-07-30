const retrieveURL = () => {
  const currentEditorId = window.location.pathname
    .split("/")
    .filter((item) => item !== "editor")
    .join("");

  return currentEditorId;
};

export default retrieveURL;
