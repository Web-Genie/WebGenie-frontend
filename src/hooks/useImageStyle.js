import { useContext, useEffect } from "react";

import { Context } from "../store/Store";

const useImageStyle = () => {
  const { globalState, dispatch } = useContext(Context);
  const { currentElement, imageStyle } = globalState;

  useEffect(() => {
    const currentElementOpacityStyle =
      window.getComputedStyle(currentElement).opacity;

    const currentElementFilterStyle = window
      .getComputedStyle(currentElement)
      .filter.split(" ")
      .map((styleValue) => styleValue.replace(/[^0-9.]/g, ""));

    if (currentElementFilter[0]) {
      dispatch({
        type: "RESET_IMAGE_STYLE",
        payload: {
          opacity: currentElementOpacityStyle,
          blur: currentElementFilterStyle[0],
          brightness: currentElementFilterStyle[1],
        },
      });
    }
  }, [currentElement]);

  const handleElementStyleValueChange = (target, value) => {
    if (target === "opacity") {
      currentElement.style.opacity = value;

      dispatch({
        type: "SET_IMAGE_STYLE",
        payload: { target, value },
      });
    } else if (target === "blur") {
      currentElement.style.filter = `blur(${value}px) brightness(${imageStyle.brightness})`;

      dispatch({
        type: "SET_IMAGE_STYLE",
        payload: { target, value },
      });
    } else {
      currentElement.style.filter = `blur(${imageStyle.blur}px) brightness(${value})`;

      dispatch({
        type: "SET_IMAGE_STYLE",
        payload: { target, value },
      });
    }
  };

  return {
    imageStyle,
    handleElementStyleValueChange,
  };
};

export default useImageStyle;
