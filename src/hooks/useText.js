import { useContext, useEffect } from "react";

import { Context } from "../store/Store";

const useText = () => {
  const { globalState, dispatch } = useContext(Context);
  const { currentElement, fontStyle } = globalState;

  useEffect(() => {
    const currentFontFamily =
      window.getComputedStyle(currentElement).fontFamily;

    const currentFontSize = window
      .getComputedStyle(currentElement)
      .fontSize.replace("px", "");

    if (currentFontFamily) {
      dispatch({
        type: "RESET_FONT_STYLE",
        payload: {
          family: currentFontFamily,
          size: currentFontSize,
        },
      });
    }
  }, [currentElement]);

  const handleFontStyleValueChange = (target, value) => {
    if (target === "family") {
      currentElement.style.fontFamily = value;

      console.log(value);
      dispatch({
        type: "SET_FONT_STYLE",
        payload: { target, value },
      });
    } else {
      currentElement.style.fontSize = `${value}px`;

      dispatch({
        type: "SET_FONT_STYLE",
        payload: { target, value },
      });
    }
  };

  return {
    fontStyle,
    handleFontStyleValueChange,
  };
};

export default useText;
