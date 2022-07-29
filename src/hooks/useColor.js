import { useContext, useEffect } from "react";

import { Context } from "../store/Store";
import computeRgbToHex from "../utils/computeRgbToHex";

const useText = () => {
  const { globalState, dispatch } = useContext(Context);
  const { currentElement, elementColor } = globalState;

  useEffect(() => {
    const currentElementColor = computeRgbToHex(
      window.getComputedStyle(currentElement).color
    );

    dispatch({
      type: "SET_COLOR",
      payload: {
        value: currentElementColor,
      },
    });
  }, [currentElement]);

  const handleColorChange = (value) => {
    if (currentElement.tagName === "BUTTON") {
      currentElement.style.background = value;

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

  return {
    elementColor,
    handleColorChange,
  };
};

export default useText;
