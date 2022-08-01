import { DISPATCH_TYPE } from "../constants";

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
    case DISPATCH_TYPE.HANDLE_LOG_IN_TOKEN_INFORMATION:
      return {
        ...state,
        loggedInUserInformation: {
          ...state.loggedInUserInformation,
          tokenInformation: payload,
        },
      };
    case DISPATCH_TYPE.HANDLE_LOG_IN_USER_INFORMATION:
      return {
        ...state,
        loggedInUserInformation: {
          ...state.loggedInUserInformation,
          data: payload,
        },
      };
    case DISPATCH_TYPE.SET_SUB_TOOLBAR_TYPE:
      return { ...state, subToolbarType: payload };
    case DISPATCH_TYPE.CHANGE_LOCATION_ELEMENT:
      return { ...state, currentElement: payload };
    case DISPATCH_TYPE.CHANGE_IMAGE_STYLE:
      return {
        ...state,
        elementStyle: {
          ...state.elementStyle,
          [payload.target]: payload.value,
        },
      };
    case DISPATCH_TYPE.RESET_IMAGE_STYLE:
      return {
        ...state,
        elementStyle: { ...payload },
      };
    case DISPATCH_TYPE.CHANGE_FONT_STYLE:
      return {
        ...state,
        fontStyle: {
          ...state.fontStyle,
          [payload.target]: payload.value,
        },
      };
    case DISPATCH_TYPE.RESET_FONT_STYLE:
      return {
        ...state,
        fontStyle: { ...payload },
      };
    case DISPATCH_TYPE.SET_COLOR:
      return {
        ...state,
        elementStyle: { ...state.elementStyle, color: payload.value },
      };
    case DISPATCH_TYPE.CHANGE_BACKGROUND_COLOR:
      return {
        ...state,
        editorBackgroundColor: payload,
      };
    case DISPATCH_TYPE.INITIAL_SETTING_EDITOR:
      return {
        ...state,
        editorRef: payload,
      };
    case DISPATCH_TYPE.CHANGE_EDITOR_TITLE:
      return {
        ...state,
        editorData: {
          ...state.editorData,
          title: payload,
        },
      };
    case DISPATCH_TYPE.GET_OR_POST_EDITOR_CODE:
      return {
        ...state,
        editorData: { ...payload },
      };
    case DISPATCH_TYPE.INSERT_IMAGE_URL:
      return {
        ...state,
        imageData: { ...state.imageData, imageUrl: payload },
      };
    case DISPATCH_TYPE.VALID_IMAGE_URL:
      return {
        ...state,
        imageData: { ...state.imageData, isImageUrlAvailable: payload },
      };
    case DISPATCH_TYPE.INSERT_LOCAL_IMAGE:
      return {
        ...state,
        imageData: { ...state.imageData, localImageSrc: payload },
      };
    default:
      return state;
  }
};
