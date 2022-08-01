import { useContext, useEffect } from "react";

import { DISPATCH_TYPE, ELEMENT_NAME } from "../constants";
import { Context } from "../store/Store";
import { computeRgbToHex } from "../utils";

const useColor = () => {
  const { globalState, dispatch } = useContext(Context);
  const { editorRef, currentElement, elementStyle } = globalState;

  const handleColorChange = (value, purpose = "") => {
    if (purpose === ELEMENT_NAME.EDITOR_BACKGROUND) {
      editorRef.style.backgroundColor = value;

      dispatch({ type: DISPATCH_TYPE.CHANGE_BACKGROUND_COLOR, payload: value });

      return;
    }

    if (currentElement.tagName === ELEMENT_NAME.BUTTON) {
      currentElement.style.backgroundColor = value;

      dispatch({
        type: DISPATCH_TYPE.CHANGE_BUTTON_AND_FONT_COLOR,
        payload: { value },
      });
    } else {
      currentElement.style.color = value;

      dispatch({
        type: DISPATCH_TYPE.CHANGE_BUTTON_AND_FONT_COLOR,
        payload: { value },
      });
    }
  };

  useEffect(() => {
    if (!currentElement) return;

    const currentElementColor = computeRgbToHex(
      window.getComputedStyle(currentElement).color
    );

    const currentElementBackgroundColor = computeRgbToHex(
      window.getComputedStyle(currentElement).backgroundColor
    );

    if (currentElement.tagName === ELEMENT_NAME.BUTTON) {
      dispatch({
        type: DISPATCH_TYPE.CHANGE_BUTTON_AND_FONT_COLOR,
        payload: {
          value: currentElementBackgroundColor,
        },
      });
    } else {
      dispatch({
        type: DISPATCH_TYPE.CHANGE_BUTTON_AND_FONT_COLOR,
        payload: {
          value: currentElementColor,
        },
      });
    }
  }, [currentElement]);

  return {
    elementStyle,
    handleColorChange,
  };
};

export default useColor;
