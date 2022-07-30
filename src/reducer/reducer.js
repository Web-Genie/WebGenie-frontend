export const initialState = {
  editorRef: null,
  isEditing: false,
  isDragging: false,
  subToolbarType: "",
  currentElement: null,
  deployedWebsiteData: null,
  editorBackgroundColor: "rgb(255,255,255)",
  loggedInUserInformation: {
    tokenInformation: localStorage.getItem("idToken"),
    data: null,
  },
  imageData: {
    imageUrl: "",
    localImageSrc: "",
    isImageUrlAvailable: false,
  },
  fontStyle: {
    family: "AppleGothic",
    size: 15,
  },
  editorData: {
    title: "",
  },
  elementStyle: {
    blur: 0,
    radius: 0,
    opacity: 1,
    brightness: 1,
    color: "rgb(255,255,255)",
  },
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "HANDLE_LOG_IN_TOKEN_INFORMATION":
      return {
        ...state,
        loggedInUserInformation: {
          ...state.loggedInUserInformation,
          tokenInformation: payload,
        },
      };
    case "HANDLE_LOG_IN_USER_INFORMATION":
      return {
        ...state,
        loggedInUserInformation: {
          ...state.loggedInUserInformation,
          data: payload,
        },
      };
    case "SET_SUB_TOOLBAR_TYPE":
      return { ...state, subToolbarType: payload };
    case "SET_CURRENT_ELEMENT":
      return { ...state, currentElement: payload };
    case "SET_DRAGGING_STATUS":
      return { ...state, isDragging: payload };
    case "SET_EDITING_STATUS":
      return { ...state, isEditing: payload };
    case "SET_IMAGE_STYLE":
      return {
        ...state,
        elementStyle: {
          ...state.elementStyle,
          [payload.target]: payload.value,
        },
      };
    case "RESET_IMAGE_STYLE":
      return {
        ...state,
        elementStyle: { ...payload },
      };
    case "SET_FONT_STYLE":
      return {
        ...state,
        fontStyle: {
          ...state.fontStyle,
          [payload.target]: payload.value,
        },
      };
    case "RESET_FONT_STYLE":
      return {
        ...state,
        fontStyle: { ...payload },
      };
    case "SET_COLOR":
      return {
        ...state,
        elementStyle: { ...state.elementStyle, color: payload.value },
      };
    case "SET_BACKGROUND_COLOR":
      return {
        ...state,
        editorBackgroundColor: payload,
      };
    case "SET_EDITOR":
      return {
        ...state,
        editorRef: payload,
      };
    case "SET_EDITOR_TITLE":
      return {
        ...state,
        editorData: {
          ...state.editorData,
          title: payload,
        },
      };
    case "SET_EDITOR_DATA":
      return {
        ...state,
        editorData: { ...payload },
      };
    case "SET_IMAGE_URL":
      return {
        ...state,
        imageData: { ...state.imageData, imageUrl: payload },
      };
    case "SET_IMAGE_URL_AVAILABILITY":
      return {
        ...state,
        imageData: { ...state.imageData, isImageUrlAvailable: payload },
      };
    case "SET_LOCAL_IMAGE_SRC":
      return {
        ...state,
        imageData: { ...state.imageData, localImageSrc: payload },
      };
    case "SET_DEPLOYED_WEBSITE_DATA":
      return {
        ...state,
        deployedWebsiteData: { ...payload },
      };
    case "RESET_DEPLOYED_WEBSITE_DATA":
      return {
        ...state,
        deployedWebsiteData: null,
      };
    default:
      return state;
  }
};
