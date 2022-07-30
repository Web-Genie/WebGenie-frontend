import { useContext, useEffect } from "react";

import { Context } from "../store/Store";
import { computeRgbToHex } from "../utils";

const useText = () => {
  const { globalState, dispatch } = useContext(Context);
  const { editorRef, currentElement, elementStyle } = globalState;

  const handleColorChange = (value, purpose = "") => {
    if (purpose === "editorBackground") {
      editorRef.style.backgroundColor = value;

      dispatch({ type: "SET_BACKGROUND_COLOR", payload: value });

      return;
    }

    if (currentElement.tagName === "BUTTON") {
      currentElement.style.backgroundColor = value;

      dispatch({
        type: "SET_COLOR",
        payload: { value },
      });
    } else {
      currentElement.style.color = value;

      dispatch({
        type: "SET_COLOR",
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

    if (currentElement.tagName === "BUTTON") {
      dispatch({
        type: "SET_COLOR",
        payload: {
          value: currentElementBackgroundColor,
        },
      });
    } else {
      dispatch({
        type: "SET_COLOR",
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

export default useText;
