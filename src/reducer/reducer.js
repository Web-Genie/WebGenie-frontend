export const initialState = {
  editorRef: null,
  isEditing: false,
  isDragging: false,
  subToolbarType: "",
  hasImageUrl: false,
  currentElement: null,
  clearCanvasBackgroundColor: "",
  elementColor: "rgb(255,255,255)",
  imageData: {
    imageUrl: "",
    localImageSrc: "",
  },
  fontStyle: {
    family: "AppleGothic",
    size: 15,
  },
  imageStyle: {
    opacity: 1,
    blur: 0,
    brightness: 1,
  },
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
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
        imageStyle: {
          ...state.imageStyle,
          [payload.target]: payload.value,
        },
      };
    case "RESET_IMAGE_STYLE":
      return {
        ...state,
        imageStyle: { ...payload },
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
        elementColor: payload.value,
      };
    case "SET_EDITOR":
      return {
        ...state,
        editorRef: payload,
      };
    default:
      return state;
  }
};
